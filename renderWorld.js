// ============================================
// WELT-RENDERER
// ============================================

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

    enableBlockBreaking(canvas, tileSize);
}
