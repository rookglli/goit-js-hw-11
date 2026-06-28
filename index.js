import{a as u,S as d,i}from"./assets/vendor-BGqwtSVv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="41651325-d56a057956804a71a345fad13",g="https://pixabay.com/api/";function h(r){return u.get(g,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){const s=r.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:f,downloads:p})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img class="gallery-image" src="${o}" alt="${e}" />
            </a>

            <div class="info">
              <p class="info-item">
                <span class="info-title">Likes</span>
                <span class="info-value">${t}</span>
              </p>

              <p class="info-item">
                <span class="info-title">Views</span>
                <span class="info-value">${a}</span>
              </p>

              <p class="info-item">
                <span class="info-title">Comments</span>
                <span class="info-value">${f}</span>
              </p>

              <p class="info-item">
                <span class="info-title">Downloads</span>
                <span class="info-value">${p}</span>
              </p>
            </div>
          </li>
        `).join("");l.insertAdjacentHTML("beforeend",s),y.refresh()}function L(){l.innerHTML=""}function v(){c.classList.remove("is-hidden")}function S(){c.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(r){r.preventDefault();const s=r.currentTarget.elements["search-text"].value.trim();if(s===""){i.warning({message:"Please enter a search query!",position:"topRight"});return}L(),v(),h(s).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",progressBarColor:"#b51b1b"});return}b(o.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again later!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",progressBarColor:"#b51b1b"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
