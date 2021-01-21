import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {socket} from '../../App';
import {LogoutAPI} from '../../utils/authapi';
import {Redirect} from 'react-router-dom';
import {getObjectStorage, removeObjectStorage} from '../../utils/localstorage';

const Logout = (props)=>{

    const [status, setStatus] = useState(0);

    const handleCloseLogout = ()=>{
        props.callBackLogout(props.showLogout);
    }

    const handleLogout = () =>{
        const userinfo = getObjectStorage('userinfo');
        const headers = {
            'Authorization':`Bearer ${userinfo.token}`
        }
        LogoutAPI("POST", headers).then(rs=>{
            if(rs.data.status===1)
            {
                socket.emit('offline', {username:userinfo.username, socketId:socket.id});
                removeObjectStorage('userinfo')
                setStatus(1)
            }
        })
    }
    
    return status===0?(<Modal show={props.showLogout} onHide={handleCloseLogout} centered={true} size="lg">
        <Modal.Header closeButton>
            <Modal.Title style={{ justifyContent: "center" }}>Đăng xuất</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div> Nếu bạn muốn đăng xuất hãy nhấn nút xác nhận bên dưới</div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLogout}>
                Hủy bỏ
        </Button>
            <Button variant="primary" onClick={handleLogout}>
                Xác nhận
     </Button>
        </Modal.Footer>
    </Modal>):(<Redirect to='/login'></Redirect>)
}

export default Logout;