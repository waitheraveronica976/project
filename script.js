function toggleMenu(element) {
        const ul = element.querySelector('ul');
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
    }
let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;
    const maxIndex = totalSlides - 4; // We always want to show 4 images at a time
    
    if (n > maxIndex) {
        index = maxIndex;
    } else if (n < 0) {
        index = 0;
    } else {
        index = n;
    }
    
    const offset = -index * 25; // Each image takes up 25% of the width
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Add swipe functionality
let startX = 0;
document.querySelector('.carousel').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextSlide();
    } else if (startX - endX < -50) {
        prevSlide();
    }
});

// Initialize the carousel to show the first 4 images
showSlide(0);

// Add event listeners for buttons
document.getElementById('next-btn').addEventListener('click', nextSlide);
document.getElementById('prev-btn').addEventListener('click', prevSlide);
