const axios = require("axios");

const api = axios.create({ baseURL: "http://3.17.145.171:8080" });

export default api;
