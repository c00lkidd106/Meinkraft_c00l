// ------------------------------------------------------
//  MUSIC ENGINE
//  SV's Meinkraft_c00l
// ------------------------------------------------------

let audioCtx = null;
let currentTrackIndex = 0;
let trackTimeout = null;

function getAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playNoteAt(time, freq, dur, vol = 0.18, type = "sine") {
  const a = getAudio();
  const osc = a.createOscillator();
  const gain = a.createGain();

  osc.type = type;
  osc.frequency.value = freq;

  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(vol, time + 0.03);
  gain.gain.linearRampToValueAtTime(0, time + dur);

  osc.connect(gain);
  gain.connect(a.destination);

  osc.start(time);
  osc.stop(time + dur + 0.05);
}

// ------------------------------------------------------
//  TRACK 1: "Sweden (Germany)"
//  Ruhig, warm, melancholisch – aber komplett eigene Melodie
// ------------------------------------------------------

function playGermany() {
  const a = getAudio();
  const start = a.currentTime;

  const C4 = 261.63, E4 = 329.63, G4 = 392.00, A4 = 440.00, D4 = 293.66;

  const notes = [
    { t: 0.0,  f: C4, d: 1.2 },
    { t: 0.8,  f: E4, d: 1.0 },
    { t: 1.6,  f: G4, d: 1.2 },
    { t: 2.6,  f: E4, d: 1.0 },

    { t: 4.0,  f: D4, d: 1.2 },
    { t: 4.8,  f: F4 = 349.23, d: 1.0 },
    { t: 5.6,  f: A4, d: 1.2 },
    { t: 6.6,  f: F4, d: 1.0 },

    { t: 8.0,  f: C4, d: 1.5 },
    { t: 8.9,  f: E4, d: 1.2 },
    { t: 9.8,  f: G4, d: 1.5 },
  ];

  notes.forEach(n => playNoteAt(start + n.t, n.f, n.d, 0.16, "sine"));

  return 12; // Tracklänge in Sekunden
}

// ------------------------------------------------------
//  TRACK 2: "Soft Hands"
//  Ruhig, traurig, piano-artig
// ------------------------------------------------------

function playSoftHands() {
  const a = getAudio();
  const start = a.currentTime;

  const C4 = 261.63, E4 = 329.63, G4 = 392.00, B3 = 246.94, A3 = 220.00;

  const pattern = [
    { t: 0.0,  f: C4, d: 0.8 },
    { t: 0.6,  f: E4, d: 0.7 },
    { t: 1.2,  f: G4, d: 0.9 },
    { t: 2.0,  f: E4, d: 0.7 },

    { t: 3.0,  f: B3, d: 0.9 },
    { t: 3.7,  f: E4, d: 0.8 },
    { t: 4.4,  f: G4, d: 0.9 },

    { t: 5.5,  f: A3, d: 0.9 },
    { t: 6.2,  f: E4, d: 0.8 },
    { t: 6.9,  f: G4, d: 1.0 },
  ];

  pattern.forEach(n => playNoteAt(start + n.t, n.f, n.d, 0.17, "sine"));

  return 14; // Sekunden
}

// ------------------------------------------------------
//  TRACK 3: "Cave Echo"
//  Dunkel, mysteriös, ambient
// ------------------------------------------------------

function playCaveEcho() {
  const a = getAudio();
  const start = a.currentTime;

  const base = 110;

  for (let i = 0; i < 6; i++) {
    const t = start + i * 2.5 + Math.random() * 0.5;
    const freq = base * (1 + Math.random() * 0.4);
    const dur = 1.5 + Math.random() * 1.0;
    const vol = 0.08 + Math.random() * 0.04;

    playNoteAt(t, freq, dur, vol, "triangle");
  }

  return 18; // Sekunden
}

// ------------------------------------------------------
//  PLAYLIST SYSTEM
// ------------------------------------------------------

const tracks = [
  playGermany,
  playSoftHands,
  playGermany,
  playCaveEcho,
];

function playNextTrack() {
  const track = tracks[currentTrackIndex];
  const length = track(); // Track starten

  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;

  trackTimeout = setTimeout(playNextTrack, 15000); // 15 Minuten = 900000 ms
}

// ------------------------------------------------------
//  START MUSIC
// ------------------------------------------------------

function startMusicSystem() {
  if (!audioCtx) getAudio();
  playNextTrack();
}
