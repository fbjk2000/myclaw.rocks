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
  const year = new Date().getFullYear();
  footerMount.innerHTML = `
    <footer class='footer'>
      <div class='site-shell footer-grid'>
        <div class='footer-brand'>
          <p class='footer-title'>FINTERY</p>
          <p class='footer-copy'>
            Founder-led AI, data, and value-creation support for SMBs across EMEA.
          </p>
          <p class='footer-copy'>myclaw.rocks - Run OpenClaw properly.</p>
        </div>
        <div>
          <p class='footer-label'>Contact</p>
          <div class='footer-copy'>
            <p>Canbury Works. Units 6 and 7</p>
            <p>Canbury Business Park. Elm Crescent</p>
            <p>Kingston upon Thames.</p>
            <p>Surrey, KT2 6HJ, UK</p>
            <p><a href='mailto:info@fintery.com'>info@fintery.com</a></p>
          </div>
        </div>
        <div>
          <p class='footer-label'>Legal</p>
          <ul class='footer-links'>
            <li><a href='https://fintery.com/legal/privacy' target='_blank' rel='noreferrer'>Privacy</a></li>
            <li><a href='https://fintery.com/legal/terms' target='_blank' rel='noreferrer'>Terms</a></li>
          </ul>
        </div>
      </div>
      <div class='site-shell footer-bottom'>
        <p>Copyright ${year} FINTERY. Built for practical value creation.</p>
        <p>All product names and trademarks are the property of their respective owners.</p>
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
