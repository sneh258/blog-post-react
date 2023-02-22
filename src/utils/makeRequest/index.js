import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";

const makeRequest = async (apiEndPoint, dynmaicConfig) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynmaicConfig,
  };

  const { data } = await axios(requestDetails);
  return data;
};

export default makeRequest;
