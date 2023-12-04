import MarvelAPI from '../api/marvelAPI.js';


export async function displayTrendingCharacters() {
  const marvelApi = new MarvelAPI();
  const trendingCharacterIds = [1009384, 1009281, 1010785];
  
  try {
    const trendingCharacters = await Promise.all(
      trendingCharacterIds.map(id => marvelApi.findCharacterById(id))
    );
    
    const charactersHtml = trendingCharacters.map(createCharacterCard).join('');
    document.querySelector('.character-grid-trend').innerHTML = charactersHtml;
  } catch (error) {
    console.error('Error fetching trending characters:', error);
  }
}

function createCharacterCard(character) {
  return `
  <div class="character-card" onclick="location.href='/character_pages/character.html?character=${character.id}'">
  <div class="character-card-img">
<img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
</div>
  <h3>${character.name}</h3>
</div>
  `;
}
