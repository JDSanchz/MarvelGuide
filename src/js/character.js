import { getParam, loadHeaderFooter } from './utils.mjs'; 
import MarvelAPI from '../api/marvelAPI.js';
import CharacterDetails from './characterDetails.js';


document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
    const marvelApi = new MarvelAPI();
    const characterId = getParam('character');
    const character = new CharacterDetails(characterId, marvelApi);
    character.init();
  });
  



