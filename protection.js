// ===============================================
//  ANTI-STÖR-SYSTEM FÜR BROWSER-SPIELE
//  Blockiert ALLE Browser-Interaktionen,
//  die das Spiel stören könnten.
// ===============================================

// Rechtsklick / Kontextmenü deaktivieren
document.addEventListener("contextmenu", e => e.preventDefault());

// Text markieren verhindern
document.addEventListener("selectstart", e => e.preventDefault());

// Drag & Drop verhindern
document.addEventListener("dragstart", e => e.preventDefault());
document.addEventListener("drop", e => e.preventDefault());

// Touch-Langdruck verhindern (wichtig für Android/iOS)
let touchTimer;
document.addEventListener("touchstart", e => {
    touchTimer = setTimeout(() => {
        e.preventDefault();
    }, 400); // Langdruck nach 400ms blockieren
}, { passive: false });

document.addEventListener("touchend", () => {
    clearTimeout(touchTimer);
});

// Doppeltipp-Zoom verhindern (iOS/Android)
let lastTouch = 0;
document.addEventListener("touchend", e => {
    const now = Date.now();
    if (now - lastTouch <= 300) {
        e.preventDefault();
    }
    lastTouch = now;
}, { passive: false });

// Bilder speichern verhindern
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("contextmenu", e => e.preventDefault());
    img.addEventListener("touchstart", e => e.preventDefault(), { passive: false });
});

// Browser-Gesten verhindern (z. B. zurück wischen)
window.addEventListener("gesturestart", e => e.preventDefault());
window.addEventListener("gesturechange", e => e.preventDefault());
window.addEventListener("gestureend", e => e.preventDefault());

// Scrollen verhindern (Spiel bleibt fix)
document.body.style.overflow = "hidden";

// Textauswahl komplett deaktivieren
document.documentElement.style.userSelect = "none";
document.documentElement.style.webkitUserSelect = "none";
document.documentElement.style.msUserSelect = "none";

// Doppelklick markieren verhindern
document.addEventListener("mousedown", e => {
    if (e.detail > 1) e.preventDefault();
});

// Touch-Callout verhindern (iOS: "Kopieren / Teilen / Speichern")
document.documentElement.style.webkitTouchCallout = "none";

// Bilder & Canvas schützen
document.querySelectorAll("canvas, img").forEach(el => {
    el.style.webkitTouchCallout = "none";
    el.style.userSelect = "none";
});

// Tastenkombinationen blockieren, die stören könnten
document.addEventListener("keydown", e => {
    // F12, Strg+Shift+I, Strg+U, Strg+S, Strg+P
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.key === "S") ||
        (e.ctrlKey && e.key === "P")
    ) {
        e.preventDefault();
    }
});
