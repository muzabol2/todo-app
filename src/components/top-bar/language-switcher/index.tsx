import React from "react";

import { useLanguageStore } from "store";

import { LanguageKey } from "locales";

const LanguageSwitcher = () => {
  const { lang, setLanguage, dictionary } = useLanguageStore();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setLanguage(e.target.value as LanguageKey);
    },
    [setLanguage],
  );

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
    >
      {Object.keys(dictionary.dropdown).map((langKey) => (
        <option key={langKey} value={langKey}>
          {dictionary.dropdown[langKey as LanguageKey]}
        </option>
      ))}
    </select>
  );
};

export default React.memo(LanguageSwitcher);
