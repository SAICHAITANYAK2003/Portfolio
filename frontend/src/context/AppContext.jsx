import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const projectUrl = "https://apidata.webinfloo.com/portfoliodata.json";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [projectsData, setProjectsData] = useState({});

  //Fetch Projects Data

  const fetchedProjectsData = async () => {
    try {
      const response = await axios.get(projectUrl);

      setProjectsData(response.data);
    } catch (error) {
      console.log(`Projects Data fetching Error: `, error);
    }
  };

  console.log(projectsData);

  // What's app connection
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;
  const message = import.meta.env.VITE_WHATSAPP_MESSAGE;

  const encodedMessage = encodeURIComponent(message);

  const whatsAppUrl = `https://wa.me/${number}?text=${encodedMessage}`;

  //Theme change
  const onHandleTheme = () => {
    setToggleTheme((prev) => !prev);
  };

  const themeValue = toggleTheme ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeValue);
    fetchedProjectsData();
  }, []);

  const value = {
    themeValue,
    onHandleTheme,
    whatsAppUrl,
    projectsData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
