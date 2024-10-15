import {createElement} from '../render.js';
const createFilmDetailsCommentsTemplate = () => `
`;

export default class FilmDetailsCommentsView {

  getTemplate() {
    return createFilmDetailsCommentsTemplate();
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
