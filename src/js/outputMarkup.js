const createOutputMarkup = data => {
  let audioSource = '';

  if (data[0]?.phonetics[0]?.audio !== '') {
    audioSource = data[0]?.phonetics[0]?.audio;
  } else if (data[0]?.phonetics[1]?.audio !== '') {
    audioSource = data[0].phonetics[1].audio;
  } else if (data[0]?.phonetics[2]?.audio !== '') {
    audioSource = data[0]?.phonetics[2]?.audio;
  }

  const isAudioEmpty = !audioSource;
  const disabledClass = isAudioEmpty ? 'disabled' : '';

  return `<div class="output-desc" id="output-container">
            <h1 class="output-word">${data[0]?.word}</h1>
            <p class="output-transcription">${
              data[0]?.phonetics[0]?.text ?? 'no transcription'
            }</p>
          </div>
        <div class="output-audio">
            <button type="button" class="audio-btn ${disabledClass}" data-playable ${
    isAudioEmpty ? 'disabled' : ''
  }>        
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" class="audio-btn-icon">
                <path fill-rule="evenodd" d="M0 0v21l21-10.5L0 0Z" clip-rule="evenodd"/>
            </svg>
            <audio src="${audioSource}" class="audio-player"></audio>
            </button>
        </div>`;
};

export default createOutputMarkup;
