
//import BoardPresenter from './presenters/film-presenter.js';
import {render} from './render.js';
import FiltersView from './views/filters-view.js';
import FooterStatisticView from './views/footer-statistic-view.js';
import UsersRankView from './views/header-profile-view.js';
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElememt = document.querySelector('.footer');

render(new FiltersView(), siteMainElement);
render(new UsersRankView(), siteHeaderElement);
render(new FooterStatisticView(), siteFooterElememt);
//const boardPresenter = new BoardPresenter();
//boardPresenter.init(siteMainElement);
//boardPresenter.init(siteHeaderElement);
