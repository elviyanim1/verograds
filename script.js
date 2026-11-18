
const home = document.getElementById("home");
const letter = document.getElementById("letter");

const openButton = document.getElementById("openLetter");
const backButton = document.getElementById("backHome");
const confettiContainer = document.getElementById("confetti-container");

// OPEN LETTER
openButton.addEventListener("click", () => {
  createConfetti();

  openButton.disabled = true;

  setTimeout(() => {
    home.classList.remove("active");
    letter.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    openButton.disabled = false;
  }, 500);
});

// BACK TO HOME
backButton.addEventListener("click", () => {
  letter.classList.remove("active");
  home.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
});

// CONFETTI EFFECT
// CONFETTI EFFECT
function createConfetti() {
  const colors = [
    "#d18aa1",
    "#f5e9e9",
    "#a64d6b",
    "#d5b88a",
    "#ffffff",
    "#762b45"
  ];

  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti");

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay = Math.random() * 0.5 + "s";

    piece.style.animationDuration =
      (2.5 + Math.random() * 2) + "s";

    piece.style.setProperty(
      "--drift",
      (Math.random() * 300 - 150) + "px"
    );

    piece.style.borderRadius =
      Math.random() > 0.5 ? "50%" : "2px";

    confettiContainer.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5500);
  }
}

// MUSIC PLAYER
// MUSIC PLAYER
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");

musicButton.addEventListener("click", async () => {
  console.log("PLAY BUTTON CLICKED!");
  console.log("Audio source:", music.currentSrc);
  console.log("Audio format support:", music.canPlayType("audio/flac"));

  if (music.paused) {
    try {
      await music.play();

      console.log("MUSIC PLAYING!");

      musicIcon.textContent = "Ⅱ";
      musicText.textContent = "PAUSE SONG";
      musicButton.classList.add("playing");

    } catch (error) {
      console.error("MUSIC ERROR:", error);
    }

  } else {
    music.pause();

    musicIcon.textContent = "▶";
    musicText.textContent = "PLAY SONG";
    musicButton.classList.remove("playing");
  }
});

music.addEventListener("ended", () => {
  musicIcon.textContent = "▶";
  musicText.textContent = "PLAY SONG";
  musicButton.classList.remove("playing");
});