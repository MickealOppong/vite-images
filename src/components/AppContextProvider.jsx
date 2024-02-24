import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
const getInitialMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
  const storeMode = localStorage.getItem('darkTheme');
  console.log(typeof storeMode);
  if (storeMode === null) {

    return prefersDarkMode;
  }
  return storeMode === 'true';
}
const AppContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialMode())
  const [searchCriteria, setSearchCriteria] = useState('cars');

  const toggleDarkTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem('darkTheme', newTheme)
  }

  console.log(getInitialMode());

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme);
  }, [darkTheme])
  return <AppContext.Provider value={{
    darkTheme, toggleDarkTheme, searchCriteria
    , setSearchCriteria
  }}>
    {children}
  </AppContext.Provider>
}

export default AppContextProvider