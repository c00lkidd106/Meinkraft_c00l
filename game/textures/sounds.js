// ============================================
// PROZEDURALES SOUND-SYSTEM FÜR MEINKRAFT
// ============================================

const AudioCtx = new (window.AudioContext || window.webkitAudioContext)();

const Sound = {
    enabled: true,

    play(type, id) {
        if (!this.enabled) return;

        switch (type) {
            case "break": this.blockSound(id, "break"); break;
            case "place": this.blockSound(id, "place"); break;
            case "drop":  this.blockSound(id, "drop"); break;
            case "step":  this.blockSound(id, "step"); break;
            case "ambient": this.ambientSound(id); break;
            case "creature": this.creatureSound(id); break;
            case "player": this.playerSound(id); break;
        }
    },

    blockProfiles: {
        stone:  { freq: 200, noise: 0.1 },
        wood:   { freq: 300, noise: 0.2 },
        earth:  { freq: 120, noise: 0.4 },
        soft:   { freq: 180, noise: 0.5 },
        metal:  { freq: 400, noise: 0.05 },
        crystal:{ freq: 600, noise: 0.02 }
    },

    blockMap: {
        ore_coal: "stone",
        ore_iron: "stone",
        ore_gold: "stone",
        ore_redstone: "crystal",
        ore_lapis: "crystal",
        ore_diamond: "crystal",
        ore_emerald: "crystal",
        ore_copper: "metal",
        dirt: "earth",
        grass: "soft",
        sand: "soft",
        gravel: "earth",
        planks_oak: "wood",
        planks_birch: "wood",
        planks_darkoak: "wood",
        planks_acacia: "wood",
        planks_jungle: "wood"
    },

    blockSound(block, action) {
        const type = this.blockMap[block] || "stone";
        const p = this.blockProfiles[type];

        const pitch = p.freq * (1 + (Math.random() - 0.5) * 0.2);
        const vol = 0.3 + Math.random() * 0.2;
        const dur = 0.05 + Math.random() * 0.05;

        this.tone(pitch, dur, vol);
        if (action !== "drop") this.noise(dur + 0.05, p.noise);
    },

    ambientSound(env) {
        switch (env) {
            case "water": this.noise(0.4, 0.2); break;
            case "lava": this.noise(0.3, 0.3); this.tone(80, 0.2, 0.2); break;
            case "cave": this.noise(0.6, 0.1); this.tone(60, 0.3, 0.1); break;
            case "wind": this.noise(0.5, 0.05); break;
            case "underwater": this.noise(0.4, 0.05); this.tone(100, 0.2, 0.05); break;
        }
    },

    creatureSound(name) {
        switch (name) {
            case "wandler": this.tone(90 + Math.random()*20, 0.3, 0.3); this.noise(0.2, 0.1); break;
            case "knochenläufer": this.tone(400, 0.05, 0.2); break;
            case "krabbler": this.noise(0.1, 0.3); break;
            case "zischer": this.noise(0.2, 0.4); break;
        }
    },

    playerSound(name) {
        if (name === "tester") {
            this.tone(440, 0.1, 0.3); // c00lkidd ping
        } else {
            this.tone(220, 0.1, 0.2); // normal ping
        }
    },

    tone(freq, duration, volume) {
        const osc = AudioCtx.createOscillator();
        const gain = AudioCtx.createGain();

        osc.type = "square";
        osc.frequency.value = freq;

        gain.gain.setValueAtTime(volume, AudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, AudioCtx.currentTime + duration);

        osc.connect(gain).connect(AudioCtx.destination);
        osc.start();
        osc.stop(AudioCtx.currentTime + duration);
    },

    noise(duration, volume) {
        const bufferSize = AudioCtx.sampleRate * duration;
        const buffer = AudioCtx.createBuffer(1, bufferSize, AudioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * volume;
        }

        const noise = AudioCtx.createBufferSource();
        noise.buffer = buffer;

        const gain = AudioCtx.createGain();
        gain.gain.setValueAtTime(volume, AudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, AudioCtx.currentTime + duration);

        noise.connect(gain).connect(AudioCtx.destination);
        noise.start();
    },

    init() {
        this.enabled = true;
    }
};
