(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();class m{constructor(){this.API_KEY="f9bde80f6b1ced07ded8d00810b72e7e",this.BASE_URL="https://gateway.marvel.com/v1/public/"}async fetchMarvelData(e,a={}){const n=new URL(`${this.BASE_URL}${e}`);n.search=new URLSearchParams({apikey:this.API_KEY,...a});try{const t=await fetch(n);if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(t){throw console.error("Error fetching data:",t),t}}async fetchComicsByCharacterId(e){const a=`characters/${e}/comics`;return(await this.fetchMarvelData(a)).data.results}async findCharacterById(e){return(await this.fetchMarvelData(`characters/${e}`)).data.results[0]}async findComicById(e){return(await this.fetchMarvelData(`comics/${e}`)).data.results[0]}}const d="f9bde80f6b1ced07ded8d00810b72e7e",u="https://gateway.marvel.com/v1/public/";function h(){const s=document.getElementById("searchInput"),e=document.getElementById("resultsContainer");let a=null;s.addEventListener("input",()=>{clearTimeout(a),a=setTimeout(()=>{n(s.value)},300)});function n(r){if(r)e.style.display="block";else{e.style.display="none";return}const c=`${u}characters?nameStartsWith=${encodeURIComponent(r)}&apikey=${d}`;fetch(c).then(o=>o.json()).then(o=>t(o.data.results)).catch(o=>console.error("Error:",o))}function t(r){e.innerHTML="",r.slice(0,10).forEach(c=>{const o=document.createElement("div");o.classList.add("result-item");const i=document.createElement("a");i.textContent=c.name,i.href=`/character_pages/character.html?character=${c.id}`,i.classList.add("result-link"),o.appendChild(i),e.appendChild(o)})}}async function f(s){try{const e=await fetch(s);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.text()}catch(e){console.error("Failed to load HTML:",e)}}async function l(s,e){const a=await f(s),n=document.getElementById(e);n?n.innerHTML=a:console.error(`Element with id '${e}' not found`)}async function p(){await l("/partials/header.html","main-header"),await l("/partials/footer.html","main-footer"),h()}export{m as M,p as l};
