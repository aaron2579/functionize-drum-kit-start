// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener('keydown', processKeyDown);

// Event Function
function processKeyDown(e) {
  console.log(e.code);

  if (e.code === 'KeyA') {
    playSound("clap", "A")
  } else if (e.code === 'KeyS') {
    playSound("hihat", "S")
  } else if (e.code === 'KeyD') {
    // Play D-kick
    playSound("kick", "D")
  } else if (e.code === 'KeyF') {
    playSound("openhat", "F")
  } else if (e.code === 'KeyG') {
    playSound("boom", "G")
  } else if (e.code === 'KeyH') {
    playSound("ride", "H")
  } else if (e.code === 'KeyJ') {
    playSound("snare", "J")
  } else if (e.code === 'KeyK') {
    playSound("tom", "K")
  } else if (e.code === 'KeyL') {
    playSound("tink", "L")
  }
}

function playSound(soundName, keyLetter) {
  let audio = document.getElementById(soundName);
  audio.currentTime = 0;
  audio.play();
  document.getElementById(keyLetter).classList.add('playing');
}

// Dont do anything below this
// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End Function
function removePlaying(event) {
  event.target.classList.remove('playing');
}
