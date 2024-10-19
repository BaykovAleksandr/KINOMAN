import { generateFilms } from '../mock/film.js';

class FilmsModel {
  films = generateFilms();

  get = () => this.films;
}

export { FilmsModel };


