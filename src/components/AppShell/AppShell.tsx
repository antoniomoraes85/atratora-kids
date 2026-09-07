import React, { useState, useEffect } from 'react';
import { type RouteTab, Navigation } from '../Navigation/Navigation';
import { StorageService, type AppLanguage } from '../../services/StorageService';
import { AudioService } from '../../services/AudioService';
import { LumiloMascot } from '../Mascot/LumiloMascot';
import { Globe, Volume2, VolumeX, Star } from 'lucide-react';
import styles from './AppShell.module.css';

interface AppShellProps {
  currentTab: RouteTab;
  onSelectTab: (tab: RouteTab) => void;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  currentTab,
  onSelectTab,
  children
}) => {
  const [progress, setProgress] = useState(StorageService.getProgress());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleLanguage = () => {
    let newLang: AppLanguage = 'pt-BR';
    if (progress.language === 'pt-BR') newLang = 'en-US';
    else if (progress.language === 'en-US') newLang = 'es-ES';
    
    const updated = StorageService.updateSettings({ language: newLang });
    setProgress(updated);
    AudioService.playClickSound();
  };

  const handleToggleSound = () => {
    const updated = StorageService.updateSettings({ soundEnabled: !progress.soundEnabled });
    setProgress(updated);
    if (!updated.soundEnabled) {
      AudioService.stop();
    } else {
      AudioService.playClickSound();
    }
  };

  return (
    <div className={styles.appShell}>
      {/* Header Area */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <button
            type="button"
            className={styles.brandGroup}
            onClick={() => {
              onSelectTab('home');
              AudioService.playClickSound();
            }}
            aria-label="Ir para o Início — Lumilo"
          >
            <LumiloMascot size={40} expression="happy" />
            <div className={styles.brandTitles}>
              <span className={styles.brandTitle}>Lumilo</span>
            </div>
          </button>

          {/* Desktop Navigation in Header */}
          {!isMobile ? (
            <Navigation
              variant="desktopHeader"
              currentTab={currentTab}
              onSelectTab={onSelectTab}
              language={progress.language}
              onToggleLanguage={handleToggleLanguage}
              soundEnabled={progress.soundEnabled}
              onToggleSound={handleToggleSound}
            />
          ) : (
            <div className={styles.mobileHeaderControls}>
              <div className={styles.starsBadge} title="Total de Estrelas">
                <Star size={18} fill="#F59E0B" color="#F59E0B" />
                <span>{progress.totalStars}</span>
              </div>
              <button
                type="button"
                className={styles.compactBtn}
                onClick={handleToggleLanguage}
                aria-label={`Idioma: ${progress.language}`}
              >
                <Globe size={18} />
                <span>{progress.language === 'pt-BR' ? 'PT' : progress.language === 'en-US' ? 'EN' : 'ES'}</span>
              </button>
              <button
                type="button"
                className={styles.compactBtn}
                onClick={handleToggleSound}
                aria-label={progress.soundEnabled ? 'Som ligado' : 'Som desligado'}
              >
                {progress.soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation Bar */}
      {isMobile && (
        <Navigation
          variant="bottom"
          currentTab={currentTab}
          onSelectTab={onSelectTab}
          language={progress.language}
          onToggleLanguage={handleToggleLanguage}
          soundEnabled={progress.soundEnabled}
          onToggleSound={handleToggleSound}
        />
      )}
    </div>
  );
};
