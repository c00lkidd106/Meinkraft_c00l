// ==============================================
// INVENTAR-SYSTEM
// ==============================================

const INVENTORY = {
    items: {}, // z.B. { dirt: 12, stone: 3 }
    hotbar: ["hand", null, null, null, null, null, null, null, null],
    selectedSlot: 0
};

// Item hinzufügen
function addItem(item) {
    if (!item || item === "air") return;

    if (!INVENTORY.items[item]) {
        INVENTORY.items[item] = 1;
    } else {
        INVENTORY.items[item]++;
    }

    console.log("Item erhalten:", item, "→", INVENTORY.items[item]);
}
