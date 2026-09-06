import React from 'react';
import { Home, Type, Hash, PawPrint, ToyBrick, Users, Volume2, VolumeX, Globe } from 'lucide-react';
import { type AppLanguage } from '../../services/StorageService';
import styles from './Navigation.module.css';

export type RouteTab = 'home' | 'alphabet' | 'numbers' | 'animals' | 'toys' | 'parents';

interface NavigationProps {
  currentTab: RouteTab;
  onSelectTab: (tab: RouteTab) => void;
  language: AppLanguage;
  onToggleLanguage: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  variant: 'bottom' | 'desktopHeader' | 'desktopSidebar';
}

const NAV_ITEMS: Array<{ id: RouteTab; label: { 'pt-BR': string; 'en-US': string; 'es-ES': string }; icon: React.ComponentType<{ size?: number }> }> = [
  { id: 'home', label: { 'pt-BR': 'Início', 'en-US': 'Home', 'es-ES': 'Inicio' }, icon: Home },
  { id: 'alphabet', label: { 'pt-BR': 'Alfabeto', 'en-US': 'Alphabet', 'es-ES': 'Alfabeto' }, icon: Type },
  { id: 'numbers', label: { 'pt-BR': 'Números', 'en-US': 'Numbers', 'es-ES': 'Números' }, icon: Hash },
  { id: 'animals', label: { 'pt-BR': 'Animais', 'en-US': 'Animals', 'es-ES': 'Animales' }, icon: PawPrint },
  { id: 'toys', label: { 'pt-BR': 'Brinquedos', 'en-US': 'Toys', 'es-ES': 'Juguetes' }, icon: ToyBrick },
  { id: 'parents', label: { 'pt-BR': 'Pais', 'en-US': 'Parents', 'es-ES': 'Padres' }, icon: Users }
];

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  language,
  onToggleLanguage,
  soundEnabled,
  onToggleSound,
  variant
}) => {
  if (variant === 'bottom') {
    return (
      <nav className={styles.bottomNav} aria-label="Navegação Inferior Mobile">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.bottomNavItem} ${isActive ? styles.activeItem : ''}`}
              onClick={() => onSelectTab(item.id)}
              aria-label={item.label[language]}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={22} />
              <span className={styles.navLabel}>{item.label[language]}</span>
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className={styles.desktopNav} aria-label="Navegação Principal Desktop">
      <div className={styles.navLinksGroup}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.desktopNavItem} ${isActive ? styles.activeItem : ''}`}
              onClick={() => onSelectTab(item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={20} />
              <span>{item.label[language]}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.controlsGroup}>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={onToggleLanguage}
          aria-label={`Idioma atual: ${language}`}
          title="Trocar Idioma"
        >
          <Globe size={18} />
          <span className={styles.controlText}>{language === 'pt-BR' ? 'PT' : language === 'en-US' ? 'EN' : 'ES'}</span>
        </button>

        <button
          type="button"
          className={styles.controlBtn}
          onClick={onToggleSound}
          aria-label={soundEnabled ? 'Som Ativado' : 'Som Desativado'}
          title="Alternar Som"
        >
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>
    </nav>
  );
};
