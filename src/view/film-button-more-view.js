import {createElement} from '../render.js';
import {AbstractView} from '../framework/module4-cinemaddict/module4/src/framework/view/abstract-view.js';

const createFilmButtonMoreTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class FilmButtonMoreView extends AbstractView {
  get template() {
    return createFilmButtonMoreTemplate();
  }
}
