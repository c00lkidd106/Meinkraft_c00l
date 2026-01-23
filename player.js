class Player {
    constructor(camera) {
        this.camera = camera;

        this.x = 20;
        this.y = 40;
        this.z = 20;

        this.speed = 0.15;
        this.jumpForce = 0.35;
        this.gravity = 0.02;
        this.velY = 0;
        this.onGround = false;

        this.rotX = 0;
        this.rotY = 0;
        this.lookSpeed = 0.002;
    }

    update() {
        this.applyLook();
        this.applyMovement();
        this.applyGravity();
        this.updateCamera();
        this.handleActions();
    }

    applyLook() {
        this.rotY -= Input.lookX * this.lookSpeed;
        this.rotX -= Input.lookY * this.lookSpeed;
        this.rotX = Math.max(-Math.PI/2, Math.min(Math.PI/2, this.rotX));
    }

    applyMovement() {
        const sin = Math.sin(this.rotY);
        const cos = Math.cos(this.rotY);

        const dx = (Input.moveY * sin + Input.moveX * cos) * this.speed;
        const dz = (Input.moveY * cos - Input.moveX * sin) * this.speed;

        this.x += dx;
        this.z += dz;

        if (Input.jump && this.onGround) {
            this.velY = this.jumpForce;
            this.onGround = false;
        }
    }

    applyGravity() {
        this.y += this.velY;
        this.velY -= this.gravity;

        if (this.y <= 5) {
            this.y = 5;
            this.velY = 0;
            this.onGround = true;
        }
    }

    updateCamera() {
        this.camera.position.set(this.x, this.y, this.z);
        const tx = this.x + Math.sin(this.rotY);
        const ty = this.y + Math.sin(this.rotX);
        const tz = this.z + Math.cos(this.rotY);
        this.camera.lookAt(tx, ty, tz);
    }

    handleActions() {
        if (Input.breakBlock) this.breakBlock();
        if (Input.placeBlock) this.placeBlock();
    }

    breakBlock() {
        const ray = new THREE.Raycaster();
        ray.setFromCamera(new THREE.Vector2(0,0), this.camera);
        const hits = ray.intersectObjects(scene.children, true);
        if (hits.length > 0) scene.remove(hits[0].object);
    }

    placeBlock() {
        const ray = new THREE.Raycaster();
        ray.setFromCamera(new THREE.Vector2(0,0), this.camera);
        const hits = ray.intersectObjects(scene.children, true);
        if (hits.length > 0) {
            const pos = hits[0].point;
            const cube = new THREE.Mesh(
                new THREE.BoxGeometry(1,1,1),
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
