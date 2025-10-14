// Service Worker for PWA functionality
const CACHE_NAME = 'vinicius-pereira-portfolio-v1';
const STATIC_CACHE = 'vinicius-pereira-static-v1';
const DYNAMIC_CACHE = 'vinicius-pereira-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/css/responsividade.css',
  '/assets/css/clash-grotesk.css',
  '/assets/img/logonovapng.png',
  '/assets/img/Trocando foto.jpg',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Install event');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('[SW] Error caching static assets:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate event');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (!url.origin.includes(self.location.origin)) return;

  // Handle API requests differently
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful API responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached API response if available
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static assets and pages
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cache the response
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });

            return response;
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync event:', event.tag);

  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

// Push notifications (future enhancement)
self.addEventListener('push', (event) => {
  console.log('[SW] Push event:', event);

  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/img/logonovapng.png',
      badge: '/assets/img/logonovapng.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification click event:', event);
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});

// Helper function for background sync
async function syncContactForm() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const keys = await cache.keys();

    // Find pending form submissions
    const pendingRequests = keys.filter(request =>
      request.url.includes('formsubmit.co')
    );

    // Retry pending requests
    await Promise.all(
      pendingRequests.map(async (request) => {
        try {
          const response = await fetch(request);
          if (response.ok) {
            await cache.delete(request);
            console.log('[SW] Successfully synced form submission');
          }
        } catch (error) {
          console.error('[SW] Failed to sync form submission:', error);
        }
      })
    );
  } catch (error) {
    console.error('[SW] Background sync error:', error);
  }
}

// Periodic cleanup
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEANUP') {
    cleanupOldCaches();
  }
});

async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  const validCaches = [STATIC_CACHE, DYNAMIC_CACHE];

  await Promise.all(
    cacheNames.map(cacheName => {
      if (!validCaches.includes(cacheName)) {
        console.log('[SW] Deleting old cache:', cacheName);
        return caches.delete(cacheName);
      }
    })
  );
}
