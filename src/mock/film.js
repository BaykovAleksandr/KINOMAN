import { getRandomValue } from '../utils.js';
import { getRandomNumber } from '../utils.js';
import { getRandomFloat } from '../utils.js';
import { humanizeTaskDueDate } from '../utils.js';

const titles = [
  'Country On Him',
  'Raiders With The Carpet',
  'Guest Who Sold The Darkness',
  'Made for Each Other',
  'Popuye Meet Syndbad',
  'Sugebbrash Trail',
  'The Man With The Golden Arm'
];

const genres = ['kriminal', 'erotic', 'musicl', 'western', 'fantasy', 'action', 'comedy', 'advanture'];

const descriptions = ['Oscar-winning film', 'A war drama about two young people', 'From the creators of timeless classic', 'Nu, Pogodi!', 'And', 'Alice in Wonderland', 'With the best fight scenes since Bruce Lee.'];


const generateFilm = () => ({

  title: titles[getRandomValue(0, titles.length)],
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: getRandomFloat(0, 10),
  poster: 'images/posters/blue-blazes.jpg',
  ageRating: getRandomNumber(0, 19),
  director: 'Tom Ford',
  writers: [
    'Takeshi Kitano'
  ],
  actors: [
    'Morgan Freeman'
  ],
  release: {
    date: humanizeTaskDueDate('2019-05-11T00:00:00.000Z'),
    releaseCountry: 'Finland'
  },
  runtime: getRandomNumber(60, 181),
  genre: [
    'Comedy'
  ],
  description: descriptions[getRandomNumber(0, descriptions.length)]
});

export const generateFilms = () => {
  const films = Array.from({length: titles.length}, generateFilm);

  let totalCommentsCount = 0;

  return films.map((film, index) => {
    const hasComments = getRandomNumber(0, 1);
    const filmCommentsCount = (hasComments)
      ? getRandomNumber(1, 30)
      : 0;

    totalCommentsCount += filmCommentsCount;

    return {
      id: String(index + 1),
      comments: (hasComments)
        ? Array.from(
          {length: filmCommentsCount},
          (_value, commentIndex) => String(totalCommentsCount - commentIndex)
        )
        : [],
      filmInfo: film,
    };
  });
};
