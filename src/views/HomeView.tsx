import React, { useEffect } from 'react';
import { AudioService } from '../services/AudioService';
import type { RouteTab } from '../components/Navigation/Navigation';
import styles from './HomeView.module.css';
import lumiloLogo from '../assets/brand/lumilo-logo-master.png';

interface HomeViewProps {
  onSelectTab: (tab: RouteTab) => void;
  language: 'pt-BR' | 'en-US' | 'es-ES';
}

interface ActionCard {
  id: RouteTab;
  label: Record<string, string>;
  description: Record<string, string>;
  colorClass: string;
  /** SVG path or inline SVG element for card illustration */
  illustration: React.ReactNode;
}

const ACTIONS: ActionCard[] = [
  {
    id: 'alphabet',
    label:       { 'pt-BR': 'Alfabeto',    'en-US': 'Alphabet',  'es-ES': 'Alfabeto'   },
    description: { 'pt-BR': 'A B C ...',   'en-US': 'A B C ...',  'es-ES': 'A B C ...'  },
    colorClass: styles.cardAlphabet,
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className={styles.cardSvg}>
        <circle cx="40" cy="40" r="36" fill="#E0F2FE" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="ui-rounded, Arial Rounded MT Bold, system-ui, sans-serif"
          fontSize="40" fontWeight="800" fill="#0EA5E9">A</text>
        <text x="28%" y="75%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="ui-rounded, Arial Rounded MT Bold, system-ui, sans-serif"
          fontSize="16" fontWeight="700" fill="#38BDF8" opacity="0.7">b</text>
        <text x="72%" y="75%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="ui-rounded, Arial Rounded MT Bold, system-ui, sans-serif"
          fontSize="16" fontWeight="700" fill="#38BDF8" opacity="0.7">c</text>
      </svg>
    ),
  },
  {
    id: 'numbers',
    label:       { 'pt-BR': 'Números',     'en-US': 'Numbers',   'es-ES': 'Números'    },
    description: { 'pt-BR': '1 2 3 ...',   'en-US': '1 2 3 ...',  'es-ES': '1 2 3 ...'  },
    colorClass: styles.cardNumbers,
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className={styles.cardSvg}>
        <circle cx="40" cy="40" r="36" fill="#FEF3C7" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="ui-rounded, Arial Rounded MT Bold, system-ui, sans-serif"
          fontSize="38" fontWeight="800" fill="#FBBF24">5</text>
        {/* 5 stars */}
        {[0,1,2,3,4].map(i => (
          <circle key={i} cx={16 + i * 12} cy={66} r="4" fill="#FCD34D" opacity="0.9" />
        ))}
      </svg>
    ),
  },
  {
    id: 'animals',
    label:       { 'pt-BR': 'Animais',     'en-US': 'Animals',   'es-ES': 'Animales'   },
    description: { 'pt-BR': 'Sons e nomes', 'en-US': 'Sounds & names', 'es-ES': 'Sonidos y nombres' },
    colorClass: styles.cardAnimals,
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className={styles.cardSvg}>
        <circle cx="40" cy="40" r="36" fill="#DCFCE7" />
        {/* Simplified cat face */}
        <ellipse cx="40" cy="44" rx="20" ry="18" fill="#34D399" />
        {/* Ears */}
        <polygon points="24,30 20,16 34,28" fill="#34D399" />
        <polygon points="56,30 60,16 46,28" fill="#34D399" />
        <polygon points="26,29 22,18 33,28" fill="#ECFDF5" />
        <polygon points="54,29 58,18 47,28" fill="#ECFDF5" />
        {/* Eyes */}
        <ellipse cx="32" cy="42" rx="4" ry="5" fill="#1E293B" />
        <ellipse cx="48" cy="42" rx="4" ry="5" fill="#1E293B" />
        <circle cx="33" cy="40" r="1.5" fill="white" />
        <circle cx="49" cy="40" r="1.5" fill="white" />
        {/* Nose */}
        <ellipse cx="40" cy="50" rx="3" ry="2" fill="#F43F5E" />
        {/* Whiskers */}
        <line x1="20" y1="50" x2="36" y2="51" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="44" y1="51" x2="60" y2="50" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'toys',
    label:       { 'pt-BR': 'Brinquedos', 'en-US': 'Toys',      'es-ES': 'Juguetes'   },
    description: { 'pt-BR': 'Diversão!',   'en-US': 'Fun!',       'es-ES': '¡Diversión!' },
    colorClass: styles.cardToys,
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className={styles.cardSvg}>
        <circle cx="40" cy="40" r="36" fill="#FEE2E2" />
        {/* Ball */}
        <circle cx="40" cy="38" r="20" fill="#F43F5E" />
        <path d="M22 34 Q40 20 58 34" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M20 42 Q40 56 60 42" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M40 18 L40 58" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const GREETINGS = {
  'pt-BR': 'O que vamos aprender hoje?',
  'en-US': 'What are we learning today?',
  'es-ES': '¿Qué vamos a aprender hoy?',
};

const TAGLINE = {
  'pt-BR': 'Explore, ouça e aprenda!',
  'en-US': 'Explore, listen and learn!',
  'es-ES': '¡Explora, escucha y aprende!',
};

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, language }) => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    AudioService.init();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* CSS Parallax Background */}
      <div
        className={styles.parallaxBg}
        aria-hidden="true"
        data-reduced={prefersReducedMotion ? 'true' : undefined}
      >
        <div className={styles.sun} />
        <div className={`${styles.cloud} ${styles.cloud1}`} />
        <div className={`${styles.cloud} ${styles.cloud2}`} />
        <div className={`${styles.cloud} ${styles.cloud3}`} />
        {/* Floating shapes */}
        <div className={`${styles.floatShape} ${styles.shape1}`} />
        <div className={`${styles.floatShape} ${styles.shape2}`} />
        <div className={`${styles.floatShape} ${styles.shape3}`} />
      </div>

      <div className={styles.contentLayer}>
        {/* Logo */}
        <header className={styles.logoWrapper}>
          <img
            src={lumiloLogo}
            alt="Lumilo — Aprender é descobrir"
            className={styles.mainLogo}
          />
        </header>

        {/* Hero text */}
        <div className={styles.heroText}>
          <p className={styles.greeting}>{GREETINGS[language]}</p>
          <p className={styles.tagline}>{TAGLINE[language]}</p>
        </div>

        {/* Modality Cards */}
        <section className={styles.actionsSection} aria-label={GREETINGS[language]}>
          <div className={styles.actionsGrid}>
            {ACTIONS.map((action) => (
              <button
                key={action.id}
                type="button"
                className={`${styles.actionCard} ${action.colorClass}`}
                onClick={() => {
                  AudioService.playClickSound();
                  onSelectTab(action.id);
                }}
                aria-label={action.label[language]}
              >
                <div className={styles.cardIllustration} aria-hidden="true">
                  {action.illustration}
                </div>
                <span className={styles.cardLabel}>{action.label[language]}</span>
                <span className={styles.cardDesc}>{action.description[language]}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
