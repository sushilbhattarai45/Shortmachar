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

export async function AiSummerise(text) {
  let text1 = text.replace(/[^a-zA-Z0-9]/g, " ");

  let VITE_AI_SUMMERIZATION_API_URL =
    "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text";

  let VITE_AI_SUMMERIZATION_X_RapidAPI_Key =
    "e562bb25b0msh1aefa205d9a60ecp1267d1jsn87a941f095f9";
  let VITE_AI_SUMMERIZATION_X_RapidAPI_Host =
    "article-extractor-and-summarizer.p.rapidapi.com";
  const options = {
    method: "POST",
    url: VITE_AI_SUMMERIZATION_API_URL,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": VITE_AI_SUMMERIZATION_X_RapidAPI_Key,
      "X-RapidAPI-Host": VITE_AI_SUMMERIZATION_X_RapidAPI_Host,
    },
    // data: {

    // query:
    //   "Summerize this blog  in not less than 70 words but not more than 90 words. Word limit is strictly 100 words. Dont answer anything rather than the beautifull summary itself. No links too :" +
    //   text1,
    // },
    data: {
      lang: "en",
      text:
        "Summerize this blog  in not less than 70 words but not more than 90 words. Word limit is strictly 100 words. Dont answer anything rather than the beautifull summary itself. No links too :" +
        text1,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.summary);
    return response.data.summary;
  } catch (error) {
    console.error(error);
  }
}
