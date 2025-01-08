document.addEventListener("DOMContentLoaded", () => {
  // Update the time in the top-right corner
  const timeElement = document.getElementById("time");

  function updateTime() {
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString(); // Formats the time as HH:MM:SS
  }

  // Update the time every second
  updateTime();
  setInterval(updateTime, 1000);

  // Handle navigation between sections
  const navLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      const targetSectionId = link.getAttribute("data-section");

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove("active");
      });

      // Show the target section
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});

document.querySelectorAll(".carousel").forEach((carousel) => {
  const images = carousel.querySelector(".carousel-images");
  const prevButton = carousel.querySelector(".carousel-button.prev");
  const nextButton = carousel.querySelector(".carousel-button.next");

  let index = 0;

  const updateCarousel = () => {
    images.style.transform = `translateX(-${index * 100}%)`;
  };

  prevButton.addEventListener("click", () => {
    index = (index - 1 + images.children.length) % images.children.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    index = (index + 1) % images.children.length;
    updateCarousel();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.querySelector(".modal-close");

  // Open modal on image click
  document.querySelectorAll(".project-image").forEach(image => {
    image.addEventListener("click", () => {
      modal.style.display = "flex"; // Ensure modal is visible before transition
      setTimeout(() => modal.classList.add("show"), 10); // Add "show" class after a tiny delay
      modalImage.src = image.src; // Set the clicked image as modal image
    });
  });

  // Close modal on close button click
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none"; // Hide modal after transition
    }, 300); // Match the duration of the CSS transition
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none"; // Hide modal after transition
      }, 300); // Match the duration of the CSS transition
    }
  });
});