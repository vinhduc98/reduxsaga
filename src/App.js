import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import {MessageProvider} from './contexts/messagecontext';
import {TestProvider} from './contexts/testcontext';
import {ClickProvider} from './contexts/clickcontext';
import React,{useEffect} from "react";
import io from "socket.io-client";
import {connectSocket} from "./utils/ws";
import {getObjectStorage} from './utils/localstorage';

export const socket = connectSocket(io);
function App() {
 
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      const userinfo = getObjectStorage('userinfo');
      socket.emit('offline', {username:userinfo.username, socketId:socket.id});
      // removeObjectStorage('userinfo');  
    })
  })

  const showHome = (routes) =>{
    var result = null;
    if(routes.length>0)
    {
      result = routes.map((route, index)=>{
        return route.key ==='home' && (
          <Route
            key={index}
            path={route.path}
            exact
            component={route.main}
          >
          </Route>
        )
      })
    }
    return <Switch>{result}</Switch>
  }
  const showLogin = (routes) =>{
    var result = null;
    if(routes.length>0)
    {
      result = routes.map((route, index)=>{
        return route.key === 'login' && (
          <Route
            key={index}
            path={route.path}
            exact
            component={route.main}
          >
          </Route>
        )
      })
    }
    return <Switch>{result}</Switch>
  }

  const showChat = (routes) =>{
    var result = null;
    if(routes.length>0)
    {
      result = routes.map((route, index)=>{
        return route.key === 'message' && (
          <Route
            key={index}
            path={route.path}
            exact
            component={route.main}
          >
          </Route>
        )
      })
    }
    return <Switch>{result}</Switch>
  }

  return (
    <Router>
      <ClickProvider>
        <TestProvider>
          <MessageProvider>
            <div className="App h-100">
              {/* <Layout/> */}
              {/* <Test/> */}
              {showHome(routes)}
              {showLogin(routes)}
              {showChat(routes)}
            </div>
          </MessageProvider>
        </TestProvider>
      </ClickProvider>
    </Router>
  );
}

export default App;
