import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import SignIn from './components/SignIn'
import Download from './components/Download'
import Logout from './components/Logout'
import Profile from './components/Profile'
import Activities from './components/Activities'
import Calculator from './components/Calculator'

function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignIn} />
        <Route path="/download" component={Download} exact/>
        <Route path="/logout" component={Logout} />
        <Route path="/profile" component={Profile} />
        <Route path="/activities" component={Activities}/>
        <Route path="/calculator" component={Calculator}/>
      </div>
    </Router>
  );
}

export default App;
