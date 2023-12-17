import { create } from "zustand";

import { LanguageKey, dictionaries } from "locales";

type LanguageState = {
  lang: LanguageKey;
  dictionary: (typeof dictionaries)[LanguageKey];
  setLanguage: (lang: LanguageKey) => void;
};

const useLanguageStore = create<LanguageState>((set) => ({
  lang: LanguageKey.EN,
  dictionary: dictionaries[LanguageKey.EN],
  setLanguage: (lang) => set(() => ({ lang, dictionary: dictionaries[lang] })),
}));

export default useLanguageStore;
