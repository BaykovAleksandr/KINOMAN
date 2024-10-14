
import BoardPresenter from './presenters/film-presenter.js';
import {render} from './render.js';
import FiltersView from './views/filters-view.js';
const siteMainElement = document.querySelector('.main');
//const siteHeaderElement = siteMainElement.querySelector('.header');
render(new FiltersView(), siteMainElement);

const boardPresenter = new BoardPresenter();
boardPresenter.init(siteMainElement);
