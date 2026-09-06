export type AppLanguage = 'pt-BR' | 'en-US' | 'es-ES';

export interface LetterStats {
  practicedCount: number;
  correctCount: number;
  trickyCount: number; // wrong attempts
  lastPracticed?: string;
}

export interface UserProgress {
  language: AppLanguage;
  soundEnabled: boolean;
  uppercaseOnly: boolean;
  totalStars: number;
  letterStats: Record<string, LetterStats>;
  categoryStats: Record<string, number>;
  completedSessions: number;
  achievements: string[];
}

const STORAGE_KEY = 'atratora_kids_abc_progress_v1';

const defaultProgress: UserProgress = {
  language: 'pt-BR',
  soundEnabled: true,
  uppercaseOnly: false,
  totalStars: 0,
  letterStats: {},
  categoryStats: {},
  completedSessions: 0,
  achievements: []
};

export class StorageService {
  public static getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return defaultProgress;
      const parsed = JSON.parse(data);
      return { ...defaultProgress, ...parsed };
    } catch (e) {
      console.warn('StorageService read error:', e);
      return defaultProgress;
    }
  }

  public static saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('StorageService write error:', e);
    }
  }

  public static recordLetterPractice(letter: string, isCorrect: boolean): UserProgress {
    const current = this.getProgress();
    const existing = current.letterStats[letter] || { practicedCount: 0, correctCount: 0, trickyCount: 0 };

    const updatedStats: LetterStats = {
      practicedCount: existing.practicedCount + 1,
      correctCount: isCorrect ? existing.correctCount + 1 : existing.correctCount,
      trickyCount: isCorrect ? existing.trickyCount : existing.trickyCount + 1,
      lastPracticed: new Date().toISOString()
    };

    const newStars = isCorrect ? current.totalStars + 1 : current.totalStars;

    const newProgress: UserProgress = {
      ...current,
      totalStars: newStars,
      letterStats: {
        ...current.letterStats,
        [letter]: updatedStats
      }
    };

    this.saveProgress(newProgress);
    return newProgress;
  }

  public static recordCategoryExploration(category: string): UserProgress {
    const current = this.getProgress();
    const count = current.categoryStats[category] || 0;
    
    const newProgress: UserProgress = {
      ...current,
      categoryStats: {
        ...current.categoryStats,
        [category]: count + 1
      }
    };

    this.saveProgress(newProgress);
    return newProgress;
  }

  public static updateSettings(settings: Partial<Pick<UserProgress, 'language' | 'soundEnabled' | 'uppercaseOnly'>>): UserProgress {
    const current = this.getProgress();
    const updated = { ...current, ...settings };
    this.saveProgress(updated);
    return updated;
  }

  public static resetProgress(): UserProgress {
    this.saveProgress(defaultProgress);
    return defaultProgress;
  }
}
