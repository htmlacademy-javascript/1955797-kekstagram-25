import { checkLength } from './util.js';
import { renderPictures } from './thumbnail.js';
import { createPhotos } from './data.js';

checkLength('Some comment', 15);

const photos = createPhotos(25);
renderPictures(photos);
