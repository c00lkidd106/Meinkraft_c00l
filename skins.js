// ============================================
// PROZEDURALE SKIN-GENERATION (KEINE PNGs)
// ============================================

function createCanvas(size = 16) {
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    return c;
}

function px(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
}

// Steve-ähnlicher Standard-Skin
const SKIN_DEFAULT = {
    skin: "#d7b48a",
    shirt: "#3a6ea5",
    pants: "#2d2d2d",
    shoes: "#1a1a1a",
    hair: "#5A3A1A",
    eye: "#000000"
};

// c00lkidd Tester Skin
const SKIN_C00LKIDD = {
    skin: "#ffe6cc",
    shirt: "#ff0000",
    pants: "#000000",
    shoes: "#222222",
    hair: "#00ff00",
    eye: "#000000"
};

function generateHead(profile) {
    const c = createCanvas(16);
    const ctx = c.getContext("2d");

    ctx.fillStyle = profile.skin;
    ctx.fillRect(0, 0, 16, 16);

    for (let x = 0; x < 16; x++) {
        px(ctx, x, 0, profile.hair);
        px(ctx, x, 1, profile.hair);
    }

    px(ctx, 5, 6, profile.eye);
    px(ctx, 10, 6, profile.eye);

    return c;
}

function generateBody(profile) {
    const c = createCanvas(16);
    const ctx = c.getContext("2d");

    ctx.fillStyle = profile.shirt;
    ctx.fillRect(0, 0, 16, 16);

    return c;
}

function generateArms(profile) {
    const c = createCanvas(16);
    const ctx = c.getContext("2d");

    ctx.fillStyle = profile.skin;
    ctx.fillRect(0, 0, 16, 6);

    ctx.fillStyle = profile.shirt;
    ctx.fillRect(0, 6, 16, 16);

    return c;
}

function generateLegs(profile) {
    const c = createCanvas(16);
    const ctx = c.getContext("2d");

    ctx.fillStyle = profile.pants;
    ctx.fillRect(0, 0, 16, 16);

    return c;
}

function generateHand(profile) {
    const c = createCanvas(8);
    const ctx = c.getContext("2d");

    ctx.fillStyle = profile.skin;
    ctx.fillRect(0, 0, 8, 8);

    return c;
}

const PlayerSkin = {
    profile: SKIN_DEFAULT,
    parts: {},

    setTester() {
        this.profile = SKIN_C00LKIDD;
        this.generate();
    },

    setDefault() {
        this.profile = SKIN_DEFAULT;
        this.generate();
    },

    generate() {
        this.parts = {
            head: generateHead(this.profile),
            body: generateBody(this.profile),
            arms: generateArms(this.profile),
            legs: generateLegs(this.profile),
            hand: generateHand(this.profile)
        };
    }
};

function detectPlayerType() {
    const params = new URLSearchParams(window.location.search);

    if (params.get("tester") === "true") {
        PlayerSkin.setTester();
        console.log("Tester erkannt → c00lkidd Skin generiert");
    } else {
        PlayerSkin.setDefault();
        console.log("Normaler Spieler → Standard-Skin generiert");
    }
}
