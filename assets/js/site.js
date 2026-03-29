const pages = [
  ['Home', 'index.html'],
  ['Best Practices', 'best-practices.html'],
  ['Architectures', 'architectures.html'],
  ['Use Cases', 'use-cases.html'],
  ['Integrations', 'integrations.html'],
  ['Mistakes', 'mistakes.html'],
  ['Resources', 'resources.html'],
  ['Work with Us', 'work-with-us.html']
];

const current = (() => {
  const path = window.location.pathname;
  const file = path.split('/').pop();
  if (!file || file === '') {
    return 'index.html';
  }
  return file;
})();

const headerMount = document.querySelector('[data-site-header]');
if (headerMount) {
  const navLinks = pages
    .map(([label, href]) => {
      const active = href === current ? " aria-current='page'" : '';
      return `<a class='nav-link' href='${href}'${active}>${label}</a>`;
    })
    .join('');

  headerMount.innerHTML = `
    <header class='site-header'>
      <div class='site-shell header-inner'>
        <a class='brand' href='index.html' aria-label='myclaw.rocks home'>
          <span class='brand-mark'>OpenClaw Field Manual</span>
          <span class='brand-name'>myclaw.rocks</span>
        </a>
        <div class='nav-wrap'>
          <nav class='nav-links' aria-label='Primary'>${navLinks}</nav>
          <a class='accent-link' href='https://fintery.com' target='_blank' rel='noreferrer'>Talk to Fintery</a>
        </div>
      </div>
    </header>
  `;
}

const footerMount = document.querySelector('[data-site-footer]');
if (footerMount) {
  footerMount.innerHTML = `
    <footer class='footer'>
      <div class='site-shell footer-inner'>
        <span>myclaw.rocks - Run OpenClaw properly</span>
        <span>Practical guide for setup, operations, and scale</span>
      </div>
    </footer>
  `;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
