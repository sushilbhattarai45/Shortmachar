import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();
import axios from "axios";
import moment from "moment";
export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [chooseData, setChooseData] = useState({}); // [news, setNews
  let today = moment().format().split("T")[0];
  const oneWeekAgo = moment().subtract(1, "week").format().split("T")[0];

  useEffect(() => {
    const hitApi = async () => {
      let url =
        "https://newsapi.org/v2/everything?language=en&q=technology&from=" +
        oneWeekAgo +
        "&to=" +
        today +
        "&sortBy=popularity&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";
      let result = await axios.get(url);
      setNews(result.data);
    };

    // 047.05758.01.04
    hitApi();
    choosingData("trending");
    setLoaded(true);
  }, []);
  const choosingData = async (d) => {
    let url =
      "https://newsapi.org/v2/everything?language=en&q=" +
      d +
      "&from=" +
      oneWeekAgo +
      "&to=" +
      today +
      "&sortBy=popularity&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";
    let result = await axios.get(url);
    setChooseData(result.data);
  };
  return (
    <AppContext.Provider
      value={{ news, setNews, chooseData, setChooseData, loaded }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
