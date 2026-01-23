// ===============================================
//  UNIVERSAL INPUT SYSTEM (PC + MOBILE + CONSOLE)
// ===============================================

const Input = {
    moveX: 0,      // -1 links, +1 rechts
    moveY: 0,      // -1 zurück, +1 vor
    lookX: 0,      // Kamera horizontal
    lookY: 0,      // Kamera vertikal
    jump: false,
    breakBlock: false,
    placeBlock: false,
    device: "pc"   // pc, mobile, console
};

// ===============================================
//  PC KEYBOARD
// ===============================================

window.addEventListener("keydown", e => {
    Input.device = "pc";

    if (e.key === "w") Input.moveY = 1;
    if (e.key === "s") Input.moveY = -1;
    if (e.key === "a") Input.moveX = -1;
    if (e.key === "d") Input.moveX = 1;
    if (e.key === " ") Input.jump = true;
});

window.addEventListener("keyup", e => {
    if (["w","s"].includes(e.key)) Input.moveY = 0;
    if (["a","d"].includes(e.key)) Input.moveX = 0;
    if (e.key === " ") Input.jump = false;
});

// ===============================================
//  PC MOUSE (deaktiviert, wenn Konsole aktiv)
// ===============================================

function ignoreMouseIfConsole() {
    return Input.device === "console";
}

window.addEventListener("mousemove", e => {
    if (ignoreMouseIfConsole()) return;
    Input.lookX = e.movementX;
    Input.lookY = e.movementY;
});

window.addEventListener("mousedown", e => {
    if (ignoreMouseIfConsole()) return;
    if (e.button === 0) Input.breakBlock = true;
    if (e.button === 2) Input.placeBlock = true;
});

window.addEventListener("mouseup", e => {
    if (ignoreMouseIfConsole()) return;
    if (e.button === 0) Input.breakBlock = false;
    if (e.button === 2) Input.placeBlock = false;
});

// ===============================================
//  MOBILE TOUCH CONTROLS
// ===============================================

let touchLeft = null;
let touchRight = null;

window.addEventListener("touchstart", e => {
    Input.device = "mobile";

    for (const t of e.touches) {
        if (t.clientX < window.innerWidth / 2) touchLeft = t;
        else touchRight = t;
    }
});

window.addEventListener("touchmove", e => {
    for (const t of e.touches) {

        // Bewegung (linke Seite)
        if (touchLeft && t.identifier === touchLeft.identifier) {
            const dx = t.clientX - touchLeft.clientX;
            const dy = t.clientY - touchLeft.clientY;
            Input.moveX = dx / 50;
            Input.moveY = -dy / 50;
        }

        // Kamera (rechte Seite)
        if (touchRight && t.identifier === touchRight.identifier) {
            Input.lookX = (t.clientX - touchRight.clientX) * 0.3;
            Input.lookY = (t.clientY - touchRight.clientY) * 0.3;
        }
    }
});

window.addEventListener("touchend", e => {
    Input.moveX = 0;
    Input.moveY = 0;
    touchLeft = null;
    touchRight = null;
});

// ===============================================
//  GAMEPAD / KONSOLE
// ===============================================

let gamepadConnected = false;

window.addEventListener("gamepadconnected", () => {
    Input.device = "console";
    gamepadConnected = true;
    console.log("Konsole erkannt → Gamepad-Modus aktiviert");
});

window.addEventListener("gamepaddisconnected", () => {
    gamepadConnected = false;
    Input.device = "pc";
});

// Gamepad Polling
function updateGamepad() {
    if (!gamepadConnected) return;

    const gp = navigator.getGamepads()[0];
    if (!gp) return;

    // Bewegung
    Input.moveX = gp.axes[0];
    Input.moveY = -gp.axes[1];

    // Kamera
    Input.lookX = gp.axes[2] * 5;
    Input.lookY = gp.axes[3] * 5;

    // Buttons
    Input.jump = gp.buttons[0].pressed;       // A
    Input.breakBlock = gp.buttons[7].pressed; // RT
    Input.placeBlock = gp.buttons[6].pressed; // LT
}

setInterval(updateGamepad, 16);
