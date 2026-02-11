document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    if (!header) {
        return;
    }

    const updateHeaderOnScroll = () => {
        const isScrolled = window.scrollY > 20;
        header.classList.toggle('header-scrolled', isScrolled);
    };

    updateHeaderOnScroll();
    window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
});
