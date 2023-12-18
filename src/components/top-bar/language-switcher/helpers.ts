import React from "react";

import { LanguageKey } from "locales";

import { useLanguageStore } from "store";

export const useHelpers = () => {
  const { lang, setLanguage, dictionary } = useLanguageStore();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setLanguage(e.target.value as LanguageKey);
    },
    [setLanguage],
  );

  return { lang, dictionary, handleChange };
};
