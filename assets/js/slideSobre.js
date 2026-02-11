document.addEventListener('DOMContentLoaded', function () {
    const headlineScroll = document.getElementById('headline-scroll');
    if (!headlineScroll || headlineScroll.dataset.cloned === 'true') {
        return;
    }

    const clone = headlineScroll.cloneNode(true);
    clone.id = 'headline-scroll-clone';
    headlineScroll.parentNode.appendChild(clone);

    // Define a largura dos elementos com base na largura do conteúdo
    const scrollWidth = headlineScroll.scrollWidth;
    headlineScroll.style.width = `${scrollWidth}px`;
    clone.style.width = `${scrollWidth}px`;
    headlineScroll.dataset.cloned = 'true';
});
