  import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

import './NavbarStyles.css';

class NavbarExternal extends Component{
    render() {
        return (
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Items</Nav.Link>
              <NavDropdown title="Dropdown">
                <NavDropdown.Item href="#action/3.1">Necklaces</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Earrings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bracelets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/">Discount</Nav.Link>
              <Nav.Link href="/">DYI</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      );
    }
}
export default NavbarExternal