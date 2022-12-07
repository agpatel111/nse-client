import Axios from "axios";
import { LOCAL_BASE_URL, nse_api } from "../api/LocalApi";
import authHeader from "./Header";

// const API_URL = `${process.env.REACT_APP_SERVER_URI}`;
const API_URL = LOCAL_BASE_URL;
export default function call({ path, method, data }) {
  return new Promise((resolve, reject) => {
    Axios({
      url: API_URL + path,
      method,
      headers: authHeader(),
      data,
    })
      .then((d) => {
        resolve(d);
      })
      .catch((err) => {
        let status = err?.response?.status;
        if (status === 403 || status === 401) {
          let e = err?.response?.data;
          if (!e) return;
          reject(e);
        }
      });
  });
}
