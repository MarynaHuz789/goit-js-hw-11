import{S as p,i as l}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".js_form"),m=document.querySelector(".js_list"),c=document.querySelector(".loader");a.addEventListener("submit",g);let d=new p(".js_list a",{captionSelector:"img",captionsData:"alt",captionDelay:250});function h(s){return s.map(({webformatURL:i,largeImageURL:r,tags:o,likes:e,views:t,comments:n,downloads:u})=>`
<li class="img_list">
  <a href="${r}">
    <img class="gallery_image" src="${i}" alt="${o}" width="350" height="250">
  </a>
  <ul class="description_list">
    <li class="description_item">
      <h2>Likes</h2>
      <p>${e}</p>
    </li>
    <li class="description_item">
      <h2>Views</h2>
      <p>${t}</p>
    </li>
    <li class="description_item">
      <h2>Comments</h2>
      <p>${n}</p>
    </li>
    <li class="description_item">
      <h2>Downloads</h2>
      <p>${u}</p>
    </li>
  </ul>
</li>`).join("")}function f(s){return fetch(`https://pixabay.com/api/?key=36166907-2dc6449c4338604cccc5458ef&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function g(s){s.preventDefault();const i=encodeURIComponent(s.currentTarget.elements.js_input.value.trim());if(!i){c.style.display="none",l.warning({position:"topRight",message:"Please enter your search word!"});return}c.style.display="block",f(i).then(r=>{r.total||(l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset()),c.style.display="none",m.innerHTML=h(r.hits),d.refresh()}).catch(r=>l.error({position:"topRight",message:`${r}`}))}
//# sourceMappingURL=commonHelpers.js.map
