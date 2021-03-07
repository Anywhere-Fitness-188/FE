import axios from'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
            "Access-Control-Allow-Origin": "*",
            'Acess-Control-Allow-Method': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
            
        },
        baseURL: "https://fittness.herokuapp.com/api",
    })
};

export default axiosWithAuth;