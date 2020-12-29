import React, {useEffect, useState} from "react";
import {getAllAccount} from '../../utils/userapi';
import {webcf} from '../../config/webconfig';
import Avatar from "react-avatar";

const UserChat = ()=>{
    const [accounts, setAccounts] = useState();
    const [activeChat, setActivechat] = useState(false);

    useEffect(()=>{
        getAllAccount("GET").then(rs => {
            setAccounts(rs.data.accounts);
        })
    }, [])

    const handleClickItemUser = ()=>{
        setActivechat(!activeChat);
    }

    // let stringChat = activeChat?"chat_list":"chat_list active_chat"

    console.log(accounts);
    let elmAccount = accounts && accounts.map((item, index)=>{
        return(<div className="chat_list" key={index} >
            <div style={{ padding: "18px" }}  onClick={handleClickItemUser}>
                <div className="chat_people">
                    <div className="chat_img"> <Avatar round={true} size={30} src={webcf.url_open_img + item.avatar}></Avatar> </div>
                        <div className="chat_ib">
                            <h5>{item.name} <span className="chat_date">{item.dateOfBirth.toString()}</span></h5>
                            <p>Ok</p>
                        </div>
                </div>
            </div>
        </div>)
    })

    return (  <div className="inbox_chat">
                           {elmAccount}
                        </div>)
}

export default UserChat;