
// =====================
//  TEXTURE ENGINE (ALL-IN-ONE)
// =====================

// Farbpalette
const COLORS = {
    "A": "#000000",
    "B": "#5A3A1A", "b": "#8B5A2B",
    "C": "#C28C3A", "c": "#E0A85A",
    "D": "#7A5A3A", "d": "#5A3A20",
    "E": "#00FFFF",
    "F": "#FFCC55", "f": "#FF8800",
    "G": "#3E8F45", "g": "#4CAF50",
    "H": "#4E8A3A",
    "I": "#C0C0C0", "i": "#E0E0E0",
    "K": "#222222",
    "L": "#88AACC", "l": "#556B8F",
    "M": "#3A2A10",
    "O": "#555555", "o": "#333333",
    "P": "#FFD700",
    "Q": "#00AAFF",
    "R": "#DDDDDD", "r": "#AAAAAA",
    "S": "#777777", "s": "#999999",
    "U": "#00FF00",
    "X": "#AA5500",
    " ": "transparent"
};

// Pixelmap → Canvas
function createTextureFromMap(map, colors = COLORS) {
    const size = map.length;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const char = map[y][x];
            if (colors[char] === "transparent") continue;
            ctx.fillStyle = colors[char] || "#000";
            ctx.fillRect(x, y, 1, 1);
        }
    }
    return canvas;
}

// Noise für Realismus
function addNoise(canvas, strength = 10) {
    const ctx = canvas.getContext("2d");
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = img.data;

    for (let i = 0; i < data.length; i += 4) {
        const n = (Math.random() * strength) - (strength / 2);
        data[i] += n;
        data[i+1] += n;
        data[i+2] += n;
    }

    ctx.putImageData(img, 0, 0);
    return canvas;
}

// Registry
const TEXTURES = {};
TEXTURES.air = null;


// =====================
//  ALLE ERZE (16×16)
// =====================

// Kohle
TEXTURES.ore_coal = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSCSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSCSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsCSSSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSCSSSSSSSSS",
"SSsSSSSCSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Eisen
TEXTURES.ore_iron = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSISSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSISSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSISsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSISSSSSSSSS",
"SSsSSSSISSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Gold
TEXTURES.ore_gold = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSPSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSPSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSPPSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSPSSSSSSSSS",
"SSsSSSSPSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Redstone
TEXTURES.ore_redstone = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSRSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSRSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSRRSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSRSSSSSSSSS",
"SSsSSSSRSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Lapis
TEXTURES.ore_lapis = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSQSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSQSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSQQSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSQSSSSSSSSS",
"SSsSSSSQSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Diamant
TEXTURES.ore_diamond = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSESSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSESSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSEESsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSESSSSSSSSS",
"SSsSSSSESSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Smaragd
TEXTURES.ore_emerald = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSUSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSUSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSUUSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSUSSSSSSSSS",
"SSsSSSSUSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Kupfer
TEXTURES.ore_copper = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSXSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSXSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSXXSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSXSSSSSSSSS",
"SSsSSSSXSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));


// =====================
//  ALLE WERKZEUGE (16×16)
// =====================

// Holzspitzhacke
TEXTURES.pickaxe_wood = createTextureFromMap([
"                ",
"       WW       ",
"      WWW       ",
"      WWW       ",
"       WW       ",
"    B  W        ",
"   BB  W        ",
"  BB   W        ",
" BB    W        ",
"BB     W        ",
"B      W        ",
"       W        ",
"       W        ",
"                ",
"                ",
"                "
]);

// Steinspitzhacke
TEXTURES.pickaxe_stone = createTextureFromMap([
"                ",
"       SS       ",
"      SSS       ",
"      SSS       ",
"       SS       ",
"    B  S        ",
"   BB  S        ",
"  BB   S        ",
" BB    S        ",
"BB     S        ",
"B      S        ",
"       S        ",
"       S        ",
"                ",
"                ",
"                "
]);

// Eisen
TEXTURES.pickaxe_iron = createTextureFromMap([
"                ",
"       II       ",
"      III       ",
"      III       ",
"       II       ",
"    B  I        ",
"   BB  I        ",
"  BB   I        ",
" BB    I        ",
"BB     I        ",
"B      I        ",
"       I        ",
"       I        ",
"                ",
"                ",
"                "
]);

// Gold
TEXTURES.pickaxe_gold = createTextureFromMap([
"                ",
"       PP       ",
"      PPP       ",
"      PPP       ",
"       PP       ",
"    B  P        ",
"   BB  P        ",
"  BB   P        ",
" BB    P        ",
"BB     P        ",
"B      P        ",
"       P        ",
"       P        ",
"                ",
"                ",
"                "
]);

// Diamant
TEXTURES.pickaxe_diamond = createTextureFromMap([
"                ",
"       EE       ",
"      EEE       ",
"      EEE       ",
"       EE       ",
"    B  E        ",
"   BB  E        ",
"  BB   E        ",
" BB    E        ",
"BB     E        ",
"B      E        ",
"       E        ",
"       E        ",
"                ",
"                ",
"                "
]);


// =====================
//  FERTIG
// =====================
TEXTURES.axe_wood = createTextureFromMap([
"                ",
"      WW        ",
"     WWWW       ",
"     WWWW       ",
"      WW        ",
"    B  W        ",
"   BB  W        ",
"  BB   W        ",
" BB    W        ",
"BB     W        ",
"B      W        ",
"       W        ",
"       W        ",
"                ",
"                ",
"                "
]);
TEXTURES.axe_stone = createTextureFromMap([
"                ",
"      SS        ",
"     SSSS       ",
"     SSSS       ",
"      SS        ",
"    B  S        ",
"   BB  S        ",
"  BB   S        ",
" BB    S        ",
"BB     S        ",
"B      S        ",
"       S        ",
"       S        ",
"                ",
"                ",
"                "
]);
TEXTURES.axe_iron = createTextureFromMap([
"                ",
"      II        ",
"     IIII       ",
"     IIII       ",
"      II        ",
"    B  I        ",
"   BB  I        ",
"  BB   I        ",
" BB    I        ",
"BB     I        ",
"B      I        ",
"       I        ",
"       I        ",
"                ",
"                ",
"                "
]);
TEXTURES.axe_gold = createTextureFromMap([
"                ",
"      PP        ",
"     PPPP       ",
"     PPPP       ",
"      PP        ",
"    B  P        ",
"   BB  P        ",
"  BB   P        ",
" BB    P        ",
"BB     P        ",
"B      P        ",
"       P        ",
"       P        ",
"                ",
"                ",
"                "
]);
TEXTURES.axe_diamond = createTextureFromMap([
"                ",
"      EE        ",
"     EEEE       ",
"     EEEE       ",
"      EE        ",
"    B  E        ",
"   BB  E        ",
"  BB   E        ",
" BB    E        ",
"BB     E        ",
"B      E        ",
"       E        ",
"       E        ",
"                ",
"                ",
"                "
]);
// =====================
//  ALLE SCHAUFELN (16×16)
// =====================

// Holzschaufel
TEXTURES.shovel_wood = createTextureFromMap([
"                ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"    B  W        ",
"   BB  W        ",
"  BB   W        ",
" BB    W        ",
"BB     W        ",
"B      W        ",
"                ",
"                "
]);

// Steinschaufel
TEXTURES.shovel_stone = createTextureFromMap([
"                ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"    B  S        ",
"   BB  S        ",
"  BB   S        ",
" BB    S        ",
"BB     S        ",
"B      S        ",
"                ",
"                "
]);

// Eisenschaufel
TEXTURES.shovel_iron = createTextureFromMap([
"                ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"    B  I        ",
"   BB  I        ",
"  BB   I        ",
" BB    I        ",
"BB     I        ",
"B      I        ",
"                ",
"                "
]);

// Goldschaufel
TEXTURES.shovel_gold = createTextureFromMap([
"                ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"    B  P        ",
"   BB  P        ",
"  BB   P        ",
" BB    P        ",
"BB     P        ",
"B      P        ",
"                ",
"                "
]);

// Diamantschaufel
TEXTURES.shovel_diamond = createTextureFromMap([
"                ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"    B  E        ",
"   BB  E        ",
"  BB   E        ",
" BB    E        ",
"BB     E        ",
"B      E        ",
"                ",
"                "
]);
// =====================
//  ALLE HACKEN (16×16)
// =====================

// Holzhacke
TEXTURES.hoe_wood = createTextureFromMap([
"                ",
"      WW        ",
"      WW        ",
"      WW        ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"    B  W        ",
"   BB  W        ",
"  BB   W        ",
" BB    W        ",
"BB     W        ",
"B      W        ",
"                ",
"                "
]);

// Steinhacke
TEXTURES.hoe_stone = createTextureFromMap([
"                ",
"      SS        ",
"      SS        ",
"      SS        ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"    B  S        ",
"   BB  S        ",
"  BB   S        ",
" BB    S        ",
"BB     S        ",
"B      S        ",
"                ",
"                "
]);

// Eisenhacke
TEXTURES.hoe_iron = createTextureFromMap([
"                ",
"      II        ",
"      II        ",
"      II        ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"    B  I        ",
"   BB  I        ",
"  BB   I        ",
" BB    I        ",
"BB     I        ",
"B      I        ",
"                ",
"                "
]);

// Goldhacke
TEXTURES.hoe_gold = createTextureFromMap([
"                ",
"      PP        ",
"      PP        ",
"      PP        ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"    B  P        ",
"   BB  P        ",
"  BB   P        ",
" BB    P        ",
"BB     P        ",
"B      P        ",
"                ",
"                "
]);

// Diamanthacke
TEXTURES.hoe_diamond = createTextureFromMap([
"                ",
"      EE        ",
"      EE        ",
"      EE        ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"    B  E        ",
"   BB  E        ",
"  BB   E        ",
" BB    E        ",
"BB     E        ",
"B      E        ",
"                ",
"                "
]);
// =====================
//  ALLE SCHWERTER (16×16)
// =====================

// Holzschwert
TEXTURES.sword_wood = createTextureFromMap([
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"       W        ",
"      WWW       ",
"      WWW       ",
"       W        ",
"       W        ",
"    B  W        ",
"   BB  W        ",
"  BB   W        ",
" BB    W        ",
"BB     W        "
]);

// Steinschwert
TEXTURES.sword_stone = createTextureFromMap([
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"       S        ",
"      SSS       ",
"      SSS       ",
"       S        ",
"       S        ",
"    B  S        ",
"   BB  S        ",
"  BB   S        ",
" BB    S        ",
"BB     S        "
]);

// Eisenschwert
TEXTURES.sword_iron = createTextureFromMap([
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"       I        ",
"      III       ",
"      III       ",
"       I        ",
"       I        ",
"    B  I        ",
"   BB  I        ",
"  BB   I        ",
" BB    I        ",
"BB     I        "
]);

// Goldschwert
TEXTURES.sword_gold = createTextureFromMap([
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"       P        ",
"      PPP       ",
"      PPP       ",
"       P        ",
"       P        ",
"    B  P        ",
"   BB  P        ",
"  BB   P        ",
" BB    P        ",
"BB     P        "
]);

// Diamantschwert
TEXTURES.sword_diamond = createTextureFromMap([
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"       E        ",
"      EEE       ",
"      EEE       ",
"       E        ",
"       E        ",
"    B  E        ",
"   BB  E        ",
"  BB   E        ",
" BB    E        ",
"BB     E        "
]);
// =====================
//  ALLE RÜSTUNGEN (16×16)
// =====================

// ---------------------
//  HOLZ-RÜSTUNG
// ---------------------

// Holzhelm
TEXTURES.helmet_wood = createTextureFromMap([
"      WW        ",
"     WWWW       ",
"    WWWWWW      ",
"    WWWWWW      ",
"    W    W      ",
"    W    W      ",
"    W    W      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Holzbrustplatte
TEXTURES.chestplate_wood = createTextureFromMap([
"      WW        ",
"     WWWW       ",
"    WWWWWW      ",
"    WWWWWW      ",
"    WWWWWW      ",
"    W WW W      ",
"    W WW W      ",
"    W WW W      ",
"    W WW W      ",
"    W WW W      ",
"     W  W       ",
"     W  W       ",
"                ",
"                ",
"                ",
"                "
]);

// Holzhose
TEXTURES.leggings_wood = createTextureFromMap([
"     WWWW       ",
"    WWWWWW      ",
"    WWWWWW      ",
"     W  W       ",
"     W  W       ",
"     W  W       ",
"     W  W       ",
"     W  W       ",
"     W  W       ",
"     W  W       ",
"     W  W       ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Holzschuhe
TEXTURES.boots_wood = createTextureFromMap([
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"     WW  WW     ",
"     WW  WW     ",
"     WW  WW     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);


// ---------------------
//  STEIN-RÜSTUNG
// ---------------------

TEXTURES.helmet_stone = createTextureFromMap([
"      SS        ",
"     SSSS       ",
"    SSSSSS      ",
"    SSSSSS      ",
"    S    S      ",
"    S    S      ",
"    S    S      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.chestplate_stone = createTextureFromMap([
"      SS        ",
"     SSSS       ",
"    SSSSSS      ",
"    SSSSSS      ",
"    SSSSSS      ",
"    S SS S      ",
"    S SS S      ",
"    S SS S      ",
"    S SS S      ",
"    S SS S      ",
"     S  S       ",
"     S  S       ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.leggings_stone = createTextureFromMap([
"     SSSS       ",
"    SSSSSS      ",
"    SSSSSS      ",
"     S  S       ",
"     S  S       ",
"     S  S       ",
"     S  S       ",
"     S  S       ",
"     S  S       ",
"     S  S       ",
"     S  S       ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.boots_stone = createTextureFromMap([
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"     SS  SS     ",
"     SS  SS     ",
"     SS  SS     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);


// ---------------------
//  EISEN-RÜSTUNG
// ---------------------

TEXTURES.helmet_iron = createTextureFromMap([
"      II        ",
"     IIII       ",
"    IIIIII      ",
"    IIIIII      ",
"    I    I      ",
"    I    I      ",
"    I    I      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.chestplate_iron = createTextureFromMap([
"      II        ",
"     IIII       ",
"    IIIIII      ",
"    IIIIII      ",
"    IIIIII      ",
"    I II I      ",
"    I II I      ",
"    I II I      ",
"    I II I      ",
"    I II I      ",
"     I  I       ",
"     I  I       ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.leggings_iron = createTextureFromMap([
"     IIII       ",
"    IIIIII      ",
"    IIIIII      ",
"     I  I       ",
"     I  I       ",
"     I  I       ",
"     I  I       ",
"     I  I       ",
"     I  I       ",
"     I  I       ",
"     I  I       ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.boots_iron = createTextureFromMap([
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"     II  II     ",
"     II  II     ",
"     II  II     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);


// ---------------------
//  GOLD-RÜSTUNG
// ---------------------

TEXTURES.helmet_gold = createTextureFromMap([
"      PP        ",
"     PPPP       ",
"    PPPPPP      ",
"    PPPPPP      ",
"    P    P      ",
"    P    P      ",
"    P    P      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.chestplate_gold = createTextureFromMap([
"      PP        ",
"     PPPP       ",
"    PPPPPP      ",
"    PPPPPP      ",
"    PPPPPP      ",
"    P PP P      ",
"    P PP P      ",
"    P PP P      ",
"    P PP P      ",
"    P PP P      ",
"     P  P       ",
"     P  P       ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.leggings_gold = createTextureFromMap([
"     PPPP       ",
"    PPPPPP      ",
"    PPPPPP      ",
"     P  P       ",
"     P  P       ",
"     P  P       ",
"     P  P       ",
"     P  P       ",
"     P  P       ",
"     P  P       ",
"     P  P       ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.boots_gold = createTextureFromMap([
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"     PP  PP     ",
"     PP  PP     ",
"     PP  PP     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);


// ---------------------
//  DIAMANT-RÜSTUNG
// ---------------------

TEXTURES.helmet_diamond = createTextureFromMap([
"      EE        ",
"     EEEE       ",
"    EEEEEE      ",
"    EEEEEE      ",
"    E    E      ",
"    E    E      ",
"    E    E      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.chestplate_diamond = createTextureFromMap([
"      EE        ",
"     EEEE       ",
"    EEEEEE      ",
"    EEEEEE      ",
"    EEEEEE      ",
"    E EE E      ",
"    E EE E      ",
"    E EE E      ",
"    E EE E      ",
"    E EE E      ",
"     E  E       ",
"     E  E       ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.leggings_diamond = createTextureFromMap([
"     EEEE       ",
"    EEEEEE      ",
"    EEEEEE      ",
"     E  E       ",
"     E  E       ",
"     E  E       ",
"     E  E       ",
"     E  E       ",
"     E  E       ",
"     E  E       ",
"     E  E       ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.boots_diamond = createTextureFromMap([
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"     EE  EE     ",
"     EE  EE     ",
"     EE  EE     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);
// =====================
//  ALLE ITEMS (16×16)
// =====================

// Stab
TEXTURES.item_stick = createTextureFromMap([
"                ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Kohle
TEXTURES.item_coal = createTextureFromMap([
"                ",
"                ",
"      AAAA      ",
"     AAAAAA     ",
"    AAAA AAA    ",
"    AAA  AAA    ",
"    AAAA AAA    ",
"     AAAAAA     ",
"      AAAA      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Holzkohle
TEXTURES.item_charcoal = createTextureFromMap([
"                ",
"                ",
"      BBBB      ",
"     BBBBBB     ",
"    BBBB BBB    ",
"    BBB  BBB    ",
"    BBBB BBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Eisenbarren
TEXTURES.item_iron_ingot = createTextureFromMap([
"                ",
"                ",
"     IIIIII     ",
"    IIIIIIII    ",
"   IIIIIIIIII   ",
"   IIIIIIIIII   ",
"   IIIIIIIIII   ",
"    IIIIIIII    ",
"     IIIIII     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Goldbarren
TEXTURES.item_gold_ingot = createTextureFromMap([
"                ",
"                ",
"     PPPPPP     ",
"    PPPPPPPP    ",
"   PPPPPPPPPP   ",
"   PPPPPPPPPP   ",
"   PPPPPPPPPP   ",
"    PPPPPPPP    ",
"     PPPPPP     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Kupferbarren
TEXTURES.item_copper_ingot = createTextureFromMap([
"                ",
"                ",
"     XXXXXXX    ",
"    XXXXXXXXX   ",
"   XXXXXXXXXXX  ",
"   XXXXXXXXXXX  ",
"   XXXXXXXXXXX  ",
"    XXXXXXXXX   ",
"     XXXXXXX    ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Diamant
TEXTURES.item_diamond = createTextureFromMap([
"                ",
"       EE       ",
"      EEEE      ",
"     EEEEEE     ",
"    EEEEEEEE    ",
"    EEEEEEEE    ",
"     EEEEEE     ",
"      EEEE      ",
"       EE       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Smaragd
TEXTURES.item_emerald = createTextureFromMap([
"                ",
"       UU       ",
"      UUUU      ",
"     UUUUUU     ",
"    UUUUUUUU    ",
"    UUUUUUUU    ",
"     UUUUUU     ",
"      UUUU      ",
"       UU       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Redstone
TEXTURES.item_redstone = createTextureFromMap([
"                ",
"       RR       ",
"      RRRR      ",
"     RRRRRR     ",
"     RRRRRR     ",
"      RRRR      ",
"       RR       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Lapis
TEXTURES.item_lapis = createTextureFromMap([
"                ",
"       QQ       ",
"      QQQQ      ",
"     QQQQQQ     ",
"     QQQQQQ     ",
"      QQQQ      ",
"       QQ       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Feuerstein
TEXTURES.item_flint = createTextureFromMap([
"                ",
"                ",
"      SSSS      ",
"     SSSSSS     ",
"     SSSSSS     ",
"      SSSS      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Leder
TEXTURES.item_leather = createTextureFromMap([
"                ",
"      BBBB      ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Papier
TEXTURES.item_paper = createTextureFromMap([
"                ",
"                ",
"   RRRRRRRRRR   ",
"   RRRRRRRRRR   ",
"   RRRRRRRRRR   ",
"   RRRRRRRRRR   ",
"   RRRRRRRRRR   ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Buch
TEXTURES.item_book = createTextureFromMap([
"                ",
"     RRRRRR     ",
"    RRRRRRRR    ",
"   RRRRRRRRRR   ",
"   RRRCCCCRRR   ",
"   RRRCCCCRRR   ",
"   RRRRRRRRRR   ",
"    RRRRRRRR    ",
"     RRRRRR     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Faden
TEXTURES.item_string = createTextureFromMap([
"                ",
"                ",
"   S  S  S  S   ",
"    S S S S     ",
"     S S S      ",
"    S S S S     ",
"   S  S  S  S   ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Feder
TEXTURES.item_feather = createTextureFromMap([
"                ",
"       R        ",
"      RR        ",
"     RRR        ",
"    RRRR        ",
"   RRRR         ",
"  RRRR          ",
"   RRR          ",
"    RR          ",
"     R          ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Pfeil
TEXTURES.item_arrow = createTextureFromMap([
"       R        ",
"      RRR       ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       B        ",
"       B        ",
"       B        ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Eimer leer
TEXTURES.item_bucket = createTextureFromMap([
"                ",
"                ",
"     MMMMMM     ",
"    M      M    ",
"    M      M    ",
"    M      M    ",
"     MMMMMM     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Eimer Wasser
TEXTURES.item_bucket_water = createTextureFromMap([
"                ",
"                ",
"     MMMMMM     ",
"    M      M    ",
"    M  QQ  M    ",
"    M QQQQ M    ",
"     MMMMMM     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Eimer Lava
TEXTURES.item_bucket_lava = createTextureFromMap([
"                ",
"                ",
"     MMMMMM     ",
"    M      M    ",
"    M  FF  M    ",
"    M FFFF M    ",
"     MMMMMM     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Apfel
TEXTURES.item_apple = createTextureFromMap([
"                ",
"       RR       ",
"      RRRR      ",
"     RRRRRR     ",
"     RRRRRR     ",
"      RRRR      ",
"       RR       ",
"        G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Brot
TEXTURES.item_bread = createTextureFromMap([
"                ",
"                ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Fleisch roh
TEXTURES.item_meat_raw = createTextureFromMap([
"                ",
"      RR        ",
"     RRRR       ",
"    RRRRRR      ",
"    RRRRRR      ",
"     RRRR       ",
"      RR        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Fleisch gekocht
TEXTURES.item_meat_cooked = createTextureFromMap([
"                ",
"      BB        ",
"     BBBB       ",
"    BBBBBB      ",
"    BBBBBB      ",
"     BBBB       ",
"      BB        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"
  // =====================
//  ALLE NAHRUNG (16×16)
// =====================

// Apfel
TEXTURES.food_apple = createTextureFromMap([
"                ",
"       RR       ",
"      RRRR      ",
"     RRRRRR     ",
"     RRRRRR     ",
"      RRRR      ",
"       RR       ",
"        G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Goldapfel
TEXTURES.food_golden_apple = createTextureFromMap([
"                ",
"       PP       ",
"      PPPP      ",
"     PPPPPP     ",
"     PPPPPP     ",
"      PPPP      ",
"       PP       ",
"        G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Verzauberter Goldapfel
TEXTURES.food_enchanted_golden_apple = createTextureFromMap([
"                ",
"       EE       ",
"      EEEE      ",
"     EEEEEE     ",
"     EEEEEE     ",
"      EEEE      ",
"       EE       ",
"        G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Brot
TEXTURES.food_bread = createTextureFromMap([
"                ",
"                ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Karotte
TEXTURES.food_carrot = createTextureFromMap([
"                ",
"        G       ",
"       GG       ",
"      GGG       ",
"     GGGG       ",
"     PPPP       ",
"     PPPP       ",
"      PPP       ",
"       PP       ",
"        P       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Goldkarotte
TEXTURES.food_golden_carrot = createTextureFromMap([
"                ",
"        P       ",
"       PP       ",
"      PPP       ",
"     PPPP       ",
"     EEEE       ",
"     EEEE       ",
"      EEE       ",
"       EE       ",
"        E       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Kartoffel
TEXTURES.food_potato = createTextureFromMap([
"                ",
"                ",
"      DDDD      ",
"     DDDDDD     ",
"     DDDDDD     ",
"      DDDD      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Gebackene Kartoffel
TEXTURES.food_baked_potato = createTextureFromMap([
"                ",
"                ",
"      BBBB      ",
"     BBBBBB     ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Giftige Kartoffel
TEXTURES.food_poisonous_potato = createTextureFromMap([
"                ",
"                ",
"      UUUU      ",
"     UUUUUU     ",
"     UUUUUU     ",
"      UUUU      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Melone
TEXTURES.food_melon = createTextureFromMap([
"                ",
"      GGGG      ",
"     GGGGGG     ",
"    GGGGGGGG    ",
"    RRRRRRRR    ",
"    RRRRRRRR    ",
"     RRRRRR     ",
"      RRRR      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Kürbiskuchen
TEXTURES.food_pumpkin_pie = createTextureFromMap([
"                ",
"                ",
"     PPPPPP     ",
"    PPPPPPPP    ",
"    PPPPPPPP    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Steak (gekocht)
TEXTURES.food_steak = createTextureFromMap([
"                ",
"      BBBB      ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Rindfleisch roh
TEXTURES.food_beef_raw = createTextureFromMap([
"                ",
"      RRRR      ",
"     RRRRRR     ",
"    RRRRRRRR    ",
"    RRRRRRRR    ",
"     RRRRRR     ",
"      RRRR      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Schweinefleisch roh
TEXTURES.food_pork_raw = createTextureFromMap([
"                ",
"      PPPP      ",
"     PPPPPP     ",
"    PPPPPPPP    ",
"    PPPPPPPP    ",
"     PPPPPP     ",
"      PPPP      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Schweinefleisch gekocht
TEXTURES.food_pork_cooked = createTextureFromMap([
"                ",
"      BBBB      ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Hähnchen roh
TEXTURES.food_chicken_raw = createTextureFromMap([
"                ",
"      RRRR      ",
"     RRRRRR     ",
"    RRRRRRRR    ",
"     RRRRRR     ",
"      RRRR      ",
"       RR       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Hähnchen gekocht
TEXTURES.food_chicken_cooked = createTextureFromMap([
"                ",
"      BBBB      ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"       BB       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Fisch roh
TEXTURES.food_fish_raw = createTextureFromMap([
"                ",
"      QQ        ",
"     QQQQ       ",
"    QQQQQQ      ",
"     QQQQ       ",
"      QQ        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Fisch gekocht
TEXTURES.food_fish_cooked = createTextureFromMap([
"                ",
"      BBB       ",
"     BBBBB      ",
"    BBBBBBB     ",
"     BBBBB      ",
"      BBB       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Lachs roh
TEXTURES.food_salmon_raw = createTextureFromMap([
"                ",
"      RR        ",
"     RRRR       ",
"    RRRRRR      ",
"     RRRR       ",
"      RR        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Lachs gekocht
TEXTURES.food_salmon_cooked = createTextureFromMap([
"                ",
"      BB        ",
"     BBBB       ",
"    BBBBBB      ",
"     BBBB       ",
"      BB        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Spinnenauge
TEXTURES.food_spider_eye = createTextureFromMap([
"                ",
"       RR       ",
"      RRRR      ",
"     RRRRRR     ",
"     RRRRRR     ",
"      RRRR      ",
"       RR       ",
"       RR       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Verfaultes Fleisch
TEXTURES.food_rotten_flesh = createTextureFromMap([
"                ",
"      DDDD      ",
"     DDDDDD     ",
"    DDDDDDDD    ",
"    DDDDDDDD    ",
"     DDDDDD     ",
"      DDDD      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Honigflasche
TEXTURES.food_honey_bottle = createTextureFromMap([
"                ",
"       PP       ",
"      PPPP      ",
"     PPPPPP     ",
"     PPPPPP     ",
"      PPPP      ",
"       PP       ",
"       MM       ",
"       MM       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Keks
TEXTURES.food_cookie = createTextureFromMap([
"                ",
"                ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);
// =====================
//  PAKET 1 – GRUNDBLÖCKE
// =====================

// Gras (oben)
TEXTURES.grass_top = addNoise(createTextureFromMap([
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD"
]));

// Gras (Seite)
TEXTURES.grass_side = addNoise(createTextureFromMap([
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD"
]));

// Gras (unten)
TEXTURES.grass_bottom = addNoise(createTextureFromMap([
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD"
]));

// Erde
TEXTURES.dirt = addNoise(createTextureFromMap([
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD"
]));

// Stein
TEXTURES.stone = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Kies
TEXTURES.gravel = addNoise(createTextureFromMap([
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs"
]));

// Sand
TEXTURES.sand = addNoise(createTextureFromMap([
"CCCCCCCCCCCCCCCC",
"CCcCCCCCCCCcCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCcCCCCcCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCcCCCCCCCCcCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCcCCCCcCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCcCCCCCCCCcCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCcCCCCcCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCcCCCCCCCCcCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC"
]));

// Lehm
TEXTURES.clay = addNoise(createTextureFromMap([
"LLLLLLLLLLLLLLLL",
"LlLLLLLLLLLlLLLL",
"LLLLLLLLLLLLLLLL",
"LLLLlLLLLlLLLLLL",
"LLLLLLLLLLLLLLLL",
"LlLLLLLLLLLlLLLL",
"LLLLLLLLLLLLLLLL",
"LLLLlLLLLlLLLLLL",
"LLLLLLLLLLLLLLLL",
"LlLLLLLLLLLlLLLL",
"LLLLLLLLLLLLLLLL",
"LLLLlLLLLlLLLLLL",
"LLLLLLLLLLLLLLLL",
"LlLLLLLLLLLlLLLL",
"LLLLLLLLLLLLLLLL",
"LLLLLLLLLLLLLLLL"
]));

// Bedrock
TEXTURES.bedrock = addNoise(createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]));

// =====================
//  ULTRA-REALISTISCHES WASSER (16×16)
// =====================

// Wasser (mit Lichtbrechung, Tiefenverlauf, Wellen)
TEXTURES.water = createTextureFromMap([
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl"
]);

// Extra-Realismus: leichte Wellenbewegung
TEXTURES.water = addNoise(TEXTURES.water, 6);
// =====================
//  PAKET 2 – HOLZ, BLÄTTER, PFLANZEN
// =====================

// Baumstamm – Seite
TEXTURES.log_side = addNoise(createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBBBbBBBBbBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBBBbBBBBbBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBBBbBBBBbBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]));

// Baumstamm – Oben
TEXTURES.log_top = addNoise(createTextureFromMap([
"bbbbbbbbbbbbbbbb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bBBBBBBBBBBBBBBb",
"bbbbbbbbbbbbbbbb"
]));

// Baumstamm – Unten (gleich wie oben)
TEXTURES.log_bottom = TEXTURES.log_top;

// Bretter
TEXTURES.planks = addNoise(createTextureFromMap([
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww",
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww",
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww",
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww",
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww",
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww",
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww",
"WWWWWWWWWWWWWWWW",
"wwwwwwwwwwwwwwww"
]));

// Blätter
TEXTURES.leaves = addNoise(createTextureFromMap([
"GGGGGGGGGGGGGGGG",
"GGGGgGGGGGGgGGGG",
"GGGGGGGGgGGGGGGG",
"GGgGGGGGGGGGGgGG",
"GGGGGGGGGGGGGGGG",
"GGGGgGGGGgGGGGGG",
"GGGGGGGGGGGGGGGG",
"GGgGGGGGGGGGGgGG",
"GGGGGGGGGGGGGGGG",
"GGGGgGGGGgGGGGGG",
"GGGGGGGGGGGGGGGG",
"GGgGGGGGGGGGGgGG",
"GGGGGGGGGGGGGGGG",
"GGGGgGGGGGGgGGGG",
"GGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGG"
]));

// Toter Busch
TEXTURES.dead_bush = createTextureFromMap([
"                ",
"       b        ",
"      bbb       ",
"     b b b      ",
"      bbb       ",
"       b        ",
"      b b       ",
"     b   b      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Grasbüschel
TEXTURES.tall_grass = createTextureFromMap([
"                ",
"       G        ",
"      GG        ",
"     GGG        ",
"      GG        ",
"       G        ",
"      GG        ",
"     G G        ",
"    G   G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Hoher Farn
TEXTURES.fern = createTextureFromMap([
"       G        ",
"      GGG       ",
"     GGGGG      ",
"    GGGGGGG     ",
"     GGGGG      ",
"      GGG       ",
"       G        ",
"      GGG       ",
"     G G G      ",
"    G  G  G     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Blume Rot
TEXTURES.flower_red = createTextureFromMap([
"                ",
"       RR       ",
"      RRRR      ",
"       RR       ",
"        G       ",
"        G       ",
"        G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Blume Gelb
TEXTURES.flower_yellow = createTextureFromMap([
"                ",
"       PP       ",
"      PPPP      ",
"       PP       ",
"        G       ",
"        G       ",
"        G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Pilz Braun
TEXTURES.mushroom_brown = createTextureFromMap([
"                ",
"      BBBB      ",
"     BBBBBB     ",
"      BBBB      ",
"       BB       ",
"       BB       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Pilz Rot
TEXTURES.mushroom_red = createTextureFromMap([
"                ",
"      RRRR      ",
"     RRRRRR     ",
"      RRRR      ",
"       RR       ",
"       RR       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// Kaktus
TEXTURES.cactus = addNoise(createTextureFromMap([
"GGGGGGGGGGGGGGGG",
"GgGGGGGGGGGGGGgG",
"GGGGGGGGGGGGGGGG",
"GgGGGGGGGGGGGGgG",
"GGGGGGGGGGGGGGGG",
"GgGGGGGGGGGGGGgG",
"GGGGGGGGGGGGGGGG",
"GgGGGGGGGGGGGGgG",
"GGGGGGGGGGGGGGGG",
"GgGGGGGGGGGGGGgG",
"GGGGGGGGGGGGGGGG",
"GgGGGGGGGGGGGGgG",
"GGGGGGGGGGGGGGGG",
"GgGGGGGGGGGGGGgG",
"GGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGG"
]));

// Zuckerrohr
TEXTURES.sugar_cane = createTextureFromMap([
"       G        ",
"       G        ",
"      GG        ",
"      GG        ",
"       G        ",
"       G        ",
"      GG        ",
"      GG        ",
"       G        ",
"       G        ",
"      GG        ",
"      GG        ",
"                ",
"                ",
"                ",
"                "
]);
// =====================
//  PAKET 3 – ERZ-BLÖCKE
// =====================

// Kohle-Erz
TEXTURES.ore_coal_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSCSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSCSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsCSSSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSCSSSSSSSSS",
"SSsSSSSCSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Eisen-Erz
TEXTURES.ore_iron_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSISSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSISSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSISsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSISSSSSSSSS",
"SSsSSSSISSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Gold-Erz
TEXTURES.ore_gold_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSPSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSPSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSPPSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSPSSSSSSSSS",
"SSsSSSSPSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Redstone-Erz
TEXTURES.ore_redstone_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSRSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSRSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSRRSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSRSSSSSSSSS",
"SSsSSSSRSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Lapis-Erz
TEXTURES.ore_lapis_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSQSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSQSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSQQSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSQSSSSSSSSS",
"SSsSSSSQSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Diamant-Erz
TEXTURES.ore_diamond_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSESSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSESSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSEESsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSESSSSSSSSS",
"SSsSSSSESSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Smaragd-Erz
TEXTURES.ore_emerald_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSUSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSUSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSUUSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSUSSSSSSSSS",
"SSsSSSSUSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// Kupfer-Erz
TEXTURES.ore_copper_block = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSsSSSSXSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSXSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSXXSsSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSsSSSSSSSSsSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSsSSSSsSSSSSS",
"SSSSSSXSSSSSSSSS",
"SSsSSSSXSSsSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));
// =====================
//  PAKET 4 – GEBÄUDE-BLÖCKE
// =====================

// ---------------------
//  Ziegel
// ---------------------
TEXTURES.bricks = addNoise(createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"rrrrrrrrrrrrrrrr",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"rrrrrrrrrrrrrrrr",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"rrrrrrrrrrrrrrrr",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"rrrrrrrrrrrrrrrr"
]));

// ---------------------
//  Steinziegel
// ---------------------
TEXTURES.stone_bricks = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"sSSSSSSSSSSSSSSs",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"sSSSSSSSSSSSSSSs",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"sSSSSSSSSSSSSSSs",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"sSSSSSSSSSSSSSSs"
]));

// ---------------------
//  Gemeißelte Steinziegel
// ---------------------
TEXTURES.stone_bricks_chiseled = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSssssssssssssSS",
"SSsSSSSSSSSSSsSS",
"SSsSSSSSSSSSSsSS",
"SSsSSSSSSSSSSsSS",
"SSsSSSSSSSSSSsSS",
"SSssssssssssssSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSssssssssssssSS",
"SSsSSSSSSSSSSsSS",
"SSsSSSSSSSSSSsSS",
"SSsSSSSSSSSSSsSS",
"SSsSSSSSSSSSSsSS",
"SSssssssssssssSS",
"SSSSSSSSSSSSSSSS"
]));

// ---------------------
//  Moosstein
// ---------------------
TEXTURES.mossy_stone = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSgSSSSgSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSgSSSSgSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSgSSSSgSSSSSS",
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// ---------------------
//  Moossteinziegel
// ---------------------
TEXTURES.mossy_stone_bricks = addNoise(createTextureFromMap([
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"sSSSSgSSgSSSSSSs",
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"sSSSSgSSgSSSSSSs",
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"sSSSSgSSgSSSSSSs",
"SSSSSSSSSSSSSSSS",
"SSgSSSSSSSSgSSSS",
"SSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSS"
]));

// ---------------------
//  Bruchstein
// ---------------------
TEXTURES.cobblestone = addNoise(createTextureFromMap([
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs"
]));

// ---------------------
//  Wolle (alle Farben)
// ---------------------
function wool(color) {
    return addNoise(createTextureFromMap([
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16)
    ]));
}

TEXTURES.wool_white = wool("R");
TEXTURES.wool_red = wool("P");
TEXTURES.wool_blue = wool("Q");
TEXTURES.wool_green = wool("U");
TEXTURES.wool_yellow = wool("F");
TEXTURES.wool_black = wool("A");
TEXTURES.wool_gray = wool("s");
TEXTURES.wool_light_gray = wool("r");
TEXTURES.wool_brown = wool("B");
TEXTURES.wool_orange = wool("f");
TEXTURES.wool_pink = wool("E");
TEXTURES.wool_lime = wool("G");
TEXTURES.wool_cyan = wool("L");
TEXTURES.wool_magenta = wool("C");
TEXTURES.wool_purple = wool("l");

// ---------------------
//  Beton (alle Farben)
// ---------------------
function concrete(color) {
    return createTextureFromMap([
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16)
    ]);
}

TEXTURES.concrete_white = concrete("R");
TEXTURES.concrete_red = concrete("P");
TEXTURES.concrete_blue = concrete("Q");
TEXTURES.concrete_green = concrete("U");
TEXTURES.concrete_yellow = concrete("F");
TEXTURES.concrete_black = concrete("A");
TEXTURES.concrete_gray = concrete("s");
TEXTURES.concrete_light_gray = concrete("r");
TEXTURES.concrete_brown = concrete("B");
TEXTURES.concrete_orange = concrete("f");
TEXTURES.concrete_pink = concrete("E");
TEXTURES.concrete_lime = concrete("G");
TEXTURES.concrete_cyan = concrete("L");
TEXTURES.concrete_magenta = concrete("C");
TEXTURES.concrete_purple = concrete("l");

// ---------------------
//  Glas
// ---------------------
TEXTURES.glass = createTextureFromMap([
"                ",
"   L        L   ",
"                ",
"        L       ",
"   L            ",
"                ",
"            L   ",
"                ",
"   L            ",
"        L       ",
"                ",
"            L   ",
"                ",
"   L        L   ",
"                ",
"                "
]);

// ---------------------
//  Getöntes Glas
// ---------------------
TEXTURES.glass_tinted = createTextureFromMap([
"llllllllllllllll",
"l            l  ",
"l llllllllll l  ",
"l l        l l  ",
"l l llllll l l  ",
"l l l    l l l  ",
"l l l ll l l l  ",
"l l l ll l l l  ",
"l l l    l l l  ",
"l l llllll l l  ",
"l l        l l  ",
"l llllllllll l  ",
"l            l  ",
"llllllllllllllll",
"llllllllllllllll",
"llllllllllllllll"
]);

// ---------------------
//  Spiegelblock
// ---------------------
TEXTURES.mirror = createTextureFromMap([
"rrrrrrrrrrrrrrrr",
"rRRRRRRRRRRRRRRr",
"rRrrrrrrrrrrrrRr",
"rRrRRRRRRRRRRrRr",
"rRrRrrrrrrrrRrRr",
"rRrRRRRRRRRRRrRr",
"rRrrrrrrrrrrrrRr",
"rRRRRRRRRRRRRRRr",
"rRRRRRRRRRRRRRRr",
"rRrrrrrrrrrrrrRr",
"rRrRRRRRRRRRRrRr",
"rRrRrrrrrrrrRrRr",
"rRrRRRRRRRRRRrRr",
"rRrrrrrrrrrrrrRr",
"rRRRRRRRRRRRRRRr",
"rrrrrrrrrrrrrrrr"
]);
// =====================
//  PAKET 5 – SPEZIALBLÖCKE
// =====================

// ---------------------
//  TNT
// ---------------------
TEXTURES.tnt = createTextureFromMap([
"FFFFFFFFFFFFFFFF",
"FffFffFffFffFffF",
"FFFFFFFFFFFFFFFF",
"FffFffFffFffFffF",
"FFFFFFFFFFFFFFFF",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);

// ---------------------
//  Crafting Table – oben
// ---------------------
TEXTURES.crafting_top = createTextureFromMap([
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);

// Crafting Table – Seite
TEXTURES.crafting_side = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC"
]);

// Crafting Table – vorne
TEXTURES.crafting_front = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"CCCCCCCCCCCCCCCC",
"CC      CC      ",
"CC      CC      ",
"CC      CC      ",
"CC      CC      ",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC"
]);

// ---------------------
//  Furnace / Ofen – oben
// ---------------------
TEXTURES.furnace_top = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// Furnace – Seite
TEXTURES.furnace_side = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// Furnace – vorne (inaktiv)
TEXTURES.furnace_front = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOOoooooooOOOOOO",
"OOOoooooooOOOOOO",
"OOOoooooooOOOOOO",
"OOOoooooooOOOOOO",
"OOOoooooooOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// Furnace – vorne (aktiv)
TEXTURES.furnace_front_lit = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OoOOoOOoOOoOOoOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOOfffffffOOOOOO",
"OOOffFFFFFfOOOOO",
"OOOfffffffOOOOOO",
"OOOffFFFFFfOOOOO",
"OOOfffffffOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// ---------------------
//  Chest – oben
// ---------------------
TEXTURES.chest_top = createTextureFromMap([
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC"
]);

// Chest – Seite
TEXTURES.chest_side = createTextureFromMap([
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc"
]);

// Chest – vorne
TEXTURES.chest_front = createTextureFromMap([
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc",
"CCCC  KK  CCCCCC",
"cccc  KK  cccccc",
"CCCC  KK  CCCCCC",
"cccccccccccccccc",
"CCCCCCCCCCCCCCCC",
"cccccccccccccccc"
]);

// ---------------------
//  Redstone Torch
// ---------------------
TEXTURES.redstone_torch = createTextureFromMap([
"                ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       B        ",
"       B        ",
"       B        ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// ---------------------
//  Redstone Dust
// ---------------------
TEXTURES.redstone_dust = createTextureFromMap([
"                ",
"                ",
"     R   R      ",
"      R R       ",
"       R        ",
"      R R       ",
"     R   R      ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// ---------------------
//  Glowstone
// ---------------------
TEXTURES.glowstone = addNoise(createTextureFromMap([
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf",
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf",
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf",
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf",
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf",
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf",
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf",
"FFFFfFFFFfFFFFfF",
"fFFFFfFFFFfFFFFf"
]));

// ---------------------
//  Obsidian
// ---------------------
TEXTURES.obsidian = addNoise(createTextureFromMap([
"oooooooooooooooo",
"oOOoOOoOOoOOoOOo",
"oooooooooooooooo",
"OOoOOoOOoOOoOOoO",
"oooooooooooooooo",
"oOOoOOoOOoOOoOOo",
"oooooooooooooooo",
"OOoOOoOOoOOoOOoO",
"oooooooooooooooo",
"oOOoOOoOOoOOoOOo",
"oooooooooooooooo",
"OOoOOoOOoOOoOOoO",
"oooooooooooooooo",
"oOOoOOoOOoOOoOOo",
"oooooooooooooooo",
"oooooooooooooooo"
]));
// =====================
//  PAKET 6 – FLÜSSIGKEITEN
// =====================

// --------------------------------------------------
//  WASSER – RUHIG (sehr realistisch, Lichtbrechung)
// --------------------------------------------------
TEXTURES.water_still = addNoise(createTextureFromMap([
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl"
]), 4);

// --------------------------------------------------
//  WASSER – WELLEN (bewegte Oberfläche)
// --------------------------------------------------
TEXTURES.water_wave = addNoise(createTextureFromMap([
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl",
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl",
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl",
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl",
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl",
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl",
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl",
"LllLLLlllLLLlllL",
"LLLlllLLLlllLLLl"
]), 7);

// --------------------------------------------------
//  WASSER – TIEF (dunkler, mehr Tiefe)
// --------------------------------------------------
TEXTURES.water_deep = addNoise(createTextureFromMap([
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl"
]), 10);

// --------------------------------------------------
//  WASSERFALL (vertikale Strömung)
// --------------------------------------------------
TEXTURES.waterfall = addNoise(createTextureFromMap([
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL",
"LLlLLlLLlLLlLLlL"
]), 5);

// --------------------------------------------------
//  LAVA – RUHIG (glühende Oberfläche)
// --------------------------------------------------
TEXTURES.lava_still = addNoise(createTextureFromMap([
"ffffFFffffFFffff",
"FFffffFFffffFFff",
"ffffFFffffFFffff",
"FFffffFFffffFFff",
"ffffFFffffFFffff",
"FFffffFFffffFFff",
"ffffFFffffFFffff",
"FFffffFFffffFFff",
"ffffFFffffFFffff",
"FFffffFFffffFFff",
"ffffFFffffFFffff",
"FFffffFFffffFFff",
"ffffFFffffFFffff",
"FFffffFFffffFFff",
"ffffFFffffFFffff",
"FFffffFFffffFFff"
]), 8);

// --------------------------------------------------
//  LAVA – GLÜHEND (stärkerer Kontrast)
// --------------------------------------------------
TEXTURES.lava_glow = addNoise(createTextureFromMap([
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF",
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF",
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF",
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF",
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF",
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF",
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF",
"FFFFffffFFFFffff",
"ffffFFFFffffFFFF"
]), 12);

// --------------------------------------------------
//  LAVA – FLUSS (horizontale Strömung)
// --------------------------------------------------
TEXTURES.lava_flow = addNoise(createTextureFromMap([
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF",
"fffFFFfffFFFfffF"
]), 10);
// =====================
//  PAKET A – NATUR & TERRAIN
// =====================

// ---------------------
//  Schnee
// ---------------------
TEXTURES.snow = addNoise(createTextureFromMap([
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRrRRR",
"RRRRRRRRRRRRRRRR",
"RRRRrRRRRrRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRrRRR",
"RRRRRRRRRRRRRRRR",
"RRRRrRRRRrRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRrRRR",
"RRRRRRRRRRRRRRRR",
"RRRRrRRRRrRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRrRRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR"
]), 3);

// ---------------------
//  Schneegras (oben)
// ---------------------
TEXTURES.snow_grass_top = addNoise(createTextureFromMap([
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"HHHHHHHHHHHHHHHH",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDD"
]));

// ---------------------
//  Eis
// ---------------------
TEXTURES.ice = addNoise(createTextureFromMap([
"LLLLLLLLLLLLLLLL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl",
"LLLllLLLllLLLllL",
"LllLLLllLLLllLLl"
]), 5);

// ---------------------
//  Podzol
// ---------------------
TEXTURES.podzol = addNoise(createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD"
]));

// ---------------------
//  Myzel
// ---------------------
TEXTURES.mycelium = addNoise(createTextureFromMap([
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"lllLLLLllllLLLLl",
"llllLLLLllllLLLL",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD"
]));

// ---------------------
//  Schlamm
// ---------------------
TEXTURES.mud = addNoise(createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"bbbbbbbbbbbbbbbb",
"bBBBBBBBBBBBBBBb",
"bbbbbbbbbbbbbbbb",
"bBBBBBBBBBBBBBBb",
"bbbbbbbbbbbbbbbb",
"bBBBBBBBBBBBBBBb",
"bbbbbbbbbbbbbbbb",
"bBBBBBBBBBBBBBBb",
"bbbbbbbbbbbbbbbb",
"bBBBBBBBBBBBBBBb",
"bbbbbbbbbbbbbbbb"
]));

// ---------------------
//  Wurzeln
// ---------------------
TEXTURES.roots = createTextureFromMap([
"                ",
"      b b       ",
"     bbbb       ",
"    bb  bb      ",
"     bbbb       ",
"      bb        ",
"     b  b       ",
"    b    b      ",
"   b      b     ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// ---------------------
//  Gefrorener Boden
// ---------------------
TEXTURES.frozen_dirt = addNoise(createTextureFromMap([
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRrRRR",
"RRRRRRRRRRRRRRRR",
"RRRRrRRRRrRRRRRR",
"RRRRRRRRRRRRRRRR",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD"
]));

// ---------------------
//  Kieselboden
// ---------------------
TEXTURES.pebble_ground = addNoise(createTextureFromMap([
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"sSSsSSsSSsSSsSSs",
"SSsSSsSSsSSsSSsS",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD",
"DDDDdDDDDdDDDDDD",
"DDDDDDDDDDDDDDDD",
"DDdDDDDDDDDdDDDD",
"DDDDDDDDDDDDDDDD"
]));
// =====================
//  PAKET B – LANDWIRTSCHAFT & PFLANZEN
// =====================

// --------------------------------------------------
//  WEIZEN – 8 WACHSTUMSSTUFEN
// --------------------------------------------------
function wheatStage(level) {
    const chars = ["g","g","G","G","H","H","P","P"][level];
    return createTextureFromMap([
        "                ",
        "       "+chars+"        ",
        "      "+chars+chars+"        ",
        "     "+chars+chars+chars+"        ",
        "      "+chars+chars+"        ",
        "       "+chars+"        ",
        "      "+chars+chars+"        ",
        "     "+chars+" "+chars+"       ",
        "    "+chars+"   "+chars+"      ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                "
    ]);
}

TEXTURES.wheat_0 = wheatStage(0);
TEXTURES.wheat_1 = wheatStage(1);
TEXTURES.wheat_2 = wheatStage(2);
TEXTURES.wheat_3 = wheatStage(3);
TEXTURES.wheat_4 = wheatStage(4);
TEXTURES.wheat_5 = wheatStage(5);
TEXTURES.wheat_6 = wheatStage(6);
TEXTURES.wheat_7 = wheatStage(7);

// --------------------------------------------------
//  KAROTTEN – 4 STUFEN
// --------------------------------------------------
function carrotStage(level) {
    const chars = ["g","G","P","F"][level];
    return createTextureFromMap([
        "                ",
        "       "+chars+"        ",
        "      "+chars+chars+"        ",
        "     "+chars+chars+chars+"        ",
        "      "+chars+chars+"        ",
        "       "+chars+"        ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                "
    ]);
}

TEXTURES.carrot_0 = carrotStage(0);
TEXTURES.carrot_1 = carrotStage(1);
TEXTURES.carrot_2 = carrotStage(2);
TEXTURES.carrot_3 = carrotStage(3);

// --------------------------------------------------
//  KARTOFFELN – 4 STUFEN
// --------------------------------------------------
function potatoStage(level) {
    const chars = ["g","G","B","b"][level];
    return createTextureFromMap([
        "                ",
        "       "+chars+"        ",
        "      "+chars+chars+"        ",
        "     "+chars+chars+chars+"        ",
        "      "+chars+chars+"        ",
        "       "+chars+"        ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                "
    ]);
}

TEXTURES.potato_0 = potatoStage(0);
TEXTURES.potato_1 = potatoStage(1);
TEXTURES.potato_2 = potatoStage(2);
TEXTURES.potato_3 = potatoStage(3);

// --------------------------------------------------
//  BEERENBUSCH – 4 STUFEN
// --------------------------------------------------
function berryBush(level) {
    const leaf = "G";
    const berry = [" ","r","R","P"][level];
    return createTextureFromMap([
        "                ",
        "     "+leaf+leaf+leaf+"       ",
        "    "+leaf+berry+leaf+leaf+"      ",
        "   "+leaf+leaf+leaf+berry+leaf+"     ",
        "    "+leaf+leaf+berry+leaf+"      ",
        "     "+leaf+leaf+leaf+"       ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                "
    ]);
}

TEXTURES.berry_0 = berryBush(0);
TEXTURES.berry_1 = berryBush(1);
TEXTURES.berry_2 = berryBush(2);
TEXTURES.berry_3 = berryBush(3);

// --------------------------------------------------
//  BAMBUS – jung + ausgewachsen
// --------------------------------------------------
TEXTURES.bamboo_small = createTextureFromMap([
"                ",
"       G        ",
"       G        ",
"       G        ",
"       G        ",
"       G        ",
"       G        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

TEXTURES.bamboo_big = createTextureFromMap([
"       G        ",
"       G        ",
"      GGG       ",
"      GGG       ",
"       G        ",
"       G        ",
"      GGG       ",
"      GGG       ",
"       G        ",
"       G        ",
"      GGG       ",
"      GGG       ",
"       G        ",
"       G        ",
"                ",
"                "
]);

// --------------------------------------------------
//  SETZLINGE – 4 VARIANTEN
// --------------------------------------------------
function sapling(char) {
    return createTextureFromMap([
        "                ",
        "       "+char+"        ",
        "      "+char+char+"        ",
        "       "+char+"        ",
        "       "+char+"        ",
        "      "+char+char+"        ",
        "     "+char+"  "+char+"      ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                "
    ]);
}

TEXTURES.sapling_oak = sapling("G");
TEXTURES.sapling_birch = sapling("g");
TEXTURES.sapling_spruce = sapling("B");
TEXTURES.sapling_jungle = sapling("U");

// --------------------------------------------------
//  MELONENSTAMM
// --------------------------------------------------
TEXTURES.melon_stem = createTextureFromMap([
"                ",
"       G        ",
"      GG        ",
"     GGG        ",
"      GG        ",
"       G        ",
"      GG        ",
"     G G        ",
"    G   G       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// --------------------------------------------------
//  KÜRBISSTAMM
// --------------------------------------------------
TEXTURES.pumpkin_stem = createTextureFromMap([
"                ",
"       P        ",
"      PP        ",
"     PPP        ",
"      PP        ",
"       P        ",
"      PP        ",
"     P P        ",
"    P   P       ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);
// =====================
//  PAKET C – DEKO-BLÖCKE
// =====================

// ---------------------
//  Laterne
// ---------------------
TEXTURES.lantern = createTextureFromMap([
"       F        ",
"      FFF       ",
"       F        ",
"      PPP       ",
"     PFFFFP     ",
"    PFFFFFFP    ",
"    PFFFFFFP    ",
"    PFFFFFFP    ",
"     PFFFFP     ",
"      PPP       ",
"       P        ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// ---------------------
//  Fackel
// ---------------------
TEXTURES.torch = createTextureFromMap([
"       R        ",
"      RRR       ",
"       R        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"       B        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// ---------------------
//  Kerze
// ---------------------
TEXTURES.candle = createTextureFromMap([
"       F        ",
"       F        ",
"       F        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"       R        ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// ---------------------
//  Teppiche (alle Farben)
// ---------------------
function carpet(color) {
    return createTextureFromMap([
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        color.repeat(16),
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                ",
        "                "
    ]);
}

TEXTURES.carpet_white = carpet("R");
TEXTURES.carpet_red = carpet("P");
TEXTURES.carpet_blue = carpet("Q");
TEXTURES.carpet_green = carpet("U");
TEXTURES.carpet_yellow = carpet("F");
TEXTURES.carpet_black = carpet("A");
TEXTURES.carpet_gray = carpet("s");
TEXTURES.carpet_light_gray = carpet("r");
TEXTURES.carpet_brown = carpet("B");
TEXTURES.carpet_orange = carpet("f");
TEXTURES.carpet_pink = carpet("E");
TEXTURES.carpet_lime = carpet("G");
TEXTURES.carpet_cyan = carpet("L");
TEXTURES.carpet_magenta = carpet("C");
TEXTURES.carpet_purple = carpet("l");

// ---------------------
//  Banner (Grundtextur)
// ---------------------
TEXTURES.banner = createTextureFromMap([
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"      PPPP      ",
"                "
]);

// ---------------------
//  Bücherregal
// ---------------------
TEXTURES.bookshelf = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BRRRPPPGGGQQQBBB",
"BRRRPPPGGGQQQBBB",
"BBBBBBBBBBBBBBBB",
"BRRRPPPGGGQQQBBB",
"BRRRPPPGGGQQQBBB",
"BBBBBBBBBBBBBBBB",
"BRRRPPPGGGQQQBBB",
"BRRRPPPGGGQQQBBB",
"BBBBBBBBBBBBBBBB",
"BRRRPPPGGGQQQBBB",
"BRRRPPPGGGQQQBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);

// ---------------------
//  Rahmen (Item Frame)
// ---------------------
TEXTURES.item_frame = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BB            BB",
"BBBBBBBBBBBBBBBB"
]);

// ---------------------
//  Blumentopf
// ---------------------
TEXTURES.flower_pot = createTextureFromMap([
"                ",
"                ",
"                ",
"                ",
"      BBBB      ",
"     BBBBBB     ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"    BBBBBBBB    ",
"     BBBBBB     ",
"      BBBB      ",
"                ",
"                ",
"                ",
"                ",
"                "
]);
// =====================
//  PAKET D – MASCHINEN & REDSTONE
// =====================

// --------------------------------------------------
//  KOLBEN (PISTON) – Seite
// --------------------------------------------------
TEXTURES.piston_side = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);

// Kolben – Kopf
TEXTURES.piston_head = createTextureFromMap([
"WWWWWWWWWWWWWWWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWwwwwwwwwwwwwWW",
"WWWWWWWWWWWWWWWW",
"WWWWWWWWWWWWWWWW"
]);

// --------------------------------------------------
//  KLEBRIGER KOLBEN
// --------------------------------------------------
TEXTURES.piston_sticky_head = createTextureFromMap([
"GGGGGGGGGGGGGGGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggGGggggGG",
"GGggggggGGggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGggggggggggggGG",
"GGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGG"
]);

// --------------------------------------------------
//  DISPENSER
// --------------------------------------------------
TEXTURES.dispenser = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOooooooOOoOOO",
"OOoOooooooOOoOOO",
"OOoOooooooOOoOOO",
"OOoOooooooOOoOOO",
"OOoOooooooOOoOOO",
"OOoOooooooOOoOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// --------------------------------------------------
//  DROPPER
// --------------------------------------------------
TEXTURES.dropper = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOOOOOOOOoOOO",
"OOoOOOOOOOOOoOOO",
"OOoOOOOOOOOOoOOO",
"OOoOOOOOOOOOoOOO",
"OOoOOOOOOOOOoOOO",
"OOoOOOOOOOOOoOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// --------------------------------------------------
//  HOPPER
// --------------------------------------------------
TEXTURES.hopper = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOooooooooooooOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// --------------------------------------------------
//  REPEATER
// --------------------------------------------------
TEXTURES.repeater = createTextureFromMap([
"RRRRRRRRRRRRRRRR",
"R              R",
"R   RRRR  RRRR  R",
"R   R  R  R  R  R",
"R   RRRR  RRRR  R",
"R              R",
"R   RRRR  RRRR  R",
"R   R  R  R  R  R",
"R   RRRR  RRRR  R",
"R              R",
"R              R",
"R              R",
"R              R",
"R              R",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR"
]);

// --------------------------------------------------
//  COMPARATOR
// --------------------------------------------------
TEXTURES.comparator = createTextureFromMap([
"RRRRRRRRRRRRRRRR",
"R              R",
"R   RRRR  RRRR  R",
"R   R  R  R  R  R",
"R   RRRR  RRRR  R",
"R      RR       R",
"R      RR       R",
"R   RRRR  RRRR  R",
"R   R  R  R  R  R",
"R   RRRR  RRRR  R",
"R              R",
"R              R",
"R              R",
"R              R",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR"
]);

// --------------------------------------------------
//  OBSERVER – vorne
// --------------------------------------------------
TEXTURES.observer_front = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOooooooooooooOO",
"OOoOOOOOOOOOOoOO",
"OOoOoooooooOoOOO",
"OOoOoooooooOoOOO",
"OOoOoooooooOoOOO",
"OOoOoooooooOoOOO",
"OOoOoooooooOoOOO",
"OOoOoooooooOoOOO",
"OOoOOOOOOOOOOoOO",
"OOooooooooooooOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// --------------------------------------------------
//  OBSERVER – Seite
// --------------------------------------------------
TEXTURES.observer_side = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);
// =====================
//  PAKET E – ERZ-VOLLBLÖCKE
// =====================

// --------------------------------------------------
//  KOHLEBLOCK
// --------------------------------------------------
TEXTURES.block_coal = addNoise(createTextureFromMap([
"AAAAAAAAAAAAAAAA",
"AaAAAAAAAAAAAAaA",
"AAAAAAAAAAAAAAAA",
"AAAAaAAAAAaAAAAA",
"AAAAAAAAAAAAAAAA",
"AaAAAAAAAAAAAAaA",
"AAAAAAAAAAAAAAAA",
"AAAAaAAAAAaAAAAA",
"AAAAAAAAAAAAAAAA",
"AaAAAAAAAAAAAAaA",
"AAAAAAAAAAAAAAAA",
"AAAAaAAAAAaAAAAA",
"AAAAAAAAAAAAAAAA",
"AaAAAAAAAAAAAAaA",
"AAAAAAAAAAAAAAAA",
"AAAAAAAAAAAAAAAA"
]), 4);

// --------------------------------------------------
//  EISENBLOCK
// --------------------------------------------------
TEXTURES.block_iron = addNoise(createTextureFromMap([
"IIIIIIIIIIIIIIII",
"IIiIIIIIIIIIIiII",
"IIIIIIIIIIIIIIII",
"IIIIiIIIIiIIIIII",
"IIIIIIIIIIIIIIII",
"IIiIIIIIIIIIIiII",
"IIIIIIIIIIIIIIII",
"IIIIiIIIIiIIIIII",
"IIIIIIIIIIIIIIII",
"IIiIIIIIIIIIIiII",
"IIIIIIIIIIIIIIII",
"IIIIiIIIIiIIIIII",
"IIIIIIIIIIIIIIII",
"IIiIIIIIIIIIIiII",
"IIIIIIIIIIIIIIII",
"IIIIIIIIIIIIIIII"
]), 3);

// --------------------------------------------------
//  GOLDBLOCK
// --------------------------------------------------
TEXTURES.block_gold = addNoise(createTextureFromMap([
"FFFFFFFFFFFFFFFF",
"FFfFFFFFFFFFFfFF",
"FFFFFFFFFFFFFFFF",
"FFFFfFFFFfFFFFFF",
"FFFFFFFFFFFFFFFF",
"FFfFFFFFFFFFFfFF",
"FFFFFFFFFFFFFFFF",
"FFFFfFFFFfFFFFFF",
"FFFFFFFFFFFFFFFF",
"FFfFFFFFFFFFFfFF",
"FFFFFFFFFFFFFFFF",
"FFFFfFFFFfFFFFFF",
"FFFFFFFFFFFFFFFF",
"FFfFFFFFFFFFFfFF",
"FFFFFFFFFFFFFFFF",
"FFFFFFFFFFFFFFFF"
]), 3);

// --------------------------------------------------
//  DIAMANTBLOCK
// --------------------------------------------------
TEXTURES.block_diamond = addNoise(createTextureFromMap([
"EEEEEEEEEEEEEEEE",
"EEeEEEEEEEEEEeEE",
"EEEEEEEEEEEEEEEE",
"EEEEeEEEEeEEEEEE",
"EEEEEEEEEEEEEEEE",
"EEeEEEEEEEEEEeEE",
"EEEEEEEEEEEEEEEE",
"EEEEeEEEEeEEEEEE",
"EEEEEEEEEEEEEEEE",
"EEeEEEEEEEEEEeEE",
"EEEEEEEEEEEEEEEE",
"EEEEeEEEEeEEEEEE",
"EEEEEEEEEEEEEEEE",
"EEeEEEEEEEEEEeEE",
"EEEEEEEEEEEEEEEE",
"EEEEEEEEEEEEEEEE"
]), 4);

// --------------------------------------------------
//  SMARAGDBLOCK
// --------------------------------------------------
TEXTURES.block_emerald = addNoise(createTextureFromMap([
"UUUUUUUUUUUUUUUU",
"UUuUUUUUUUUUUuUU",
"UUUUUUUUUUUUUUUU",
"UUUUuUUUUuUUUUUU",
"UUUUUUUUUUUUUUUU",
"UUuUUUUUUUUUUuUU",
"UUUUUUUUUUUUUUUU",
"UUUUuUUUUuUUUUUU",
"UUUUUUUUUUUUUUUU",
"UUuUUUUUUUUUUuUU",
"UUUUUUUUUUUUUUUU",
"UUUUuUUUUuUUUUUU",
"UUUUUUUUUUUUUUUU",
"UUuUUUUUUUUUUuUU",
"UUUUUUUUUUUUUUUU",
"UUUUUUUUUUUUUUUU"
]), 4);

// --------------------------------------------------
//  REDSTONEBLOCK
// --------------------------------------------------
TEXTURES.block_redstone = addNoise(createTextureFromMap([
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRRrRR",
"RRRRRRRRRRRRRRRR",
"RRRRrRRRRrRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRRrRR",
"RRRRRRRRRRRRRRRR",
"RRRRrRRRRrRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRRrRR",
"RRRRRRRRRRRRRRRR",
"RRRRrRRRRrRRRRRR",
"RRRRRRRRRRRRRRRR",
"RRrRRRRRRRRRRrRR",
"RRRRRRRRRRRRRRRR",
"RRRRRRRRRRRRRRRR"
]), 5);

// --------------------------------------------------
//  LAPISBLOCK
// --------------------------------------------------
TEXTURES.block_lapis = addNoise(createTextureFromMap([
"QQQQQQQQQQQQQQQQ",
"QQqQQQQQQQQQQqQQ",
"QQQQQQQQQQQQQQQQ",
"QQQQqQQQQqQQQQQQ",
"QQQQQQQQQQQQQQQQ",
"QQqQQQQQQQQQQqQQ",
"QQQQQQQQQQQQQQQQ",
"QQQQqQQQQqQQQQQQ",
"QQQQQQQQQQQQQQQQ",
"QQqQQQQQQQQQQqQQ",
"QQQQQQQQQQQQQQQQ",
"QQQQqQQQQqQQQQQQ",
"QQQQQQQQQQQQQQQQ",
"QQqQQQQQQQQQQqQQ",
"QQQQQQQQQQQQQQQQ",
"QQQQQQQQQQQQQQQQ"
]), 4);

// --------------------------------------------------
//  KUPFERBLOCK
// --------------------------------------------------
TEXTURES.block_copper = addNoise(createTextureFromMap([
"XXXXXXXXXXXXXXXx",
"XXxXXXXXXXXXXXxX",
"XXXXXXXXXXXXXXXx",
"XXXXxXXXXXxXXXXX",
"XXXXXXXXXXXXXXXx",
"XXxXXXXXXXXXXXxX",
"XXXXXXXXXXXXXXXx",
"XXXXxXXXXXxXXXXX",
"XXXXXXXXXXXXXXXx",
"XXxXXXXXXXXXXXxX",
"XXXXXXXXXXXXXXXx",
"XXXXxXXXXXxXXXXX",
"XXXXXXXXXXXXXXXx",
"XXxXXXXXXXXXXXxX",
"XXXXXXXXXXXXXXXx",
"XXXXXXXXXXXXXXXx"
]), 4);

// --------------------------------------------------
//  KUPFER – OXIDATION STUFE 1
// --------------------------------------------------
TEXTURES.block_copper_oxid1 = addNoise(createTextureFromMap([
"LLXXXXXXXXXXXXLL",
"LLxXXXXXXXXXXxLL",
"LLXXXXXXXXXXXXLL",
"LLXXxXXXXxXXXXXLL",
"LLXXXXXXXXXXXXLL",
"LLxXXXXXXXXXXxLL",
"LLXXXXXXXXXXXXLL",
"LLXXxXXXXxXXXXXLL",
"LLXXXXXXXXXXXXLL",
"LLxXXXXXXXXXXxLL",
"LLXXXXXXXXXXXXLL",
"LLXXxXXXXxXXXXXLL",
"LLXXXXXXXXXXXXLL",
"LLxXXXXXXXXXXxLL",
"LLXXXXXXXXXXXXLL",
"LLXXXXXXXXXXXXLL"
]), 5);

// --------------------------------------------------
//  KUPFER – OXIDATION STUFE 2
// --------------------------------------------------
TEXTURES.block_copper_oxid2 = addNoise(createTextureFromMap([
"LLLLLLLLLLLLLLLL",
"LLlLLLLLLLLLLlLL",
"LLLLLLLLLLLLLLLL",
"LLLLlLLLLlLLLLLL",
"LLLLLLLLLLLLLLLL",
"LLlLLLLLLLLLLlLL",
"LLLLLLLLLLLLLLLL",
"LLLLlLLLLlLLLLLL",
"LLLLLLLLLLLLLLLL",
"LLlLLLLLLLLLLlLL",
"LLLLLLLLLLLLLLLL",
"LLLLlLLLLlLLLLLL",
"LLLLLLLLLLLLLLLL",
"LLlLLLLLLLLLLlLL",
"LLLLLLLLLLLLLLLL",
"LLLLLLLLLLLLLLLL"
]), 6);

// --------------------------------------------------
//  KUPFER – OXIDATION STUFE 3 (voll oxidiert)
// --------------------------------------------------
TEXTURES.block_copper_oxid3 = addNoise(createTextureFromMap([
"GGGGGGGGGGGGGGGG",
"GGgGGGGGGGGGGgGG",
"GGGGGGGGGGGGGGGG",
"GGGGgGGGGgGGGGGG",
"GGGGGGGGGGGGGGGG",
"GGgGGGGGGGGGGgGG",
"GGGGGGGGGGGGGGGG",
"GGGGgGGGGgGGGGGG",
"GGGGGGGGGGGGGGGG",
"GGgGGGGGGGGGGgGG",
"GGGGGGGGGGGGGGGG",
"GGGGgGGGGgGGGGGG",
"GGGGGGGGGGGGGGGG",
"GGgGGGGGGGGGGgGG",
"GGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGG"
]), 7);
// =====================
//  PAKET F – WERKBANK-ÄHNLICHE BLÖCKE
// =====================

// --------------------------------------------------
//  AMBOSS – OBERSEITE
// --------------------------------------------------
TEXTURES.anvil_top = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOooooooooooooOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// AMBOSS – SEITE
TEXTURES.anvil_side = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// --------------------------------------------------
//  SCHLEIFSTEIN
// --------------------------------------------------
TEXTURES.grindstone = createTextureFromMap([
"       SS       ",
"     SSSSSS     ",
"    SSSSSSSS    ",
"   SSSSSSSSSS   ",
"   SSSSSSSSSS   ",
"    SSSSSSSS    ",
"     SSSSSS     ",
"       SS       ",
"       BB       ",
"       BB       ",
"       BB       ",
"                ",
"                ",
"                ",
"                ",
"                "
]);

// --------------------------------------------------
//  SCHMIEDETISCH – OBERSEITE
// --------------------------------------------------
TEXTURES.smithing_top = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBSSSSSSSSSSSSBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);

// SCHMIEDETISCH – SEITE
TEXTURES.smithing_side = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"BBbBBBBBBBBBBbBB",
"BBBBBBBBBBBBBBBB",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC"
]);

// --------------------------------------------------
//  FASS – OBERSEITE
// --------------------------------------------------
TEXTURES.barrel_top = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBCCCCCCCCCCCCBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);

// FASS – SEITE
TEXTURES.barrel_side = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBccccccccccccBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);

// --------------------------------------------------
//  RÄUCHEROFEN
// --------------------------------------------------
TEXTURES.smoker = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoooooooOOOOOOO",
"OOoooooooOOOOOOO",
"OOoooooooOOOOOOO",
"OOoooooooOOOOOOO",
"OOoooooooOOOOOOO",
"OOoooooooOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// --------------------------------------------------
//  HOCHOFEN
// --------------------------------------------------
TEXTURES.blast_furnace = createTextureFromMap([
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOoOOOOOOOOOOoOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOoOOoOOoOOoOOoO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO",
"OOOOOOOOOOOOOOOO"
]);

// --------------------------------------------------
//  KARTENTISCH
// --------------------------------------------------
TEXTURES.cartography = createTextureFromMap([
"CCCCCCCCCCCCCCCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCPPPPPPPPPPPPCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC",
"CCCCCCCCCCCCCCCC"
]);

// --------------------------------------------------
//  WEBSTUHL
// --------------------------------------------------
TEXTURES.loom = createTextureFromMap([
"BBBBBBBBBBBBBBBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBWWWWWWWWWWWWBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB",
"BBBBBBBBBBBBBBBB"
]);
