import MarvelAPI from '../api/marvelAPI.js';


export async function displayComics() {
    const marvelApi = new MarvelAPI();
    const comicIds = [68363, 108940, 103478, 71255, 70148, 17584];
    
    try {
        const comics = await Promise.all(
            comicIds.map(id => marvelApi.findComicById(id))
        );

        const comicsHtml = comics.map(createComicCard).join('');
        document.querySelector('.comic-grid').innerHTML = comicsHtml;
    } catch (error) {
        console.error('Error fetching comics:', error);
    }
}

function createComicCard(comic) {
    return `
        <div class="comic-card" onclick="location.href='/comic_details/comic.html?comic=${comic.id}'">
            <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" />
        </div>
    `;
}