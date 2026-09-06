export interface AlphabetItem {
  letter: string;
  lowercase: string;
  word: {
    'pt-BR': string;
    'en-US': string;
  };
  phonetic: {
    'pt-BR': string;
    'en-US': string;
  };
  emoji: string;
  color: string;
  strokeLines: Array<{ x1: number; y1: number; x2: number; y2: number }>;
}

export const ALPHABET: AlphabetItem[] = [
  {
    letter: 'A',
    lowercase: 'a',
    word: { 'pt-BR': 'Avião', 'en-US': 'Airplane' },
    phonetic: { 'pt-BR': 'A-vi-ão', 'en-US': 'Air-plane' },
    emoji: '✈️',
    color: '#EF4444',
    strokeLines: [
      { x1: 50, y1: 90, x2: 50, y2: 10 },
      { x1: 50, y1: 10, x2: 85, y2: 90 },
      { x1: 25, y1: 60, x2: 75, y2: 60 }
    ]
  },
  {
    letter: 'B',
    lowercase: 'b',
    word: { 'pt-BR': 'Bola', 'en-US': 'Ball' },
    phonetic: { 'pt-BR': 'Bo-la', 'en-US': 'Ball' },
    emoji: '⚽',
    color: '#F97316',
    strokeLines: [
      { x1: 20, y1: 10, x2: 20, y2: 90 },
      { x1: 20, y1: 10, x2: 60, y2: 10 },
      { x1: 20, y1: 50, x2: 65, y2: 50 },
      { x1: 20, y1: 90, x2: 60, y2: 90 }
    ]
  },
  {
    letter: 'C',
    lowercase: 'c',
    word: { 'pt-BR': 'Casa', 'en-US': 'House' },
    phonetic: { 'pt-BR': 'Ca-sa', 'en-US': 'House' },
    emoji: '🏠',
    color: '#F59E0B',
    strokeLines: [
      { x1: 80, y1: 25, x2: 30, y2: 25 },
      { x1: 30, y1: 25, x2: 30, y2: 75 },
      { x1: 30, y1: 75, x2: 80, y2: 75 }
    ]
  },
  {
    letter: 'D',
    lowercase: 'd',
    word: { 'pt-BR': 'Dado', 'en-US': 'Dice' },
    phonetic: { 'pt-BR': 'Da-do', 'en-US': 'Dice' },
    emoji: '🎲',
    color: '#10B981',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 25, y1: 10, x2: 70, y2: 50 },
      { x1: 70, y1: 50, x2: 25, y2: 90 }
    ]
  },
  {
    letter: 'E',
    lowercase: 'e',
    word: { 'pt-BR': 'Elefante', 'en-US': 'Elephant' },
    phonetic: { 'pt-BR': 'E-le-fan-te', 'en-US': 'El-e-phant' },
    emoji: '🐘',
    color: '#06B6D4',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 25, y1: 10, x2: 75, y2: 10 },
      { x1: 25, y1: 50, x2: 65, y2: 50 },
      { x1: 25, y1: 90, x2: 75, y2: 90 }
    ]
  },
  {
    letter: 'F',
    lowercase: 'f',
    word: { 'pt-BR': 'Foguete', 'en-US': 'Rocket' },
    phonetic: { 'pt-BR': 'Fo-gue-te', 'en-US': 'Rock-et' },
    emoji: '🚀',
    color: '#6366F1',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 25, y1: 10, x2: 75, y2: 10 },
      { x1: 25, y1: 50, x2: 65, y2: 50 }
    ]
  },
  {
    letter: 'G',
    lowercase: 'g',
    word: { 'pt-BR': 'Gato', 'en-US': 'Cat' },
    phonetic: { 'pt-BR': 'Ga-to', 'en-US': 'Cat' },
    emoji: '🐱',
    color: '#8B5CF6',
    strokeLines: [
      { x1: 80, y1: 25, x2: 30, y2: 25 },
      { x1: 30, y1: 25, x2: 30, y2: 75 },
      { x1: 30, y1: 75, x2: 80, y2: 75 },
      { x1: 80, y1: 75, x2: 80, y2: 50 },
      { x1: 80, y1: 50, x2: 55, y2: 50 }
    ]
  },
  {
    letter: 'H',
    lowercase: 'h',
    word: { 'pt-BR': 'Helicóptero', 'en-US': 'Helicopter' },
    phonetic: { 'pt-BR': 'He-li-cóp-te-ro', 'en-US': 'Hel-i-cop-ter' },
    emoji: '🚁',
    color: '#EC4899',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 75, y1: 10, x2: 75, y2: 90 },
      { x1: 25, y1: 50, x2: 75, y2: 50 }
    ]
  },
  {
    letter: 'I',
    lowercase: 'i',
    word: { 'pt-BR': 'Igreja', 'en-US': 'Igloo' },
    phonetic: { 'pt-BR': 'I-gre-ja', 'en-US': 'Ig-loo' },
    emoji: '⛺',
    color: '#F43F5E',
    strokeLines: [
      { x1: 30, y1: 10, x2: 70, y2: 10 },
      { x1: 50, y1: 10, x2: 50, y2: 90 },
      { x1: 30, y1: 90, x2: 70, y2: 90 }
    ]
  },
  {
    letter: 'J',
    lowercase: 'j',
    word: { 'pt-BR': 'Jacaré', 'en-US': 'Juice' },
    phonetic: { 'pt-BR': 'Ja-ca-ré', 'en-US': 'Juice' },
    emoji: '🐊',
    color: '#10B981',
    strokeLines: [
      { x1: 30, y1: 10, x2: 75, y2: 10 },
      { x1: 60, y1: 10, x2: 60, y2: 75 },
      { x1: 60, y1: 75, x2: 30, y2: 75 }
    ]
  },
  {
    letter: 'K',
    lowercase: 'k',
    word: { 'pt-BR': 'Kiwi', 'en-US': 'Kite' },
    phonetic: { 'pt-BR': 'Ki-wi', 'en-US': 'Kite' },
    emoji: '🪁',
    color: '#84CC16',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 70, y1: 15, x2: 25, y2: 50 },
      { x1: 25, y1: 50, x2: 75, y2: 90 }
    ]
  },
  {
    letter: 'L',
    lowercase: 'l',
    word: { 'pt-BR': 'Leão', 'en-US': 'Lion' },
    phonetic: { 'pt-BR': 'Le-ão', 'en-US': 'Li-on' },
    emoji: '🦁',
    color: '#EAB308',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 25, y1: 90, x2: 75, y2: 90 }
    ]
  },
  {
    letter: 'M',
    lowercase: 'm',
    word: { 'pt-BR': 'Macaco', 'en-US': 'Monkey' },
    phonetic: { 'pt-BR': 'Ma-ca-co', 'en-US': 'Mon-key' },
    emoji: '🐒',
    color: '#F97316',
    strokeLines: [
      { x1: 20, y1: 90, x2: 20, y2: 10 },
      { x1: 20, y1: 10, x2: 50, y2: 55 },
      { x1: 50, y1: 55, x2: 80, y2: 10 },
      { x1: 80, y1: 10, x2: 80, y2: 90 }
    ]
  },
  {
    letter: 'N',
    lowercase: 'n',
    word: { 'pt-BR': 'Nuvem', 'en-US': 'Nest' },
    phonetic: { 'pt-BR': 'Nu-vem', 'en-US': 'Nest' },
    emoji: '☁️',
    color: '#3B82F6',
    strokeLines: [
      { x1: 25, y1: 90, x2: 25, y2: 10 },
      { x1: 25, y1: 10, x2: 75, y2: 90 },
      { x1: 75, y1: 90, x2: 75, y2: 10 }
    ]
  },
  {
    letter: 'O',
    lowercase: 'o',
    word: { 'pt-BR': 'Ovelha', 'en-US': 'Owl' },
    phonetic: { 'pt-BR': 'O-ve-lha', 'en-US': 'Owl' },
    emoji: '🐑',
    color: '#A855F7',
    strokeLines: [
      { x1: 50, y1: 10, x2: 20, y2: 50 },
      { x1: 20, y1: 50, x2: 50, y2: 90 },
      { x1: 50, y1: 90, x2: 80, y2: 50 },
      { x1: 80, y1: 50, x2: 50, y2: 10 }
    ]
  },
  {
    letter: 'P',
    lowercase: 'p',
    word: { 'pt-BR': 'Pato', 'en-US': 'Penguin' },
    phonetic: { 'pt-BR': 'Pa-to', 'en-US': 'Pen-guin' },
    emoji: '🦆',
    color: '#EC4899',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 25, y1: 10, x2: 70, y2: 10 },
      { x1: 70, y1: 10, x2: 70, y2: 50 },
      { x1: 70, y1: 50, x2: 25, y2: 50 }
    ]
  },
  {
    letter: 'Q',
    lowercase: 'q',
    word: { 'pt-BR': 'Queijo', 'en-US': 'Queen' },
    phonetic: { 'pt-BR': 'Quei-jo', 'en-US': 'Queen' },
    emoji: '🧀',
    color: '#F59E0B',
    strokeLines: [
      { x1: 50, y1: 10, x2: 20, y2: 50 },
      { x1: 20, y1: 50, x2: 50, y2: 85 },
      { x1: 50, y1: 85, x2: 80, y2: 50 },
      { x1: 80, y1: 50, x2: 50, y2: 10 },
      { x1: 55, y1: 65, x2: 85, y2: 95 }
    ]
  },
  {
    letter: 'R',
    lowercase: 'r',
    word: { 'pt-BR': 'Robô', 'en-US': 'Robot' },
    phonetic: { 'pt-BR': 'Ro-bô', 'en-US': 'Ro-bot' },
    emoji: '🤖',
    color: '#10B981',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 90 },
      { x1: 25, y1: 10, x2: 70, y2: 10 },
      { x1: 70, y1: 10, x2: 70, y2: 50 },
      { x1: 70, y1: 50, x2: 25, y2: 50 },
      { x1: 25, y1: 50, x2: 75, y2: 90 }
    ]
  },
  {
    letter: 'S',
    lowercase: 's',
    word: { 'pt-BR': 'Sol', 'en-US': 'Sun' },
    phonetic: { 'pt-BR': 'Sol', 'en-US': 'Sun' },
    emoji: '☀️',
    color: '#EAB308',
    strokeLines: [
      { x1: 75, y1: 20, x2: 30, y2: 20 },
      { x1: 30, y1: 20, x2: 75, y2: 50 },
      { x1: 75, y1: 50, x2: 25, y2: 80 }
    ]
  },
  {
    letter: 'T',
    lowercase: 't',
    word: { 'pt-BR': 'Tubarão', 'en-US': 'Turtle' },
    phonetic: { 'pt-BR': 'Tu-ba-rão', 'en-US': 'Tur-tle' },
    emoji: '🦈',
    color: '#06B6D4',
    strokeLines: [
      { x1: 20, y1: 10, x2: 80, y2: 10 },
      { x1: 50, y1: 10, x2: 50, y2: 90 }
    ]
  },
  {
    letter: 'U',
    lowercase: 'u',
    word: { 'pt-BR': 'Uva', 'en-US': 'Umbrella' },
    phonetic: { 'pt-BR': 'U-va', 'en-US': 'Um-brel-la' },
    emoji: '🍇',
    color: '#8B5CF6',
    strokeLines: [
      { x1: 25, y1: 10, x2: 25, y2: 75 },
      { x1: 25, y1: 75, x2: 75, y2: 75 },
      { x1: 75, y1: 75, x2: 75, y2: 10 }
    ]
  },
  {
    letter: 'V',
    lowercase: 'v',
    word: { 'pt-BR': 'Vaca', 'en-US': 'Violin' },
    phonetic: { 'pt-BR': 'Va-ca', 'en-US': 'Vi-o-lin' },
    emoji: '🐮',
    color: '#F43F5E',
    strokeLines: [
      { x1: 20, y1: 10, x2: 50, y2: 90 },
      { x1: 50, y1: 90, x2: 80, y2: 10 }
    ]
  },
  {
    letter: 'W',
    lowercase: 'w',
    word: { 'pt-BR': 'Wafer', 'en-US': 'Whale' },
    phonetic: { 'pt-BR': 'Wa-fer', 'en-US': 'Whale' },
    emoji: '🐳',
    color: '#3B82F6',
    strokeLines: [
      { x1: 15, y1: 10, x2: 35, y2: 90 },
      { x1: 35, y1: 90, x2: 50, y2: 40 },
      { x1: 50, y1: 40, x2: 65, y2: 90 },
      { x1: 65, y1: 90, x2: 85, y2: 10 }
    ]
  },
  {
    letter: 'X',
    lowercase: 'x',
    word: { 'pt-BR': 'Xícara', 'en-US': 'Xylophone' },
    phonetic: { 'pt-BR': 'Xí-ca-ra', 'en-US': 'Xy-lo-phone' },
    emoji: '☕',
    color: '#EF4444',
    strokeLines: [
      { x1: 20, y1: 10, x2: 80, y2: 90 },
      { x1: 80, y1: 10, x2: 20, y2: 90 }
    ]
  },
  {
    letter: 'Y',
    lowercase: 'y',
    word: { 'pt-BR': 'Yakisoba', 'en-US': 'Yak' },
    phonetic: { 'pt-BR': 'Ya-ki-so-ba', 'en-US': 'Yak' },
    emoji: '🍜',
    color: '#F59E0B',
    strokeLines: [
      { x1: 20, y1: 10, x2: 50, y2: 50 },
      { x1: 80, y1: 10, x2: 50, y2: 50 },
      { x1: 50, y1: 50, x2: 50, y2: 90 }
    ]
  },
  {
    letter: 'Z',
    lowercase: 'z',
    word: { 'pt-BR': 'Zebra', 'en-US': 'Zebra' },
    phonetic: { 'pt-BR': 'Ze-bra', 'en-US': 'Ze-bra' },
    emoji: '🦓',
    color: '#10B981',
    strokeLines: [
      { x1: 20, y1: 10, x2: 80, y2: 10 },
      { x1: 80, y1: 10, x2: 20, y2: 90 },
      { x1: 20, y1: 90, x2: 80, y2: 90 }
    ]
  }
];
