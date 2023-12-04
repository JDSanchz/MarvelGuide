class MarvelAPI {
  constructor() {
    this.API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
    this.BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;
    this.CHARACTER_LIMIT = 100; // Maximum allowed by the API
    this.TOTAL_CHARACTERS = 1493; 
  }

  async fetchMarvelData(endpoint, params = {}) {
    const url = new URL(`${this.BASE_URL}${endpoint}`);
    url.search = new URLSearchParams({ apikey: this.API_KEY, ...params });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async fetchComicsByCharacterId(characterId) {
    const endpoint = `characters/${characterId}/comics`;
    const data = await this.fetchMarvelData(endpoint);
    return data.data.results; // Adjust based on actual response structure
}

  async findCharacterById(id) {
    const data = await this.fetchMarvelData(`characters/${id}`);
    return data.data.results[0];
  }

  async findComicById(id) {
    const data = await this.fetchMarvelData(`comics/${id}`);
    return data.data.results[0]; // Assuming the API returns an array
}

async fetchRandomCharacters(displayLimit = 3) {
  const offset = this.getRandomOffset();
  const characters = await this.fetchCharactersFromAPI(offset);
  return this.getRandomSubsetOfCharacters(characters, displayLimit);
}

async fetchCharactersFromAPI(offset) {
  const endpoint = 'characters';
  const params = { limit: this.CHARACTER_LIMIT, offset };
  const response = await this.fetchMarvelData(endpoint, params);
  return response.data.results;
}

getRandomOffset() {
  const maxOffset = this.TOTAL_CHARACTERS - this.CHARACTER_LIMIT;
  return Math.floor(Math.random() * maxOffset);
}

getRandomSubsetOfCharacters(characters, limit) {
  return characters.sort(() => Math.random() - 0.5).slice(0, limit);
}

}

export default MarvelAPI;
