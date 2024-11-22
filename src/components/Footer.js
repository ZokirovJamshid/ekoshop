import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-success text-light py-4 mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Ekoshop. Barcha huquqlar himoyalangan.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

