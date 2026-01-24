// ==============================================
// BLOCK-DATEN: HÄRTE + WERKZEUGE
// ==============================================

// Aktuelles Werkzeug (später per Hotbar änderbar)
let currentTool = "hand";

// Wie schnell Werkzeuge abbauen (Basis-Wert)
const TOOL_SPEED = {
    hand: 1.0,

    wooden_axe: 2.0,
    stone_axe: 3.0,
    iron_axe: 5.0,

    wooden_pickaxe: 2.0,
    stone_pickaxe: 4.0,
    iron_pickaxe: 6.0,

    wooden_hoe: 1.5,
    stone_hoe: 2.5,
    iron_hoe: 4.0,

    wooden_shovel: 2.5,
    stone_shovel: 3.5,
    iron_shovel: 5.5,

    wooden_sword: 3.0,
    stone_sword: 4.5,
    iron_sword: 6.5
};

// Wie hart Blöcke sind (Minecraft-Style, aber vereinfacht)
const BLOCK_HARDNESS = {
    air: 0,

    grass: 0.3,
    dirt: 0.4,
    sand: 0.2,
    gravel: 0.6,

    stone: 1.5,
    cobblestone: 2.0,

    ore_coal: 2.0,
    ore_iron: 3.0,
    ore_copper: 2.5,

    wood: 1.0,
    log: 1.2,
    planks: 0.8,
    leaves: 0.2,

    glass: 0.3,
    wool: 0.4
};

// Optional: Werkzeugeffektivität pro Block (für später)
function getEffectiveSpeed(tool, block) {
    const base = TOOL_SPEED[tool] || 1;

    // Axt gut für Holz
    if (tool.includes("axe") && (block === "wood" || block === "log" || block === "planks")) {
        return base * 2;
    }

    // Spitzhacke gut für Stein & Erze
    if (tool.includes("pickaxe") && (
        block === "stone" ||
        block === "cobblestone" ||
        block.startsWith("ore_")
    )) {
        return base * 2;
    }

    // Schaufel gut für Erde/Sand/Gravel
    if (tool.includes("shovel") && (
        block === "dirt" ||
        block === "grass" ||
        block === "sand" ||
        block === "gravel"
    )) {
        return base * 2;
    }

    // Schwert gut für Blätter/Wolle (Meme)
    if (tool.includes("sword") && (
        block === "leaves" ||
        block === "wool"
    )) {
        return base * 1.5;
    }

    // Hacke z. B. für Grass (später für Farmland)
    if (tool.includes("hoe") && block === "grass") {
        return base * 1.5;
    }

    return base;
}
