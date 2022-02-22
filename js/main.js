function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

getRandomNumber (55, 70);

function commentLengthCheck (commentString, maxLength) {
  return commentString.length <= maxLength;
}

commentLengthCheck ('Some comment', 15);


