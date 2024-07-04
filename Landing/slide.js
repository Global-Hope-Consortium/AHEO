document.addEventListener('DOMContentLoaded', function () {
    var slideIndex = 0; // Initialize slide index for automatic slideshow

    // Function to show slides
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        // Increment slide index and reset if exceeds number of slides
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        // Display the current slide
        slides[slideIndex-1].style.display = "block";  

        // Update active dot indicator
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex-1].className += " active";

        // Change slide every 5 seconds
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    // Set the date we're counting down to for each slide
    var countDownDates = [
        new Date("Nov 28, 2024 23:59:59").getTime(),
        new Date("Aug 30, 2024 23:59:59").getTime(),
        new Date("Nov 28, 2024 23:59:59").getTime(),
        new Date("Aug 30, 2024 23:59:59").getTime()
    ];

    // Update the count down every 1 second
    var countdownFunction = setInterval(function() {
        countDownDates.forEach((date, index) => {
            updateCountdown(date, (index + 1).toString());
        });
    }, 1000);

    function updateCountdown(countDownDate, timerId) {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days-" + timerId).innerText = days;
        document.getElementById("hours-" + timerId).innerText = hours;
        document.getElementById("minutes-" + timerId).innerText = minutes;
        document.getElementById("seconds-" + timerId).innerText = seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown-timer-" + timerId).innerHTML = "EXPIRED";
        }
    }

    // Start the automatic slideshow
    showSlides();
});

