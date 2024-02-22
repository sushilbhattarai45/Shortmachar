import axios from "axios";

const hitMyApi = async (urlData) => {
  let url = urlData;

  let result = await axios.get(url);
  return result.data;
};

export default hitMyApi;
