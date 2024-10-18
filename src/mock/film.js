
const getRandomValue = (items) => items[Math.floor(Math.random() * items.length)];
const titles = [
  'Country On Him',
  'Raiders With The Carpet',
  'Guest Who Sold The Darkness',
  'Made for Each Other',
  'Popuye Meet Syndbad',
  'Sugebbrash Trail',
  'The Man With The Golden Arm'
];

const generateFilm = () => ({

  title: getRandomValue(titles),
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: 5.3,
  poster: 'images/posters/blue-blazes.jpg',
  ageRating: 0,
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
  runtime: 77,
  genre: [
    'Comedy'
  ],
  description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic \\Nu, Pogodi!\\ and \\Alice in Wonderland\\, with the best fight scenes since Bruce Lee.'
});


