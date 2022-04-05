const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

let scale;

const scalePreview = () => {
  scaleControlValue.value = scale;
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
};

const scaleUp = () => {
  if (scale < 100) {
    scale += 25;
  }

  scalePreview();
};

const scaleDown = () => {
  if (scale > 25) {
    scale -= 25;
  }

  scalePreview();
};

const initScaling = () => {
  scale = 100;
  scalePreview();
};

scaleControlBigger.addEventListener('click', scaleUp);
scaleControlSmaller.addEventListener('click', scaleDown);

export { initScaling };
