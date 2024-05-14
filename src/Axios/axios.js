import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-backend-r2ge.onrender.com/api"
})
export default instance