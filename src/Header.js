
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      
      <Navbar className= "navBar"collapseOnSelect expand="lg">
        <Navbar.Brand className= "navBrand">My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" style={{color: 'white'}}>About</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
       
    )
  }
}

export default Header;
