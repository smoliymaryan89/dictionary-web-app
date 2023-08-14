const createNounMarkup = data => {
  const meanings = data[0].meanings[0].definitions
    .map(definition => `<li class="meaning-item">${definition.definition}</li>`)
    .join('');

  const synonyms = data[0].meanings[0].synonyms;

  return `
    <h2 class="noun-title title">${data[0].meanings[0].partOfSpeech}</h2>
    <p class="subtitle">Meaning</p>
    <ul class="meaning-list">
      ${meanings}
    </ul>
    ${
      synonyms.length
        ? `
      <div class="synonyms-wrapper">
        <p class="subtitle">Synonyms</p>
        <ul class="synonyms-list">
          ${synonyms
            .map(
              synonym =>
                `<li class="synonyms-item"><a href="" class="synonyms-link" data-synonym="${synonym}">${synonym}</a></li>`
            )
            .join('')}
        </ul>
      </div>
    `
        : ''
    }
  `;
};

export default createNounMarkup;
