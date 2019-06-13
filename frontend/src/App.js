import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Router } from 'react-router';
import MeetupsHomepage from './components/MeetupsHomepage.js';


const App = ()=>{
  return (
      <Switch>
        <Route exact path="/" component={MeetupsHomepage}/>
        <Route exact path="/bad" render={()=><h1>This is a bad route</h1>}/>
      </Switch>
  );
}

export default App;
