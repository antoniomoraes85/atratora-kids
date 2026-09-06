import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService } from '../services/StorageService';

describe('StorageService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns default progress when local storage is empty', () => {
    const progress = StorageService.getProgress();
    expect(progress.language).toBe('pt-BR');
    expect(progress.soundEnabled).toBe(true);
    expect(progress.totalStars).toBe(0);
  });

  it('updates and persists settings', () => {
    StorageService.updateSettings({ language: 'en-US', uppercaseOnly: true });
    const progress = StorageService.getProgress();
    expect(progress.language).toBe('en-US');
    expect(progress.uppercaseOnly).toBe(true);
  });

  it('records letter practice stats and increments stars', () => {
    StorageService.recordLetterPractice('A', true);
    StorageService.recordLetterPractice('A', false);
    
    const progress = StorageService.getProgress();
    expect(progress.totalStars).toBe(1);
    expect(progress.letterStats['A']).toBeDefined();
    expect(progress.letterStats['A'].practicedCount).toBe(2);
    expect(progress.letterStats['A'].correctCount).toBe(1);
    expect(progress.letterStats['A'].trickyCount).toBe(1);
  });

  it('resets progress back to default', () => {
    StorageService.recordLetterPractice('B', true);
    StorageService.resetProgress();
    const progress = StorageService.getProgress();
    expect(progress.totalStars).toBe(0);
    expect(progress.letterStats['B']).toBeUndefined();
  });
});
