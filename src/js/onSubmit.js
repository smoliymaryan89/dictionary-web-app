import { Notify } from 'notiflix';
import refs from './refs';
import fetchWordByQuery from './api/dictionaryAPI';
import initializeAudioPlaybackButton from './audioPlayer';
import createOutputMarkup from './outputMarkup';
import createNounMarkup from './nounMarkup';
import createVerbMarkup from './verbMarkup';
import clearMarkup from './clearMarkup';
import createFooterMarkup from './footerMarkup';
import renderSynonymDefinition from './renderSynonyn';
import createNoDataMarkup from './noData';

refs.form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchQuery = event.target.searchQuery.value.trim();
  if (!searchQuery) {
    event.target.searchQuery.classList.add('error');
    return Notify.failure("Whoops, can't be empty…");
  } else {
    event.target.searchQuery.classList.remove('error');
  }
  clearMarkup();

  refs.loader.classList.add('loader-active');

  try {
    const res = await fetchWordByQuery(searchQuery);

    refs.searchOutput.insertAdjacentHTML('beforeend', createOutputMarkup(res));

    initializeAudioPlaybackButton();

    refs.noun.insertAdjacentHTML('beforeend', createNounMarkup(res));
    refs.verb.insertAdjacentHTML('beforeend', createVerbMarkup(res));
    refs.footer.insertAdjacentHTML('beforeend', createFooterMarkup(res));
  } catch (error) {
    Notify.failure('Something went wrong. Please try again!');
    refs.noData.insertAdjacentHTML('beforeend', createNoDataMarkup());
  } finally {
    refs.loader.classList.remove('loader-active');
    refs.form.reset();
  }
});
