import { useAppSelector } from '../../hooks';
import { selectFilm } from '../../store/film-slice/selectors';
import FilmCardDescription from '../film-card-description/film-card-description';
import Header from '../header/header';
import TabMenu from '../tab-menu/tab-menu';

const FilmCardFull = (): JSX.Element => {

  const film = useAppSelector(selectFilm);
  const {id, name, genre, released, posterImage, backgroundImage, isFavorite} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={ backgroundImage } alt={ name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <FilmCardDescription id={id} name={name} genre={genre} released={released} isFavorite={isFavorite} />
        </div>

      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={ posterImage } alt={ `${ name } poster` } width="218" height="327" />
          </div>

          <div className="film-card__desc">

            <TabMenu currentFilm={film}/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmCardFull;
