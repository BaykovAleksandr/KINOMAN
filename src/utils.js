export const getRandomNumber = (minimum, maximum)  =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

export const getRandomValue = (items) => items[Math.floor(Math.random() * items.length)];


