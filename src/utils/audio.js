// Audio utility with Web Audio API chime generation and HTML5 audio player

class SoundManager {
  constructor() {
    this.ctx = null;
    this.bgAudio = null;
    this.isMuted = false;
    this.isPlayingMusic = false;
    this.listeners = new Set();
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach((cb) => cb(this.isPlayingMusic, this.isMuted));
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Play background music (Short audio loop on continuous repeat)
  playBackgroundMusic(src = '/music/love-story.mp3') {
    this.isMuted = false;
    this.init();

    if (typeof document === 'undefined') return;

    let audio = this.bgAudio || document.getElementById('bg-music');
    if (!audio) {
      audio = new Audio(src);
      audio.id = 'bg-music';
      document.body.appendChild(audio);
    }

    if (!audio.src || !audio.src.includes('love-story')) {
      audio.src = src;
    }
    audio.loop = true;
    audio.volume = 0.65;
    this.bgAudio = audio;

    // Fail-safe continuous loop listener to guarantee repeat playback
    audio.onended = () => {
      if (!this.isMuted && this.bgAudio) {
        this.bgAudio.currentTime = 0;
        this.bgAudio.play().catch(() => {});
      }
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlayingMusic = true;
          this.notify();
        })
        .catch((err) => {
          console.warn('Audio auto-play blocked, unlocking on first interaction:', err);
          const unlock = () => {
            if (!this.isMuted && this.bgAudio) {
              this.bgAudio.play().then(() => {
                this.isPlayingMusic = true;
                this.notify();
              }).catch(() => {});
            }
            window.removeEventListener('pointerdown', unlock);
            window.removeEventListener('click', unlock);
            window.removeEventListener('touchstart', unlock);
          };
          window.addEventListener('pointerdown', unlock, { once: true });
          window.addEventListener('click', unlock, { once: true });
          window.addEventListener('touchstart', unlock, { once: true });
        });
    }
  }

  pauseBackgroundMusic() {
    if (this.bgAudio) {
      this.bgAudio.pause();
      this.isPlayingMusic = false;
      this.notify();
    }
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.pauseBackgroundMusic();
      this.isMuted = true;
      this.notify();
      return false;
    } else {
      this.isMuted = false;
      this.playBackgroundMusic();
      return true;
    }
  }

  // Cute chime when a penguin is tapped
  playPenguinChirp() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5
      osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.16); // D6

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {
      // ignore
    }
  }

  // Cute paper rustle / gentle chime when opening letter
  playLetterOpen() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Arpeggio chime
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.18, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.35);
      });
    } catch (e) {
      // ignore
    }
  }

  // Celebration sparkle chime when all penguins completed
  playCelebrationChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.22, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.6);
      });
    } catch (e) {
      // ignore
    }
  }
}

export const soundManager = new SoundManager();

