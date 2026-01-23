// ===============================================
//  SEED SYSTEM
// ===============================================

function hashSeed(seed) {
    let h = 0;
    seed = seed.toString();
    for (let i = 0; i < seed.length; i++) {
        h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
    }
    return h >>> 0;
}

// ===============================================
//  RANDOM GENERATOR
// ===============================================

class Random {
    constructor(seed) {
        this.seed = seed;
    }
    next() {
        this.seed = (this.seed * 16807) % 2147483647;
        return this.seed / 2147483647;
    }
}

// ===============================================
//  PERLIN NOISE (1D)
// ===============================================

function perlin(x, rand) {
    const x0 = Math.floor(x);
    const x1 = x0 + 1;

    const t = x - x0;
    const fade = t * t * (3 - 2 * t);

    const n0 = rand.next();
    const n1 = rand.next();

    return n0 * (1 - fade) + n1 * fade;
}

// ===============================================
//  NORMAL WORLD
// ===============================================

function generateWorld(seed, width, height) {
    const hashed = hashSeed(seed);
    const rand = new Random(hashed);

    const world = [];

    for (let x = 0; x < width; x++) {
        const h = Math.floor(perlin(x * 0.1, rand) * height * 0.6 + height * 0.2);

        world[x] = [];

        for (let y = 0; y < height; y++) {
            if (y < h - 3) world[x][y] = "stone";
            else if (y < h) world[x][y] = "dirt";
            else if (y === h) world[x][y] = "grass";
            else world[x][y] = "air";
        }
    }

    return world;
}

// ===============================================
//  FLAT WORLD
// ===============================================

function generateFlat(seed, width, height) {
    const world = [];

    for (let x = 0; x < width; x++) {
        world[x] = [];
        for (let y = 0; y < height; y++) {
            if (y < height / 2 - 3) world[x][y] = "stone";
            else if (y < height / 2) world[x][y] = "dirt";
            else if (y === height / 2) world[x][y] = "grass";
            else world[x][y] = "air";
        }
    }

    return world;
}

// ===============================================
//  AMPLIFIED WORLD
// ===============================================

function generateAmplified(seed, width, height) {
    const hashed = hashSeed(seed);
    const rand = new Random(hashed);

    const world = [];

    for (let x = 0; x < width; x++) {
        const h = Math.floor(perlin(x * 0.05, rand) * height * 0.9 + height * 0.05);

        world[x] = [];

        for (let y = 0; y < height; y++) {
            if (y < h - 5) world[x][y] = "stone";
            else if (y < h) world[x][y] = "dirt";
            else if (y === h) world[x][y] = "grass";
            else world[x][y] = "air";
        }
    }

    return world;
}

// ===============================================
//  FLOATING ISLANDS
// ===============================================

function generateFloating(seed, width, height) {
    const hashed = hashSeed(seed);
    const rand = new Random(hashed);

    const world = [];

    for (let x = 0; x < width; x++) {
        world[x] = [];

        for (let y = 0; y < height; y++) {
            const noise = perlin(x * 0.1 + y * 0.1, rand);

            if (noise > 0.7 && y < height * 0.6) {
                world[x][y] = "stone";
            } else {
                world[x][y] = "air";
            }
        }
    }

    return world;
}

// ===============================================
//  WORLD TYPE SELECTOR
// ===============================================

function generateWorldType(type, seed, width, height) {
    switch(type) {
        case "flat": return generateFlat(seed, width, height);
        case "amplified": return generateAmplified(seed, width, height);
        case "floating": return generateFloating(seed, width, height);
        default: return generateWorld(seed, width, height);
    }
}
