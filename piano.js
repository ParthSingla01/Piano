let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const note = key.dataset.note;
    let audio = new Audio(`24-piano-keys/${note}.mp3`);
    audio.play();
  });
});

let theme = document.querySelector(".theme-btn");
let title = document.querySelector(".title");
let box = document.querySelector(".box");
let body = document.body;
let isDark = false;
theme.onclick = function () {
  if (!isDark) {
    body.style.backgroundColor = "black";
    title.style.color = "white";
    box.style.backgroundColor = "white"
    isDark = true;
  } else {
    body.style.backgroundColor = "gray";
    title.style.color = "black";
    box.style.backgroundColor = "black"
    isDark = false;
  }
};

// function playNote(frequency) {
//   const audioContext = new (window.AudioContext || window.AudioContext)();
  
//   // Create oscillator (sound source)
//   const oscillator = audioContext.createOscillator();
//   oscillator.type = 'sine'; // 'square', 'triangle', 'sawtooth'
//   oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // in Hz

//   // Create gain node (volume control)
//   const gainNode = audioContext.createGain();
//   gainNode.gain.setValueAtTime(0.2, audioContext.currentTime); // volume (0 to 1)

//   // Connect oscillator -> gain -> speakers
//   oscillator.connect(gainNode);
//   gainNode.connect(audioContext.destination);

//   // Start and stop oscillator
//   oscillator.start();
//   oscillator.stop(audioContext.currentTime + 0.5); // play for 0.5 seconds
// }


// document.querySelectorAll('.key').forEach((key, i) => {
//   key.addEventListener('click', () => {
//     // Example frequencies for C4, D4, E4, F4, G4, A4, B4
//     const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
//     playNote(notes[i % notes.length]);
//   });
// });
