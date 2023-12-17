import { useLanguageStore, useTodoStore } from "store";

import ColorModeSwitcher from "./color-mode-switcher";
import LanguageSwitcher from "./language-switcher";

const TopBar = () => {
  const store = useTodoStore();
  const { dictionary: D } = useLanguageStore();

  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json",
    )
      .then((res) => res.json())
      .then((data) => store.load(data));
  };

  return (
    <div className="grid grid-cols-2 gap-3 pt-2">
      <ColorModeSwitcher />
      <LanguageSwitcher />
      <button
        className="bg-blue-500 dark:bg-blue-400 text-white p-2 rounded-md"
        onClick={onLoad}
      >
        {D.LOAD}
      </button>
    </div>
  );
};

export default TopBar;
