// ─── Page navigation ────────────────────────────────
function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const page = document.getElementById('p-' + id);
  const navEl = document.getElementById('n-' + id);

  if (page) page.classList.add('active');
  if (navEl) navEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // update the URL hash so the back button works
  history.pushState(null, '', id === 'home' ? '/' : '#' + id);
}

// ─── Handle direct URL hash on load ─────────────────
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('p-' + hash)) {
    go(hash);
  }
});

// ─── Handle browser back/forward ────────────────────
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  go(hash);
});
