import React, {useEffect, useState, useContext} from "react";
import {getAllAccount} from '../../utils/userapi';
import UserItem from './useritem';
import {MessageContext} from '../../contexts/messagecontext';
import {reactLocalStorage} from "reactjs-localstorage";

const UserChat = ()=>{
    const {getMessages} = useContext(MessageContext);
    const [accounts, setAccounts] = useState();
    const [clickUserItem, setClickUserItem] = useState();

    useEffect(()=>{
        getAllAccount("GET").then(rs => {
            setAccounts(rs.data.accounts);
        })
    }, [])

    useEffect(()=>{
        setInterval(() => {
            getAllAccount("GET").then(rs => {
                setAccounts(rs.data.accounts);
            })
        }, 10000);
    }, [])

    const handleClickUserItem = (data)=>{
        const userinfo = reactLocalStorage.getObject('userinfo'); 
        setClickUserItem(data);
        getMessages(userinfo.id, data);
    }

    let elmAccount = accounts && accounts.map((item, index)=>{
        return (<UserItem key ={index}
            id={item.id}
            name={item.name}
            username={item.username}
            dateOfBirth={item.dateOfBirth}
            avatar={item.avatar}
            callBackClickUserItem={handleClickUserItem}
            clickUserItem={clickUserItem}
            state={item.state}
        >

        </UserItem>)
    })

    return (<div className="inbox_chat">
        <div>{elmAccount}</div>
    </div>)
}

export default UserChat;