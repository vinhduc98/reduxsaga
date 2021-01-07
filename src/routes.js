import Chat from "./components/chats/chat";
import Login from "./components/authorizations/login";

const routes = [
    {
        key:'home',
        path:'/',
        exact:true
    },
    {
        key:'login',
        path:'/login',
        exact:false,
        main:()=><Login/>
    },
    {
        key:'message',
        path:'/Message',
        exact:false,
        main:()=><Chat/>
    }
]

export default routes;