import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeContextType } from "./ThemeContext";

const ThemeToggle= () => {
  const {theme, setTheme} = useContext<ThemeContextType>(ThemeContext);
  return (
    <button className={theme ? "theme_toggle dark" : "theme_toggle"} onClick={() => {
      setTheme(!theme)
    }}>
      {
        theme ? "Dark" : "Light"
      }
    </button>
  )
}

export default ThemeToggle;