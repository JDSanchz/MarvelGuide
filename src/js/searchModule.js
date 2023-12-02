// searchModule.js

const API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
const BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;

export function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');

    let timeout = null;

    searchInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fetchMarvelCharacters(searchInput.value);
        }, 300); // Adjust debounce time as needed
    });

    function fetchMarvelCharacters(query) {
        if (!query) {
            resultsContainer.style.display = 'none'; // Hide results when input is empty
            return;
        } else {
            resultsContainer.style.display = 'block'; // Show results otherwise
        }

        const url = `${BASE_URL}characters?nameStartsWith=${encodeURIComponent(query)}&apikey=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayResults(data.data.results))
            .catch(error => console.error('Error:', error));
    }

    function displayResults(characters) {
        resultsContainer.innerHTML = '';

        characters.slice(0, 10).forEach(character => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item'); // Add class for styling
    
            const link = document.createElement('a');
            link.textContent = character.name;
            link.href = `/character_pages/character.html?character=${character.id}`;
            link.classList.add('result-link'); // Add class for styling
    
            resultDiv.appendChild(link);
            resultsContainer.appendChild(resultDiv);
        });
    }
}
