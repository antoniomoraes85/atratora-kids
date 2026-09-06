import type { LearningItem } from './types';

// Toy illustrations
import ballImage   from '../assets/illustrations/toys/ball.svg';
import carImage    from '../assets/illustrations/toys/car.svg';
import dollImage   from '../assets/illustrations/toys/doll.svg';
import blocksImage from '../assets/illustrations/toys/blocks.svg';
import trainImage  from '../assets/illustrations/toys/train.svg';
import bearImage   from '../assets/illustrations/toys/bear.svg';
import kiteImage   from '../assets/illustrations/toys/kite.svg';
import yoyoImage   from '../assets/illustrations/toys/yoyo.svg';
import puzzleImage from '../assets/illustrations/toys/puzzle.svg';
import robotImage  from '../assets/illustrations/toys/robot.svg';
import drumImage   from '../assets/illustrations/toys/drum.svg';
import planeImage  from '../assets/illustrations/toys/plane.svg';

/**
 * soundAsset field is intentionally omitted while real audio files
 * are not yet licensed/distributed (alpha).
 * The field remains typed on LearningItem for future use.
 */
export const TOYS_DATA: LearningItem[] = [
  { id: 'toy-ball',   category: 'toys', image: ballImage,   emoji: '⚽', labels: { 'pt-BR': 'Bola',          'en-US': 'Ball',       'es-ES': 'Pelota'         } },
  { id: 'toy-car',    category: 'toys', image: carImage,    emoji: '🚗', labels: { 'pt-BR': 'Carrinho',       'en-US': 'Car',        'es-ES': 'Coche'          } },
  { id: 'toy-doll',   category: 'toys', image: dollImage,   emoji: '🎎', labels: { 'pt-BR': 'Boneca',         'en-US': 'Doll',       'es-ES': 'Muñeca'         } },
  { id: 'toy-blocks', category: 'toys', image: blocksImage, emoji: '🧱', labels: { 'pt-BR': 'Blocos',         'en-US': 'Blocks',     'es-ES': 'Bloques'        } },
  { id: 'toy-train',  category: 'toys', image: trainImage,  emoji: '🚂', labels: { 'pt-BR': 'Trem',           'en-US': 'Train',      'es-ES': 'Tren'           } },
  { id: 'toy-bear',   category: 'toys', image: bearImage,   emoji: '🧸', labels: { 'pt-BR': 'Ursinho',        'en-US': 'Teddy Bear', 'es-ES': 'Oso de peluche' } },
  { id: 'toy-kite',   category: 'toys', image: kiteImage,   emoji: '🪁', labels: { 'pt-BR': 'Pipa',           'en-US': 'Kite',       'es-ES': 'Cometa'         } },
  { id: 'toy-yoyo',   category: 'toys', image: yoyoImage,   emoji: '🪀', labels: { 'pt-BR': 'Ioiô',           'en-US': 'Yo-yo',      'es-ES': 'Yoyó'           } },
  { id: 'toy-puzzle', category: 'toys', image: puzzleImage, emoji: '🧩', labels: { 'pt-BR': 'Quebra-cabeça',  'en-US': 'Puzzle',     'es-ES': 'Rompecabezas'   } },
  { id: 'toy-robot',  category: 'toys', image: robotImage,  emoji: '🤖', labels: { 'pt-BR': 'Robô',           'en-US': 'Robot',      'es-ES': 'Robot'          } },
  { id: 'toy-drum',   category: 'toys', image: drumImage,   emoji: '🥁', labels: { 'pt-BR': 'Tambor',         'en-US': 'Drum',       'es-ES': 'Tambor'         } },
  { id: 'toy-plane',  category: 'toys', image: planeImage,  emoji: '✈️', labels: { 'pt-BR': 'Avião',          'en-US': 'Airplane',   'es-ES': 'Avión'          } },
];
