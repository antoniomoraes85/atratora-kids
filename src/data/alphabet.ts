import type { LearningItem } from './types';

// Alphabet illustrations — each maps to the most common word example
// (reuses existing animal/toy SVGs where applicable, adds custom ones for others)
import aImg from '../assets/illustrations/alphabet/a.svg'; // Abelha/Ant/Abeja
import bImg from '../assets/illustrations/alphabet/b.svg'; // Bola/Ball/Barco
import cImg from '../assets/illustrations/alphabet/c.svg'; // Cachorro/Cat/Casa
import dImg from '../assets/illustrations/alphabet/d.svg'; // Dado/Dice/Dedo
import eImg from '../assets/illustrations/alphabet/e.svg'; // Elefante/Elephant/Estrella
import fImg from '../assets/illustrations/alphabet/f.svg'; // Foca/Fish/Flor
import gImg from '../assets/illustrations/alphabet/g.svg'; // Gato/Giraffe/Gato
import hImg from '../assets/illustrations/alphabet/h.svg'; // Hipopótamo/Horse/Hormiga
import iImg from '../assets/illustrations/alphabet/i.svg'; // Iglú/Igloo/Iglú
import jImg from '../assets/illustrations/alphabet/j.svg'; // Jabuti/Jar/Jirafa
import kImg from '../assets/illustrations/alphabet/k.svg'; // Koala/Kite/Koala
import lImg from '../assets/illustrations/alphabet/l.svg'; // Leão/Lion/Luna
import mImg from '../assets/illustrations/alphabet/m.svg'; // Macaco/Monkey/Mariposa
import nImg from '../assets/illustrations/alphabet/n.svg'; // Nuvem/Nest/Nube
import oImg from '../assets/illustrations/alphabet/o.svg'; // Ovelha/Owl/Oso
import pImg from '../assets/illustrations/alphabet/p.svg'; // Peixe/Parrot/Pez
import qImg from '../assets/illustrations/alphabet/q.svg'; // Queijo/Queen/Queso
import rImg from '../assets/illustrations/alphabet/r.svg'; // Robô/Robot/Robot
import sImg from '../assets/illustrations/alphabet/s.svg'; // Sapo/Snake/Sol
import tImg from '../assets/illustrations/alphabet/t.svg'; // Tartaruga/Turtle/Tigre
import uImg from '../assets/illustrations/alphabet/u.svg'; // Urso/Umbrella/Uva
import vImg from '../assets/illustrations/alphabet/v.svg'; // Vaca/Violin/Vaca
import wImg from '../assets/illustrations/alphabet/w.svg'; // Waffle/Whale/Wafle
import xImg from '../assets/illustrations/alphabet/x.svg'; // Xícara/Xylophone/Xilófono
import yImg from '../assets/illustrations/alphabet/y.svg'; // Yoga/Yak/Yate
import zImg from '../assets/illustrations/alphabet/z.svg'; // Zebra/Zebra/Zebra

/**
 * Alphabet data with per-language word examples and illustrations.
 * NOTE: word examples may differ per language since
 * the same letter does not always produce the same word cross-linguistically.
 * The `labels` field stores the uppercase letter; lowercase is derived programmatically.
 */
export const ALPHABET_DATA: LearningItem[] = [
  { id: 'letter-a', category: 'alphabet', image: aImg, emoji: 'A', labels: { 'pt-BR': 'A', 'en-US': 'A', 'es-ES': 'A' }, wordExample: { 'pt-BR': 'Abelha', 'en-US': 'Ant',      'es-ES': 'Abeja'   } },
  { id: 'letter-b', category: 'alphabet', image: bImg, emoji: 'B', labels: { 'pt-BR': 'B', 'en-US': 'B', 'es-ES': 'B' }, wordExample: { 'pt-BR': 'Bola',   'en-US': 'Ball',     'es-ES': 'Barco'   } },
  { id: 'letter-c', category: 'alphabet', image: cImg, emoji: 'C', labels: { 'pt-BR': 'C', 'en-US': 'C', 'es-ES': 'C' }, wordExample: { 'pt-BR': 'Cachorro','en-US': 'Cat',     'es-ES': 'Casa'    } },
  { id: 'letter-d', category: 'alphabet', image: dImg, emoji: 'D', labels: { 'pt-BR': 'D', 'en-US': 'D', 'es-ES': 'D' }, wordExample: { 'pt-BR': 'Dado',    'en-US': 'Dog',      'es-ES': 'Dedo'    } },
  { id: 'letter-e', category: 'alphabet', image: eImg, emoji: 'E', labels: { 'pt-BR': 'E', 'en-US': 'E', 'es-ES': 'E' }, wordExample: { 'pt-BR': 'Elefante','en-US': 'Elephant', 'es-ES': 'Estrella'} },
  { id: 'letter-f', category: 'alphabet', image: fImg, emoji: 'F', labels: { 'pt-BR': 'F', 'en-US': 'F', 'es-ES': 'F' }, wordExample: { 'pt-BR': 'Foca',    'en-US': 'Fish',     'es-ES': 'Flor'    } },
  { id: 'letter-g', category: 'alphabet', image: gImg, emoji: 'G', labels: { 'pt-BR': 'G', 'en-US': 'G', 'es-ES': 'G' }, wordExample: { 'pt-BR': 'Gato',    'en-US': 'Giraffe',  'es-ES': 'Gato'    } },
  { id: 'letter-h', category: 'alphabet', image: hImg, emoji: 'H', labels: { 'pt-BR': 'H', 'en-US': 'H', 'es-ES': 'H' }, wordExample: { 'pt-BR': 'Hipopótamo','en-US': 'Horse', 'es-ES': 'Hormiga' } },
  { id: 'letter-i', category: 'alphabet', image: iImg, emoji: 'I', labels: { 'pt-BR': 'I', 'en-US': 'I', 'es-ES': 'I' }, wordExample: { 'pt-BR': 'Iglú',    'en-US': 'Igloo',    'es-ES': 'Iglú'    } },
  { id: 'letter-j', category: 'alphabet', image: jImg, emoji: 'J', labels: { 'pt-BR': 'J', 'en-US': 'J', 'es-ES': 'J' }, wordExample: { 'pt-BR': 'Jabuti',  'en-US': 'Jar',      'es-ES': 'Jirafa'  } },
  { id: 'letter-k', category: 'alphabet', image: kImg, emoji: 'K', labels: { 'pt-BR': 'K', 'en-US': 'K', 'es-ES': 'K' }, wordExample: { 'pt-BR': 'Koala',   'en-US': 'Kite',     'es-ES': 'Koala'   } },
  { id: 'letter-l', category: 'alphabet', image: lImg, emoji: 'L', labels: { 'pt-BR': 'L', 'en-US': 'L', 'es-ES': 'L' }, wordExample: { 'pt-BR': 'Leão',    'en-US': 'Lion',     'es-ES': 'Luna'    } },
  { id: 'letter-m', category: 'alphabet', image: mImg, emoji: 'M', labels: { 'pt-BR': 'M', 'en-US': 'M', 'es-ES': 'M' }, wordExample: { 'pt-BR': 'Macaco',  'en-US': 'Monkey',   'es-ES': 'Mariposa'} },
  { id: 'letter-n', category: 'alphabet', image: nImg, emoji: 'N', labels: { 'pt-BR': 'N', 'en-US': 'N', 'es-ES': 'N' }, wordExample: { 'pt-BR': 'Nuvem',   'en-US': 'Nest',     'es-ES': 'Nube'    } },
  { id: 'letter-o', category: 'alphabet', image: oImg, emoji: 'O', labels: { 'pt-BR': 'O', 'en-US': 'O', 'es-ES': 'O' }, wordExample: { 'pt-BR': 'Ovo',     'en-US': 'Owl',      'es-ES': 'Oso'     } },
  { id: 'letter-p', category: 'alphabet', image: pImg, emoji: 'P', labels: { 'pt-BR': 'P', 'en-US': 'P', 'es-ES': 'P' }, wordExample: { 'pt-BR': 'Peixe',   'en-US': 'Parrot',   'es-ES': 'Pez'     } },
  { id: 'letter-q', category: 'alphabet', image: qImg, emoji: 'Q', labels: { 'pt-BR': 'Q', 'en-US': 'Q', 'es-ES': 'Q' }, wordExample: { 'pt-BR': 'Queijo',  'en-US': 'Queen',    'es-ES': 'Queso'   } },
  { id: 'letter-r', category: 'alphabet', image: rImg, emoji: 'R', labels: { 'pt-BR': 'R', 'en-US': 'R', 'es-ES': 'R' }, wordExample: { 'pt-BR': 'Rato',    'en-US': 'Rabbit',   'es-ES': 'Rana'    } },
  { id: 'letter-s', category: 'alphabet', image: sImg, emoji: 'S', labels: { 'pt-BR': 'S', 'en-US': 'S', 'es-ES': 'S' }, wordExample: { 'pt-BR': 'Sapo',    'en-US': 'Snake',    'es-ES': 'Sol'     } },
  { id: 'letter-t', category: 'alphabet', image: tImg, emoji: 'T', labels: { 'pt-BR': 'T', 'en-US': 'T', 'es-ES': 'T' }, wordExample: { 'pt-BR': 'Tartaruga','en-US': 'Tiger',   'es-ES': 'Tigre'   } },
  { id: 'letter-u', category: 'alphabet', image: uImg, emoji: 'U', labels: { 'pt-BR': 'U', 'en-US': 'U', 'es-ES': 'U' }, wordExample: { 'pt-BR': 'Urso',    'en-US': 'Umbrella', 'es-ES': 'Uva'     } },
  { id: 'letter-v', category: 'alphabet', image: vImg, emoji: 'V', labels: { 'pt-BR': 'V', 'en-US': 'V', 'es-ES': 'V' }, wordExample: { 'pt-BR': 'Vaca',    'en-US': 'Violin',   'es-ES': 'Vaca'    } },
  { id: 'letter-w', category: 'alphabet', image: wImg, emoji: 'W', labels: { 'pt-BR': 'W', 'en-US': 'W', 'es-ES': 'W' }, wordExample: { 'pt-BR': 'Waffle',  'en-US': 'Wolf',     'es-ES': 'Wafle'   } },
  { id: 'letter-x', category: 'alphabet', image: xImg, emoji: 'X', labels: { 'pt-BR': 'X', 'en-US': 'X', 'es-ES': 'X' }, wordExample: { 'pt-BR': 'Xícara',  'en-US': 'Xylophone','es-ES': 'Xilófono'} },
  { id: 'letter-y', category: 'alphabet', image: yImg, emoji: 'Y', labels: { 'pt-BR': 'Y', 'en-US': 'Y', 'es-ES': 'Y' }, wordExample: { 'pt-BR': 'Yoga',    'en-US': 'Yak',      'es-ES': 'Yate'    } },
  { id: 'letter-z', category: 'alphabet', image: zImg, emoji: 'Z', labels: { 'pt-BR': 'Z', 'en-US': 'Z', 'es-ES': 'Z' }, wordExample: { 'pt-BR': 'Zebra',   'en-US': 'Zebra',    'es-ES': 'Zebra'   } },
];
