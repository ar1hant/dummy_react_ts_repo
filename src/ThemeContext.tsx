import { createContext } from "react";

export interface ThemeContextType {
  theme: boolean,
  setTheme: (theme : boolean) => void,
}

const initState: ThemeContextType = {
  theme: false,
  setTheme: (theme : boolean) => {

  },
}

const ThemeContext = createContext<ThemeContextType>(initState);

export default ThemeContext;