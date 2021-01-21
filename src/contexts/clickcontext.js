import React,{useState} from 'react';

export const ClickContext = React.createContext();

export const ClickProvider = (props) =>{

    const [clickUserItem, setClickUserItem] = useState(false);

    const updateClickUserItem = ()=>{
        setClickUserItem(true);
    }

    return (<ClickContext.Provider value={{
        clickUserItem,
        updateClickUserItem
    }}>
        {props.children}
    </ClickContext.Provider>)
}
