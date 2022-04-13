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
      <div id="hd">
        <Navbar className='container' color="white" light expand="md">
          <NavbarBrand tag={'div'}>
            <h1 className="logo"><a href='/index.html'><img src="/svg/logo.svg"></img></a></h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto justify-content-end w-100" navbar>
              <NavItem className='px-3'>
                <NavLink href="/components/">About Me</NavLink>
              </NavItem>
              <NavItem  className='px-3'>
                <NavLink href="/components/">Skills</NavLink>
              </NavItem>
              <NavItem  className='px-3'>
                <NavLink href="/components/">interview</NavLink>
              </NavItem>
              <NavItem  className='px-3'>
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