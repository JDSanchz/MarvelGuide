// darkModeManager.js

function savePreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

function loadPreferences() {
    const preferences = localStorage.getItem('userPreferences');
    return preferences ? JSON.parse(preferences) : {};
}

function applyDarkMode(isDarkMode) {
    console.log('Applying dark mode:', isDarkMode); // Debug log

    const elementsToChange = [document.querySelector('header'), 
                              document.querySelector('main'), 
                              document.querySelector('footer')];

    elementsToChange.forEach(element => {
        if (element) {
            if (isDarkMode) {
                element.classList.add('dark-mode');
            } else {
                element.classList.remove('dark-mode');
            }
        }
    });
}

function setupDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');
    console.log('Toggle element:', toggle); // Debug log
    if (toggle) {
        toggle.addEventListener('change', () => {
            const isDarkMode = toggle.checked;
            console.log('Toggle changed:', isDarkMode); // Debug log
            savePreferences({ darkMode: isDarkMode });
            applyDarkMode(isDarkMode);
        });

        const preferences = loadPreferences();
        console.log('Loaded preferences:', preferences); // Debug log
        toggle.checked = preferences.darkMode || false;
        applyDarkMode(preferences.darkMode);
    }
}

export { setupDarkModeToggle };
