import { galleryItems } from "./gallery-items.js";

// Change code below this line

//--------------------------1st_method---------------------------

// const galleryContainer = document.querySelector(".gallery");

// function createList(array) {
//   return array.reduce(
//     (acc, item) =>            создаем аккумулятор
//       acc +
//       `
// 	<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`,
//     ""                    так как нам нужна строка то аккумулятор = ""
//   );
// }
// const result = createList(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", result);

//--------------------------1st_method---------------------------

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

function onGalleryContainerClick(event) {
  event.preventDefault();

  const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  modal.show();
  if (modal.visible()) {
    window.addEventListener("keydown", onPressKeyESC);
  }
  function onPressKeyESC(event) {
    if (event.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onPressKeyESC);
    }
  }
}
galleryContainer.addEventListener("click", onGalleryContainerClick);

//----------------------------------------------------

// function openImageClick(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("gallery__link")) {
//     const modal = basicLightbox.create(`
//         <img src="${e.target.src}" width="800" height="600">`);
//     modal.show();
//     if (modal.visible()) {
//       window.addEventListener("keydown", onPressKeyESC);
//       window.addEventListener("click", mouseEnter);
//     }
//     function onPressKeyESC(e) {
//       if (e.code === "Escape") {
//         modal.close();
//         window.removeEventListener("keydown", onPressKeyESC);
//       }
//     }
//     function mouseEnter(e) {
//       if (e.code === "mouseEnter") {
//         modal.close();
//         window.removeEventListener("click", mouseEnter);
//       }
//     }
//   }
// }
