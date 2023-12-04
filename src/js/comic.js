import { getParam, loadHeaderFooter } from './utils.mjs'; 
import MarvelAPI from '../api/marvelAPI.js';
import ComicDetails from './comicDetails.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
    const marvelApi = new MarvelAPI();
    const params = new URLSearchParams(window.location.search);
    const comicId = params.get('comic');
    
    if (comicId) {
        const comic = new ComicDetails(comicId, marvelApi);
        comic.init();
    } else {
        console.error('No comic ID provided in the URL');
    }
});
