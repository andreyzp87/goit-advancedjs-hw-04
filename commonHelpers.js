import{a as g,S as y,i as p}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",L="44463145-8dd3def1cdcb4fcdb78deec18";class v{constructor(){this.page=1,this.pageSize=40}async fetchImages(t){return(await g.get(b,{params:{image_type:"photo",orientation:"horizontal",safesearch:!0,key:L,q:t,page:this.page,per_page:this.pageSize}})).data}}const a=new v,S=document.querySelector("#search-form"),i=document.querySelector(".loader"),u=document.querySelector(".gallery"),n=document.querySelector(".load-more");S.addEventListener("submit",$);n.addEventListener("click",q);let l="";const w=new y(".gallery a",{captionsData:"alt",captionDelay:250});async function $(r){if(r.preventDefault(),l=r.currentTarget.searchQuery.value.trim(),!!l){i.classList.remove("hidden"),n.classList.add("hidden"),x(),a.page=1;try{const t=await a.fetchImages(l);if(t.totalHits===0)throw new Error;h(t),f(t.totalHits),p.success({title:"Success",message:`Hooray! We found ${t.totalHits} images.`,position:"topRight"})}catch{i.classList.add("hidden"),p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}r.target.reset()}}async function q(){i.classList.remove("hidden"),a.page+=1;try{const r=await a.fetchImages(l);h(r),f(r.totalHits,!0)}catch{n.classList.add("hidden"),i.classList.add("hidden"),p.error({title:"Error",message:"No images found",position:"topRight"});return}}function f(r,t=!1){if(r>a.pageSize*a.page){n.classList.remove("hidden");return}n.classList.add("hidden"),t&&p.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function h(r){u.insertAdjacentHTML("beforeend",r.hits.map(({webformatURL:t,largeImageURL:c,tags:d,likes:e,views:s,comments:o,downloads:m})=>`<div class="photo-card">
        <a href="${c}">
          <img src="${t}" alt="${d}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${e}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${s}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${o}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${m}</span>
          </p>
        </div>
        </div>`).join("")),i.classList.add("hidden"),w.refresh()}function x(){u.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
