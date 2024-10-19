import { getRandomValue, getRandomNumber,humanizeCommentDueDate } from '../utils';

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const authors = ['Ilya O \'Reilly', 'Max Kurchiy', 'Alex Baykov', 'Alan Delon', 'Harry Potter', 'Ilya Chert', 'Kirill Mokevnin', 'Stive Jobs', 'Donald Tramp'];

const fishComments = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'.split('. ');

const generateComment = () => (
  {
    'id': getRandomNumber(0,100),
    'author': getRandomValue(authors),
    'comment': getRandomValue(fishComments),
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

export { generateComments};
