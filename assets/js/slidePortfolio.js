document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const intervalTime = 5000;

    function playVideo(element) {
        if (element.tagName !== 'VIDEO') {
            return;
        }

        const playPromise = element.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    }

    function stopVideo(element) {
        if (element.tagName !== 'VIDEO') {
            return;
        }

        element.pause();
        element.currentTime = 0;
    }

    slides.forEach((slide) => {
        let currentIndex = 0;
        const mediaItems = slide.querySelectorAll('img, video');
        const nextButton = slide.querySelector('.next');
        const prevButton = slide.querySelector('.prev');

        if (!mediaItems.length || !nextButton || !prevButton) {
            return;
        }

        function showSlide(index) {
            mediaItems.forEach((item, i) => {
                const isActive = i === index;

                item.style.opacity = isActive ? '1' : '0';
                item.style.pointerEvents = isActive ? 'auto' : 'none';

                if (isActive) {
                    playVideo(item);
                    return;
                }

                stopVideo(item);
            });
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % mediaItems.length;
            showSlide(currentIndex);
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
            showSlide(currentIndex);
        });

        if (!prefersReducedMotion) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % mediaItems.length;
                showSlide(currentIndex);
            }, intervalTime);
        }

        showSlide(currentIndex);
    });
});
