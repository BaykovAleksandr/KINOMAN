import {createElement} from '../render.js';
const createListViewTemplate = () => `
`;

export default class ListView {

  getTemplate() {
    return createListViewTemplate();
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
