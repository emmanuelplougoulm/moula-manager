import Axios from "axios";

const httpClient = Axios.create({
  baseURL: "http://localhost:9000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// You can add more common configurations like authentication headers, interceptors, etc.

export default httpClient;
