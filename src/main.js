
import FilmsPresenter from './presenters/film-presenter.js';
import {render, RenderPosition} from './render.js';
import FooterStatisticView from './views/footer-statistic-view.js';
import UsersRankView from './views/header-profile-view.js';
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElememt = document.querySelector('.footer');


const filmsPresenter = new FilmsPresenter();
filmsPresenter.init(siteMainElement);

render(new UsersRankView(), siteHeaderElement);



render(new FooterStatisticView(), siteFooterElememt);


