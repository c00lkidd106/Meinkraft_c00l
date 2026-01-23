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
//   WELT STARTEN (3D + Musik + Chunks)
// ===============================

document.getElementById("btn-start-world").onclick = () => {
    const name = document.getElementById("world-name").value || "Neue Welt";
    localStorage.setItem("worldName", name);

    let seed = prompt("Seed eingeben (leer = zufällig):");
    if (!seed || seed.trim() === "") {
        seed = Math.random().toString();
    }

    // Menü ausblenden
    document.querySelectorAll(".menu").forEach(m => m.classList.add("hidden"));

    // 3D Engine starten
    init3D();

    // Musik starten
    startMusicSystem();

    // Welt generieren (4x4 Chunks)
    const radius = 4;
    for (let cx = 0; cx < radius; cx++) {
        for (let cz = 0; cz < radius; cz++) {
            const chunk = generateFullChunk(seed, cx, cz);
            buildChunkMesh(chunk, cx, cz);
        }
    }
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
