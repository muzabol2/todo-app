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
      className="text-lg text-current ml-2"
      onClick={toggleColorMode}
      aria-label={`Switch to ${text} mode`}
      {...props}
    >
      <SwitchIcon />
    </button>
  );
};

export default ColorModeSwitcher;
