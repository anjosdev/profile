const root = document.documentElement;
const toggle = document.querySelector('.light-switch');
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateTheme(theme) {
  const light = theme === 'light';
  root.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', String(light));
  toggle.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`);
  toggle.title = toggle.getAttribute('aria-label');
  toggle.querySelector('.switch-hint').textContent = light ? 'lights off' : 'lights on';
  themeColor.content = light ? '#fafafa' : '#0a0a0c';
}

updateTheme(root.dataset.theme);
toggle.hidden = false;
toggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  updateTheme(theme);
  try { localStorage.setItem('theme', theme); } catch {}
});
