import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const photosMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

function createGallery(photo) {
  return photo
    .map(({ preview, original, description }) => {
      return `
	<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
