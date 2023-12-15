import ColorModeSwitcher from "./color-mode-switcher";

const TopBar = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "16px",
      paddingTop: "8px",
    }}
  >
    <ColorModeSwitcher />
    <button>Load</button>
  </div>
);

export default TopBar;
