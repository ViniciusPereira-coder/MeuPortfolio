// Analytics utility for Google Analytics 4
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_features: false,
  });

  console.log('[Analytics] Google Analytics initialized');
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      custom_parameter_1: 'portfolio_visit',
    });
  }
};

// Track user interactions
export const trackInteraction = (category, action, label = null, value = null) => {
  trackEvent('interaction', {
    event_category: category,
    event_action: action,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName, formData = {}) => {
  trackEvent('form_submission', {
    form_name: formName,
    ...formData,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track social media interactions
export const trackSocialInteraction = (platform, action, target) => {
  trackEvent('social_interaction', {
    social_platform: platform,
    social_action: action,
    social_target: target,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
  });
};

// Track time spent on page
export const trackTimeOnPage = (timeSpent, pagePath) => {
  trackEvent('time_on_page', {
    time_spent: timeSpent,
    page_path: pagePath,
  });
};

// Track theme changes
export const trackThemeChange = (newTheme) => {
  trackEvent('theme_change', {
    theme: newTheme,
  });
};

// Track PWA installation
export const trackPWAInstall = () => {
  trackEvent('pwa_install', {
    install_source: 'user_initiated',
  });
};

// Track contact form interactions
export const trackContactForm = (action, formData = {}) => {
  trackEvent('contact_form', {
    form_action: action,
    ...formData,
  });
};

// Track portfolio project views
export const trackProjectView = (projectName, projectCategory) => {
  trackEvent('project_view', {
    project_name: projectName,
    project_category: projectCategory,
  });
};

// Track service inquiries
export const trackServiceInquiry = (serviceName) => {
  trackEvent('service_inquiry', {
    service_name: serviceName,
  });
};

// Performance tracking
export const trackPerformance = (metricName, value, unit = 'ms') => {
  trackEvent('performance_metric', {
    metric_name: metricName,
    metric_value: value,
    metric_unit: unit,
  });
};

// Error tracking
export const trackError = (errorType, errorMessage, errorStack = null) => {
  trackEvent('error_occurred', {
    error_type: errorType,
    error_message: errorMessage,
    error_stack: errorStack,
  });
};

// Custom dimensions and metrics
export const setCustomDimension = (dimensionName, value) => {
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      [dimensionName]: value,
    });
  }
};

// E-commerce tracking (for future use)
export const trackPurchase = (transactionId, value, currency = 'BRL') => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
  });
};

// Helper function to get user consent status
export const checkConsent = () => {
  const consent = localStorage.getItem('analytics_consent');
  return consent === 'granted';
};

// Request user consent for analytics
export const requestAnalyticsConsent = () => {
  return new Promise((resolve) => {
    // You can implement a consent banner here
    // For now, we'll assume consent is granted
    const consent = confirm('Este site usa cookies para melhorar sua experiência. Você concorda com o uso de cookies analíticos?');
    localStorage.setItem('analytics_consent', consent ? 'granted' : 'denied');
    resolve(consent);
  });
};

// Initialize analytics with consent check
export const initAnalyticsWithConsent = async () => {
  const hasConsent = checkConsent();

  if (hasConsent) {
    initGA();
  } else {
    const consent = await requestAnalyticsConsent();
    if (consent) {
      initGA();
    }
  }
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackInteraction,
  trackFormSubmission,
  trackButtonClick,
  trackSocialInteraction,
  trackScrollDepth,
  trackTimeOnPage,
  trackThemeChange,
  trackPWAInstall,
  trackContactForm,
  trackProjectView,
  trackServiceInquiry,
  trackPerformance,
  trackError,
  setCustomDimension,
  trackPurchase,
  checkConsent,
  requestAnalyticsConsent,
  initAnalyticsWithConsent,
};
