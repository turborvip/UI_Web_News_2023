import axios from "axios";

const request = axios.create({
  baseURL: "http://192.168.83.97/",

  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (pathApi, options = {}) => {
  const res = await request.get(pathApi, options);
  return res.data;
};

export const post = async (pathApi, payload, options) => {
  const res = await request.post(pathApi, payload, options);
  return res.data;
};

export const put = async (pathApi, options) => {
  const res = await request.put(pathApi, options);
  return res.data;
};

export default request;
