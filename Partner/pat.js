document.addEventListener('DOMContentLoaded', function() {
    const bg = document.querySelector('.heading-background');
    let moveDirection = 1; // 1 for down, -1 for up
    let position = 0; // Start position

    function animateBackground() {
        if (position > 1) { // Move down limit
            moveDirection = -2;
        } else if (position < -200) { // Move up limit
            moveDirection = 2;
        }

        position += moveDirection * 0.5; // Speed of movement
        bg.style.backgroundPosition = `center ${position}px`;

        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});
function initCarousel(carouselId) {
    let currentIndex = 0;
    const items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const totalItems = items.length;

    document.querySelectorAll(`#${carouselId} .carousel-next`).forEach(button => {
        button.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel(carouselId, currentIndex);
        });
    });

    document.querySelectorAll(`#${carouselId} .carousel-prev`).forEach(button => {
        button.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel(carouselId, currentIndex);
        });
    });

    function updateCarousel(carouselId, currentIndex) {
        const carousel = document.querySelector(`#${carouselId} .carousel`);
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Auto-slide every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel(carouselId, currentIndex);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    initCarousel('partners-carousel-container');
    initCarousel('sponsors-carousel-container');
});