import React, { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell/AppShell';
import { type RouteTab } from './components/Navigation/Navigation';
import { StorageService } from './services/StorageService';
import { AudioService } from './services/AudioService';

// Lazy loading activities to reduce initial bundle
import { HomeView } from './views/HomeView';
import { LearningItemView } from './components/LearningItemView/LearningItemView';
import { ALPHABET_DATA } from './data/alphabet_new';
import { NUMBERS_DATA } from './data/numbers';
import { ANIMALS_DATA } from './data/animals';
import { TOYS_DATA } from './data/toys';
import { ParentsDashboardView } from './views/ParentsDashboardView';

import './styles/global.css';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<RouteTab>('home');
  const [language, setLanguage] = useState(StorageService.getProgress().language);

  // Init audio service on first mount
  useEffect(() => {
    AudioService.init();
  }, []);

  const handleSelectTab = (tab: RouteTab) => {
    setCurrentTab(tab);
    // Refresh language in case it changed from ParentsDashboard
    setLanguage(StorageService.getProgress().language);
  };

  const renderCurrentView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView onSelectTab={handleSelectTab} language={language} />;
      case 'alphabet':
        return <LearningItemView items={ALPHABET_DATA} defaultLanguage={language} />;
      case 'numbers':
        return <LearningItemView items={NUMBERS_DATA} defaultLanguage={language} />;
      case 'animals':
        return <LearningItemView items={ANIMALS_DATA} defaultLanguage={language} />;
      case 'toys':
        return <LearningItemView items={TOYS_DATA} defaultLanguage={language} />;
      case 'parents':
        return (
          <ParentsDashboardView
            language={language}
            onProgressChange={() => setLanguage(StorageService.getProgress().language)}
          />
        );
      default:
        return <HomeView onSelectTab={handleSelectTab} language={language} />;
    }
  };

  return (
    <AppShell
      currentTab={currentTab}
      onSelectTab={(tab) => {
        handleSelectTab(tab);
        AudioService.playClickSound();
      }}
    >
      {renderCurrentView()}
    </AppShell>
  );
};

export default App;
