// =====================================
//   SYNTHETISCHER KLICK-SOUND (kein MP3)
// =====================================

function playClick() {
    const audio = new (window.AudioContext || window.webkitAudioContext)();

    // Erzeuge einen kurzen Ton
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    // Klick-Sound: sehr kurzer, hoher Impuls
    osc.type = "square";        // knackiger Sound
    osc.frequency.value = 800;  // Tonhöhe

    gain.gain.setValueAtTime(0.3, audio.currentTime);          // Startlautstärke
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.05); // schnelles Ausklingen

    osc.connect(gain);
    gain.connect(audio.destination);

    osc.start();
    osc.stop(audio.currentTime + 0.05); // 50 Millisekunden
}

// Optional: Hover-Sound
function playHover() {
    const audio = new (window.AudioContext || window.webkitAudioContext)();

    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.type = "triangle";
    osc.frequency.value = 500;

    gain.gain.setValueAtTime(0.15, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(audio.destination);

    osc.start();
    osc.stop(audio.currentTime + 0.03);
}

// Automatisch auf alle Buttons anwenden
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".menu-btn").forEach(btn => {
        if (!btn.classList.contains("disabled")) {

            btn.addEventListener("mouseenter", () => {
                playHover();
            });

            btn.addEventListener("click", () => {
                playClick();
            });
        }
    });
});
