import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./Header.css";
const Header: React.FC<{}> = () => {
  return (
    <>
  <Navbar bg='success' expand='sm'>
  <Navbar.Toggle />
  <Navbar.Collapse>
      <Nav className="navbar-nav mr-auto">
          <Nav.Item className="navbar-nav nav-justified w-200 text-center">
              <Link to='/' className="nav-link d-flex flex-column" style={{ color: 'white' }}><i className="fa fa-home fa-2x"></i><span className="d-none d-sm-inline">Home</span></Link>
          </Nav.Item>
          <Nav.Item className="navbar-nav nav-justified w-200 text-center">
              <Link to='/' className="nav-link d-flex flex-column" style={{ color: 'white' }}><i className="fa fa-address-book-o fa-2x"></i><span className="d-none d-sm-inline">About Us</span></Link>
          </Nav.Item>
      </Nav>
  </Navbar.Collapse>
</Navbar>
</>
  );
            };

export default Header;