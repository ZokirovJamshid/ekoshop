import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="success" variant="dark" expand="lg" collapseOnSelect>
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">Ekoshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Bosh sahifa</Nav.Link>
            <Nav.Link as={Link} to="/products">Mahsulotlar</Nav.Link>
            <Nav.Link as={Link} to="/about">Biz haqimizda</Nav.Link>
            <Nav.Link as={Link} to="/contact">Aloqa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

