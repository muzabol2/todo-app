import * as React from "react";

import { useColorMode } from "./helpers";

import { MoonIcon, SunIcon } from "icons";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ColorModeSwitcher = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const text = colorMode === "light" ? "dark" : "light";

  const SwitchIcon = colorMode === "light" ? MoonIcon : SunIcon;

  return (
    <button
      style={{ fontSize: "1.5rem", color: "currentColor", marginLeft: "8px" }}
      onClick={toggleColorMode}
      aria-label={`Switch to ${text} mode`}
      {...props}
    >
      <SwitchIcon />
    </button>
  );
};

export default ColorModeSwitcher;
