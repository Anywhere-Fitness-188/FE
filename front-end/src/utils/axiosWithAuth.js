import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
      "Access-Control-Allow-Origin": "*",
      "Acess-Control-Allow-Method": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
    },
    baseURL: "https://fittness.herokuapp.com/",
  });
};

export default axiosWithAuth;
