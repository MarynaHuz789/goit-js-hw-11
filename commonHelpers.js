import{S as p,i as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".js_form"),d=document.querySelector(".js_list"),l=document.querySelector(".loader");a.addEventListener("submit",y);let m=new p(".js_list a",{captionSelector:"img",captionsData:"alt",captionDelay:250});function h(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:u})=>`
    <li>
  <a href="${r}">
    <img src="${o}" alt="${i}" width="350" height="250">
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
</li>`).join("")}function f(s){return fetch(`https://pixabay.com/api/?key=36166907-2dc6449c4338604cccc5458ef&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function y(s){s.preventDefault();const o=encodeURIComponent(s.currentTarget.elements.js_input.value.trim());if(!o){l.style.display="none",c.warning({position:"topRight",message:"Please enter your search word!"});return}l.style.display="block",f(o).then(r=>{r.total||(c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset()),l.style.display="none",d.innerHTML=h(r.hits),m.refresh()}).catch(r=>c.error({position:"topRight",message:`${r}`}))}
//# sourceMappingURL=commonHelpers.js.map
