import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const onHandleTheme = () => {
    setToggleTheme((prev) => !prev);
  };

  const themeValue = toggleTheme ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeValue);
  }, []);

  const value = {
    themeValue,
    onHandleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
