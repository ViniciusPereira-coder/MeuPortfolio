document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    if (!backToTopButton || !whatsappButton) {
        return;
    }

    const toggleButtons = () => {
        const shouldShow = window.scrollY > 100;

        backToTopButton.classList.toggle('is-visible', shouldShow);
        whatsappButton.classList.toggle('is-visible', shouldShow);
    };

    document.addEventListener('scroll', toggleButtons, { passive: true });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleButtons();
});
