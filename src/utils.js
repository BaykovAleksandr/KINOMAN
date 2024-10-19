import dayjs from 'dayjs';

export const getRandomNumber = (minimum, maximum)  =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

export const getRandomValue = (items) => items[Math.floor(Math.random() * items.length)];

export const getRandomFloat = (min, max) =>
  Math.random() * (max - min) + min;

export const humanizeFilmDueDate = (dueDate) => dayjs(dueDate).format('D MMMM YYYY');
export const humanizeCommentDueDate = (dueDate) => dayjs(dueDate).format('YYYY/MM/D HH:MM');

export const formatStringToDateWithTime = (date) =>
  new Date(date).toLocaleString('en-GB');

export const formatStringToDate = (date) =>
  new Date(date).toLocaleString('en-GB', {day: '2-digit', month: 'long', year: 'numeric'});

export const formatStringToYear = (date) =>
  new Date(date).getFullYear();

export const formatMinutesToTime = (minutes) => {
  const MINUTES_PER_HOUR = 60;

  return (minutes < MINUTES_PER_HOUR)
    ? `${minutes}m`
    : `${Math.floor(minutes / MINUTES_PER_HOUR)}h ${minutes % MINUTES_PER_HOUR}m`;
};
