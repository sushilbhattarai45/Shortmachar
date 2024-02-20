import axios from "axios";

const hitApi = async () => {
  let url =
    "https://newsapi.org/v2/everything?q=tesla&from=2024-01-20&sortBy=publishedAt&apiKey=f30e8c6be91543cb9b6d9473f1d818ff";

  let result = await axios.get(url);
};

export default hitApi;
