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
//  WORLD CONSTANTS
// ===============================================

const CHUNK_SIZE = 16;
const WORLD_HEIGHT = 64;

// ===============================================
//  CREATE EMPTY CHUNK
// ===============================================

function createEmptyChunk() {
    const chunk = [];
    for (let x = 0; x < CHUNK_SIZE; x++) {
        chunk[x] = [];
        for (let y = 0; y < WORLD_HEIGHT; y++) {
            chunk[x][y] = [];
            for (let z = 0; z < CHUNK_SIZE; z++) {
                chunk[x][y][z] = "air";
            }
        }
    }
    return chunk;
}

// ===============================================
//  BASE TERRAIN GENERATION
// ===============================================

function generateChunk(seed, cx, cz) {
    const rand = new Random(hashSeed(seed + cx + "," + cz));
    const chunk = createEmptyChunk();

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {

            const worldX = cx * CHUNK_SIZE + x;
            const worldZ = cz * CHUNK_SIZE + z;

            const h = Math.floor(
                perlin(worldX * 0.05, rand) * 10 +
                perlin(worldZ * 0.05, rand) * 10 +
                30
            );

            for (let y = 0; y < WORLD_HEIGHT; y++) {
                if (y < h - 4) chunk[x][y][z] = "stone";
                else if (y < h - 1) chunk[x][y][z] = "dirt";
                else if (y === h) chunk[x][y][z] = "grass";
                else chunk[x][y][z] = "air";
            }
        }
    }

    return chunk;
}

// ===============================================
//  CAVES
// ===============================================

function carveCaves(chunk, seed) {
    const rand = new Random(hashSeed(seed + "_caves"));

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let y = 10; y < WORLD_HEIGHT - 5; y++) {
            for (let z = 0; z < CHUNK_SIZE; z++) {

                const noise = perlin(x * 0.2 + y * 0.1 + z * 0.2, rand);

                if (noise > 0.65) {
                    chunk[x][y][z] = "air";
                }
            }
        }
    }
}

// ===============================================
//  ORES
// ===============================================

function generateOres(chunk, seed) {
    const rand = new Random(hashSeed(seed + "_ores"));

    const ores = [
        { block: "coal", chance: 0.02, minY: 5, maxY: 50 },
        { block: "iron", chance: 0.015, minY: 5, maxY: 45 },
        { block: "gold", chance: 0.008, minY: 5, maxY: 35 },
        { block: "diamond", chance: 0.003, minY: 5, maxY: 20 }
    ];

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let y = 0; y < WORLD_HEIGHT; y++) {
            for (let z = 0; z < CHUNK_SIZE; z++) {

                if (chunk[x][y][z] !== "stone") continue;

                for (const ore of ores) {
                    if (y >= ore.minY && y <= ore.maxY && rand.next() < ore.chance) {
                        chunk[x][y][z] = ore.block;
                    }
                }
            }
        }
    }
}

// ===============================================
//  TREES
// ===============================================

function generateTrees(chunk, seed) {
    const rand = new Random(hashSeed(seed + "_trees"));

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {

            if (rand.next() < 0.02) {
                let y = WORLD_HEIGHT - 1;
                while (y > 0 && chunk[x][y][z] === "air") y--;

                if (chunk[x][y][z] === "grass") {
                    for (let i = 1; i <= 4; i++) {
                        if (y + i < WORLD_HEIGHT) chunk[x][y + i][z] = "log";
                    }

                    for (let dx = -2; dx <= 2; dx++) {
                        for (let dz = -2; dz <= 2; dz++) {
                            const lx = x + dx;
                            const lz = z + dz;
                            const ly = y + 4;
                            if (lx >= 0 && lx < CHUNK_SIZE && lz >= 0 && lz < CHUNK_SIZE && ly < WORLD_HEIGHT) {
                                if (Math.abs(dx) + Math.abs(dz) <= 3) {
                                    chunk[lx][ly][lz] = "leaves";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// ===============================================
//  FULL CHUNK PIPELINE
// ===============================================

function generateFullChunk(seed, cx, cz) {
    const chunk = generateChunk(seed, cx, cz);
    carveCaves(chunk, seed);
    generateOres(chunk, seed);
    generateTrees(chunk, seed);
    return chunk;
}
