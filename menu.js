// ===============================
//   MENÜ NAVIGATION
// ===============================

function showMenu(id) {
    document.querySelectorAll(".menu").forEach(m => m.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

// ===============================
//   HAUPTMENÜ → EINZELSPIELER
// ===============================

document.getElementById("btn-singleplayer").onclick = () => {
    showMenu("singleplayer-menu");
};

// ===============================
//   EINZELSPIELER → WELT ERSTELLEN
// ===============================

document.getElementById("btn-create-world").onclick = () => {
    showMenu("create-world-menu");
};

// ===============================
//   WELT STARTEN
// ===============================

document.getElementById("btn-start-world").onclick = () => {
    const name = document.getElementById("world-name").value || "Neue Welt";
    localStorage.setItem("worldName", name);

    // Seed abfragen
    let seed = prompt("Seed eingeben (leer = zufällig):");
    if (!seed || seed.trim() === "") {
        seed = Math.random().toString();
    }

    // Welt generieren
    const world = generateWorldType("normal", seed, 200, 150);

    console.log("Welt generiert:", world);

    // Musik starten
    startMusicSystem();

    // Hier kannst du später das Spiel starten (Renderer etc.)
    // startGame(world);
};

// ===============================
//   EINSTELLUNGEN
// ===============================

document.getElementById("btn-settings").onclick = () => {
    showMenu("settings-menu");
};

// ===============================
//   SCHWIERIGKEIT
// ===============================

document.getElementById("btn-difficulty").onclick = () => {
    showMenu("difficulty-menu");
};

document.querySelectorAll(".diff-btn").forEach(btn => {
    btn.onclick = () => {
        const diff = btn.dataset.diff;
        localStorage.setItem("difficulty", diff);
    };
});

// ===============================
//   ZURÜCK-BUTTONS
// ===============================

document.querySelectorAll(".back-btn").forEach(btn => {
    btn.onclick = () => {
        const target = btn.dataset.back;
        showMenu(target);
    };
});
