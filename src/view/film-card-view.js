import {createElement} from '../render.js';
import {createFilmCardInfoTemplate} from './film-card-info-template.js';
import {createFilmCardControlsTemplate} from './film-card-controls-template.js';

const createFilmCardTemplate = () =>
  `
    <article class="film-card">

      ${createFilmCardInfoTemplate()}

      ${createFilmCardControlsTemplate()}

    </article>
  `;

export default class FilmCardView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate(this.film));
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
