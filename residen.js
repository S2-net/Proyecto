// scripts.js

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Inicializar el carrusel para que muestre la primera imagen
showSlide(slideIndex);
