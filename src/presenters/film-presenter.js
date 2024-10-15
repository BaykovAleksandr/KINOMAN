import {render} from '../render.js';
import FiltersView from '../views/filters-view.js';
import FooterStatisticView from '../views/footer-statistic-view.js';
import UsersRankView from '../views/header-profile-view.js';

export default class BoardPresenter {
  boardComponent = new FiltersView();
  headerComponent = new UsersRankView();
  footerComponent = new FooterStatisticView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;


    render(this.headerComponent, this.boardContainer);
    render(new UsersRankView(), this.headerComponent.getElement());
    render(this.boardComponent, this.boardContainer);
    render(new FiltersView(), this.boardComponent.getElement());
    render(this.footerComponent, this.boardContainer);
    render(new FooterStatisticView(), this.boardComponent.getElement());
  };
}
