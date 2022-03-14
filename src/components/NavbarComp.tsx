import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavbarComp = (): JSX.Element => {
  // navigation bar to switch between pages (List and favourite)
  const styleNav : React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '30px 25px',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)'
  };

  const styleLink : React.CSSProperties = {
    margin: '10px',
    padding: '5px',
    textDecoration: 'none'
  };

  return(
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={styleNav}>
      <Navbar.Brand href="#">Rick and Morty</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span" >
            <Link style={styleLink} to="/">Personages list</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span" >
            <Link style={styleLink} to="/favourite">Favourite</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
