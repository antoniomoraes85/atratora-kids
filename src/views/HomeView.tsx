import React, { useEffect } from 'react';

import { AudioService } from '../services/AudioService';
import type { RouteTab } from '../components/Navigation/Navigation';
import styles from './HomeView.module.css';
import logoImg from '../assets/brand/atratora-kids-logo.png';

interface HomeViewProps {
  onSelectTab: (tab: RouteTab) => void;
  language: 'pt-BR' | 'en-US' | 'es-ES';
}

const ACTIONS = [
  {
    id: 'abc' as RouteTab,
    label: { 'pt-BR': 'Alfabeto', 'en-US': 'Alphabet', 'es-ES': 'Alfabeto' },
    icon: 'ðŸ”¤',
    color: '#6366F1'
  },
  {
    id: 'numbers' as RouteTab, // We will map this to 'numbers' route
    label: { 'pt-BR': 'NÃºmeros', 'en-US': 'Numbers', 'es-ES': 'NÃºmeros' },
    icon: 'ðŸ”¢',
    color: '#10B981'
  },
  {
    id: 'animals' as RouteTab, // We will map this to 'animals' route
    label: { 'pt-BR': 'Animais', 'en-US': 'Animals', 'es-ES': 'Animales' },
    icon: 'ðŸ¦',
    color: '#F59E0B'
  },
  {
    id: 'toys' as RouteTab, // We will map this to 'toys' route
    label: { 'pt-BR': 'Brinquedos', 'en-US': 'Toys', 'es-ES': 'Juguetes' },
    icon: 'ðŸ§¸',
    color: '#EC4899'
  }
];

const GREETINGS = {
  'pt-BR': 'O que vamos aprender?',
  'en-US': 'What are we learning?',
  'es-ES': 'Â¿QuÃ© vamos a aprender?'
};

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, language }) => {
  useEffect(() => {
    AudioService.init();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* CSS Parallax Background Elements */}
      <div className={styles.parallaxBg}>
        <div className={styles.sun}></div>
        <div className={`${styles.cloud} ${styles.cloud1}`}></div>
        <div className={`${styles.cloud} ${styles.cloud2}`}></div>
        <div className={`${styles.cloud} ${styles.cloud3}`}></div>
      </div>

      <div className={styles.contentLayer}>
        <header className={styles.logoWrapper}>
          <img src={logoImg} alt="Atratora Kids Logo" className={styles.mainLogo} />
        </header>

        <p className={styles.greeting}>{GREETINGS[language]}</p>

        <section className={styles.actionsSection} aria-label={GREETINGS[language]}>
          <div className={styles.actionsGrid}>
            {ACTIONS.map((action) => (
              <button
                key={action.id}
                type="button"
                className={styles.actionCard}
                style={{ '--action-color': action.color } as React.CSSProperties}
                onClick={() => {
                  AudioService.playClickSound();
                  onSelectTab(action.id);
                }}
                aria-label={action.label[language]}
              >
                <div className={styles.cardIcon}>{action.icon}</div>
                <span className={styles.cardLabel}>{action.label[language]}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

