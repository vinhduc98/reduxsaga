import Chat from "./components/chats/chat";

const routes = [
    {
        key:'home',
        path:'/',
        exact:true
    },
    {
        key:'message',
        path:'/Message',
        exact:false,
        main:()=><Chat/>
    }
]

export default routes;