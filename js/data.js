import { getRandomNumber, getRandomItem } from './util.js';

const MESSAGES_SET = [
  'Все отлично!',
  'В целом все неплохо. Но не все.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у нее получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Василий',
  'Варвара',
  'Александр',
  'Антон',
  'Вероника',
  'Екатерина',
  'Елизавета',
  'Григорий',
  'Елена',
  'Дмитрий',
  'Татьяна',
  'Николай',
];

const DESCRIPTIONS = [
  'Просто фото.',
  'Хорошая фотография.',
  'Очень красивая фотография!',
  'Великолепная фотография!',
];

const commentQuantity = 3;

const createComments = (photoNumber) => {
  const comments = [];

  for (let i = 1; i <= commentQuantity; i++) {
    const comment = {
      id: photoNumber + i / 10,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: getRandomItem(MESSAGES_SET),
      name: getRandomItem(NAMES),
    };
    comments.push(comment);
  }

  return comments;
};

const createPhoto = (photoNumber) => ({
  id: photoNumber,
  url: `photos/${photoNumber}.jpg`,
  description: getRandomItem(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: createComments(photoNumber),
});

const createPhotos = (count) => {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};

export { createPhotos };
