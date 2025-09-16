
import React, { useState, useEffect } from 'react';


const Language_Switch = ({ onToggle }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    const newLang = !isEnglish;
    setIsEnglish(newLang);
    document.dir = newLang ? 'ltr' : 'rtl';
    if (onToggle) onToggle(newLang ? 'en' : 'es');
  };

  useEffect(() => {
    document.dir = isEnglish ? 'ltr' : 'rtl';
  }, [isEnglish]);

  return (
    <div className="df-switch">
      <button
        type="button"
        className={`btn-toggle ${isEnglish ? '' : 'active'}`}
        onClick={toggleLanguage}
        aria-pressed={!isEnglish}
      >
        <div className="inner-handle"></div>
        <div className="handle"></div>
      </button>
    </div>
  );
};

export default Language_Switch;

