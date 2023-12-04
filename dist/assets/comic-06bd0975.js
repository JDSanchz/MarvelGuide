import{l as t,M as e}from"./utils-4790b891.js";class s{constructor(c,i){this.comicId=c,this.comic={},this.dataSource=i}async init(){try{const c=await this.dataSource.findComicById(this.comicId);c&&(this.comic=c,this.renderComicDetails())}catch(c){console.error("Error fetching comic details:",c)}}renderComicDetails(){const c=`
            <h2>${this.comic.title}</h2>
            <p class="comic-desc">${this.comic.description||"No description available"}</p>
            <div class="comic-wrapper">
            <img class="comic-cover" src="${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}" alt="${this.comic.title}" />
            </div>
        `;document.getElementById("comic-details-container").innerHTML=c}}document.addEventListener("DOMContentLoaded",()=>{t();const o=new e,i=new URLSearchParams(window.location.search).get("comic");i?new s(i,o).init():console.error("No comic ID provided in the URL")});
