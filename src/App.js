//import logo from './logo.svg';
import { BrowserRouter as  Router, Switch } from 'react-router-dom'; //Link, Route,
import './App.css';
import { Navbar } from './components/navbar/Navbar';
//import  {Header}  from './components/header/Header';

function App() {
  return (
    <>
      <Router>  
        <Navbar />
        <Switch>
         {/*} <Route path='/history'>
            <History/>
          </Route>
          <Route path='/launches'>
            <Launches/>
          </Route>
          <Route path='/rockets'>
            <Rockets/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route> */}
  </Switch> 
      </Router>
    </>
  );
}

export default App;
