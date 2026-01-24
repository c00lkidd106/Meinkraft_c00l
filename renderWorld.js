// ============================================
// WELT-RENDERER
// ============================================

// Globale Variablen für Abbau
let isBreaking = false;
let breakInterval = null;

// Wird EINMAL eingerichtet
function setupBlockControls(canvas, tileSize) {
    canvas.addEventListener("mousedown", (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((event.clientX - rect.left) / tileSize);
        const y = Math.floor((event.clientY - rect.top) / tileSize);

        const block = WORLD.blocks[y]?.[x];
        if (!block) return;

        // Linksklick = ABBREISSEN
        if (event.button === 0) {
            if (block === "air") return;

            const hardness = BLOCK_HARDNESS[block] || 1;
            const speed = getEffectiveSpeed(currentTool, block);
            const timeToBreak = hardness / speed;

            let progress = 0;
            isBreaking = true;

            breakInterval = setInterval(() => {
                if (!isBreaking) {
                    clearInterval(breakInterval);
                    return;
                }

                progress += 0.1;

                if (progress >= timeToBreak) {
                    Sound.play("break", block);

                    // Spieler bekommt den Block
                    addItem(block);

                    WORLD.blocks[y][x] = "air";
                    clearInterval(breakInterval);
                    renderWorld();
                }
            }, 100);
        }

        // Rechtsklick = PLATZIEREN
        if (event.button === 2) {
            event.preventDefault();

            const blockToPlace = "dirt";

            if (WORLD.blocks[y][x] === "air") {
                WORLD.blocks[y][x] = blockToPlace;
                Sound.play("place", blockToPlace);
                renderWorld();
            }
        }
    });

    canvas.addEventListener("mouseup", () => {
        isBreaking = false;
        clearInterval(breakInterval);
    });
}


// ============================================
// RENDER-FUNKTION
// ============================================

let controlsInitialized = false;

function renderWorld() {
    // Canvas erstellen
    let canvas = document.getElementById("world-canvas");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "world-canvas";
        canvas.width = 512;
        canvas.height = 512;
        canvas.style.imageRendering = "pixelated";
        canvas.style.position = "absolute";
        canvas.style.left = "50%";
        canvas.style.top = "50%";
        canvas.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");
    const tileSize = canvas.width / WORLD.size;

    // Steuerung NUR EINMAL aktivieren
    if (!controlsInitialized) {
        setupBlockControls(canvas, tileSize);
        controlsInitialized = true;
    }

    // Welt zeichnen
    for (let y = 0; y < WORLD.size; y++) {
        for (let x = 0; x < WORLD.size; x++) {
            const block = WORLD.blocks[y][x];
            const tex = TEXTURES[block];

            if (tex) {
                ctx.drawImage(tex, x * tileSize, y * tileSize, tileSize, tileSize);
            } else {
                ctx.fillStyle = "magenta";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
}
