import { Notify } from 'notiflix';
import clearMarkup from './clearMarkup';
import fetchWordByQuery from '../js/api/dictionaryAPI';
import createOutputMarkup from './outputMarkup';
import createNounMarkup from './nounMarkup';
import createVerbMarkup from './verbMarkup';
import createFooterMarkup from './footerMarkup';
import initializeAudioPlaybackButton from './audioPlayer';
import createNoDataMarkup from './noData';
import refs from './refs';

refs.noun.addEventListener('click', async event => {
  if (event.target.classList.contains('synonyms-link')) {
    event.preventDefault();
    const synonym = event.target.dataset.synonym;
    renderSynonymDefinition(synonym);
  }
});

export default async function renderSynonymDefinition(synonym) {
  try {
    clearMarkup();
    const res = await fetchWordByQuery(synonym);
    refs.searchOutput.insertAdjacentHTML('beforeend', createOutputMarkup(res));

    initializeAudioPlaybackButton();

    refs.noun.insertAdjacentHTML('beforeend', createNounMarkup(res));
    refs.verb.insertAdjacentHTML('beforeend', createVerbMarkup(res));
    refs.footer.insertAdjacentHTML('beforeend', createFooterMarkup(res));
  } catch (error) {
    Notify.failure('Something went wrong. Please try again!');
    refs.noData.insertAdjacentHTML('beforeend', createNoDataMarkup());
  }
}
