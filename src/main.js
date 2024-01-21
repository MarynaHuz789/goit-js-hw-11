import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".js_form");
const imageList = document.querySelector(".js_list");

const loader = document.querySelector(".loader")

form.addEventListener("submit", onSearch);

let lightbox = new SimpleLightbox('.js_list a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250
});

//Створити шаблонну карточку
//Створити функцію що збирає інформацію про зображення
//Створити функцію пошуку зображень

function createMarkup(array) {
    return array.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
<li class="img_list">
  <a href="${largeImageURL}">
    <img class="gallery_image" src="${webformatURL}" alt="${tags}" width="350" height="250">
  </a>
  <ul class="description_list">
    <li class="description_item">
      <h2>Likes</h2>
      <p>${likes}</p>
    </li>
    <li class="description_item">
      <h2>Views</h2>
      <p>${views}</p>
    </li>
    <li class="description_item">
      <h2>Comments</h2>
      <p>${comments}</p>
    </li>
    <li class="description_item">
      <h2>Downloads</h2>
      <p>${downloads}</p>
    </li>
  </ul>
</li>`).join("")
}

function getImage(wordForSearch) {
    const API_KEY = "36166907-2dc6449c4338604cccc5458ef"
    const BASE_URL = "https://pixabay.com/api/"
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${wordForSearch}&image_type=photo&orientation=horizontal&safesearch=true`).
        then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
}

function onSearch(event) {
    event.preventDefault()
    const wordSearch = encodeURIComponent(event.currentTarget.elements.js_input.value.trim())
    if (!wordSearch) {
        loader.style.display = "none"
        iziToast.warning({
            position: "topRight",
            message: "Please enter your search word!"
        })
        return
    }
    loader.style.display = "block"
    getImage(wordSearch).then(data => {
        if (!data.total) {
            iziToast.error({
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
    form.reset()
        }
        loader.style.display = "none"
        imageList.innerHTML = createMarkup(data.hits)
        lightbox.refresh()
    })
        .catch(error => iziToast.error({
            position: "topRight",
            message: `${error}`
    }))
}

