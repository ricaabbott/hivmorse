
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  const navLinks = document.querySelectorAll('.nav-link');

  // Fade-in on scroll
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // Scrollspy to update active nav item
  const sections = document.querySelectorAll('section');
  const spyObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(section => spyObserver.observe(section));
});
