import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(e) {
  return e
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
gallery.on("show.simplelightbox");
