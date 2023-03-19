import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
galleryItems.map(({ preview, original, description }) => {
  const image = document.createElement("img");
  image.src = preview;
  image.alt = description;
  image.dataset.source = original;
  image.classList.add("gallery__image");

  const linkImage = document.createElement("a");
  linkImage.href = original;
  linkImage.classList.add("gallery__link");

  const liImage = document.createElement("li");
  liImage.classList.add("gallery__item");

  linkImage.append(image);

  liImage.append(linkImage);

  gallery.append(liImage);
});
const clickImageListener = (el) => {
  el.preventDefault();
  const instance = basicLightbox.create(
    `
          <div class="modal">
              <img src = ${el.target.dataset.source} alt = "${el.target.alt}" >
          </div>
      `
  );
  instance.show();

  const esc = (el) => {
    if (el.key !== "Escape") {
      return;
    }
    instance.close();
  };
  document.addEventListener("keydown", esc);
};
gallery.addEventListener("click", clickImageListener);
