import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();
import axios from "axios";
export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState({});

  useEffect(() => {
    const hitApi = async () => {
      let url =
        "https://newsapi.org/v2/everything?language=en&q=news&from=2024-02-17&to=2024-02-17&sortBy=popularity&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";
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
