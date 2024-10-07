// Ensure that DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all vote buttons
    const voteButtons = document.querySelectorAll('.vote-btn');
    const modal = document.createElement('div');
    modal.classList.add('full-image-modal');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(modal, overlay);

    // When a vote button is clicked
    voteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.finalist-card');
            const img = card.querySelector('img'); // Find the image inside the finalist card
            const imgSrc = img ? img.src : null;  // Get the source of the image
            
            // Check if the image src exists
            if (imgSrc) {
                modal.innerHTML = `<img src="${imgSrc}" alt="Full image">`;
                modal.style.display = 'block';
                overlay.style.display = 'block';
            } else {
                console.error('Image not found in the card.');
            }
        });
    });

    // Close modal when clicking the overlay
    overlay.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
});

let lastTap = 0;
const img = document.querySelector('.full-image-modal img');

document.addEventListener('touchend', (event) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 300 && tapLength > 0) {  // Detect double-tap
        if (!isZoomed) {
            img.style.transform = 'scale(2)';  // Zoom in
            isZoomed = true;
        } else {
            img.style.transform = 'scale(1)';  // Zoom out
            isZoomed = false;
        }
    }

    lastTap = currentTime;
});