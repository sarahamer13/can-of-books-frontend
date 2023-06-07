
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './Login'
import {withAuth0} from '@auth0/auth0-react'
import LogoutButton from './Logout'



class Header extends React.Component {
  render() {
    console.log(this.props.Auth0)
    return (
      
      <Navbar className= "navBar"collapseOnSelect expand="lg">
        <Navbar.Brand className= "navBrand">My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" style={{color: 'white'}}>About</Link></NavItem>
       {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>} {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
       
    )
  }
}

export default withAuth0(Header);
