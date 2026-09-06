
export interface LocalizedText {
  'pt-BR': string;
  'en-US': string;
  'es-ES': string;
}

export type LearningCategory = 'alphabet' | 'numbers' | 'animals' | 'toys';

export interface LearningItem {
  id: string;
  category: LearningCategory;
  image?: string;
  emoji?: string;
  labels: LocalizedText;
  /** For alphabet: per-language example word starting with that letter */
  wordExample?: LocalizedText;
  /** For numbers: numeric value used to render dot/star representations */
  numericValue?: number;
  /** Path to local audio asset (e.g. public/audio/animals/dog.mp3) */
  soundAsset?: string;
}
