const cardFocus = document.querySelectorAll(".card_focus");
const mainImage1 = document.querySelector(".main-image1");
const mainImage2 = document.querySelector(".main-image2");
const mainImage3 = document.querySelector(".main-image3");
const hoverImage1 = document.querySelector(".hover-image1");
const hoverImage2 = document.querySelector(".hover-image2");
const hoverImage3 = document.querySelector(".hover-image3");
const reservation1 = document.querySelector(".reservation1");
const reservation2 = document.querySelector(".reservation2");
const reservation3 = document.querySelector(".reservation3");


cardFocus.forEach((card) => {
    card.addEventListener("mouseenter", (evt) => {
        if (evt.currentTarget.contains(mainImage1)) {
            reservation1.style.display = "block";
        }
        if (evt.currentTarget.contains(mainImage2)) {
            reservation2.style.display = "block";
            mainImage2.style.display = "none";
            hoverImage2.style.display = "block";
        }
        if (evt.currentTarget.contains(mainImage3)) {
            reservation3.style.display = "block";
            mainImage3.style.display = "none";
            hoverImage3.style.display = "block";
        }
    });
});

cardFocus.forEach((card) => {
    card.addEventListener("mouseleave", (evt) => {
        if (evt.currentTarget.contains(mainImage1)) {
            reservation1.style.display = "none";
        }
        if (evt.currentTarget.contains(mainImage2)) {
            reservation2.style.display = "none";
            mainImage2.style.display = "block";
            hoverImage2.style.display = "none";
        }
        if (evt.currentTarget.contains(mainImage3)) {
            reservation3.style.display = "none";
            mainImage3.style.display = "block";
            hoverImage3.style.display = "none";
        }
    });
});
const cards = document.querySelectorAll('.questions-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const answer = card.querySelector('.answer');

        if (!card.classList.contains('expanded')) {
            card.style.height = '200px';
            answer.style.display = "block";
            card.style.border = "2px solid #6B53F6";
            card.classList.add('expanded');
        } else {
            card.style.height = '80px';
            answer.style.display = "none";
            card.style.border = "2px solid #E0E0E0";
            card.classList.remove('expanded');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const frames = document.querySelectorAll(".frame");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + frames.length) % frames.length;
        updateSlider();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % frames.length;
        updateSlider();
    });

    function updateSlider() {
        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }
});

