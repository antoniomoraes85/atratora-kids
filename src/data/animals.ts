import type { LearningItem } from './types';

/**
 * Animal sounds reference public/audio/animals/<id>.mp3
 * These files are PENDING — no audio files are distributed in this alpha.
 * soundAsset fields are listed for structure; AudioService handles missing files gracefully.
 */
export const ANIMALS_DATA: LearningItem[] = [
  { id: 'anim-dog',      category: 'animals', emoji: '🐶', labels: { 'pt-BR': 'Cachorro',  'en-US': 'Dog',      'es-ES': 'Perro'    }, soundAsset: '/atratora-kids/audio/animals/dog.mp3'      },
  { id: 'anim-cat',      category: 'animals', emoji: '🐱', labels: { 'pt-BR': 'Gato',      'en-US': 'Cat',      'es-ES': 'Gato'     }, soundAsset: '/atratora-kids/audio/animals/cat.mp3'      },
  { id: 'anim-lion',     category: 'animals', emoji: '🦁', labels: { 'pt-BR': 'Leão',      'en-US': 'Lion',     'es-ES': 'León'     }, soundAsset: '/atratora-kids/audio/animals/lion.mp3'     },
  { id: 'anim-elephant', category: 'animals', emoji: '🐘', labels: { 'pt-BR': 'Elefante',  'en-US': 'Elephant', 'es-ES': 'Elefante' }, soundAsset: '/atratora-kids/audio/animals/elephant.mp3' },
  { id: 'anim-monkey',   category: 'animals', emoji: '🐒', labels: { 'pt-BR': 'Macaco',    'en-US': 'Monkey',   'es-ES': 'Mono'     }, soundAsset: '/atratora-kids/audio/animals/monkey.mp3'   },
  { id: 'anim-cow',      category: 'animals', emoji: '🐮', labels: { 'pt-BR': 'Vaca',      'en-US': 'Cow',      'es-ES': 'Vaca'     }, soundAsset: '/atratora-kids/audio/animals/cow.mp3'      },
  { id: 'anim-pig',      category: 'animals', emoji: '🐷', labels: { 'pt-BR': 'Porco',     'en-US': 'Pig',      'es-ES': 'Cerdo'    }, soundAsset: '/atratora-kids/audio/animals/pig.mp3'      },
  { id: 'anim-horse',    category: 'animals', emoji: '🐴', labels: { 'pt-BR': 'Cavalo',    'en-US': 'Horse',    'es-ES': 'Caballo'  }, soundAsset: '/atratora-kids/audio/animals/horse.mp3'   },
  { id: 'anim-bird',     category: 'animals', emoji: '🐦', labels: { 'pt-BR': 'Pássaro',   'en-US': 'Bird',     'es-ES': 'Pájaro'   }, soundAsset: '/atratora-kids/audio/animals/bird.mp3'     },
  { id: 'anim-fish',     category: 'animals', emoji: '🐟', labels: { 'pt-BR': 'Peixe',     'en-US': 'Fish',     'es-ES': 'Pez'      } },
  { id: 'anim-frog',     category: 'animals', emoji: '🐸', labels: { 'pt-BR': 'Sapo',      'en-US': 'Frog',     'es-ES': 'Rana'     }, soundAsset: '/atratora-kids/audio/animals/frog.mp3'     },
  { id: 'anim-turtle',   category: 'animals', emoji: '🐢', labels: { 'pt-BR': 'Tartaruga', 'en-US': 'Turtle',   'es-ES': 'Tortuga'  } },
];
