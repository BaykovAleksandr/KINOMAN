import {createElement} from '../render.js';
const createFilmMoreButtonViewViewTemplate = () => `
<button class="films-list__show-more">Show more</button>
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
