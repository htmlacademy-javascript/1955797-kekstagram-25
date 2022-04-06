const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;

let scale;

const scalePreview = () => {
  scaleControlValue.value = `${scale}%`;
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
};

const scaleUp = () => {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
  }

  scalePreview();
};

const scaleDown = () => {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
  }

  scalePreview();
};

const initScaling = () => {
  scale = SCALE_MAX;
  scalePreview();
};

scaleControlBigger.addEventListener('click', scaleUp);
scaleControlSmaller.addEventListener('click', scaleDown);

export { initScaling };
