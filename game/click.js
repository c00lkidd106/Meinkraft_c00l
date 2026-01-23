// =====================================
//   SYNTHETISCHER KLICK-SOUND
// =====================================

function playClick() {
    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.type = "square";
    osc.frequency.value = 800;

    gain.gain.setValueAtTime(0.3, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(audio.destination);

    osc.start();
    osc.stop(audio.currentTime + 0.05);
}

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
            btn.addEventListener("mouseenter", playHover);
            btn.addEventListener("click", playClick);
        }
    });
});
