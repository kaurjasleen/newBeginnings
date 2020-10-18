import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import NavBar from './NavBar';
import HowToGetStarted from './HowToGetStarted';
import TeamForm from './TeamForm';
import PrevSubmissions from './PrevSubmissions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
        <NavBar/>
        <Router>
            <Home path='/'/>
            <TeamForm path='/TeamForm'/>
            <HowToGetStarted path='/HowToGetStarted'/>
            <PrevSubmissions path='/PrevSubmissions'/>
        </Router>

    </div>
  );
}

export default App;
