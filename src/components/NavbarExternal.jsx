  import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavbarExternal extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {
        return (

<div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Online Jewelry</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Items
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  Necklaces
                  </DropdownItem>
                  <DropdownItem>
                  Earrings
                  </DropdownItem>
                  <DropdownItem>
                  Bracelets
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  Others
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/discount">Discount</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/diy">DIY</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactus">Contact us</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/login">
                    Sign-in
                  </DropdownItem>
                  <DropdownItem href="/sign-up">
                    Sign-up
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
    }
}
export default NavbarExternal