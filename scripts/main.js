var isPlayed = false;

function Play(){
  if (isPlayed) {
    isPlayed = false;
    audio.pause();
  }
  else {
    isPlayed = true;
    audio.play();
  }
}

