import { describe, it, expect } from 'vitest';
import { ALPHABET_DATA } from './alphabet';
import { NUMBERS_DATA } from './numbers';
import { ANIMALS_DATA } from './animals';
import { TOYS_DATA } from './toys';

describe('Datasets Integrity Tests', () => {

  // ── Numbers ────────────────────────────────────────────────────────────────
  it('Numbers: contains exactly 0-20 (21 values)', () => {
    expect(NUMBERS_DATA).toHaveLength(21);
    const ids = NUMBERS_DATA.map(n => n.numericValue);
    for (let i = 0; i <= 20; i++) {
      expect(ids).toContain(i);
    }
  });

  // ── Languages ──────────────────────────────────────────────────────────────
  it('Languages: PT, EN, ES are present in items', () => {
    const checkItem = (item: any) => {
      expect(item.labels).toHaveProperty('pt-BR');
      expect(item.labels).toHaveProperty('en-US');
      expect(item.labels).toHaveProperty('es-ES');
    };
    ALPHABET_DATA.forEach(checkItem);
    NUMBERS_DATA.forEach(checkItem);
    ANIMALS_DATA.forEach(checkItem);
    TOYS_DATA.forEach(checkItem);
  });

  // ── Animals ────────────────────────────────────────────────────────────────
  it('Animals: exactly 12 items', () => {
    expect(ANIMALS_DATA).toHaveLength(12);
  });

  it('Animals: all 12 have an image property', () => {
    const withImage = ANIMALS_DATA.filter(a => Boolean(a.image));
    expect(withImage).toHaveLength(12);
  });

  it('Animals: no soundAsset pointing to non-existent mp3 files (alpha)', () => {
    const withSound = ANIMALS_DATA.filter(a => Boolean(a.soundAsset));
    // In this alpha release, no audio files are distributed; soundAsset must be absent
    expect(withSound).toHaveLength(0);
  });

  // ── Toys ───────────────────────────────────────────────────────────────────
  it('Toys: exactly 12 items', () => {
    expect(TOYS_DATA).toHaveLength(12);
  });

  it('Toys: all 12 have an image property', () => {
    const withImage = TOYS_DATA.filter(t => Boolean(t.image));
    expect(withImage).toHaveLength(12);
  });

  it('Toys: no soundAsset pointing to non-existent mp3 files (alpha)', () => {
    const withSound = TOYS_DATA.filter(t => Boolean(t.soundAsset));
    // In this alpha release, no audio files are distributed; soundAsset must be absent
    expect(withSound).toHaveLength(0);
  });

  // ── Alphabet ───────────────────────────────────────────────────────────────
  it('Alphabet: exactly 26 letters', () => {
    expect(ALPHABET_DATA).toHaveLength(26);
  });

  it('Alphabet: each letter has a wordExample', () => {
    ALPHABET_DATA.forEach(letter => {
      expect(letter.wordExample).toBeDefined();
      expect(letter.wordExample!['pt-BR']).toBeTruthy();
      expect(letter.wordExample!['en-US']).toBeTruthy();
      expect(letter.wordExample!['es-ES']).toBeTruthy();
    });
  });

  it('Alphabet: all 26 letters have an image property', () => {
    const withImage = ALPHABET_DATA.filter(l => Boolean(l.image));
    expect(withImage).toHaveLength(26);
  });

  it('Alphabet: labels cover A–Z (uppercase)', () => {
    const letters = ALPHABET_DATA.map(l => l.labels['pt-BR']);
    for (let code = 65; code <= 90; code++) {
      expect(letters).toContain(String.fromCharCode(code));
    }
  });

  // ── soundAsset architecture ─────────────────────────────────────────────────
  it('soundAsset: when present, must be a string (architecture check)', () => {
    [...ANIMALS_DATA, ...TOYS_DATA, ...ALPHABET_DATA, ...NUMBERS_DATA].forEach(item => {
      if (item.soundAsset !== undefined) {
        expect(typeof item.soundAsset).toBe('string');
      }
    });
  });
});
