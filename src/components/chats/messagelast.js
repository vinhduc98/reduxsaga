import React, { useEffect, useState } from 'react';
import {getMessageByAccountId} from '../../utils/messageapi';
import {socket} from '../../App';
import {getObjectStorage} from '../../utils/localstorage'

const MessageLast = (props)=>{

    const [messageLast, setMessageLast] = useState([]);

    //Lấy tin nhắn cuối cùng trong danh sách tin nhắn
    useEffect(()=>{
        const userinfo = getObjectStorage('userinfo');
        getMessageByAccountId('GET',userinfo.id, props.id).then(rs=>{
            setMessageLast(rs.data.messages);
        })
    },[props.id])

    //Lấy tin nhắn cuối cùng realtime theo người gửi
    useEffect(()=>{
        socket.on('send_messagelast_client', data =>{
            console.log('data: ', data)
            if(data)
            {
                const userinfo = getObjectStorage('userinfo');
                getMessageByAccountId('GET',userinfo.id, props.id).then(rs=>{
                    setMessageLast(rs.data.messages);
                })
            }
        })
    },[props.id])

    let elmMessage = '';
    let elmMessageUpdate = '';

    if(messageLast.length>0)
    {
        elmMessage = messageLast[messageLast.length-1].message;
    }

    if(elmMessage.length>34)
    {
        elmMessageUpdate = elmMessage.slice(0, 34) + " ..."
    }
    else
    {
        elmMessageUpdate = elmMessage;
    }
    
    return <p>{elmMessageUpdate}</p>
}

export default MessageLast;