import dayjs from 'dayjs';

export const getRandomNumber = (minimum, maximum)  =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

export const getRandomValue = (items) => items[Math.floor(Math.random() * items.length)];

export const getRandomFloat = (min, max) =>
  Math.random() * (max - min) + min;

export const humanizeTaskDueDate = (dueDate) => dayjs(dueDate).format('D MMMM YYYY');
