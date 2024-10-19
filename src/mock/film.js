import { getRandomValue } from '../utils.js';
import { getRandomNumber } from '../utils.js';
import { getRandomFloat } from '../utils.js';
import { humanizeFilmDueDate } from '../utils.js';

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

const posters = [
  'images/posters/made-for-each-other.png',
  'images/posters/popeye-meets-sinbad.png',
  'images/posters/sagebrush-trail.jpg',
  'images/posters/santa-claus-conquers-the-martians.jpg',
  'images/posters/the-dance-of-life.jpg',
  'images/posters/the-great-flamarion.jpg',
  'images/posters/the-man-with-the-golden-arm.jpg',
];

const generateFilm = () => ({

  title: getRandomValue(titles),
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: Math.round(getRandomFloat(0, 10),1),
  poster: getRandomValue(posters),
  ageRating: getRandomNumber(0, 19),
  director: 'Tom Ford',
  writers: [
    'Takeshi Kitano'
  ],
  actors: [
    'Morgan Freeman'
  ],
  release: {
    date: humanizeFilmDueDate('2019-05-11T00:00:00.000Z'),
    releaseCountry: 'Finland'
  },
  runtime: getRandomNumber(60, 181),
  genre: [
    getRandomValue(genres)]
  ,
  description: getRandomValue(descriptions)
});

const generateFilms = () => {
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

export { generateFilms };
