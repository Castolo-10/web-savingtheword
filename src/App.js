import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import SignIn from './components/SignIn'
import Users from './components/Users'
import Play from './components/Play'
import Download from './components/Download'

function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">
      <Route path="/" component = {Home} exact/>
      <Route path="/login" component = {Login}/>
      <Route path="/signin" component = {SignIn}/>
      <Route path="/play" component = {Play}/>
      <Route path="/download" component = {Download}/>
      <Route path="/users" component = {Users}/>
      </div>
    </Router>
  );
}

export default App;
