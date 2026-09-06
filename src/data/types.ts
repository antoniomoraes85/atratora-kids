

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
  sound?: string; 
}
