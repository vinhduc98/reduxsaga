import axios from "axios";
import {webcf} from "../config/webconfig";

export const getAllAccount = (method="GET")=>{
    return axios({
        method:method,
        url:webcf.url + `Account/getAllAccount`,
    }).catch(err=>{
        console.log(err)
    })
}