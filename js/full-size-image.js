import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

let commentsToRenderCount = 5;
let commentsArray;

const renderComments = () => {
  if (commentsArray.length <= commentsToRenderCount) {
    commentsToRenderCount = commentsArray.length;
    commentsLoader.classList.add('hidden');
  }

  socialCommentCount.textContent = `${commentsToRenderCount} из ${commentsArray.length} комментариев`;

  const commentsToShow = commentsArray.slice(0, commentsToRenderCount);

  const fragment = document.createDocumentFragment();

  commentsToShow.forEach((comment) => {
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

  commentsToRenderCount += 5;
};

const closeFullSizeImage = (listener) => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', listener);
  commentsLoader.removeEventListener('click', renderComments);

  commentsToRenderCount = 5;
  commentsLoader.classList.remove('hidden');
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

  document.addEventListener('keydown', onImageEscKeydown);
  commentsLoader.addEventListener('click', renderComments);
};

const createFullSizeImage = (photo) => {
  const { url, description, likes, comments } = photo;
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;

  commentsArray = comments;

  renderComments();
  openFullSizeImage();
};

closeButton.addEventListener('click', onCloseButtonClick);

export { createFullSizeImage, onCloseButtonClick };
