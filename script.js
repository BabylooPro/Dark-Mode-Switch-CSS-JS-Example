// CHANGE THEME DARK-LIGHT MODE
const toggleBtn = document.getElementById('dark-mode-toggle');
const bodyEl = document.body;

toggleBtn.addEventListener('click', function() {
  bodyEl.classList.toggle('dark-mode');
   if (bodyEl.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Light Mode';
    localStorage.setItem('dark-mode-enabled', true);
  } else {
    toggleBtn.textContent = 'Dark Mode';
    localStorage.setItem('dark-mode-enabled', false);
  }
});

// SAVE AFTER CLICK IN LOCALSTORAGE OF NAVIGATOR
const isDarkModeEnabled = localStorage.getItem('dark-mode-enabled');
if (isDarkModeEnabled === 'true') {
  bodyEl.classList.add('dark-mode');
  toggleBtn.textContent = 'Light Mode';
} else {
  bodyEl.classList.remove('dark-mode');
  toggleBtn.textContent = 'Dark Mode';
}