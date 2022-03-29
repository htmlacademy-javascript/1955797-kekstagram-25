const form = document.querySelector('.img-upload__form');
const textHashtags = form.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'hashtag__error',
});

const validateHashtags = (hashtagText) => {
  const hashtags = hashtagText.toLowerCase().split(' ').filter((el) => el);
  if (hashtags.length > 5) {
    return false;
  }
  if (new Set(hashtags).size !== hashtags.length) {
    return false;
  }
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  let isHashtagValid = true;
  hashtags.forEach((hashtag) => {
    const hashtagCheck = re.test(hashtag);
    if (!hashtagCheck) {
      isHashtagValid = false;
    }
  });

  return isHashtagValid;
};

pristine.addValidator(textHashtags, validateHashtags, 'Хэштег должен начинаться с "#" и содержать буквы и числа. Длина хэштега не более 20 символов. Хэштеги не должны повторяться. Не более 5 хэштегов.');

const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export { validateForm };
