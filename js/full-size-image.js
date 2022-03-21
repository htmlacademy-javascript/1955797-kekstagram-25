import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const closeButton = document.querySelector('.big-picture__cancel');

const closeFullSizeImage = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onImageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullSizeImage();
    document.removeEventListener('keydown', onImageEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closeFullSizeImage();
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onImageEscKeydown);
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
