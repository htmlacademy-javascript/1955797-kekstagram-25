import {createPhotos} from './data.js';

const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const template = document.querySelector('#picture').content.querySelector('.picture');
const photos = createPhotos(25);

photos.forEach(({url, likes, comments}) => {
  const thumbnail = template.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(thumbnail);
});

pictures.appendChild(fragment);
