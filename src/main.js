
import BoardPresenter from './presenters/film-presenter.js';
import {render} from './render.js';
import FiltersView from './views/filters-view.js';
import UsersRankView from './views/users-rang-view.js';
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(new FiltersView(), siteMainElement);
render(new UsersRankView(), siteHeaderElement);


//const boardPresenter = new BoardPresenter();
//boardPresenter.init(siteMainElement);
//boardPresenter.init(siteHeaderElement);
