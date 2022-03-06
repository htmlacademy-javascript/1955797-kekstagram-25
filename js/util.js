function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function commentLengthCheck (commentString, maxLength) {
  return commentString.length <= maxLength;
}

export {getRandomNumber, commentLengthCheck};
