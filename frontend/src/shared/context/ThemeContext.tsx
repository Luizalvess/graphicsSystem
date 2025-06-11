import { DarkTheme, LightTheme } from "@/shared";
import { ThemeProvider } from "@emotion/react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface IDrawerProviderProps {
  children: React.ReactNode;
}

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAooThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IDrawerProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
