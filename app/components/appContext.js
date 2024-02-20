import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();
import axios from "axios";
export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState({});

  useEffect(() => {
    const hitApi = async () => {
      let url =
        "https://newsapi.org/v2/everything?q=tesla&from=2024-01-20&sortBy=publishedAt&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";

      let result = await axios.get(url);
      setNews(result.data);
    };

    hitApi();
  }, []);

  return (
    <AppContext.Provider value={{ news, setNews }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
