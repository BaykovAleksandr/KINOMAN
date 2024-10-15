import {render} from '../render.js';
import FiltersView from '../views/filters-view.js';
import UsersRankView from '../views/users-rang-view.js';

export default class BoardPresenter {
  boardComponent = new FiltersView();
  headerComponent = new UsersRankView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;


    render(this.headerComponent, this.boardContainer);
    render(new UsersRankView(), this.headerComponent.getElement());
    render(this.boardComponent, this.boardContainer);
    render(new FiltersView(), this.boardComponent.getElement());
  };
}
