import { checkLength } from './util.js';
import { showGallery } from './gallery.js';
import { initUpload } from './file-upload.js';

checkLength('Some comment', 15);

showGallery();
initUpload();
