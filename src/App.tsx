// import React, {FC} from 'react';
import { useState } from 'react';
import ThemeContext from "./ThemeContext";
import ThemeToggle from './ThemeToggle';
import Todos from './Todos';
import './App.css';



const App = () => {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={theme ? "App dark" : "App"}>
        <Todos />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
