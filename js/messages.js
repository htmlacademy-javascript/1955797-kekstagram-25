import { isEscapeKey } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

let keydownListener;
let clickListener;

let errorWhileDownloading;

const removeListeners = () => {
  document.removeEventListener('keydown', keydownListener);
  document.removeEventListener('click', clickListener);
};

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  const errorTitle = errorMessage.querySelector('.error__title');
  const errorButton = errorMessage.querySelector('.error__button');

  if (errorWhileDownloading) {
    errorTitle.textContent = 'Ошибка при загрузке данных с сервера';
    errorButton.textContent = 'Ок';
  }

  const closeErrorMessage = () => {
    document.body.removeChild(errorMessage);
    removeListeners();
  };

  const onImageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorMessage();
    }
  };

  keydownListener = onImageEscKeydown;

  const onClick = (evt) => {
    if (evt.target === errorButton || !evt.target.closest('.error__inner')) {
      closeErrorMessage();
    }
  };

  clickListener = onClick;

  document.addEventListener('keydown', keydownListener);
  document.addEventListener('click', clickListener);

  document.body.appendChild(errorMessage);
};

const showDownloadErrorMessage = () => {
  errorWhileDownloading = true;
  showErrorMessage();
};

const showUploadErrorMessage = () => {
  errorWhileDownloading = false;
  showErrorMessage();
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  const closeSuccessMessage = () => {
    document.body.removeChild(successMessage);
    removeListeners();
  };

  const onImageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessMessage();
    }
  };

  keydownListener = onImageEscKeydown;

  const onClick = (evt) => {
    if (evt.target === successButton || !evt.target.closest('.success__inner')) {
      closeSuccessMessage();
    }
  };

  clickListener = onClick;

  document.addEventListener('keydown', keydownListener);
  document.addEventListener('click', clickListener);

  document.body.appendChild(successMessage);
};

export { showDownloadErrorMessage, showUploadErrorMessage, showSuccessMessage };
