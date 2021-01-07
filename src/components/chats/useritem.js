import React from "react";
import {webcf} from '../../config/webconfig';
import '../../css/itemavatar.css';

const UserItem = (props)=>{
    
    const handleClickUserItem = ()=>{
        props.callBackClickUserItem(props.id);
    }

    const date = new Date(props.dateOfBirth);
    const customDate = date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    return (<div className={props.id===props.clickUserItem?'chat_list active_chat':'chat_list'}  onClick={handleClickUserItem}>
        <div style={{ padding: "18px" }}>
            <div className="chat_people">
                <div className="chat_img"> 
                    {/* <Avatar round={true} size={30} src={webcf.url_open_img + props.avatar}></Avatar>  */}
                    <div className='icon-container2'>
                        <img className="avatar_main2" src={webcf.url_open_img + props.avatar} alt="img" />
                        <div className='status-circle2' style={{ backgroundColor: 'green' }}>
                        </div>
                    </div>
                </div>
                <div className="chat_ib">
                    <h5>{props.name} <span className="chat_date">{customDate}</span></h5>
                    <p>Ok</p>
                </div>
            </div>
        </div>
    </div>)
}

export default UserItem;