const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItem = (items) => items[getRandomNumber(0, items.length - 1)];
const isEscapeKey =  (evt) => evt.key === 'Escape';

export { getRandomNumber, getRandomItem, isEscapeKey };
