import axios from "axios"

export default {
    list() {
        return axios.get("https://swapi.dev/api/people")
    },
    find(url){
         return axios.get(url)
        
    }
}