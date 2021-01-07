import axios from "axios";
import {webcf} from "../config/webconfig";

export const getMessageByAccountId = (method = "GET", senderId, recipientId)=>{
    return axios({
        method:method,
        url:webcf.url + `Message/getMessagebyAccountId?senderId=${senderId}&recipientId=${recipientId}`
    }).catch(err=>{
        console.log(err)
    })
}

export const addMessage = (method= "POST", body)=>{
    return axios({
        method:method,
        data:body,
        url:webcf.url +`Message/addMessage`
    }).catch(err=>{
        console.log(err)
    })
}