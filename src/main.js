
import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
import FooterStatisticView from './view/footer-statistics-view.js';
import FilmsPresenter from './presenters/film-presenter.js';
import {render} from './render.js';

const bodyElement = document.querySelector('body');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
const siteFooterElement = bodyElement.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
render(new FooterStatisticView(), siteFooterStatisticsElement);

filmsPresenter.init(siteMainElement);

import {generateFilms} from './mock/film';
const films = generateFilms();
// eslint-disable-next-line no-console
console.log(films);
