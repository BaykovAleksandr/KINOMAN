import {createElement} from '../render.js';
const createFilmDetailsFormTemplate = () => `
`;

export default class FilmDetailsFormView {

  getTemplate() {
    return createFilmDetailsFormTemplate();
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
