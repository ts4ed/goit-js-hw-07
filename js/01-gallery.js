import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const newGallery = gallery(galleryItems);
const base = document.querySelector("body")
window.addEventListener("keydown", esOnEvent);

galleryEl.insertAdjacentHTML("beforeend", newGallery);
galleryEl.addEventListener("click", onClickEvent);

function gallery(galleryItems) {
  return galleryItems.map(({ preview, original, descrption }) => {
    return `<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${descrption}"
    />
  </a>
</div>`;
  }).join("");
}

// preventDefault();

function onClickEvent(elm) {
  if (!elm.target.classlist.contains("gallery__image")) {
    return;
  }

  for (let i = 0; i < galleryItems.length; i += 1) {
    const el = galleryItems[i];
    if (elm.target.src === el.preview) {
      const instance = basicLightbox.create(`
    <img src="${el.original}" width="800" height="600" onclick="return false" >
`);
      
      instance.show();
      
    }
    
  }
  
}
function esOnEvent() {
  if (event.code === "Escape") {
   console.log(`esc`);
  }
}
console.log(base.lastElementChild);


// решить с переходом на новую страницу при открытии изображения 
// при нажатии Escape  удаляется клас div с "плейлистом" через (textContent? )