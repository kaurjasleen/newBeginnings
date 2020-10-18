import React, { Component } from "react";
import { Link } from '@reach/router';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './images/1.png';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
        <div>
    <Navbar className="color-nav" variant="light">
      <Navbar.Brand src={logo} style={{"object-fit":"fill"}} href="/"> <img
        src={logo}
        width="120"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/TeamForm' className="nav-link">Find your Teammates!</Link>
        <Link to='/HowToGetStarted' className="nav-link">How To Get Started</Link>
        <Link to='/PrevSubmissions' className="nav-link">Previous Submissions</Link>
      </Nav>
    </Navbar>
  </div>
    );
  }
}
export default NavBar;
