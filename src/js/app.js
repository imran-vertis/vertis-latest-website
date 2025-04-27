// contact.js - Start

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".form-control");

    inputs.forEach((input) => {
        let placeholderText = input.getAttribute("placeholder");
        if (input.hasAttribute("required") && !placeholderText.includes("*")) {
            input.setAttribute("placeholder", placeholderText + " ");
        }
    });
});

// End

// news.js - Start

document.addEventListener("DOMContentLoaded", function () {
    let newsTitles = document.querySelectorAll(".news-title-text");

    newsTitles.forEach((title) => {
        let words = title.innerText.trim().split(" ");

        if (words.length > 10) {
            // If more than 10 words, truncate and add "..."
            title.innerText = words.slice(0, 10).join(" ") + "...";
        } else {
            // If less than 10 words, add non-breaking spaces (&nbsp;) for consistent height
            let spacesNeeded = 10 - words.length;
            for (let i = 0; i < spacesNeeded; i++) {
                title.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; // Adds visible spaces
            }
        }
    });
});

// End


// other_works.js - Start

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 992) {
        new Swiper(".swiper-container", {
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
                768: {
                    slidesPerView: 2, // Show 2 cards on tablets
                    spaceBetween: 15
                },
                992: {
                    slidesPerView: 3, // Disable Swiper on desktops
                    enabled: false
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
});

// End

// our_people.js - Start

document.addEventListener("DOMContentLoaded", function () {
    let newsTitles = document.querySelectorAll(".card-text");

    newsTitles.forEach((title) => {
        let words = title.innerText.trim().split(" ");

        if (words.length > 20) {
            // If more than 20 words, truncate and add "..."
            title.innerText = words.slice(0, 20).join(" ") + "...";
        } else {
            // If less than 20 words, add non-breaking spaces (&nbsp;) for consistent height
            let spacesNeeded = 20 - words.length;
            for (let i = 0; i < spacesNeeded; i++) {
                title.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; // Adds visible spaces
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                enabled: false,
            }
        }
    });
});

// End


// testimonials.js - Start

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".testimonial-slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (!slider || !nextBtn || !prevBtn) return;

    let translateX = 0;
    const cardWidth = document.querySelector(".testimonial-card")?.offsetWidth + 20; // Add margin
    const totalCards = document.querySelectorAll(".testimonial-card").length;
    const visibleCards = Math.floor(slider?.parentElement?.offsetWidth / cardWidth); // Dynamic count

    nextBtn.addEventListener("click", () => {
        if (Math.abs(translateX) < cardWidth * (totalCards - visibleCards)) {
            translateX -= cardWidth; // Move one card width at a time
            slider.style.transform = `translateX(${translateX}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (translateX < 0) {
            translateX += cardWidth; // Move back one card width
            slider.style.transform = `translateX(${translateX}px)`;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function moveNavButtons() {
        const navButtons = document.querySelector(".nav-buttons");
        const sliderWrapper = document.querySelector(".testimonial-slider-wrapper");
        const colMd3 = document.querySelector(".buttons");

        if (!navButtons || !sliderWrapper || !colMd3) return; // Prevent errors if elements are missing

        if (window.innerWidth <= 768) {
            // Move nav-buttons below the slider on mobile
            if (!sliderWrapper.contains(navButtons)) {
                sliderWrapper.appendChild(navButtons);
            }
        } else {
            // Restore nav-buttons back to the left section on tablets & desktops
            if (!colMd3.contains(navButtons)) {
                colMd3.appendChild(navButtons);
            }
        }
    }

    // Run function on page load
    moveNavButtons();

    // Run function on window resize
    window.addEventListener("resize", moveNavButtons);
});

document.addEventListener("DOMContentLoaded", function () {
    let testimonialTexts = document.querySelectorAll(".testimonial-text");

    testimonialTexts.forEach((title) => {
        let words = title.innerText.trim().split(" ");

        if (words.length > 30) {
            // If more than 10 words, truncate and add "..."
            title.innerText = words.slice(0, 30).join(" ") + "...";
        } else {
            // If less than 10 words, add non-breaking spaces (&nbsp;) for consistent height
            let spacesNeeded = 30 - words.length;
            for (let i = 0; i < spacesNeeded; i++) {
                title.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; // Adds visible spaces
            }
        }
    });
});

// End


// works.js - Start


document.addEventListener("DOMContentLoaded", function () {
    let newsTitles = document.querySelectorAll(".card-text");

    newsTitles.forEach((title) => {
        let words = title.innerText.trim().split(" ");

        if (words.length > 20) {
            // If more than 20 words, truncate and add "..."
            title.innerText = words.slice(0, 20).join(" ") + "...";
        } else {
            // If less than 20 words, add non-breaking spaces (&nbsp;) for consistent height
            let spacesNeeded = 20 - words.length;
            for (let i = 0; i < spacesNeeded; i++) {
                title.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; // Adds visible spaces
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
        slidesPerView: "auto", // Adjusts to button width
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            992: { enabled: false }, // Disables Swiper on desktops (992px+)
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-buttons .btn");

    filterButtons.forEach(button => {
        // Add hover effect
        button.addEventListener("mouseenter", function () {
            if (!this.classList.contains("btn-success")) {
                this.classList.replace("btn-outline-dark", "btn-success");
            }
        });

        button.addEventListener("mouseleave", function () {
            if (!this.classList.contains("active")) {
                this.classList.replace("btn-success", "btn-outline-dark");
            }
        });

        // Click event to activate button
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.classList.replace("btn-success", "btn-outline-dark");
            });

            this.classList.add("active");
            this.classList.replace("btn-outline-dark", "btn-success");
        });
    });
});

// End

