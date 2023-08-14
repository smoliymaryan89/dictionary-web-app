const initializeAudioPlaybackButton = () => {
  const audioBtn = document.querySelector('.audio-btn');
  const audioPlayer = document.querySelector('.audio-player');

  audioBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      audioBtn.classList.add('playing');
    } else {
      audioPlayer.pause();
      audioBtn.classList.remove('playing');
    }
  });
};

export default initializeAudioPlaybackButton;
