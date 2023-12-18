import React from "react";

import { useHelpers } from "./helpers";

import { LanguageKey } from "locales";

const LanguageSwitcher = () => {
  const { lang, dictionary, handleChange } = useHelpers();

  return (
    <div className="flex items-center justify-center h-8">
      <select
        value={lang}
        onChange={handleChange}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white text-center w-15"
      >
        {Object.keys(dictionary.dropdown).map((langKey) => (
          <option key={langKey} value={langKey}>
            {dictionary.dropdown[langKey as LanguageKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(LanguageSwitcher);
