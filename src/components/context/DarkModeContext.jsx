// DarkModeContext.jsx

import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    // 이전 값을 받아와서 반대값으로 세팅
    // setDarkMode(prev => !prev);
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if(darkMode){
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const useDarkMode = () => useContext(DarkModeContext);