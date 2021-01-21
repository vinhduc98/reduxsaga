import React,{useState, useEffect} from 'react';
import UserChat from "./userchat";
import ChatBox from "./chatbox";
import {EllipsisOutlined,SettingOutlined,LogoutOutlined,CheckCircleOutlined,IssuesCloseOutlined,StopOutlined} from '@ant-design/icons';
import {Button as Btn} from 'antd';
import '../../css/avatar.css';
import axios from 'axios';
import {socket} from '../../App';
import {reactLocalStorage} from 'reactjs-localstorage';
import Logout from '../authorizations/logout';
import {webcf} from '../../config/webconfig';

const Chat = ()=>{

    const userinfo = reactLocalStorage.getObject('userinfo');
    const [stateColor, setStateColor] = useState('green');
    const [showLogout, setShowlogout] = useState(false)

    const changeOnline = ()=>{
        setStateColor('green');
    }

    const changeBusy = ()=>{
        setStateColor('orange')
    }

    const changeOffline = ()=>{
        setStateColor('red');
    }

    const handleShowlogout = ()=>{
        setShowlogout(!showLogout);
    }

    const handleCloseLogout = (data)=>{
        setShowlogout(!data)
    }

    useEffect(()=>{
        const userinfo = reactLocalStorage.getObject('userinfo');
        const eventOnline =()=>{
            if(userinfo.username!==undefined)
            {
                socket.emit('online',{username: userinfo.username, socketId: socket.id});
            }    
        }
        eventOnline();
    },[])

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
                                <img className="avatar_main" src={webcf.url_open_img+userinfo.avatar} alt="img" />
                                {/* <div className='status-circle' style={{ backgroundColor: `${stateColor}` }}></div> */}
                                <div className='status-circle' style={{ backgroundColor: `${stateColor}` }}></div>
                            </div>
                            <span style={{fontSize:"20px", marginLeft:"20px" }}><b>{userinfo.name}</b></span>
                            
                            <div className="dropdown dropleft float-right">
                                <Btn data-toggle="dropdown" shape="circle" icon={<EllipsisOutlined />} />
                                <div className="dropdown-menu">
                                    <h2 className="dropdown-header">Trạng thái</h2>
                                    <Btn className="cust-item" icon={<CheckCircleOutlined style={{ color: "green" }} />} onClick={changeOnline}>Online</Btn>
                                    <Btn className="cust-item" icon={<IssuesCloseOutlined style={{ color: "orange" }} />} onClick={changeBusy}>Busy</Btn>
                                    <Btn className="cust-item" icon={<StopOutlined style={{ color: "red" }} />} onClick={changeOffline}>Offline</Btn>
                                    <h2 className="dropdown-header">Cài đặt</h2>
                                    <Btn className="cust-item" icon={<SettingOutlined />}>Thiết lập</Btn>
                                    <Btn className="cust-item" icon={<LogoutOutlined />} onClick={handleShowlogout}>Đăng xuất</Btn>
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
                        <UserChat/>
                    </div>
                    <div style={{height:"100%", width:"100%"}}>
                        {/* <div style={{height:"100px",width:"100%"}}></div> */}
                        <ChatBox/>
                    </div>
                </div>
                {/* <p className="text-center top_spac"> Design by <a target="_blank" href=" #">Sunil Rajput</a></p> */}
            </div>
            <Logout showLogout={showLogout} callBackLogout={handleCloseLogout}/>
        </div>  
    )
}

export default Chat;