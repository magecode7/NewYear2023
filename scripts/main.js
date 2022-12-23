var isPlayed = false;

window.onload=Play;

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

