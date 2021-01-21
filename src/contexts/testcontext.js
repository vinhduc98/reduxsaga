import React from  'react';

export const TestContext = React.createContext();

export const TestProvider = (props) =>{

    const connectSocket = (io)=>{
        const socket = io.connect('http://localhost:8001');
        return socket;
    }
    return (<TestContext.Provider value={{connectSocket:connectSocket}}>
        {props.children}
    </TestContext.Provider>)
}