
    // Carrusel de imágenes
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function moveToPrev() {
        currentIndex = (currentIndex === 0) ? totalItems - 3 : currentIndex - 1;
        updateCarousel();
    }

    function moveToNext() {
        currentIndex = (currentIndex === totalItems - 3) ? 0 : currentIndex + 1;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -(currentIndex * 33.33);
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    setInterval(moveToNext, 3000);

    prevButton.addEventListener('click', moveToPrev);
    nextButton.addEventListener('click', moveToNext);

    // Información interactiva
    document.querySelectorAll('.info-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    function toggleGallery() {
        const gallery = document.getElementById('gallery');
        const images = gallery.querySelectorAll('img');

        if (gallery.style.display === 'none' || gallery.style.display === '') {
            gallery.style.display = 'flex';
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('visible');
                }, index * 100); // Añade un pequeño retraso entre imágenes
            });
        } else {
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.remove('visible');
                }, index * 100); // Añade un pequeño retraso al ocultar
            });
            setTimeout(() => {
                gallery.style.display = 'none';
            }, images.length * 100); // Oculta la galería después de animar
        }
    }