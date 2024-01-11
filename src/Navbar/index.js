import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsHeartFill} from 'react-icons/bs'
import './index.css'
const Header=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to='/savelife' className='navbar-link  save-life-header'>Save Life <span className="save-life-icon"><BsHeartFill/></span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/savelife"  className='navbar-link'>Home</Link></Nav.Link>
            
            <NavDropdown title="Get Involve" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link to="/donor"  className='navbar-link text-black'>Pledge</Link></NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/volunteer"  className='navbar-link text-black'>Volunteer</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link to="/donor"  className='navbar-link text-black'>Recieptent</Link></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link ></Nav.Link>
           <Nav.Link eventKey={2} ><Link to="/donor"  className='navbar-link '>
              Donor
              </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;