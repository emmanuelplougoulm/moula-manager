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

// Now, you can use the httpClient to make various requests

// httpClient
//   .get("/posts/1")
//   .then((response) => {
//     console.log("Response data:", response.data);
//   })
//   .catch((error) => {
//     console.error("Axios error:", error);
//   });

// httpClient
//   .post("/comments", { body: "New comment" })
//   .then((response) => {
//     console.log("Response data:", response.data);
//   })
//   .catch((error) => {
//     console.error("Axios error:", error);
//   });
