import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const closeFullSizeImage = (listener) => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', listener);
};

const onImageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullSizeImage(onImageEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closeFullSizeImage(onImageEscKeydown);
};

const openFullSizeImage = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onImageEscKeydown);
};

const createFullSizeImage = (photo) => {
  const { url, description, likes, comments } = photo;
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const socialComment = commentTemplate.cloneNode(true);
    const commentAvatar = socialComment.querySelector('.social__picture');
    const commentMessage = socialComment.querySelector('.social__text');

    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentMessage.textContent = comment.message;
    fragment.appendChild(socialComment);
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);

  openFullSizeImage();
};

export { createFullSizeImage };
