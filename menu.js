// ===============================
//   MENÜ NAVIGATION
// ===============================

function showMenu(id) {
    document.querySelectorAll(".menu").forEach(m => m.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

// Hauptmenü → Einzelspieler
document.getElementById("btn-singleplayer").onclick = () => {
    showMenu("singleplayer-menu");
};

// Einzelspieler → Welt erstellen
document.getElementById("btn-create-world").onclick = () => {
    showMenu("create-world-menu");
};

// Welt starten
document.getElementById("btn-start-world").onclick = () => {
    const name = document.getElementById("world-name").value || "Neue Welt";
    localStorage.setItem("worldName", name);
    alert("Welt wird geladen: " + name);
};

// Einstellungen öffnen
document.getElementById("btn-settings").onclick = () => {
    showMenu("settings-menu");
};

// Schwierigkeit öffnen
document.getElementById("btn-difficulty").onclick = () => {
    showMenu("difficulty-menu");
};

// Schwierigkeit speichern
document.querySelectorAll(".diff-btn").forEach(btn => {
    btn.onclick = () => {
        const diff = btn.dataset.diff;
        localStorage.setItem("difficulty", diff);
    };
});

// Zurück-Buttons
document.querySelectorAll(".back-btn").forEach(btn => {
    btn.onclick = () => {
        const target = btn.dataset.back;
        showMenu(target);
    };
});
