import {render} from '../render.js';
import FiltersView from '../views/filters-view.js';
import FooterStatisticView from '../views/footer-statistic-view.js';
import UsersRankView from '../views/header-profile-view.js';

export default class BoardPresenter {
  mainComponent = new FiltersView();
  headerComponent = new UsersRankView();
  footerComponent = new FooterStatisticView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.headerComponent, this.boardContainer);
    render(new FiltersView(), this.mainComponent);


    // render(new FiltersView(), siteMainElement);
    // render(new UsersRankView(), siteHeaderElement);
    // render(new ListView(), siteMainElement);
    // render(new FooterStatisticView(), siteFooterElememt);
    // render(new FilmsNavigationView(), siteMainElement, RenderPosition.BEFOREBEGIN);
  };
}
