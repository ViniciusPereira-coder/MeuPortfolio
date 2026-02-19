document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    if (!backToTopButton || !whatsappButton) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const isVisible = window.scrollY > 120;
        backToTopButton.classList.toggle('is-visible', isVisible);
        whatsappButton.classList.toggle('is-visible', isVisible);
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(toggleButtons);
            ticking = true;
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    window.addEventListener('scroll', onScroll, { passive: true });
    toggleButtons();

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
});
