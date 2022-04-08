// import { createPhotos } from './data.js';
import { renderPictures } from './thumbnail.js';
import { getData } from './api.js';

const showGallery = () => {
  getData(renderPictures);
//  const photos = createPhotos(25);
//  renderPictures(photos);
};

export { showGallery };
