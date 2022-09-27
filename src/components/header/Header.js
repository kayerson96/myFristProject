import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import"./Header.css";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div>
<Navbar bg="barranNavegation" expand="lg">
      <Container className='barra'>
        <Navbar.Brand ><Link to="/">Home</Link ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navBar'><Link to="/works">Works</Link></Nav.Link>
            <Nav.Link className='navBar' ><Link to="/aboutme">About Me</Link></Nav.Link>
            <Nav.Link className='navBar' ><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div> 
    )
}
export default Header;