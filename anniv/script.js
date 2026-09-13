

const loader = document.getElementById("loader");


// Wait 5 seconds

window.addEventListener("load", function () {

    setTimeout(function () {

        // Hide the loading screen

        loader.classList.add("hidden");

    }, 5000);

});


// =================================
// SCROLL REVEAL ANIMATION
// =================================

// Get all elements with the class "reveal"

const revealElements =
    document.querySelectorAll(".reveal");


// Function for checking
// if elements are visible

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        // If the section enters the screen

        if (
            elementTop
            <
            windowHeight - 100
        ) {

            element.classList.add("active");

        }

    });

}


// Run when scrolling

window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads

revealOnScroll();
