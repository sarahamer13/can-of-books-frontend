import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footerBar"collapseOnSelect expand="lg">
        <Navbar.Brand className="footer">Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
