import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const newGallery = gallery(galleryItems);
const base = document.querySelector("body");

galleryEl.insertAdjacentHTML("beforeend", newGallery);
galleryEl.addEventListener("click", onClickEvent);

function gallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, descrption }) => {
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
    })
    .join("");
}
function onClickEvent(elm) {
  elm.preventDefault();
  const size = elm.target.dataset.source;
  if (!size) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${size}"width="800" height="600">`
  );

  instance.show();
  window.addEventListener("keydown", listener);
  function listener(elm) {
    if (elm.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", listener);
    }
  }
}


      