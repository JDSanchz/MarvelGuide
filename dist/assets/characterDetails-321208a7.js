class h{constructor(a,t){this.characterId=a,this.character={},this.dataSource=t}async init(){try{const a=await this.dataSource.findCharacterById(this.characterId);if(a){this.character=a;const t=await this.dataSource.fetchComicsByCharacterId(this.characterId);this.renderCharacterDetails(t)}}catch(a){console.error("Error fetching character details:",a)}}renderCharacterDetails(a){const t=a.map(c=>`
                <div class="comic-item">
                    <a href="${`/comic_details/comic.html?comic=${c.id}`}">${c.title}</a>
                    <!-- Add image here if available -->
                </div>
            `).join(""),r=`
            <h2 id="charname">${this.character.name}</h2>
            <div class="info">
            <img src="${this.character.thumbnail.path}.${this.character.thumbnail.extension}" alt="${this.character.name}" />
            <div class="comics-container">${t}</div>
            </div>
        `;document.getElementById("character-details-container").innerHTML=r}}export{h as C};
