import { isEscapeKey } from './util.js';
import { subscribeToFormValidation } from './validation.js';

const form = document.querySelector('.img-upload__form');
const fileUpload = form.querySelector('#upload-file');
const imageUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancel = form.querySelector('#upload-cancel');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const openImageUpload = () => {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeImageUpload = (listener) => {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', listener);
  form.reset();
};

const onImageEscKeydown = (evt) => {
  if (isEscapeKey(evt) && evt.target !== textHashtags && evt.target !== textDescription) {
    evt.preventDefault();
    closeImageUpload(onImageEscKeydown);
  }
};

const onUploadCancelClick = () => {
  closeImageUpload(onImageEscKeydown);
};

const onImageUpload = () => {
  openImageUpload();
  document.addEventListener('keydown', onImageEscKeydown);
  uploadCancel.addEventListener('click', onUploadCancelClick);
};

const uploadFile = () => {
  fileUpload.addEventListener('change', onImageUpload);
  subscribeToFormValidation();
};

export { uploadFile };
