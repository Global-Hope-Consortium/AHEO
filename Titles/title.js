
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
