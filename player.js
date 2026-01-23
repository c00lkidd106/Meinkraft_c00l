// ===============================================
//  PLAYER CONTROLLER (Movement + Camera + Mining)
// ===============================================

class Player {
    constructor(camera) {
        this.camera = camera;

        // Position
        this.x = 20;
        this.y = 40;
        this.z = 20;

        // Bewegung
        this.speed = 0.15;
        this.jumpForce = 0.35;
        this.gravity = 0.02;
        this.velY = 0;
        this.onGround = false;

        // Kamera
        this.rotX = 0;
        this.rotY = 0;
        this.lookSpeed = 0.002;
    }

    // ===========================================
    //  UPDATE LOOP
    // ===========================================

    update() {
        this.applyLook();
        this.applyMovement();
        this.applyGravity();
        this.updateCamera();
        this.handleActions();
    }

    // ===========================================
    //  KAMERA-STEUERUNG
    // ===========================================

    applyLook() {
        this.rotY -= Input.lookX * this.lookSpeed;
        this.rotX -= Input.lookY * this.lookSpeed;

        // Begrenzung (kein Kopf-über)
        this.rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.rotX));
    }

    // ===========================================
    //  BEWEGUNG
    // ===========================================

    applyMovement() {
        let forward = Input.moveY;
        let strafe = Input.moveX;

        // Richtung aus Kamera berechnen
        const sin = Math.sin(this.rotY);
        const cos = Math.cos(this.rotY);

        const dx = (forward * sin + strafe * cos) * this.speed;
        const dz = (forward * cos - strafe * sin) * this.speed;

        this.x += dx;
        this.z += dz;

        // Springen
        if (Input.jump && this.onGround) {
            this.velY = this.jumpForce;
            this.onGround = false;
        }
    }

    // ===========================================
    //  GRAVITY
    // ===========================================

    applyGravity() {
        this.y += this.velY;
        this.velY -= this.gravity;

        if (this.y <= 5) { // Bodenhöhe
            this.y = 5;
            this.velY = 0;
            this.onGround = true;
        }
    }

    // ===========================================
    //  KAMERA POSITIONIEREN
    // ===========================================

    updateCamera() {
        this.camera.position.set(this.x, this.y, this.z);

        const targetX = this.x + Math.sin(this.rotY);
        const targetY = this.y + Math.sin(this.rotX);
        const targetZ = this.z + Math.cos(this.rotY);

        this.camera.lookAt(targetX, targetY, targetZ);
    }

    // ===========================================
    //  ABBauen / Platzieren
    // ===========================================

    handleActions() {
        if (Input.breakBlock) {
            this.breakBlock();
        }
        if (Input.placeBlock) {
            this.placeBlock();
        }
    }

    // ===========================================
    //  BLOCK ABBauen
    // ===========================================

    breakBlock() {
        // Raycast aus Kamera
        const ray = new THREE.Raycaster();
        ray.setFromCamera(new THREE.Vector2(0, 0), this.camera);

        const hits = ray.intersectObjects(scene.children, true);
        if (hits.length > 0) {
            const obj = hits[0].object;
            scene.remove(obj);
        }
    }

    // ===========================================
    //  BLOCK PLATZIEREN
    // ===========================================

    placeBlock() {
        const ray = new THREE.Raycaster();
        ray.setFromCamera(new THREE.Vector2(0, 0), this.camera);

        const hits = ray.intersectObjects(scene.children, true);
        if (hits.length > 0) {
            const pos = hits[0].point;

            const cube = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshLambertMaterial({ color: 0x8b4513 })
            );

            cube.position.set(
                Math.round(pos.x),
                Math.round(pos.y),
                Math.round(pos.z)
            );

            scene.add(cube);
        }
    }
}
