import React from 'react';
import { useTranslation } from 'react-i18next';
import Leagues from './components/Leagues';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleLanguage}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {t('changeLanguage')}
      </button>
      <h1 className="text-2xl font-bold mb-4">{t('leagues')}</h1>
      <Leagues />
    </div>
  );
}

export default App;
