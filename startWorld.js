// ============================================
// WELTSTART + WELTGENERATOR
// ============================================

// Globale Welt
let WORLD = {
    seed: 0,
    blocks: [],
    size: 32 // 32×32 Testwelt
};

// Zufallsfunktion basierend auf Seed
function seededRandom(seed) {
    return function() {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    };
}

// Welt generieren
function generateWorld(seed) {
    const rand = seededRandom(seed);

    WORLD.blocks = [];

    for (let y = 0; y < WORLD.size; y++) {
        WORLD.blocks[y] = [];
        for (let x = 0; x < WORLD.size; x++) {

            const r = rand();

            let block = "grass";

            if (r < 0.1) block = "stone";
            else if (r < 0.2) block = "dirt";
            else if (r < 0.25) block = "sand";
            else if (r < 0.27) block = "ore_coal";
            else if (r < 0.29) block = "ore_iron";
            else if (r < 0.30) block = "ore_copper";

            WORLD.blocks[y][x] = block;
        }
    }

    console.log("Welt generiert:", WORLD);
}

// Welt starten
function startWorld(seed) {
    // Seed bestimmen
    if (!seed || seed.length === 0) {
        seed = Math.floor(Math.random() * 999999999);
    }
    WORLD.seed = seed;

    console.log("Starte Welt mit Seed:", seed);

    // Musik & Sounds
    if (typeof startMusic === "function") startMusic();
    if (typeof Sound !== "undefined") Sound.init();

    // Skin auswählen
    if (typeof detectPlayerType === "function") detectPlayerType();

    // Welt generieren
    generateWorld(seed);

    // Welt anzeigen
    renderWorld();
}
