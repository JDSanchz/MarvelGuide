import { getParam, loadHeaderFooter } from './utils.mjs'; 
import MarvelAPI from '../api/marvelAPI.js';
import CharacterDetails from './characterDetails.js';


document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
    const marvelApi = new MarvelAPI();
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('character');
    const character = new CharacterDetails(characterId, marvelApi);
    character.init();
  });
  



