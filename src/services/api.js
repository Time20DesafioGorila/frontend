import axios from 'axios';
import 'dotenv' 

const {BACKEND_HOST, BACKEND_PORT} = process.env;
const api = axios.create({ baseURL: `${BACKEND_HOST}:${BACKEND_PORT}` });

export default api;
