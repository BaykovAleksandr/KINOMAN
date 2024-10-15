import {createElement} from '../render.js';
const createFilmMoreButtonViewViewTemplate = () => `
`;

export default class FilmMoreButtonView {

  getTemplate() {
    return createFilmMoreButtonViewViewTemplate();
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
