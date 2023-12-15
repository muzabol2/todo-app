import { useState } from "react";

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return { colorMode, toggleColorMode };
};
