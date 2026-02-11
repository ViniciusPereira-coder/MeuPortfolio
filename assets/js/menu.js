document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;

    if (!menuToggle || !menuAberto) {
        return;
    }

    const closeMenu = () => {
        menuToggle.checked = false;
        menuAberto.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    const syncMenuState = () => {
        const isOpen = menuToggle.checked;
        menuAberto.classList.toggle('active', isOpen);
        body.classList.toggle('no-scroll', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.setAttribute('aria-label', 'Alternar menu principal');
    menuToggle.setAttribute('aria-controls', 'menu-principal');
    menuAberto.id = 'menu-principal';

    menuToggle.addEventListener('change', syncMenuState);

    navLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuToggle.checked) {
            closeMenu();
        }
    });

    syncMenuState();
});
