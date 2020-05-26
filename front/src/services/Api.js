import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.liga.org.br",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default Api;
