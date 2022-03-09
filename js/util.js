const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const checkLength = (string, maxLength) => string.length <= maxLength;

export {getRandomNumber, checkLength};
