import React,{useState} from "react";
import {FcSmartphoneTablet} from "react-icons/fc";
import "../../css/login.css";
import {reactLocalStorage} from "reactjs-localstorage";
import {Login} from "../../utils/authapi";

const LoginComponent = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(0);

    const handleLogin = ()=>{
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
            console.log(status);
        })
    }

    return (<div style={{ width: "100%", height: "100%" }}>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
                    <FcSmartphoneTablet size="50" />
                </div>
                <form>
                    <input type="text" id="login" className="fadeIn second" value={username} onChange={e=>setUsername(e.target.username)}  placeholder="Tên đăng nhập" />
                    <input type="password" id="password" className="fadeIn third" value={password} onChange={e=>setPassword(e.target.password)}  placeholder="Mật khẩu" />
                </form>
                <input type="button" className="fadeIn fourth" value="Đăng nhập" onClick={handleLogin}/>
                <div id="formFooter">
                    <a className="underlineHover" href="# ">Quên mật khẩu?</a>
                </div>
            </div>
        </div>
    </div>)
}

export default LoginComponent;