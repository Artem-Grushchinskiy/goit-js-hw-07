import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let modalBasicLightBox = null;
gallery.addEventListener("click", onClick);
// ============================
const galleryMarkUp = galleryItems
  .map((image) => {
    const { preview, original, description } = image;
    return `
            <li class="gallery__item">
                <a class="gallery__link" href='${original}'>
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
            </li>`;
  })
  .join("");
// ==========================
gallery.insertAdjacentHTML("afterbegin", galleryMarkUp);
// =========================
function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  modalBasicLightBox = basicLightbox.create(
    `
    <img width="1400" height="900" src="${event.target.dataset.source}">
    `,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscPressed);
      },
    }
  );
  modalBasicLightBox.show();
  document.addEventListener("keydown", onEscPressed);
}

function onEscPressed(event) {
  if (event.code === "Escape") {
    modalBasicLightBox.close();
  }
}

// console.log(galleryItems);
