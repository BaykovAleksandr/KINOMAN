import {createElement} from '../render.js';
const createFilmDetailsInfoTemplate = () => `
`;

export default class FilmDetailsInfoView {

  getTemplate() {
    return createFilmDetailsInfoTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
