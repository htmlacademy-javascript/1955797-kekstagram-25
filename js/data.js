import {getRandomNumber} from './util.js';

/*
{
  id: '',
  url: '',
  description: '',
  likes: '',
  comments: [
    {
    id: '',
    avatar: '',
    message: '',
    name: '',
    },
    {
      id: '',
      avatar: '',
      message: '',
      name: '',
      },
  ];
}
*/

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

const DESCRIPTION_SET = [
  'Просто фото.',
  'Хорошая фотография.',
  'Очень красивая фотография!',
  'Великолепная фотография!',
];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getComments = (photoNumber) => {
  const commentsSet = [];
  for (let i = 1; i <= 3; i++) {
    const comment = {
      id: photoNumber + i/10,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES_SET),
      name: getRandomArrayElement(NAMES),
    };
    commentsSet.push(comment);
  }
  return commentsSet;
};

const createDescription = (photoNumber) => ({
  id: photoNumber,
  url: `photos/${photoNumber}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_SET),
  likes: getRandomNumber(15, 200),
  comments: getComments(photoNumber),
});

const photoDescriptions = [];
for (let i =1; i <= 25; i++) {
  photoDescriptions.push(createDescription(i));
}
