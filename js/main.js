function getRandomNumber (min, max) {
  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if (min === max) {
    return min;
  }

  return Math.floor(Math.random() * (max-min+1)) + min;
}

getRandomNumber (55, 70);

function commentLengthCheck (commentString, maxLength) {
  const commentLength = String(commentString).length;
  if (commentLength > maxLength) {
    return false;
  }

  return true;
}

commentLengthCheck ('Some comment', 15);


