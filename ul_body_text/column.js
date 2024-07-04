let currentSlide = 0;
let isPaused = false;

function showSlide(index) {
    let slides = document.getElementsByClassName("tab-content");
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
}

function openTopic(evt, topicName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(topicName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Add this to ensure the first tab is active by default if needed
document.addEventListener("DOMContentLoaded", function() {
    // Automatically open the first tab if it's intended to be active by default
    document.getElementsByClassName("tab")[0].click();
});

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function autoSlide() {
    if (!isPaused) {
        changeSlide(1);
        setTimeout(autoSlide, 5000); // Change slide every 5 seconds
    }
}

function togglePause() {
    isPaused = !isPaused;
    if (!isPaused) {
        autoSlide();
    }
}

// Initialize the slideshow
showSlide(currentSlide);
autoSlide();

// Add event listeners for 'Previous', 'Next', and 'Pause' buttons
document.getElementById("prevBtn").addEventListener("click", function() { changeSlide(-1); });
document.getElementById("nextBtn").addEventListener("click", function() { changeSlide(1); });
document.getElementById("pauseBtn").addEventListener("click", togglePause);