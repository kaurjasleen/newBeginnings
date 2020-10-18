import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import Home from './Home';
import NavBar from './NavBar';
import HowToGetStarted from './HowToGetStarted';
import TeamForm from './TeamForm';
import PrevSubmissions from './PrevSubmissions';
import MoreAboutSubmission from './MoreAboutSubmission';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
        <NavBar/>
        <Router>
            <Home path="/"/>
            <TeamForm path='/TeamForm'/>
            <HowToGetStarted path='/HowToGetStarted'/>
            <PrevSubmissions path='/PrevSubmissions'/>
            <MoreAboutSubmission path='/MoreAboutSubmission'/>
        </Router>

    </div>
  );
}

export default App;
