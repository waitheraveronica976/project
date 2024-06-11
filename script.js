

function toggleMenu(element) {
    const ul = element.querySelector('ul');
    const allLists = document.querySelectorAll('.nav-item ul');

    // Hide all other lists
    allLists.forEach(list => {
        if (list !== ul) {
            list.style.display = 'none';
            list.style.zIndex = 10;
        }
    });

    // Toggle the clicked list
    ul.style.display = ul.style.display === 'block' ? 'none' : 'block';

    // Bring the active list to the front
    if (ul.style.display === 'block') {
        ul.style.zIndex = 20 + index++;
    } else {
        ul.style.zIndex = 10;
    }
}

// Get references to the carousel elements
// Get references to the carousel elements
const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carouselContainer) => {
  const carousel = carouselContainer.querySelector('.carousel');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carouselContainer.querySelector('.prev');
  const nextBtn = carouselContainer.querySelector('.next');

  // Set initial variables
  let currentIndex = 0;
  const totalItems = carouselItems.length;
  const visibleItems = 4; // Number of items visible at a time

  // Set the initial position of the carousel
  carousel.style.transform = `translateX(-${currentIndex * (100 / visibleItems)}%)`;

  // Function to move the carousel to the next set of items
  function moveNext() {
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
      carousel.style.transform = `translateX(-${currentIndex * (100 / visibleItems)}%)`;
    }
  }

  // Function to move the carousel to the previous set of items
  function movePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${currentIndex * (100 / visibleItems)}%)`;
    }
  }

  // Add event listeners for the buttons
  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);

  // Set the same width and height for all carousel items
  carouselItems.forEach((item) => {
    item.style.width = `${100 / visibleItems}%`;
    item.style.height = 'auto'; // or set a specific height if needed
  });
});
