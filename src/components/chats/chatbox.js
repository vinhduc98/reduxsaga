import React, {useEffect, useState, useContext} from 'react';
import {Input} from 'reactstrap';
import {addMessage} from '../../utils/messageapi';
import {MessageContext} from '../../contexts/messagecontext';
import ScrollToBottom from 'react-scroll-to-bottom';
import {reactLocalStorage} from 'reactjs-localstorage';

const ChatBox = ()=>{

    const [content, setContent] = useState('');
    const context = useContext(MessageContext);
    
    useEffect(()=>{
        console.log(context.recipientId);
    })
    const handleSendMessage = (sender, recipient, message)=>{
        const userinfo = reactLocalStorage.getObject('userinfo');
        console.log('userinfo',userinfo);
        addMessage('POST',{
            sender:sender,
            recipient:recipient,
            message:message
        }).then(rs=>{
            if(rs.data.status===1)
            {
                context.getMessages(sender, recipient);
                setContent('')
            }
        })
    }

    const subTime = (time)=>{
        let d = new Date(time);
        let buoi = "";
        let ngay = d.getDay();
        if(ngay<10)
        {
            ngay = "0"+ngay;
        }
        if(d.getHours()>12)
        {
            buoi = "PM"
        }
        else
        {
            buoi = "AM"
        }
        return ngay+"/"+d.getMonth()+1+"           "+d.getHours()+":"+d.getMinutes()+` ${buoi}`       
    }
    const onKeyPress = (e)=>{
        if(e.key==='Enter')
        {
            handleSendMessage(1, context.recipientId, content);
        }
    }

    const handleSend = ()=>{
        handleSendMessage(1, context.recipientId, content);
    }

    const elmChatHistory = context.messages && context.messages.map((item, index) => {
        return item.sender === undefined ? (<div key={index}>
            <div className="incoming_msg" >
                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{item.message}</p>
                        <span className="time_date"> {subTime(item.createdAt)}</span>
                    </div>
                </div>
            </div>
        </div>
        ) : (
                <div className="outgoing_msg" key={index}>
                    <div className="sent_msg">
                        <p>{item.message}</p>
                        <span className="time_date"> {subTime(item.createdAt)}</span>
                    </div>
                </div>
            )
    })

    return (
        <>
            <div className="mesgs" onKeyPress={onKeyPress}>
                {/* <div className="msg_history"> */}
                    <ScrollToBottom className="msg_history">
                        {elmChatHistory}
                    </ScrollToBottom>    
                {/* </div> */}
                <div className="type_msg">
                    <div className="input_msg_write">
                        <Input autoFocus type="text" value={content} className="write_msg" placeholder="Type a message" onChange={e => setContent(e.target.value)} />
                        <button className="msg_send_btn" type="button" onClick={handleSend}><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBox;