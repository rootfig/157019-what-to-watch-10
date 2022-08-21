import { Film } from '../../types/film';
import { getRunTimeFromMins } from '../../utils/utils';

type FilmDetailsProps = {
  currentFilm: Film;
}

const FilmDetails = ({currentFilm}: FilmDetailsProps):JSX.Element => (

  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{currentFilm.director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {
            currentFilm.starring.map((item) => <span key={item} className="starring-row">{item},<br /></span>)
          }
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{ getRunTimeFromMins(currentFilm.runTime) }</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{ currentFilm.genre }</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{ currentFilm.released }</span>
      </p>
    </div>
  </div>
);

export default FilmDetails;
