
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

