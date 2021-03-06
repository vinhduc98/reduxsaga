import React,{useState} from "react";
import {FcSmartphoneTablet} from "react-icons/fc";
import "../../css/login.css";
import {reactLocalStorage} from "reactjs-localstorage";
import {Login} from "../../utils/authapi";
import {Redirect} from "react-router-dom";

const LoginComponent = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(0);

    const handleLoginGen = (username, password) =>{
        Login("POST",{
            username:username,
            pwd:password
        }).then(rs=>{
            const data = rs.data.data;
            if(rs.data.status===1)
            {
                reactLocalStorage.setObject('userinfo',data);
                setStatus(1);
            }
            else
            {
                setStatus(0);
            }
        })
    }

    const onKeyPress = (e)=>{
        if(e.key==='Enter')
        {
            handleLoginGen(username, password)
        }
    }

    const handleLogin = ()=>{
        handleLoginGen(username, password)
    }

    return status===0?(<div style={{ width: "100%", height: "100%" }}>
        <div className="wrapper fadeInDown" onKeyPress={onKeyPress}>
            <div id="formContent">
                <div className="fadeIn first">
                    {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
                    <FcSmartphoneTablet size="50" />
                </div>
                <form>
                <input type="text" id="login" className="fadeIn second" value={username} onChange={e => setUsername(e.target.value)} placeholder="Tên đăng nhập" />
                        <input type="password" id="password" className="fadeIn third" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mật khẩu" />
                </form>
                <input type="button" className="fadeIn fourth" value="Đăng nhập" onClick={handleLogin} />
                <div id="formFooter">
                    <a className="underlineHover" href="# ">Quên mật khẩu?</a>
                </div>
            </div>
        </div>
    </div>):(<Redirect to="/message"></Redirect>)
}

export default LoginComponent;