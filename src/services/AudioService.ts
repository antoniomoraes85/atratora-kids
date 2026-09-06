import type { AppLanguage } from './StorageService';

export class AudioService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static voices: SpeechSynthesisVoice[] = [];
  private static isInitialized = false;
  private static audioCtx: AudioContext | null = null;

  public static init(): void {
    if (this.isInitialized) return;
    this.isInitialized = true;

    if (this.synth) {
      this.loadVoices();
      if (typeof this.synth.addEventListener === 'function') {
        this.synth.addEventListener('voiceschanged', () => this.loadVoices());
      } else if ('onvoiceschanged' in this.synth) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private static loadVoices(): void {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  private static getBestVoice(lang: AppLanguage): SpeechSynthesisVoice | null {
    if (this.voices.length === 0) {
      this.loadVoices();
    }

    const targetPrefix = lang;
    const fallbackPrefix = lang === 'pt-BR' ? 'pt' : lang === 'en-US' ? 'en' : 'es';

    // 1. Exact match
    let voice = this.voices.find(v => v.lang === targetPrefix || v.lang.replace('_', '-') === targetPrefix);
    if (voice) return voice;

    // 2. Starts with fallback prefix (e.g. pt-PT or en-GB)
    voice = this.voices.find(v => v.lang.toLowerCase().startsWith(fallbackPrefix));
    if (voice) return voice;

    // 3. Any available voice
    return this.voices[0] || null;
  }

  /**
   * Speak text with safety checks for Safari/iOS autoplay restrictions
   */
  public static speak(text: string, lang: AppLanguage = 'pt-BR', rate: number = 0.95): Promise<void> {
    return new Promise((resolve) => {
      this.init();

      if (!this.synth) {
        console.warn('SpeechSynthesis not supported on this device');
        resolve();
        return;
      }

      try {
        // Cancel any pending speech
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = rate;
        utterance.pitch = 1.05; // Slightly higher pitch for kids

        const voice = this.getBestVoice(lang);
        if (voice) {
          utterance.voice = voice;
        }

        utterance.onend = () => resolve();
        utterance.onerror = (e) => {
          console.warn('Speech error:', e);
          resolve();
        };

        this.synth.speak(utterance);
      } catch (err) {
        console.warn('SpeechSynthesis speak failed silently:', err);
        resolve();
      }
    });
  }

  public static stop(): void {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        console.warn('Speech stop error:', e);
      }
    }
  }

  /**
   * Play an external audio file (e.g. animal sound)
   */
  public static playAsset(path: string): void {
    try {
      const audio = new Audio(path);
      audio.play().catch(e => console.warn('Audio play failed:', e));
    } catch (e) {
      console.warn('Audio creation failed:', e);
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Web Audio API Synthesized Sound FX (100% Offline, No External Assets)     */
  /* -------------------------------------------------------------------------- */

  private static getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  public static playClickSound(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Silent catch
    }
  }

  public static playSuccessSound(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Major Arpeggio)

      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.3, now + index * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.25);
      });
    } catch {
      // Silent catch
    }
  }

  public static playErrorSound(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(180, now + 0.1);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(now + 0.25);
    } catch {
      // Silent catch
    }
  }
}
