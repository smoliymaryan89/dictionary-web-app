import refs from './refs';

const createVerbMarkup = data => {
  const definitions = data[0]?.meanings[1]?.definitions;
  const screenWidth = window.innerWidth;

  if (!definitions) {
    refs.verbSection.style.paddingBottom = '0';
    return '';
  }

  if (screenWidth > 767.98) {
    refs.verbSection.style.paddingBottom = '40px';
  } else {
    refs.verbSection.style.paddingBottom = '32px';
  }

  return `<h2 class="verb-title title">${data[0].meanings[1].partOfSpeech}</h2>
    <p class="subtitle">Meaning</p>
    <ul class="verb-list">
      ${definitions
        ?.map(definition => {
          const example = definition.example
            ? `<span class="verb-example">"${definition.example}"</span>`
            : '';
          return `<li class="verb-item">${definition.definition}${example}</li>`;
        })
        .join('')}
    </ul>`;
};

export default createVerbMarkup;
