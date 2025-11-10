document.addEventListener("DOMContentLoaded", () => {
  // Fungsi umum untuk animasi planet bergerak horizontal
  function animatePlanet(selector, maxDistance = 700, speed = 1.0) {
    const planet = document.querySelector(`.planet.${selector}`);
    const desc = document.querySelector(`.${selector}-section .planet-desc`);
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

    // Efek fade-in pada deskripsi
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) desc.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(desc);
  }

  // 🔥 Aktifkan animasi untuk masing-masing planet
  animatePlanet("venus", 700, 1.0); // Venus → lambat
  animatePlanet("earth", 500, 1.3); // Earth → sedikit lebih cepat
  animatePlanet("mars", 600, 0.8);  // Mars → lebih lambat dan stabil
});
