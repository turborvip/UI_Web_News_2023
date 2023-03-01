import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1/",

  headers: {
    "Content-Type": "application/json",
  },
});


export const get = async (pathApi, options = {}) => {
  const res = await request.get(pathApi, options);
  return res.data;
};

export const post = async (pathApi, options) => {
  const res = await request.post(pathApi, options);
  return res.data;
};

export const put = async (pathApi, options) => {
  const res = await request.put(pathApi, options);
  return res.data;
};

export default request ;