// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".header");
//   if (window.scrollY > 100) {
//     // Adjust the value to when you want the header to become sticky
//     header.classList.add("is-sticky");
//   } else {
//     header.classList.remove("is-sticky");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const isHomePage = window.location.pathname === "/";
  const mobileThreshold = 5;
  const desktopThreshold = 100;

  if (!isHomePage) {
    header.classList.add("is-sticky");
  }

  window.addEventListener("scroll", function () {
    if (!isHomePage) return;

    const threshold =
      window.innerWidth <= 768 ? mobileThreshold : desktopThreshold;

    if (window.scrollY > threshold) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heroBg = document.querySelector(".collection-hero__bg");

  if (heroBg && window.innerWidth <= 768) {
    const mobileBg = heroBg.getAttribute("data-mobile-bg");
    if (mobileBg) {
      heroBg.style.backgroundImage = `url(${mobileBg})`;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          // Optional: stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Adjust these options as needed
      threshold: 0.2, // Triggers when 20% of the element is visible
      rootMargin: "50px", // Adds margin to the viewport detection
    }
  );

  // Observe all snake images
  const snakeImages = document.querySelectorAll(".home-snake");
  snakeImages.forEach((image) => {
    observer.observe(image);
  });
});
