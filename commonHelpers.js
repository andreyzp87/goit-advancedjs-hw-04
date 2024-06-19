import{i as p,S as g}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",b="44463145-8dd3def1cdcb4fcdb78deec18",L=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});class v{constructor(){this.page=1,this.pageSize=40}async fetchImages(s){const a=`${y}?key=${b}&q=${s}&${L}&page=${this.page}&per_page=${this.pageSize}`;return await(await fetch(a)).json()}}const o=new v,S=document.querySelector("#search-form"),c=document.querySelector(".loader"),u=document.querySelector(".gallery"),d=document.querySelector(".load-more");S.addEventListener("submit",$);d.addEventListener("click",w);let l="";function $(r){r.preventDefault(),l=r.currentTarget.searchQuery.value.trim(),l&&(c.classList.remove("hidden"),d.classList.add("hidden"),P(),o.page=1,o.fetchImages(l).then(s=>{if(s.totalHits===0)throw new Error;h(s),d.classList.remove("hidden"),p.success({title:"Success",message:`Hooray! We found ${s.totalHits} images.`,position:"topRight"})}).catch(s=>{p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),c.classList.add("hidden")}),r.currentTarget.reset())}function w(){c.classList.remove("hidden"),o.page+=1,o.fetchImages(l).then(r=>{h(r),r.totalHits<o.pageSize*o.page&&(d.classList.add("hidden"),p.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}).catch(r=>{p.error({title:"Error",message:"No images found",position:"topRight"}),d.classList.add("hidden"),c.classList.add("hidden")})}function h(r){u.insertAdjacentHTML("beforeend",r.hits.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<div class="photo-card">
        <a href="${i}">
          <img src="${a}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${t}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${n}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${f}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${m}</span>
          </p>
        </div>
        </div>`).join("")),c.classList.add("hidden"),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function P(){u.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
