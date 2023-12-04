// darkModeManager.js

function savePreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

function loadPreferences() {
    const preferences = localStorage.getItem('userPreferences');
    return preferences ? JSON.parse(preferences) : {};
}

function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function setupDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('change', () => {
            const isDarkMode = toggle.checked;
            savePreferences({ darkMode: isDarkMode });
            applyDarkMode(isDarkMode);
        });

        // Initialize the toggle state from saved preferences
        const preferences = loadPreferences();
        toggle.checked = preferences.darkMode || false;
        applyDarkMode(preferences.darkMode);
    }
}

export { setupDarkModeToggle };
