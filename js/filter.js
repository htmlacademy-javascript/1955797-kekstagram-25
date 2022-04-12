import { getRandomItem, debounce } from './util.js';
import { renderPictures } from './thumbnail.js';

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');
const filterDefault = imgFilters.querySelector('#filter-default');
const filterRandom = imgFilters.querySelector('#filter-random');
const filterDiscussed = imgFilters.querySelector('#filter-discussed');

const RANDOM_PHOTOS_COUNT = 10;

let photosFromServer;
let chosenFilter = filterDefault;

const getRandomPhotos = (photos) => {
  const randomPhotos = [];
  while (randomPhotos.length !== RANDOM_PHOTOS_COUNT) {
    const randomPhoto = getRandomItem(photos);
    if (!randomPhotos.includes(randomPhoto)) {
      randomPhotos.push(randomPhoto);
    }
  }
  return randomPhotos;
};

const compareCommentsNumber = (a, b) => b.comments.length - a.comments.length;
const sortByCommentsNumber = (photos) => photos.slice().sort(compareCommentsNumber);

const clearPhotos = () => {
  const renderedPhotos = document.querySelectorAll('.picture');
  renderedPhotos.forEach((photo) => {
    photo.remove();
  });
};

const rerenderPhotos = (evt) => {
  clearPhotos();

  if (evt.target === filterDefault) {
    renderPictures(photosFromServer);
  }
  if (evt.target === filterRandom) {
    renderPictures(getRandomPhotos(photosFromServer));
  }
  if (evt.target === filterDiscussed) {
    renderPictures(sortByCommentsNumber(photosFromServer));
  }
};

const onFilterClick = debounce(rerenderPhotos);

const highlightFilterButton = (evt) => {
  chosenFilter.classList.remove('img-filters__button--active');
  chosenFilter = evt.target;
  chosenFilter.classList.add('img-filters__button--active');
};

const initFiltering = (photos) => {
  photosFromServer = photos;
  imgFilters.classList.remove('img-filters--inactive');
  imgFiltersForm.addEventListener('click', onFilterClick);
  imgFiltersForm.addEventListener('click', highlightFilterButton);
};

export { initFiltering };
