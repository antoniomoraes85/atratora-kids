import React from 'react';
import styles from './VirtualKeyboard.module.css';

interface VirtualKeyboardProps {
  onKeyPress: (letter: string) => void;
  activeKey?: string | null;
  disabled?: boolean;
}

const ALPHABET_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onKeyPress,
  activeKey = null,
  disabled = false
}) => {
  return (
    <div className={styles.keyboardContainer} role="group" aria-label="Teclado Virtual A-Z">
      {ALPHABET_KEYS.map((char) => {
        const isActive = activeKey?.toUpperCase() === char;
        return (
          <button
            key={char}
            type="button"
            disabled={disabled}
            className={`${styles.keyButton} ${isActive ? styles.activeKey : ''}`}
            onClick={() => onKeyPress(char)}
            aria-label={`Letra ${char}`}
          >
            {char}
          </button>
        );
      })}
    </div>
  );
};
