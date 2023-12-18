import { useEffect, useState } from "react";

enum Mode {
  Dark = "dark",
  Light = "light",
}

export const useHelpers = () => {
  const [colorMode, setColorMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? Mode.Dark
      : Mode.Light,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setColorMode(mediaQuery.matches ? Mode.Dark : Mode.Light);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (colorMode === Mode.Dark) {
      document.documentElement.classList.add(Mode.Dark);
    } else {
      document.documentElement.classList.remove(Mode.Dark);
    }
  }, [colorMode]);

  const isActive = colorMode === Mode.Dark;

  const toggleColorMode = () => {
    setColorMode((prevMode) =>
      prevMode === Mode.Light ? Mode.Dark : Mode.Light,
    );
  };

  return { isActive, toggleColorMode };
};
