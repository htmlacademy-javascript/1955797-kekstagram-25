import { renderPictures } from './thumbnail.js';
import { getData } from './api.js';
import { initFiltering } from './filter.js';

const initRendering = (photos) => {
  renderPictures(photos);
  initFiltering(photos);
};

const showGallery = () => {
  getData(initRendering);
};

export { showGallery };
