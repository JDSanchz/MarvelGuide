export default class CharacterDetails {
    constructor(characterId, dataSource) {
      this.characterId = characterId;
      this.character = {};
      this.dataSource = dataSource;
    }
  
    async init() {
        try {
            const characterData = await this.dataSource.findCharacterById(this.characterId);
            if (characterData) {
                this.character = characterData;
                const comics = await this.dataSource.fetchComicsByCharacterId(this.characterId);
                this.renderCharacterDetails(comics);
            }
        } catch (error) {
            console.error('Error fetching character details:', error);
        }
    }

    renderCharacterDetails(comics) {
        const comicsHtml = comics.map(comic => {
            const comicDetailUrl = `/comic_details/comic.html?comic=${comic.id}`;
            return `
                <div class="comic-item">
                    <a href="${comicDetailUrl}">${comic.title}</a>
                    <!-- Add image here if available -->
                </div>
            `;
        }).join('');

        const characterHtml = `
            <h2 id="charname">${this.character.name}</h2>
            <div class="info">
            <img src="${this.character.thumbnail.path}.${this.character.thumbnail.extension}" alt="${this.character.name}" />
            <div class="comics-container">${comicsHtml}</div>
            </div>
        `;

        document.getElementById('character-details-container').innerHTML = characterHtml;
    }
  }
  