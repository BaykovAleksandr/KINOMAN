import {render} from '../render.js';
import FiltersView from '../views/filters-view.js';
import FilmsView from '../views/films-view.js';
import FilmListView from '../views/film-list-view.js';
import FilmListContainerView from '../views/film-list-container-view.js';
import FilmMoreButtonView from '../views/film-more-button-view.js';
import FilmCardView from '../views/film-card-view.js';
import FilmDetailsView from '../views/film-details-view.js';

export default class FilmsPresenter {
  filterComponent = new FiltersView();
  filmsComponent = new FilmsView();
  filmListComponent = new FilmListView();
  filmListContainerComponent = new FilmListContainerView();
  filmButtonMoreComponent = new FilmMoreButtonView();

  init = (container) => {
    this.container = container;

    render(this.filterComponent, this.container);
    render(this.filmsComponent, this.container);
    render(this.filmListComponent, this.filmsComponent.getElement());
    render (this.filmListContainerComponent, this.filmListComponent.getElement());
    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmListContainerComponent.getElement());
    }

    render(this.filmButtonMoreComponent, this.filmListComponent.getElement());

    //render(new FilmDetailsView(), this.container.parentElement);

  };
}
