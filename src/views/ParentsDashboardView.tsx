import React, { useState } from 'react';
import { StorageService } from '../services/StorageService';
import type { UserProgress, AppLanguage } from '../services/StorageService';
import { AudioService } from '../services/AudioService';
import { Star, Eye, Globe, Volume2, VolumeX, Trash2 } from 'lucide-react';
import styles from './ParentsDashboardView.module.css';

interface ParentsDashboardViewProps {
  language: AppLanguage;
  onProgressChange?: () => void;
}

export const ParentsDashboardView: React.FC<ParentsDashboardViewProps> = ({ language, onProgressChange }) => {
  const [progress, setProgress] = useState<UserProgress>(StorageService.getProgress());
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const categories = ['alphabet', 'numbers', 'animals', 'toys'];
  const totalExplored = categories.reduce((sum, cat) => sum + (progress.categoryStats[cat] || 0), 0);

  const handleReset = () => {
    StorageService.resetProgress();
    const updated = StorageService.getProgress();
    setProgress(updated);
    setShowResetConfirm(false);
    AudioService.playClickSound();
    onProgressChange?.();
  };

  const handleToggleSound = () => {
    const updated = StorageService.updateSettings({ soundEnabled: !progress.soundEnabled });
    setProgress(updated);
    if (updated.soundEnabled) AudioService.playClickSound();
  };

  const handleToggleLanguage = () => {
    let newLang: AppLanguage = 'pt-BR';
    if (progress.language === 'pt-BR') newLang = 'en-US';
    else if (progress.language === 'en-US') newLang = 'es-ES';
    
    const updated = StorageService.updateSettings({ language: newLang });
    setProgress(updated);
    AudioService.playClickSound();
    onProgressChange?.();
  };

  const T = {
    title: { 'pt-BR': 'Área dos Responsáveis', 'en-US': 'Parents Area', 'es-ES': 'Área de Padres' },
    subtitle: { 'pt-BR': 'Acompanhe o progresso da criança', 'en-US': "Track your child's progress", 'es-ES': 'Sigue el progreso de tu hijo/a' },
    stars: { 'pt-BR': 'Estrelas Ganhas', 'en-US': 'Stars Earned', 'es-ES': 'Estrellas Ganadas' },
    explored: { 'pt-BR': 'Itens Explorados', 'en-US': 'Items Explored', 'es-ES': 'Ítems Explorados' },
    settings: { 'pt-BR': 'Configurações', 'en-US': 'Settings', 'es-ES': 'Ajustes' },
    sound: { 'pt-BR': 'Som', 'en-US': 'Sound', 'es-ES': 'Sonido' },
    langLabel: { 'pt-BR': 'Idioma Base', 'en-US': 'Base Language', 'es-ES': 'Idioma Base' },
    reset: { 'pt-BR': 'Reiniciar Progresso', 'en-US': 'Reset Progress', 'es-ES': 'Reiniciar Progreso' },
    confirmReset: { 'pt-BR': 'Tem certeza? Todo o progresso será apagado.', 'en-US': 'Are you sure? All progress will be erased.', 'es-ES': '¿Estás seguro/a? Se borrará todo el progreso.' },
    confirm: { 'pt-BR': 'Sim, apagar', 'en-US': 'Yes, erase', 'es-ES': 'Sí, borrar' },
    cancel: { 'pt-BR': 'Cancelar', 'en-US': 'Cancel', 'es-ES': 'Cancelar' },
    cat_alphabet: { 'pt-BR': 'Alfabeto', 'en-US': 'Alphabet', 'es-ES': 'Alfabeto' },
    cat_numbers: { 'pt-BR': 'Números', 'en-US': 'Numbers', 'es-ES': 'Números' },
    cat_animals: { 'pt-BR': 'Animais', 'en-US': 'Animals', 'es-ES': 'Animales' },
    cat_toys: { 'pt-BR': 'Brinquedos', 'en-US': 'Toys', 'es-ES': 'Juguetes' },
    privacy: { 
      'pt-BR': '🔒 Todos os dados são armazenados apenas neste dispositivo. Nenhuma informação é enviada para servidores.',
      'en-US': '🔒 All data is stored only on this device. No information is sent to any servers.',
      'es-ES': '🔒 Todos los datos se almacenan solo en este dispositivo. No se envía información a servidores.'
    }
  } as const;

  return (
    <div className={styles.container}>
      <header className={styles.viewHeader}>
        <h1 className={styles.title}>{T.title[language]}</h1>
        <p className={styles.subtitle}>{T.subtitle[language]}</p>
      </header>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <Star size={28} fill="#F59E0B" color="#F59E0B" />
          <span className={styles.statNumber}>{progress.totalStars}</span>
          <span className={styles.statLabel}>{T.stars[language]}</span>
        </div>
        <div className={styles.statCard}>
          <Eye size={28} color="#6366F1" />
          <span className={styles.statNumber}>{totalExplored}</span>
          <span className={styles.statLabel}>{T.explored[language]}</span>
        </div>
      </div>

      <section className={styles.lettersSection}>
        <h2 className={styles.sectionTitle}>{T.explored[language]} (Por Categoria)</h2>
        <div className={styles.lettersGrid}>
           {categories.map(cat => (
             <div key={cat} className={styles.letterChip} style={{ '--letter-color': '#4F46E5' } as React.CSSProperties}>
               <span className={styles.chipLetter}>{T[`cat_${cat}` as keyof typeof T]?.[language] || cat}</span>
               <span className={styles.chipPct}>{progress.categoryStats[cat] || 0}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Settings */}
      <section className={styles.settingsSection}>
        <h2 className={styles.sectionTitle}>{T.settings[language]}</h2>
        <div className={styles.settingsGrid}>
          <div className={styles.settingRow}>
            <div className={styles.settingLabel}>
              {progress.soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
              <span>{T.sound[language]}</span>
            </div>
            <button
              type="button"
              className={`${styles.toggleBtn} ${progress.soundEnabled ? styles.toggleOn : ''}`}
              onClick={handleToggleSound}
            >
              {progress.soundEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className={styles.settingRow}>
            <div className={styles.settingLabel}>
              <Globe size={20} />
              <span>{T.langLabel[language]}</span>
            </div>
            <button
              type="button"
              className={styles.toggleBtn}
              onClick={handleToggleLanguage}
            >
              {progress.language === 'pt-BR' ? '🇧🇷 PT-BR' : progress.language === 'en-US' ? '🇺🇸 EN-US' : '🇪🇸 ES-ES'}
            </button>
          </div>
        </div>
      </section>

      {/* Reset */}
      <section className={styles.resetSection}>
        {showResetConfirm ? (
          <div className={styles.confirmBox}>
            <p className={styles.confirmText}>{T.confirmReset[language]}</p>
            <div className={styles.confirmBtns}>
              <button type="button" className={styles.confirmYes} onClick={handleReset}>
                {T.confirm[language]}
              </button>
              <button type="button" className={styles.confirmNo} onClick={() => setShowResetConfirm(false)}>
                {T.cancel[language]}
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => { AudioService.playClickSound(); setShowResetConfirm(true); }}
          >
            <Trash2 size={18} />
            {T.reset[language]}
          </button>
        )}
      </section>

      {/* Privacy note */}
      <p className={styles.privacyNote}>
        {T.privacy[language]}
      </p>
    </div>
  );
};
