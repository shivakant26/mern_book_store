import axios from "axios";
const headers = new Headers();
console.log(123456,headers)
const Instance = axios.create({
    baseURL:"http://localhost:8100/v1",
    headers:headers
})

export default Instance;