import axios from "axios";

const hitMyApi = async (label) => {
  let urlData =
    "https://newsapi.org/v2/everything?language=en&q=" +
    label +
    "&from=2024-01-021&to=2024-02-22s&sortBy=popularity&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";
  let results = await axios.get(urlData);
  return results.data;
};

export default hitMyApi;
