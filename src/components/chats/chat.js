import React,{useState, useEffect} from 'react';
import UserChat from "./userchat";
import ChatBox from "./chatbox";
import {EllipsisOutlined,SettingOutlined,LogoutOutlined,CheckCircleOutlined,IssuesCloseOutlined,StopOutlined} from '@ant-design/icons';
import {Button as Btn} from 'antd';
import '../../css/avatar.css';
import axios from 'axios';

const Chat = ()=>{

    const [stateColor, setStateColor] = useState('green');
    // console.log(chatContent);

    const changeOnline = ()=>{
        setStateColor('green');
    }

    const changeBusy = ()=>{
        setStateColor('orange')
    }

    const changeOffline = ()=>{
        setStateColor('red');
    }

    useEffect(()=>{
        async function fetchData() {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux',
            );
            console.log(result.data.hits);
        }
        fetchData();
        
    },[])
    return (
        <div className="container">
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <div style={{ padding: "20px 0px 0px 20px" }}>
                            {/* <Avatar size={50} round src="http://emilcarlsson.se/assets/mikeross.png"></Avatar> */}
                            <div className='icon-container'>
                                <img className="avatar_main" src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" alt="img" />
                                <div className='status-circle' style={{ backgroundColor: `${stateColor}` }}></div>
                            </div>
                            <span style={{fontSize:"20px", marginLeft:"20px" }}><b>Trương Vệ Kiện</b></span>
                            
                            <div className="dropdown dropleft float-right">
                                <Btn data-toggle="dropdown" shape="circle" icon={<EllipsisOutlined />} />
                                <div className="dropdown-menu">
                                    <h2 className="dropdown-header">Trạng thái</h2>
                                    <Btn className="cust-item" icon={<CheckCircleOutlined style={{ color: "green" }} />} onClick={changeOnline}>Online</Btn>
                                    <Btn className="cust-item" icon={<IssuesCloseOutlined style={{ color: "orange" }} />} onClick={changeBusy}>Busy</Btn>
                                    <Btn className="cust-item" icon={<StopOutlined style={{ color: "red" }} />} onClick={changeOffline}>Offline</Btn>
                                    <h2 className="dropdown-header">Cài đặt</h2>
                                    <Btn className="cust-item" icon={<SettingOutlined />}>Thiết lập</Btn>
                                    <Btn className="cust-item" icon={<LogoutOutlined />}>Đăng xuất</Btn>
                                </div>
                            </div>
                        </div>
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar" placeholder="Search" />
                                    <span className="input-group-addon">
                                        <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <UserChat />
                    </div>
                    <div style={{height:"100%", width:"100%"}}>
                        {/* <div style={{height:"100px",width:"100%"}}></div> */}
                        <ChatBox/>
                    </div>
                </div>
                {/* <p className="text-center top_spac"> Design by <a target="_blank" href=" #">Sunil Rajput</a></p> */}
            </div>
        </div>
    )
}

export default Chat;