import{i as l,S as g}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",b="44463145-8dd3def1cdcb4fcdb78deec18",L=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});class v{constructor(){this.page=1}async fetchImages(r){const s=`${y}?key=${b}&q=${r}&${L}&page=${this.page}`;return await(await fetch(s)).json()}}const c=new v,$=document.querySelector("#search-form"),p=document.querySelector(".loader"),u=document.querySelector(".gallery"),d=document.querySelector(".load-more");$.addEventListener("submit",w);d.addEventListener("click",S);let n="";function w(o){o.preventDefault(),n=o.currentTarget.searchQuery.value.trim(),n&&(p.classList.remove("hidden"),d.classList.add("hidden"),P(),c.page=1,c.fetchImages(n).then(r=>{if(r.totalHits===0)throw new Error;f(r),d.classList.remove("hidden"),l.success({title:"Success",message:`Hooray! We found ${r.totalHits} images.`,position:"topRight"})}).catch(r=>{l.error({title:"Error",message:"No images found. Try again.",position:"topRight"})}),o.currentTarget.reset())}function S(){p.classList.remove("hidden"),c.page+=1,c.fetchImages(n).then(o=>{f(o)}).catch(o=>{l.error({title:"Error",message:"No images found",position:"topRight"})})}function f(o){u.insertAdjacentHTML("beforeend",o.hits.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:m,downloads:h})=>`<div class="photo-card">
        <a href="${a}">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${t}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${i}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${m}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${h}</span>
          </p>
        </div>
        </div>`).join("")),p.classList.add("hidden"),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function P(){u.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
