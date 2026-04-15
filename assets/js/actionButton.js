document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');
    const scrollProgress = document.getElementById('scroll-progress');

    if (!backToTopButton || !whatsappButton) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    // Atualiza barra de progresso e visibilidade dos botões
    function onScrollFrame() {
        const isVisible = window.scrollY > 120;
        backToTopButton.classList.toggle('is-visible', isVisible);
        whatsappButton.classList.toggle('is-visible', isVisible);

        if (scrollProgress) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
            scrollProgress.style.width = progress + '%';
            scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(onScrollFrame);
            ticking = true;
        }
    }

    // Adiciona o evento de scroll
    window.addEventListener('scroll', onScroll, { passive: true });
    onScrollFrame();

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
});
