import React,{ useState} from "react";
import {getMessageByAccountId} from "../utils/messageapi";

export const MessageContext = React.createContext();

export const MessageProvider = (props) =>{
    const [messages, setMessages] = useState([]);
    const [recipientId, setRecipientId] = useState();

    const getMessages = (senderId, recipientId)=>{
        getMessageByAccountId("GET", senderId, recipientId).then(rs=>{
            if(rs){
                setMessages(rs.data.messages);
                setRecipientId(recipientId);
            }
        })
    }

    return (<MessageContext.Provider value={
        {
            getMessages,
            messages,
            recipientId
        }
    }>
        {props.children}    
    </MessageContext.Provider>)
}

