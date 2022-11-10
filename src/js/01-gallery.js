
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const itemsMarkUp = createGalleryItemsMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkUp);

function createGalleryItemsMarkUp(items) {
    const markUp = items.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    });
    return markUp.join('');
   }

   const lightbox = new SimpleLightbox('.gallery a', { 
    animationSpeed:	"250",
    captionsData: "alt",

});




