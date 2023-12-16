import ColorModeSwitcher from "./color-mode-switcher";

const TopBar = () => (
  <div className="grid grid-cols-2 gap-x-4 pt-2">
    <ColorModeSwitcher />
    <button className="py-2 px-4 bg-white border border-gray-300 rounded shadow-sm text-black hover:bg-gray-50">
      Load
    </button>
  </div>
);

export default TopBar;
