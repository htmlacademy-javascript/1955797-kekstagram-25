import { createFullSizeImage, onCloseButtonClick } from './full-size-image.js';

const renderPictures = (photos) => {
  const pictures = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const closeButton = document.querySelector('.big-picture__cancel');

  photos.forEach((photo) => {
    const { url, likes, comments } = photo;
    const thumbnail = template.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;

    thumbnail.addEventListener('click', () => {
      createFullSizeImage(photo);
    });

    fragment.appendChild(thumbnail);
  });

  closeButton.addEventListener('click', onCloseButtonClick);

  pictures.appendChild(fragment);
};

export { renderPictures };
