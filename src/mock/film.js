import { getRandomValue } from '../utils.js';
import { getRandomNumber } from '../utils.js';
import { getRandomFloat } from '../utils.js';

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

  title: getRandomValue(titles),
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
    date: '2019-05-11T00:00:00.000Z',
    releaseCountry: 'Finland'
  },
  runtime: getRandomNumber(70, 181),
  genre: [
    'Comedy'
  ],
  description: descriptions[getRandomNumber(0, descriptions.length)]
});


