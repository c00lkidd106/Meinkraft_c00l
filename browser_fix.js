// Browser-Kontextmenü komplett deaktivieren
document.addEventListener("contextmenu", event => {
    event.preventDefault();
});

// Touch-Langdruck-Menü deaktivieren (wichtig für Handy)
document.addEventListener("touchstart", event => {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// iOS/Android "Herunterladen / Teilen / Drucken" Menü blockieren
document.addEventListener("mousedown", event => {
    if (event.button === 2) { // Rechtsklick
        event.preventDefault();
    }
});

// Safari/Chrome Mobile: Textauswahl & Callout verhindern
document.addEventListener("selectstart", event => {
    event.preventDefault();
});
