import axios from "axios";
import config from "../configs/index.js";

const client = axios.create(config.api);

// Request interceptor
client.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.error(error); //or ToastAndroid, AlertIOS
    return Promise.reject(error);
  }
);

// Response interceptor
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error); //or ToastAndroid, AlertIOS
    return Promise.reject(error);
  }
);

const commonService = {
  getData(url, params) {
    return client.request({
      method: "get",
      url,
      params,
    });
  },
  postData(url, params, body) {
    return client.request({
      method: "post",
      url,
      params,
      data: body
    });
  },
};

/**
 * Handle get token
 * @returns token
 */
const getToken = () => {
  const token = "";
  return token;
}

const authService = {
  getAuth(url, params) {
    const token = getToken();
    return client.request({
      headers: { Authorization: `Bearer ${token}` },
      method: "get",
      url,
      params,
    });
  },
};

export { commonService, authService };
