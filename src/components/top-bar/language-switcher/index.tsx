import React from "react";

import { useLanguageStore } from "store";

import { LanguageKey } from "locales";

const LanguageSwitcher = () => {
  const { lang, setLanguage, dictionary } = useLanguageStore();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setLanguage(e.target.value as LanguageKey);
    },
    [setLanguage]
  );

  return (
    <select value={lang} onChange={handleChange}>
      {Object.keys(dictionary.dropdown).map((langKey) => (
        <option key={langKey} value={langKey}>
          {dictionary.dropdown[langKey as LanguageKey]}
        </option>
      ))}
    </select>
  );
};

export default React.memo(LanguageSwitcher);
