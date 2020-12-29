import React from 'react';
import UserChat from "./userchat";
import ChatBox from "./chatbox";
import Test from "../test"

const Chat = ()=>{
    return (
        <div className="container">
            <h3 className=" text-center">Chat thử xem</h3>
            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <Test/>
                        <div className="headind_srch">
                            <div className="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div className="srch_bar">
                                <div className="stylish-input-group">
                                    <input type="text" className="search-bar"  placeholder="Search" />
                                    <span className="input-group-addon">
                                        <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <UserChat/>
                    </div>
                    <ChatBox/>
                </div>
                {/* <p className="text-center top_spac"> Design by <a target="_blank" href=" #">Sunil Rajput</a></p> */}
            </div>
        </div>
    )
}

export default Chat;