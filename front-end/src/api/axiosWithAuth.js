import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  return axios.create({
    headers: {
      Authorization: `${token}`,
    },
    baseURL: "https://fittness.herokuapp.com/api",
  });
};

export default axiosWithAuth;
