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
    <div className="grid grid-cols-2 gap-3 pt-2">
      <ColorModeSwitcher />
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={onLoad}
      >
        Load
      </button>
    </div>
  );
};

export default TopBar;
