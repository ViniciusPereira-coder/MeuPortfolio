document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;
    const header = document.querySelector('.header');

    function setHeaderOffset() {
        if (!header) {
            return;
        }
        const height = header.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
    }

    function openMenu() {
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Fechar menu');
        menuOverlay.classList.add('active');
        menuOverlay.setAttribute('aria-hidden', 'false');
        body.classList.add('no-scroll');
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        menuOverlay.classList.remove('active');
        menuOverlay.setAttribute('aria-hidden', 'true');
        body.classList.remove('no-scroll');
    }

    function toggleMenu() {
        const isOpen = menuOverlay.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fechar menu ao pressionar Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });

    // Fechar menu ao clicar fora (no overlay)
    menuOverlay.addEventListener('click', function (e) {
        if (e.target === menuOverlay) {
            closeMenu();
        }
    });

    setHeaderOffset();
    window.addEventListener('resize', setHeaderOffset);
});
