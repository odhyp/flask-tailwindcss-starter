console.log("Welcome to Flask TailwindCSS Starter");

document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll(".glass-card, .hero-gradient").forEach((el) => {
    observer.observe(el);
  });

  // Subtle parallax effect for orbs
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll(".orb");

    orbs.forEach((orb, index) => {
      const speed = 0.1 + index * 0.05;
      const yPos = -(scrolled * speed);
      orb.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Enhanced card interactions
  const cards = document.querySelectorAll(".glass-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.background = "rgba(255, 255, 255, 0.98)";
      this.style.borderColor = "rgba(255, 255, 255, 0.4)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.background = "rgba(255, 255, 255, 0.95)";
      this.style.borderColor = "rgba(255, 255, 255, 0.2)";
    });
  });
});
