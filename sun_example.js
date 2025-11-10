window.addEventListener('scroll', () => {
  const sun = document.querySelector('.sun');
  const desc = document.querySelector('.sun-desc');
  const section = document.querySelector('.sun-section');

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;

  // Hit detection for this section
  if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
    const progress = (scrollY - sectionTop) / sectionHeight;

    // Move sun upward (0px to -100px)
    const moveY = 200 - progress * 300;
    sun.style.transform = `translateY(${moveY}px)`;

    // Fade in description once halfway scrolled
    if (progress > 0.5) {
      desc.style.opacity = (progress - 0.5) * 2;
    } else {
      desc.style.opacity = 0;
    }
  }
});
