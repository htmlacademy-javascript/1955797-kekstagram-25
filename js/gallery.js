import { createPhotos } from './data.js';
import { renderPictures } from './thumbnail.js';

const showGallery = () => {
  const photos = createPhotos(25);
  renderPictures(photos);
};

export { showGallery };
