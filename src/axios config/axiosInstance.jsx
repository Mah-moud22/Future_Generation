import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/psg01mxtz7k0s',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance