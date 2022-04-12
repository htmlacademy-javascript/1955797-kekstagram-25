import { renderPictures } from './thumbnail.js';
import { getData } from './api.js';

const showGallery = () => {
  getData(renderPictures);
};

export { showGallery };
