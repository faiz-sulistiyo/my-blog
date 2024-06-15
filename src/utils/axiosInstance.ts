import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_GO_REST_API || "";
const API_KEY = process.env.NEXT_PUBLIC_GO_REST_API_KEY || "";


// Create Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`, 
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
