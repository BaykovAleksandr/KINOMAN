import { getRandomValue, humanizeCommentDueDate } from '../utils';

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const generateComment = () => (
  {
    'id': '42',
    'author': 'Ilya O\'Reilly',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': humanizeCommentDueDate('2019-05-11T16:12:32.554Z'),
    'emotion': getRandomValue(emotions)
  }
);

const getCommentCount = (films) => films.reduce(
  (count, film) => count + film.comments.length, 0
);

const generateComments = (films) => {
  const commentCount = getCommentCount(films);

  return Array.from({length: commentCount}, (_value, index) => {
    const commentItem = generateComment();

    return {
      id: String(index + 1),
      ...commentItem,
    };
  });
};
