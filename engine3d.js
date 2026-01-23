// ===============================================
//  3D ENGINE + PLAYER + WORLD RENDERING
// ===============================================

let scene, camera, renderer;
let player;

// ===============================================
//  INIT 3D ENGINE
// ===============================================

function init3D() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Licht
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(50, 100, 50);
    scene.add(light);

    // Spieler erstellen
    player = new Player(camera);

    animate();
}

// ===============================================
//  MAIN LOOP
// ===============================================

function animate() {
    requestAnimationFrame(animate);

    // Player Movement + Kamera
    if (player) {
        player.update();
    }

    renderer.render(scene, camera);
}

// ===============================================
//  CHUNK MESH BUILDER
// ===============================================

function buildChunkMesh(chunk, cx, cz) {
    const group = new THREE.Group();

    const cubeGeo = new THREE.BoxGeometry(1, 1, 1);

    const materials = {
        grass:   new THREE.MeshLambertMaterial({ color: 0x00aa00 }),
        dirt:    new THREE.MeshLambertMaterial({ color: 0x8b4513 }),
        stone:   new THREE.MeshLambertMaterial({ color: 0x777777 }),
        coal:    new THREE.MeshLambertMaterial({ color: 0x222222 }),
        iron:    new THREE.MeshLambertMaterial({ color: 0xd8d8d8 }),
        gold:    new THREE.MeshLambertMaterial({ color: 0xffd700 }),
        diamond: new THREE.MeshLambertMaterial({ color: 0x00ffff }),
        log:     new THREE.MeshLambertMaterial({ color: 0x8b5a2b }),
        leaves:  new THREE.MeshLambertMaterial({ color: 0x228b22 })
    };

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let y = 0; y < WORLD_HEIGHT; y++) {
            for (let z = 0; z < CHUNK_SIZE; z++) {

                const block = chunk[x][y][z];
                if (block === "air") continue;

                const mat = materials[block] || materials.stone;

                const mesh = new THREE.Mesh(cubeGeo, mat);
                mesh.position.set(
                    cx * CHUNK_SIZE + x,
                    y,
                    cz * CHUNK_SIZE + z
                );

                mesh.userData.blockType = block;

                group.add(mesh);
            }
        }
    }

    scene.add(group);
}
