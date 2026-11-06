const thoughts = [
  "What if fish have no idea what water is?",
  "I wonder if my cat has a secret life.",
  "The internet was more fun when everything had sparkles.",
  "I should probably be doing something productive.",
  "What if dreams are just alternate universes?",
  "I wish I could live inside my favourite anime.",
  "Why do snacks taste better at midnight?",
  "Somewhere, someone is having the best day of their life.",
  "I need more cute things. This is a serious problem.",
  "What if aliens are also struggling with homework?"
];

const thoughtDisplay = document.getElementById("random-thought");
const thoughtButton = document.getElementById("thought-button");

thoughtButton.addEventListener("click", () => {
  const currentThought = thoughtDisplay.textContent;

  let newThought;

  do {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    newThought = thoughts[randomIndex];
  } while (newThought === currentThought);

  thoughtDisplay.textContent = newThought;
});

const playlist = [
  {
    title: "Dreaming in pixels",
    artist: "Aster's playlist",
    file: "assets/music/song-1.mp3"
  },
  {
    title: "Midnight daydream",
    artist: "Aster's playlist",
    file: "assets/music/song-2.mp3"
  },
  {
    title: "Internet nostalgia",
    artist: "Aster's playlist",
    file: "assets/music/song-3.mp3"
  }
];

const audio = document.getElementById("background-music");
const playButton = document.getElementById("music-toggle");
const nextButton = document.getElementById("next-track");
const volumeSlider = document.getElementById("music-volume");

const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const musicPlayer = document.querySelector(".music-player");

let currentTrack = 0;

function loadTrack(index) {
  const track = playlist[index];

  audio.src = track.file;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
}

async function playMusic() {
  try {
    await audio.play();

    playButton.textContent = "❚❚ PAUSE";
    musicPlayer.classList.add("playing");
  } catch (error) {
    playButton.textContent = "▶ TRY AGAIN";
    console.log("Music could not be played:", error);
  }
}

function pauseMusic() {
  audio.pause();

  playButton.textContent = "▶ PLAY";
  musicPlayer.classList.remove("playing");
}

playButton.addEventListener("click", () => {
  if (audio.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

nextButton.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % playlist.length;

  loadTrack(currentTrack);
  playMusic();
});

audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  playMusic();
});

volumeSlider.addEventListener("input", () => {
  audio.volume = Number(volumeSlider.value);
});

audio.volume = 0.4;
loadTrack(currentTrack);