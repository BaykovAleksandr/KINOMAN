import dayjs from 'dayjs';

const formatStringToDateWithTime = (date) =>
  new Date(date).toLocaleString('en-GB');

const formatStringToDate = (date) =>
  dayjs(date).format('DD MMMM YYYY');

const formatStringToYear = (date) =>
  dayjs(date).format('YYYY');

const formatMinutesToTime = (minutes) => {
  dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');
};

const sortFilmsByDate = (filmA, filmB) =>
  new Date(filmB.filmInfo.release.date) - new Date(filmA.filmInfo.release.date);

const sortFilmsByRating = (filmA, filmB) =>
  filmB.filmInfo.totalRating - filmA.filmInfo.totalRating;

export {
  formatStringToDateWithTime,
  formatStringToDate,
  formatStringToYear,
  formatMinutesToTime,
  sortFilmsByDate,
  sortFilmsByRating
};
