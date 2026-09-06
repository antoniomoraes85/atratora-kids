import { describe, it, expect } from 'vitest';
import { ALPHABET_DATA } from './alphabet';
import { NUMBERS_DATA } from './numbers';
import { ANIMALS_DATA } from './animals';
import { TOYS_DATA } from './toys';

describe('Datasets Tests', () => {
  it('Numbers: contains exactly 0-20 (21 values)', () => {
    expect(NUMBERS_DATA).toHaveLength(21);
    const ids = NUMBERS_DATA.map(n => n.numericValue);
    // Check if every number from 0 to 20 is present
    for (let i = 0; i <= 20; i++) {
      expect(ids).toContain(i);
    }
  });

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

  it('Animals: correct structure and soundAsset properly typed', () => {
    ANIMALS_DATA.forEach(animal => {
      if (animal.soundAsset !== undefined) {
        expect(typeof animal.soundAsset).toBe('string');
      }
    });
  });

  it('Toys: correct structure and soundAsset properly typed', () => {
    TOYS_DATA.forEach(toy => {
      if (toy.soundAsset !== undefined) {
        expect(typeof toy.soundAsset).toBe('string');
      }
    });
  });
});
