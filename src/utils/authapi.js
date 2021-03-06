import axios from "axios";
import {webcf} from "../config/webconfig";

export const Login = (method="POST", body)=>{
    return axios({
        method:method,
        url:webcf.url + `Auth/Login`,
        data:body
    }).catch(err=>{
        console.log(err);
    })

}

export const LogoutAPI = (method = 'POST', headers) =>{
    return axios({
        method:method,
        url:webcf.url+`Auth/Logout`,
        headers:headers
    }).catch(err=>{
        console.log(err)
    })
}