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

class Header extends Component {
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
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
            <img src="/svg/logo.svg"></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto justify-content-end w-100" navbar>
              <NavItem>
                <NavLink href="/components/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Portpolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">interview</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">면접제안</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;