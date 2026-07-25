import axios from "axios";


const API = axios.create({
    baseURL:"https://jobtrack-backend-redb.onrender.com/api"
});


export default API;