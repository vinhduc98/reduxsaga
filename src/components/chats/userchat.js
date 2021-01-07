import React, {useEffect, useState, useContext} from "react";
import {getAllAccount} from '../../utils/userapi';
import UserItem from './useritem';
import {MessageContext} from '../../contexts/messagecontext';

const UserChat = ()=>{
    const {getMessages} = useContext(MessageContext);
    const [accounts, setAccounts] = useState();
    const [clickUserItem, setClickUserItem] = useState();

    useEffect(()=>{
        getAllAccount("GET").then(rs => {
            setAccounts(rs.data.accounts);
        })
    }, [])

    const handleClickUserItem = (data)=>{
        setClickUserItem(data);
        getMessages(1, data);
    }
  
    let elmAccount = accounts && accounts.map((item, index)=>{
        return (<UserItem key ={index}
            id={item.id}
            name={item.name}
            dateOfBirth={item.dateOfBirth}
            avatar={item.avatar}
            callBackClickUserItem={handleClickUserItem}
            clickUserItem={clickUserItem}
        >

        </UserItem>)
    })

    return (<div className="inbox_chat">
        <div>{elmAccount}</div>
    </div>)
}

export default UserChat;