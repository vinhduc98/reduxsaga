import React,{useContext, useEffect} from "react";
import {ClickContext} from '../../contexts/clickcontext';
import {webcf} from '../../config/webconfig';
import '../../css/itemavatar.css';
import MessageLast from './messagelast';
import {Badge} from 'antd';

const UserItem = (props)=>{

    const context = useContext(ClickContext);

    useEffect(()=>{
        if(props.clickUserItem!==undefined)
        {
            context.updateClickUserItem();
        }
    },[props.clickUserItem])

    const handleClickUserItem = ()=>{
        props.callBackClickUserItem(props.id);
    }

    const date = new Date(props.dateOfBirth);
    const customDate = date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    const elmgroundcolor = props.state==='online'&& (<div className='status-circle2' style={{ backgroundColor: 'green' }}></div>); 

    return (<div className={props.id===props.clickUserItem?'chat_list active_chat':'chat_list'}  onClick={handleClickUserItem}>
        <div style={{ padding: "18px" }}>
            <div className="chat_people">
                <div className="chat_img"> 
                    {/* <Avatar round={true} size={30} src={webcf.url_open_img + props.avatar}></Avatar>  */}
                    <div className='icon-container2'>
                        <img className="avatar_main2" src={webcf.url_open_img + props.avatar} alt="img" />
                        {/* <div className='status-circle2' style={{ backgroundColor: 'silver' }}>
                        </div> */}
                        {elmgroundcolor}
                    </div>
                </div>
                    <Badge style={{marginLeft:"7px"}} count={1}/>
                <div className="chat_ib">
                    <h5>{props.name} <span className="chat_date">{customDate}</span></h5>
                    <MessageLast id={props.id}/>
                </div>
            </div>
        </div>
    </div>)
    
}

export default UserItem;