import './App.css';
// import Layout from './components/layouts/layout';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';

function App() {

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
      <div className="App">
        {/* <Layout/> */}
        {showChat(routes)}
      </div>
    </Router>
  );
}

export default App;
