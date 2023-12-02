// Import the API function
import MarvelAPI from '../api/marvelAPI.js';
import CharacterDetails from './characterDetails.js';
import {loadHeaderFooter } from './utils.mjs'; 

const marvelApi = new MarvelAPI();


document.addEventListener('DOMContentLoaded', () => {
  loadHeaderFooter();
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  const characterId = hash.split('/')[1];

  if (hash.startsWith('#character/')) {
    const characterDetails = new CharacterDetails(characterId, marvelApi);
    characterDetails.init();
  }
});

// Initialize routing on page load
window.dispatchEvent(new Event('hashchange'));
