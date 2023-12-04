import MarvelAPI from '../api/marvelAPI.js';

export function createCharacterCard(character) {
  return `
    <div class="character-card" onclick="location.href='/character_pages/character.html?character=${character.id}'">
      <div class="character-card-img">
    <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
    </div>
      <h3>${character.name}</h3>
    </div>
  `;
}

export async function displayCharacters() {
  const marvelApi = new MarvelAPI();
  try {
    const characters = await marvelApi.fetchRandomCharacters();
    const charactersHtml = characters.map(createCharacterCard).join('');
    const characterGrid = document.querySelector('.character-grid');
    characterGrid.innerHTML = charactersHtml;
    // Add an animation class each time new characters are displayed
    characterGrid.classList.remove('fade-in');
    void characterGrid.offsetWidth; // Trigger reflow to restart animation
    characterGrid.classList.add('fade-in');
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}

export function initiateCharacterDisplay() {
  // Initial display
  displayCharacters();

  // Refresh characters every 10 seconds
  setInterval(displayCharacters, 10000);
}
