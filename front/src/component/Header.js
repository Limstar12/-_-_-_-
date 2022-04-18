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
  import $ from "jquery";
  

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
  render(){
    $(function(){
      // Hide Header on on scroll down
      var didScroll;       
      var lastScrollTop = 0;
      var delta = 5; // 동작의 구현이 시작되는 위치
      var barHeight = $('#hd').outerHeight(); // 영향을 받을 요소 선택

      //스크롤 시에 사용자가 스크롤했다는 것을 알림
      $(window).scroll(function(event){                
          didScroll = true;
      });
      
      // hasScrolled()를 실행하고 didScroll 상태를 재설정
      setInterval(function() { 
          if (didScroll) {
              hasScrolled();              
              didScroll = false;
          }    
      }, 250);
      
      function hasScrolled() { // 동작 구현
          var st = $(window).scrollTop();
          console.log(st, " / " , lastScrollTop)
          
          // Make sure they scroll more than delta

          if(Math.abs(lastScrollTop - st) <= delta)
            
            return;


          // If they scrolled down and are past the navbar, add class .nav-up.
          // This is necessary so you never see what is "behind" the navbar.

          if (st > lastScrollTop && st > barHeight){
              // Scroll Down
            $('#hd').addClass('up');              
          } else {
            $('#hd').removeClass('up');       
              // Scroll Up
              // if(st + $(window).height() < $(document).height()) {
              //     $('#hd').removeClass('nav-up').addClass('nav-down');
              //  }
          }
          lastScrollTop = st;

    }
  })
    return (

      <div id='hd'>
        <Navbar className='container fixed-top' light expand="md">
          <NavbarBrand className='py-0 d-block  mw-100' tag={'div'}>
            <h1 className="logo"><a className='d-block' href='/index.html'></a></h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className=""/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto justify-content-end w-100" navbar>
              <NavItem className='px-3'>
                <NavLink className='text-dark' href="/component/">소개란</NavLink>
              </NavItem>
              <NavItem  className='px-3'>
                <NavLink className='text-dark' href="/component/">사전인터뷰</NavLink>
              </NavItem>
              <NavItem  className='px-3'>
                <NavLink className='text-dark' href="/component/">면접제안</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;