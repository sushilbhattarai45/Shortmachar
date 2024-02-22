import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();
import axios from "axios";
import moment from "moment";
export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState({});
  const [chooseData, setChooseData] = useState({}); // [news, setNews
  let today = moment().format().split("T")[0];
  const oneWeekAgo = moment().subtract(1, "week").format().split("T")[0];

  useEffect(() => {
    const hitApi = async () => {
      let url =
        "https://newsapi.org/v2/everything?language=en&q=highlights&from=" +
        oneWeekAgo +
        "&to=" +
        today +
        "&sortBy=popularity&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";
      let result = await axios.get(url);
      setNews(result.data);
    };
    const choosingData = async () => {
      let url =
        "https://newsapi.org/v2/everything?language=en&q=trending&from=" +
        oneWeekAgo +
        "&to=" +
        today +
        "&sortBy=popularity&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";
      console.log("url", url);
      let result = await axios.get(url);
      setChooseData(result.data);
    };
    // 047.05758.01.04
    hitApi();
    choosingData();
  }, []);

  return (
    <AppContext.Provider value={{ news, setNews, chooseData, setChooseData }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
