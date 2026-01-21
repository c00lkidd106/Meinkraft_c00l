const menu = document.getElementById("menu");
const singleplayer = document.getElementById("singleplayer");
const settings = document.getElementById("settings");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

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

function startGame() {
  const name = document.getElementById("worldName").value || "Meine Welt";
  let seed = document.getElementById("seedInput").value;

  if (seed.trim() === "") {
    seed = Math.floor(Math.random() * 999999999);
  }

  console.log("Starte Welt:", name, "Seed:", seed);

  singleplayer.classList.add("hidden");
  canvas.classList.remove("hidden");

  startWorld(seed);
}

function startWorld(seed) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "#4fa";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.font = "30px sans-serif";
  ctx.fillText("Welt geladen! Seed: " + seed, 50, 50);
}
function startGame() {
  // ... dein Code ...

  startWorld(seed);

  // Musik starten
  startMusicSystem();
}

