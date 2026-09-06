import { describe, it, expect, beforeEach } from 'vitest';
import { AudioService } from '../services/AudioService';

describe('AudioService', () => {
  beforeEach(() => {
    // Reset initialization flag between tests
    (AudioService as any).isInitialized = false;
  });

  it('initializes speech synthesis safely', () => {
    expect(() => AudioService.init()).not.toThrow();
  });

  it('handles speak call without crashing when synthesis is mocked', async () => {
    AudioService.init();
    // speak is mocked in setup.ts via vi.fn - it triggers onend asynchronously
    await expect(AudioService.speak('A', 'pt-BR')).resolves.toBeUndefined();
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
  });

  it('triggers sound FX without throwing errors', () => {
    expect(() => AudioService.playClickSound()).not.toThrow();
    expect(() => AudioService.playSuccessSound()).not.toThrow();
    expect(() => AudioService.playErrorSound()).not.toThrow();
  });
});
