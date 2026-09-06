import type { LearningItem } from './types';

// Animal illustrations
import dogImage      from '../assets/illustrations/animals/dog.svg';
import catImage      from '../assets/illustrations/animals/cat.svg';
import lionImage     from '../assets/illustrations/animals/lion.svg';
import elephantImage from '../assets/illustrations/animals/elephant.svg';
import monkeyImage   from '../assets/illustrations/animals/monkey.svg';
import cowImage      from '../assets/illustrations/animals/cow.svg';
import pigImage      from '../assets/illustrations/animals/pig.svg';
import horseImage    from '../assets/illustrations/animals/horse.svg';
import birdImage     from '../assets/illustrations/animals/bird.svg';
import fishImage     from '../assets/illustrations/animals/fish.svg';
import frogImage     from '../assets/illustrations/animals/frog.svg';
import turtleImage   from '../assets/illustrations/animals/turtle.svg';

/**
 * soundAsset field is intentionally omitted while real audio files
 * are not yet licensed/distributed (alpha).
 * The field remains typed on LearningItem for future use.
 */
export const ANIMALS_DATA: LearningItem[] = [
  { id: 'anim-dog',      category: 'animals', image: dogImage,      emoji: '🐶', labels: { 'pt-BR': 'Cachorro',  'en-US': 'Dog',      'es-ES': 'Perro'    } },
  { id: 'anim-cat',      category: 'animals', image: catImage,      emoji: '🐱', labels: { 'pt-BR': 'Gato',      'en-US': 'Cat',      'es-ES': 'Gato'     } },
  { id: 'anim-lion',     category: 'animals', image: lionImage,     emoji: '🦁', labels: { 'pt-BR': 'Leão',      'en-US': 'Lion',     'es-ES': 'León'     } },
  { id: 'anim-elephant', category: 'animals', image: elephantImage, emoji: '🐘', labels: { 'pt-BR': 'Elefante',  'en-US': 'Elephant', 'es-ES': 'Elefante' } },
  { id: 'anim-monkey',   category: 'animals', image: monkeyImage,   emoji: '🐒', labels: { 'pt-BR': 'Macaco',    'en-US': 'Monkey',   'es-ES': 'Mono'     } },
  { id: 'anim-cow',      category: 'animals', image: cowImage,      emoji: '🐮', labels: { 'pt-BR': 'Vaca',      'en-US': 'Cow',      'es-ES': 'Vaca'     } },
  { id: 'anim-pig',      category: 'animals', image: pigImage,      emoji: '🐷', labels: { 'pt-BR': 'Porco',     'en-US': 'Pig',      'es-ES': 'Cerdo'    } },
  { id: 'anim-horse',    category: 'animals', image: horseImage,    emoji: '🐴', labels: { 'pt-BR': 'Cavalo',    'en-US': 'Horse',    'es-ES': 'Caballo'  } },
  { id: 'anim-bird',     category: 'animals', image: birdImage,     emoji: '🐦', labels: { 'pt-BR': 'Pássaro',   'en-US': 'Bird',     'es-ES': 'Pájaro'   } },
  { id: 'anim-fish',     category: 'animals', image: fishImage,     emoji: '🐟', labels: { 'pt-BR': 'Peixe',     'en-US': 'Fish',     'es-ES': 'Pez'      } },
  { id: 'anim-frog',     category: 'animals', image: frogImage,     emoji: '🐸', labels: { 'pt-BR': 'Sapo',      'en-US': 'Frog',     'es-ES': 'Rana'     } },
  { id: 'anim-turtle',   category: 'animals', image: turtleImage,   emoji: '🐢', labels: { 'pt-BR': 'Tartaruga', 'en-US': 'Turtle',   'es-ES': 'Tortuga'  } },
];
