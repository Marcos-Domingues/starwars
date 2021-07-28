import axios from "axios"

export default {
    list() {
        return axios.get("https://swapi.dev/api/people")
    },
    find(url){
        console.log(url);
         return axios.get(url)
    },
}