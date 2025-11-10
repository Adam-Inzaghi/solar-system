document.addEventListener("DOMContentLoaded", () => {
  function animatePlanet(selector, maxDistance = 700, speed = 1.0) {
    const planet = document.querySelector(`.planet.${selector}`);
    const desc = document.querySelector(`.${selector}-section .planet-desc`);
    if (!planet || !desc) return; // aman jika elemen belum ada

    let posX = 0;
    let direction = 1;

    function move() {
      posX += direction * speed;
      planet.style.transform = `translateX(${posX}px)`;
      if (posX > maxDistance || posX < -maxDistance) {
        direction *= -1;
      }
      requestAnimationFrame(move);
    }

    move();

    // Fade-in saat bagian planet terlihat
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) desc.classList.add("show");
        });
      },
      { threshold: 0.20 }
    );

    observer.observe(desc);
  }

  // Aktifkan animasi untuk 3 planet
  animatePlanet("venus", 700, 1.0);
  animatePlanet("earth", 500, 1.3);
  animatePlanet("mars", 600, 0.8);
});
