class MarvelAPI {
  constructor() {
    this.API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
    this.BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;
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
}

export default MarvelAPI;
