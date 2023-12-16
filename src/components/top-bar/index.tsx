import useStore from "store";

import ColorModeSwitcher from "./color-mode-switcher";

const TopBar = () => {
  const store = useStore();

  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((res) => res.json())
      .then((data) => store.load(data));
  };

  return (
    <div className="grid grid-cols-2 gap-x-4 pt-2">
      <ColorModeSwitcher />
      <button
        className="py-2 px-4 bg-white border border-gray-300 rounded shadow-sm text-black hover:bg-gray-50"
        onClick={onLoad}
      >
        Load
      </button>
    </div>
  );
};

export default TopBar;
