
import BoardPresenter from './presenters/film-presenter.js';
import {render, RenderPosition} from './render.js';
import ListView from './views/film-list-view.js';
import FilmsNavigationView from './views/film-navigation-view.js';
import FiltersView from './views/filters-view.js';
import FooterStatisticView from './views/footer-statistic-view.js';
import UsersRankView from './views/header-profile-view.js';
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElememt = document.querySelector('.footer');
//const siteFilmListElement = document.querySelector('.films');

// render(new FiltersView(), siteMainElement);
// render(new UsersRankView(), siteHeaderElement);
// render(new ListView(), siteMainElement);
// render(new FooterStatisticView(), siteFooterElememt);
// render(new FilmsNavigationView(), siteMainElement, RenderPosition.BEFOREBEGIN);
const boardPresenter = new BoardPresenter();
//boardPresenter.init(siteMainElement);
boardPresenter.init(siteHeaderElement);

