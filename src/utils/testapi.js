import axios from "axios";

export const getTest = async ( method="GET" )=>{
    return await axios({
        method: method,
        url:`https://hn.algolia.com/api/v1/search?query=redux`
    })
}