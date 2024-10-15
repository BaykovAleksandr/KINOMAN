import {createElement} from '../render.js';
const createFilmListContainerViewTemplate = () => `
`;

export default class FilmListContainerView {

  getTemplate() {
    return createFilmListContainerViewTemplate();
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
