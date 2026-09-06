import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock SpeechSynthesisUtterance (not available in jsdom)
(globalThis as any).SpeechSynthesisUtterance = class SpeechSynthesisUtterance {
  text: string
  lang: string
  rate: number
  pitch: number
  voice: any
  onend: (() => void) | null = null
  onerror: ((e: any) => void) | null = null
  constructor(text = '') { this.text = text; this.lang = 'pt-BR'; this.rate = 1; this.pitch = 1; this.voice = null; }
} as any

// Mock SpeechSynthesis for testing environment
if (typeof window !== 'undefined') {
  const speakImpl = vi.fn((utterance: any) => {
    // Simulate onend callback asynchronously
    setTimeout(() => { if (utterance.onend) utterance.onend(); }, 0);
  });
  window.speechSynthesis = {
    cancel: vi.fn(),
    speak: speakImpl,
    getVoices: vi.fn(() => []),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    onvoiceschanged: null,
    paused: false,
    pending: false,
    speaking: false
  } as any
}
