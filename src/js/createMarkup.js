import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';
import modalMarkup from '../templates/movieDetail.hbs';
import getRefs from './getRef';
import { openData,renderWathedFilm,renderQueueFilm } from './header/watchedQueue';

const refs = getRefs();
function moviesMarkup(data) {
  const markup = oneMovieTemplate(data);
  refs.moviesContainer.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.moviesContainer.innerHTML = '';
}

function lightBoxMarkup(data) {
  
  const markup = modalMarkup(data);

  refs.lightBoxContentRef.insertAdjacentHTML('beforeend', markup);
  openData(data);
}

export default { moviesMarkup, clearMarkup, lightBoxMarkup };
