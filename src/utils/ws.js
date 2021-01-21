export const connectSocket = (io)=>{
    const socket = io.connect('http://localhost:8000');
    return socket;
}