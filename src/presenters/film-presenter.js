import {render} from '../render.js';
import FiltersView from '../views/filters-view.js';

export default class BoardPresenter {
  boardComponent = new FiltersView();
  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    //render(this.boardComponent, this.boardContainer);
    render(new FiltersView(), this.boardComponent.getElement());
  };
}
