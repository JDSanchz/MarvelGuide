export default class ComicDetails {
    constructor(comicId, dataSource) {
        this.comicId = comicId;
        this.comic = {};
        this.dataSource = dataSource;
    }

    async init() {
        try {
            const comicData = await this.dataSource.findComicById(this.comicId);
            if (comicData) {
                this.comic = comicData;
                this.renderComicDetails();
            }
        } catch (error) {
            console.error('Error fetching comic details:', error);
        }
    }

    renderComicDetails() {
        const comicHtml = `
            <h2>${this.comic.title}</h2>
            <p class="comic-desc">${this.comic.description || 'No description available'}</p>
            <div class="comic-wrapper">
            <img class="comic-cover" src="${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}" alt="${this.comic.title}" />
            </div>
        `;

        document.getElementById('comic-details-container').innerHTML = comicHtml;
    }
}
