const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateTheme(theme) {
  const dark = theme === 'dark';
  root.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  toggle.title = toggle.getAttribute('aria-label');
  themeColor.content = dark ? '#232136' : '#fafafa';
}

updateTheme(root.dataset.theme);
toggle.hidden = false;
toggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  updateTheme(theme);
  try { localStorage.setItem('theme', theme); } catch {}
});
