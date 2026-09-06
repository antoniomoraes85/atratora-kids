import type { LearningItem } from './types';

/**
 * Toy sounds reference public/audio/toys/<id>.mp3
 * These files are PENDING — no audio files are distributed in this alpha.
 * Not all toys have an obvious sound; those without soundAsset intentionally omit it.
 */
export const TOYS_DATA: LearningItem[] = [
  { id: 'toy-ball',    category: 'toys', emoji: '⚽', labels: { 'pt-BR': 'Bola',           'en-US': 'Ball',        'es-ES': 'Pelota'          }, soundAsset: '/atratora-kids/audio/toys/ball.mp3'   },
  { id: 'toy-car',     category: 'toys', emoji: '🚗', labels: { 'pt-BR': 'Carrinho',        'en-US': 'Car',         'es-ES': 'Coche'           }, soundAsset: '/atratora-kids/audio/toys/car.mp3'    },
  { id: 'toy-doll',    category: 'toys', emoji: '🎎', labels: { 'pt-BR': 'Boneca',          'en-US': 'Doll',        'es-ES': 'Muñeca'          } },
  { id: 'toy-blocks',  category: 'toys', emoji: '🧱', labels: { 'pt-BR': 'Blocos',          'en-US': 'Blocks',      'es-ES': 'Bloques'         } },
  { id: 'toy-train',   category: 'toys', emoji: '🚂', labels: { 'pt-BR': 'Trem',            'en-US': 'Train',       'es-ES': 'Tren'            }, soundAsset: '/atratora-kids/audio/toys/train.mp3'  },
  { id: 'toy-bear',    category: 'toys', emoji: '🧸', labels: { 'pt-BR': 'Ursinho',         'en-US': 'Teddy Bear',  'es-ES': 'Oso de peluche'  } },
  { id: 'toy-kite',    category: 'toys', emoji: '🪁', labels: { 'pt-BR': 'Pipa',            'en-US': 'Kite',        'es-ES': 'Cometa'          } },
  { id: 'toy-yoyo',    category: 'toys', emoji: '🪀', labels: { 'pt-BR': 'Ioiô',            'en-US': 'Yo-yo',       'es-ES': 'Yoyó'            } },
  { id: 'toy-puzzle',  category: 'toys', emoji: '🧩', labels: { 'pt-BR': 'Quebra-cabeça',   'en-US': 'Puzzle',      'es-ES': 'Rompecabezas'    } },
  { id: 'toy-robot',   category: 'toys', emoji: '🤖', labels: { 'pt-BR': 'Robô',            'en-US': 'Robot',       'es-ES': 'Robot'           } },
  { id: 'toy-drum',    category: 'toys', emoji: '🥁', labels: { 'pt-BR': 'Tambor',          'en-US': 'Drum',        'es-ES': 'Tambor'          }, soundAsset: '/atratora-kids/audio/toys/drum.mp3'   },
  { id: 'toy-plane',   category: 'toys', emoji: '✈️', labels: { 'pt-BR': 'Avião',           'en-US': 'Airplane',    'es-ES': 'Avión'           } },
];
