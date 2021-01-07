import {notification} from "antd";

export const login = (type) => notification[type]({
    description:type==='success'?'Đăng nhập thành công':type==='error'?'Đăng nhập thất bại':'Lỗi dữ liệu',
    daration:2,
    placement:"bottomRight"
})