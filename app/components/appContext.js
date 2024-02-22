import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();
import axios from "axios";
import moment from "moment";
export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState({});
  let today = moment().format().split("T")[0];
  useEffect(() => {
    const hitApi = async () => {
      let url =
        "https://newsapi.org/v2/everything?language=en&q=nepal&from=2024-02-17&to=" +
        today +
        "&sortBy=popularity&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";
      let result = await axios.get(url);
      setNews(result.data);
    };

    // 047.05758.01.04
    hitApi();
  }, []);

  return (
    <AppContext.Provider value={{ news, setNews }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
