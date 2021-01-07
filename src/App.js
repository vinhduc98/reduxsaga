import './App.css';
// import Layout from './components/layouts/layout';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
// import Test from './components/test';
import {MessageProvider} from './contexts/messagecontext';
import React from "react";

function App() {

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
      <MessageProvider>
      <div className="App h-100">
        {/* <Layout/> */}
        {/* <Test/> */}
        {showLogin(routes)}
        {showChat(routes)}
      </div>
      </MessageProvider>
    </Router>
  );
}

export default App;
