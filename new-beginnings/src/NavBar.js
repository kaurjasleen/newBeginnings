import React, { Component } from "react";
import { Link } from '@reach/router';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
        <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home"> LOGO </Navbar.Brand>
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
