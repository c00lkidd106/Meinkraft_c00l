// Canvas & Grundzustand
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const menu = document.getElementById("menu");
const singleplayer = document.getElementById("singleplayer");
const settings = document.getElementById("settings");

const pauseMenu = document.getElementById("pauseMenu");
const pauseOptions = document.getElementById("pauseOptions");
const difficultyMenu = document.getElementById("difficultyMenu");

let gamePaused = false;
let difficulty = "normal";
let worldSeed = null;

// Fenstergröße
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);

// Hauptmenü-Logik
function openSingleplayer() {
  menu.classList.add("hidden");
  singleplayer.classList.remove("hidden");
}

function openSettings() {
  menu.classList.add("hidden");
  settings.classList.remove("hidden");
}

function backToMenu() {
  singleplayer.classList.add("hidden");
  settings.classList.add("hidden");
  menu.classList.remove("hidden");
}

// Spielstart
function startGame() {
  const name = document.getElementById("worldName").value || "Meine Welt";
  let seed = document.getElementById("seedInput").value;

  if (seed.trim() === "") {
    seed = Math.floor(Math.random() * 999999999);
  }
  worldSeed = seed;

  console.log("Starte Welt:", name, "Seed:", seed);

  singleplayer.classList.add("hidden");
  canvas.classList.remove("hidden");

  resizeCanvas();
  startWorld(seed);

  // Musik-System aus music.js
  if (typeof startMusicSystem === "function") {
    startMusicSystem();
  }
}

// Dummy-Welt (Platzhalter)
function startWorld(seed) {
  ctx.fillStyle = "#4fa";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.font = "30px sans-serif";
  ctx.fillText("Welt geladen! Seed: " + seed, 50, 50);
}

// Pause-Menü / ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!gamePaused && !menu.classList.contains("hidden")) return;
    if (!gamePaused) openPauseMenu();
    else resumeGame();
  }
});

function openPauseMenu() {
  gamePaused = true;
  pauseMenu.classList.remove("hidden");
}

function resumeGame() {
  gamePaused = false;
  pauseMenu.classList.add("hidden");
  pauseOptions.classList.add("hidden");
  difficultyMenu.classList.add("hidden");
}

function saveAndQuit() {
  // später: Welt speichern
  window.location.reload();
}

function openPauseOptions() {
  pauseMenu.classList.add("hidden");
  pauseOptions.classList.remove("hidden");
}

function openDifficulty() {
  pauseMenu.classList.add("hidden");
  difficultyMenu.classList.remove("hidden");
}

function backToPause() {
  pauseOptions.classList.add("hidden");
  difficultyMenu.classList.add("hidden");
  pauseMenu.classList.remove("hidden");
}

// Schwierigkeit
function setDifficulty(mode) {
  difficulty = mode;
  console.log("Schwierigkeit gesetzt auf:", mode);
  backToPause();
}
