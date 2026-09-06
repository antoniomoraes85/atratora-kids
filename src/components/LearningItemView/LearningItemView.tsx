import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Play } from 'lucide-react';
import type { LearningItem } from '../../data/types';
import { AudioService } from '../../services/AudioService';
import { StorageService } from '../../services/StorageService';
import type { AppLanguage } from '../../services/StorageService';
import styles from './LearningItemView.module.css';

interface LearningItemViewProps {
  items: LearningItem[];
  defaultLanguage: AppLanguage;
}

/** Renders a dot grid for numbers 0–20 */
function NumberDots({ count }: { count: number }) {
  if (count === 0) {
    return <div className={styles.numberDotsEmpty} aria-label="Zero" />;
  }
  // Group into rows of 5 for readability
  const dots = Array.from({ length: count });
  return (
    <div className={styles.numberDots} aria-label={`${count} pontos`}>
      {dots.map((_, i) => (
        <span key={i} className={styles.dot} aria-hidden="true" />
      ))}
    </div>
  );
}

export const LearningItemView: React.FC<LearningItemViewProps> = ({ items, defaultLanguage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLang, setActiveLang] = useState<AppLanguage>(defaultLanguage);
  const [soundBlocked, setSoundBlocked] = useState(false);
  const didAutoPlay = useRef(false);

  const currentItem = items[currentIndex];

  // Follow global language changes
  useEffect(() => {
    setActiveLang(defaultLanguage);
  }, [defaultLanguage]);

  // Record category exploration
  useEffect(() => {
    if (currentItem) {
      StorageService.recordCategoryExploration(currentItem.category);
    }
  }, [currentItem]);

  // Reset auto-play flag when item changes
  useEffect(() => {
    didAutoPlay.current = false;
    setSoundBlocked(false);
  }, [currentIndex]);

  // Auto-play animal/toy sound asset when item opens
  useEffect(() => {
    if (!currentItem?.soundAsset || didAutoPlay.current) return;
    if (!StorageService.getProgress().soundEnabled) return;
    didAutoPlay.current = true;

    const audio = new Audio(currentItem.soundAsset);
    audio.play().catch(() => {
      // Autoplay blocked by browser policy — show manual play button
      setSoundBlocked(true);
    });
  }, [currentItem]);

  const handleSpeak = useCallback((lang: AppLanguage, text: string) => {
    setActiveLang(lang);
    if (StorageService.getProgress().soundEnabled) {
      AudioService.speak(text, lang);
    }
  }, []);

  const handlePlayAnimalSound = useCallback(() => {
    if (!currentItem?.soundAsset) return;
    const audio = new Audio(currentItem.soundAsset);
    audio.play().catch(() => {});
    setSoundBlocked(false);
  }, [currentItem]);

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

  const isAlphabet = currentItem.category === 'alphabet';
  const isNumber   = currentItem.category === 'numbers';
  const hasSound   = Boolean(currentItem.soundAsset);
  const label      = currentItem.labels[activeLang];

  return (
    <div className={styles.container}>
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Item anterior"
      >
        <ChevronLeft size={32} />
      </button>

      <div className={`${styles.card} ${styles[`card_${currentItem.category}`]}`}>
        {/* Progress indicator */}
        <div className={styles.progressBar} aria-label={`${currentIndex + 1} de ${items.length}`}>
          <div
            className={styles.progressFill}
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>

        {/* Main visual */}
        {currentItem.image ? (
          <img
            src={currentItem.image}
            alt={label}
            className={styles.image}
          />
        ) : (
          <div className={styles.emojiWrap} aria-hidden="true">
            <span className={styles.emoji}>{currentItem.emoji}</span>
          </div>
        )}

        {/* Number dots */}
        {isNumber && currentItem.numericValue !== undefined && (
          <NumberDots count={currentItem.numericValue} />
        )}

        {/* Main label */}
        <h2 className={styles.title}>{label}</h2>

        {/* Alphabet: word example */}
        {isAlphabet && currentItem.wordExample && (
          <p className={styles.wordExample}>
            {currentItem.wordExample[activeLang]}
          </p>
        )}

        {/* Animal / toy sound button */}
        {hasSound && soundBlocked && (
          <button
            type="button"
            className={styles.animalSoundBtn}
            onClick={handlePlayAnimalSound}
            aria-label="Ouvir som"
          >
            <Play size={22} />
            Ouvir som
          </button>
        )}

        {/* Language buttons */}
        <div className={styles.controls}>
          {(['pt-BR', 'en-US', 'es-ES'] as AppLanguage[]).map((lang) => (
            <button
              key={lang}
              type="button"
              className={`${styles.langBtn} ${styles[`lang_${lang.replace('-', '_')}`]} ${activeLang === lang ? styles.activeLang : ''}`}
              onClick={() => handleSpeak(lang, currentItem.labels[lang])}
              aria-label={`Ouvir em ${lang === 'pt-BR' ? 'Português' : lang === 'en-US' ? 'Inglês' : 'Espanhol'}`}
              aria-pressed={activeLang === lang}
            >
              <Volume2 size={18} aria-hidden="true" />
              {lang === 'pt-BR' ? 'PT' : lang === 'en-US' ? 'EN' : 'ES'}
            </button>
          ))}
        </div>
      </div>

      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={handleNext}
        disabled={currentIndex === items.length - 1}
        aria-label="Próximo item"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};
