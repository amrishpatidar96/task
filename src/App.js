import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Residents from './components/Residents/Residents';
import Films from './components/Films/Films';
function App() {
  return (
    <div >
      <Navbar/>
      
      <Switch>
      <Route path="/films"  component={Films}/>
      <Route path="/residents" component={Residents} />
      <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
