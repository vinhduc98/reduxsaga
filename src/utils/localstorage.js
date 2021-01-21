import {reactLocalStorage} from 'reactjs-localstorage';

export const getObjectStorage = (objectName)=>{
    return reactLocalStorage.getObject(objectName);
}

export const removeObjectStorage = (objectName)=>{
    return reactLocalStorage.remove(objectName);
}

export const setObjectStorage = (objectName)=>{
    return reactLocalStorage.setObject(objectName);
}