/* ===============================
   GLOBAL
=============================== */

body {
    margin: 0;
    padding: 0;
    background: #111;
    font-family: Arial, sans-serif;
    color: white;
    overflow: hidden;
}

.hidden {
    display: none;
}

/* ===============================
   MENÜ CONTAINER
=============================== */

.menu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    padding: 25px;
    background: rgba(0, 0, 0, 0.65);
    border: 2px solid #00ff88;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 20px #00ff88;
}

/* ===============================
   TITEL
=============================== */

.menu h1,
.menu h2 {
    margin: 0 0 20px 0;
    font-weight: bold;
    text-shadow: 0 0 10px #00ff88;
}

/* ===============================
   BUTTONS
=============================== */

button {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid #00ff88;
    border-radius: 6px;
    background: #003322;
    color: #00ffcc;
    cursor: pointer;
    transition: 0.15s;
}

button:hover {
    background: #005533;
    color: white;
    box-shadow: 0 0 10px #00ff88;
}

button:active {
    background: #00aa66;
}

/* ===============================
   BACK BUTTON
=============================== */

.back-btn {
    margin-top: 20px;
    background: #222;
    border-color: #888;
    color: #ccc;
}

.back-btn:hover {
    background: #444;
    color: white;
    box-shadow: 0 0 10px #666;
}

/* ===============================
   INPUT FELDER
=============================== */

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin: 12px 0;
    font-size: 16px;
    border: 2px solid #00ff88;
    border-radius: 6px;
    background: #002218;
    color: #00ffcc;
}

input[type="text"]:focus {
    outline: none;
    background: #003322;
    box-shadow: 0 0 10px #00ff88;
}

/* ===============================
   DIFFICULTY BUTTONS
=============================== */

.diff-btn {
    background: #222;
    border-color: #00ff88;
    color: #00ffcc;
}

.diff-btn:hover {
    background: #004422;
    color: white;
}

/* ===============================
   RESPONSIVE (Mobile)
=============================== */

@media (max-width: 600px) {
    .menu {
        width: 90%;
        padding: 20px;
    }

    button {
        font-size: 16px;
        padding: 10px;
    }

    input[type="text"] {
        font-size: 14px;
    }
}
