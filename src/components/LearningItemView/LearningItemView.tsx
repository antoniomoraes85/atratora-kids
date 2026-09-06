import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import type { LearningItem } from '../../data/types';
import { AudioService } from '../../services/AudioService';
import { StorageService } from '../../services/StorageService';
import type { AppLanguage } from '../../services/StorageService';
import styles from './LearningItemView.module.css';

interface LearningItemViewProps {
  items: LearningItem[];
  defaultLanguage: AppLanguage;
}

export const LearningItemView: React.FC<LearningItemViewProps> = ({ items, defaultLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLang, setActiveLang] = useState<AppLanguage>(defaultLanguage);

  const currentItem = items[currentIndex];

  useEffect(() => {
    // When defaultLanguage prop changes (global setting), update local if we want to follow it
    setActiveLang(defaultLanguage);
  }, [defaultLanguage]);

  useEffect(() => {
    if (currentItem) {
      StorageService.recordCategoryExploration(currentItem.category);
    }
  }, [currentItem]);

  const handleSpeak = (lang: AppLanguage, text: string) => {
    setActiveLang(lang);
    if (StorageService.getProgress().soundEnabled) {
      AudioService.speak(text, lang);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
      AudioService.playClickSound();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      AudioService.playClickSound();
    }
  };

  if (!currentItem) return null;

  return (
    <div className={styles.container}>
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Anterior"
      >
        <ChevronLeft size={32} />
      </button>

      <div className={styles.card}>
        {currentItem.image ? (
          <img src={currentItem.image} alt={currentItem.labels[activeLang]} className={styles.image} />
        ) : (
          <div className={styles.emoji}>{currentItem.emoji}</div>
        )}

        <h2 className={styles.title}>{currentItem.labels[activeLang]}</h2>

        <div className={styles.controls}>
          <button
            className={`${styles.langBtn} ${styles.ptBtn} ${activeLang === 'pt-BR' ? styles.activeLang : ''}`}
            onClick={() => handleSpeak('pt-BR', currentItem.labels['pt-BR'])}
            title="Ouvir em Português"
          >
            <Volume2 size={20} /> PT
          </button>
          <button
            className={`${styles.langBtn} ${styles.enBtn} ${activeLang === 'en-US' ? styles.activeLang : ''}`}
            onClick={() => handleSpeak('en-US', currentItem.labels['en-US'])}
            title="Listen in English"
          >
            <Volume2 size={20} /> EN
          </button>
          <button
            className={`${styles.langBtn} ${styles.esBtn} ${activeLang === 'es-ES' ? styles.activeLang : ''}`}
            onClick={() => handleSpeak('es-ES', currentItem.labels['es-ES'])}
            title="Escuchar en Español"
          >
            <Volume2 size={20} /> ES
          </button>
        </div>
      </div>

      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={handleNext}
        disabled={currentIndex === items.length - 1}
        aria-label="Próximo"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};
