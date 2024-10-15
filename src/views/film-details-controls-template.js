import {createElement} from '../render.js';
const createFilmDetailsControlsTemplate = () => `
`;

export default class FilmDetailsControlsView {

  getTemplate() {
    return createFilmDetailsControlsTemplate();
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