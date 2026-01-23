// ===============================================
//   ZUGANGSCODE-SYSTEM MIT SCHWARZEM HINTERGRUND
// ===============================================

// Deinen geheimen Code hier eintragen
const SECRET_CODE = atob("U1YtQUxQSEEtMjAyNQ=="); // SV-ALPHA-2025

// Prüfen, ob der Code schon eingegeben wurde
if (localStorage.getItem("access_granted") === "true") {
    document.getElementById("code-screen").style.display = "none";
    document.getElementById("code-screen-bg").style.display = "none";
} else {
    // Alle anderen Menüs verstecken
    document.querySelectorAll(".menu").forEach(m => {
        if (m.id !== "code-screen") m.classList.add("hidden");
    });
}

// Button-Event
document.getElementById("btn-check-code").addEventListener("click", () => {
    const input = document.getElementById("access-code").value.trim();

    if (input === SECRET_CODE) {
        // Zugang erlauben
        localStorage.setItem("access_granted", "true");

        // Code-Screen ausblenden
        document.getElementById("code-screen").style.display = "none";
        document.getElementById("code-screen-bg").style.display = "none";

        // Hauptmenü anzeigen
        document.getElementById("main-menu").classList.remove("hidden");
    } else {
        // Fehlermeldung anzeigen
        document.getElementById("code-error").style.display = "block";
    }
});
