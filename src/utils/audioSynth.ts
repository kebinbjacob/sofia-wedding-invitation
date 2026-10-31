// Ultra-Refined Romantic Acoustic Harp, Piano & Strings Synthesizer using Web Audio API
// Includes tactile wax crack & parchment opening sound + lush romantic acoustic harmonies.

class RomanticMusicSynth {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;
  private reverbNode: ConvolverNode | null = null;
  private noteIndex: number = 0;
  private volume: number = 0.55;
  private melodyMode: 'harp' | 'piano' = 'harp';

  // Romantic progression in F Major / D Minor (Fmaj9 - C/E - Dm9 - Bbmaj7 - F/A - Gm7 - C7sus4 - F add9)
  private readonly chords: number[][] = [
    // Fmaj9: F3, C4, E4, A4, C5, E5, G5
    [174.61, 261.63, 329.63, 440.00, 523.25, 659.25, 783.99],
    // C add9: C3, G3, D4, E4, G4, D5, E5
    [130.81, 196.00, 293.66, 329.63, 392.00, 587.33, 659.25],
    // Dm9: D3, A3, F4, A4, C5, E5, A5
    [146.83, 220.00, 349.23, 440.00, 523.25, 659.25, 880.00],
    // Bbmaj7: Bb2, F3, D4, F4, A4, D5, F5
    [116.54, 174.61, 293.66, 349.23, 440.00, 587.33, 698.46],
    // F/A: A2, E3, C4, F4, A4, C5, E5
    [110.00, 164.81, 261.63, 349.23, 440.00, 523.25, 659.25],
    // Gm7: G2, D3, Bb3, D4, F4, Bb4, D5
    [98.00, 146.83, 233.08, 293.66, 349.23, 466.16, 587.33],
    // C7sus4 -> C7: C3, G3, C4, E4, G4, Bb4, C5
    [130.81, 196.00, 261.63, 329.63, 392.00, 466.16, 523.25],
    // F add9 resolve: F2, C3, A3, C4, G4, A4, C5
    [87.31, 130.81, 220.00, 261.63, 392.00, 440.00, 523.25]
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      // Create warm algorithmic impulse response for lush cathedral/garden reverb
      this.createReverb();
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private createReverb() {
    if (!this.ctx || !this.masterGain) return;
    try {
      const rate = this.ctx.sampleRate;
      const length = rate * 3.2; // 3.2 seconds lush romantic decay
      const impulse = this.ctx.createBuffer(2, length, rate);
      const left = impulse.getChannelData(0);
      const right = impulse.getChannelData(1);

      for (let i = 0; i < length; i++) {
        const decay = Math.exp(-i / (rate * 1.05));
        left[i] = (Math.random() * 2 - 1) * decay;
        right[i] = (Math.random() * 2 - 1) * decay;
      }

      this.reverbNode = this.ctx.createConvolver();
      this.reverbNode.buffer = impulse;

      const reverbGain = this.ctx.createGain();
      reverbGain.gain.setValueAtTime(0.48, this.ctx.currentTime);

      this.reverbNode.connect(reverbGain);
      reverbGain.connect(this.masterGain);
    } catch (e) {
      console.warn('Reverb creation skipped:', e);
    }
  }

  // Play a crisp, gentle wax seal cracking and golden shimmer sound upon breaking seal
  public playWaxSealCrackSound() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // 1. Gentle tactile paper rustle noise
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1400, now);
    noiseFilter.Q.setValueAtTime(1.5, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now);

    // 2. Sweet sparkling gold chime (E5, G#5, B5, E6)
    const chimePitches = [659.25, 830.61, 987.77, 1318.51];
    chimePitches.forEach((pitch, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, now + idx * 0.05);

      g.gain.setValueAtTime(0.0001, now + idx * 0.05);
      g.gain.linearRampToValueAtTime(0.12, now + idx * 0.05 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.85);

      osc.connect(g);
      g.connect(this.masterGain);
      if (this.reverbNode) g.connect(this.reverbNode);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.9);
    });
  }

  // Play a soft plucked harp tone
  private playHarpPluck(freq: number, time: number, isBass: boolean = false) {
    if (!this.ctx || !this.masterGain) return;

    // Dual oscillator for rich, warm acoustic body: Triangle + Sine with subtle chorus
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, time);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 1.002, time); // Subtle sweet chorus

    // Lowpass filter to simulate soft nylon/gut harp string dampening
    filter.type = 'lowpass';
    const filterCutoff = isBass ? 700 : 2400;
    filter.frequency.setValueAtTime(filterCutoff, time);
    filter.frequency.exponentialRampToValueAtTime(340, time + (isBass ? 2.8 : 1.6));

    // Romantic envelope: immediate soft attack, singing bloom, gentle exponential decay
    const duration = isBass ? 3.2 : 2.2;
    const initialVol = isBass ? 0.36 : 0.22;

    gainNode.gain.setValueAtTime(0.0001, time);
    gainNode.gain.linearRampToValueAtTime(initialVol, time + 0.035);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);

    // Dry to master
    gainNode.connect(this.masterGain);

    // Wet to romantic reverb
    if (this.reverbNode) {
      gainNode.connect(this.reverbNode);
    }

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration);
    osc2.stop(time + duration);
  }

  // Step through arpeggios
  private scheduleNotes() {
    if (!this.isPlaying || !this.ctx) return;

    const chordIdx = Math.floor(this.noteIndex / 8) % this.chords.length;
    const stepInChord = this.noteIndex % 8;
    const currentChord = this.chords[chordIdx];

    const now = this.ctx.currentTime;

    // On beat 0, play the warm root bass note
    if (stepInChord === 0) {
      this.playHarpPluck(currentChord[0], now, true);
    }

    // Arpeggio note selection: delicate undulating harp finger-picking pattern
    const pattern = [0, 1, 2, 4, 3, 5, 4, 2];
    const notePos = pattern[stepInChord] % currentChord.length;
    const freq = currentChord[notePos];

    // Slight timing humanization (+/- 4ms)
    const humanize = (Math.random() - 0.5) * 0.008;
    this.playHarpPluck(freq, now + Math.max(0, humanize), false);

    this.noteIndex++;
  }

  public play() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Tempo: ~72 BPM romantic pace (~215ms per eighth note)
    const intervalMs = 215;
    this.scheduleNotes();
    this.timerId = window.setInterval(() => {
      this.scheduleNotes();
    }, intervalMs);
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const musicSynth = new RomanticMusicSynth();
