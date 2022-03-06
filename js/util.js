const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isCommentLengthCorrect = (commentString, maxLength) => commentString.length <= maxLength;

export {getRandomNumber, isCommentLengthCorrect};
