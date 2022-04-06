const form = document.querySelector('.img-upload__form');
const textHashtags = form.querySelector('.text__hashtags');

const HASHTAGS_MAX = 5;

const pristine = new window.Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'hashtag__error',
});

const createHashtagArray = (hashtagText) => hashtagText.toLowerCase().split(' ').filter((el) => el);

const validateHashtag = (hashtagText) => {
  const hashtags = createHashtagArray(hashtagText);
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const isValid = (hashtag) => re.test(hashtag);
  return hashtags.every(isValid);
};

const checkUniquenessOfHashtag = (hashtagText) => {
  const hashtags = createHashtagArray(hashtagText);
  return new Set(hashtags).size === hashtags.length;
};

const checkNumberOfHashtags = (hashtagText) => {
  const hashtags = createHashtagArray(hashtagText);
  return hashtags.length <= HASHTAGS_MAX;
};

pristine.addValidator(textHashtags, validateHashtag, 'Хэштег должен начинаться с "#" и содержать буквы и числа (не более 20 символов).', 3, true);
pristine.addValidator(textHashtags, checkUniquenessOfHashtag, 'Хэштеги не должны повторяться.', 2, true);
pristine.addValidator(textHashtags, checkNumberOfHashtags, 'Не более 5 хэштегов.', 1, true);

const subscribeToFormValidation = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export { subscribeToFormValidation };
