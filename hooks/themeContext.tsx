import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { Light, Dark } from "../theme";

type Mode = "light" | "dark";
type Palette = typeof Light;

interface Theme {
  mode: Mode;
  toggleTheme: () => void;
  palette: Palette;
}

const themeContext = createContext<Theme>({
  mode: "light",
  toggleTheme: () => {},
  palette: Light,
});
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const sysTheme = useColorScheme();
  const [mode, setMode] = useState<Mode>(sysTheme ?? "light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const palette = mode === "light" ? Light : Dark;

  return (
    <themeContext.Provider value={{ mode, toggleTheme, palette }}>
      {children}
    </themeContext.Provider>
  );
};
export const useTheme = () => useContext(themeContext);
