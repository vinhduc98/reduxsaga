import React from "react";
import Avatar from "react-avatar";
import {EllipsisOutlined,SettingOutlined,LogoutOutlined,CheckCircleOutlined,IssuesCloseOutlined   } from '@ant-design/icons';
import {Button as Btn} from 'antd';

const Test = ()=>{  
    return (<>
        <div style={{ padding: "10px 0px 5px 20px" }}>
            <Avatar size={50} round src="http://emilcarlsson.se/assets/mikeross.png"></Avatar>
            <span style={{ marginLeft: "15px", fontSize: "20px" }}><b>Trương Vệ Kiện</b></span>
            <div className="dropdown dropleft float-right">
                <Btn data-toggle="dropdown" shape="circle" icon={<EllipsisOutlined />} >
    
                </Btn>
                <div className="dropdown-menu">
                    <h2 className="dropdown-header">Trạng thái</h2>
                        <Btn className="cust-item" icon={<CheckCircleOutlined style={{color:"green"}}/>}>Online</Btn>
                        <Btn className="cust-item" icon={<IssuesCloseOutlined style={{color:"orange"}}/>}>Busy</Btn>
                    <h2 className="dropdown-header">Cài đặt</h2>
                        <Btn className="cust-item" icon={<SettingOutlined/>}>Thiết lập</Btn>
                        <Btn className="cust-item" icon={<LogoutOutlined/>}>Đăng xuất</Btn>
                </div>
            </div>
        </div>
    </>)
}

export default Test;