import React from "react";
import '../css/test.css';

const Test = ()=>{  
    return (
      <div className="test" style={{ width: "100%", height: "100%" }}>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className='chat_list' >
                <div style={{ padding: "18px" }}>
                  <div className="chat_people">
                    <div className="chat_img">
                      {/* <Avatar round={true} size={30} src={webcf.url_open_img + props.avatar}></Avatar>  */}
                      <div className='icon-container'>
                        <img className="avatar_main" alt="img" />
                        <div className='status-circle' style={{ backgroundColor: 'green' }}>
                        </div>
                      </div>
                    </div>
                    <div className="chat_ib">
                      <h5>abc <span className="chat_date">Dec 11</span></h5>
                      <p>Ok</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Test;