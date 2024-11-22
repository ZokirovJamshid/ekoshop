import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="jumbotron bg-light p-5 rounded-3 mb-4">
        <h1>Ekoshop - Sog'lom hayot uchun</h1>
        <p>
          O'zbekistonning eng yaxshi ekologik toza mahsulotlarini kashf eting. Mahalliy fermerlar va ishlab chiqaruvchilardan to'g'ridan-to'g'ri sotib oling.
        </p>
        <Link to="/products">
          <Button variant="success">Mahsulotlarni ko'rish</Button>
        </Link>
      </div>

      <h2 className="text-center mb-4">Nima uchun Ekoshop?</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Sifatli mahsulotlar</Card.Title>
              <Card.Text>
                Barcha mahsulotlarimiz ekologik toza va sertifikatlangan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Mahalliy ishlab chiqaruvchilar</Card.Title>
              <Card.Text>
                Mahalliy fermerlar va ishlab chiqaruvchilarni qo'llab-quvvatlang.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Qulay yetkazib berish</Card.Title>
              <Card.Text>
                Mahsulotlarni to'g'ridan-to'g'ri eshigingizgacha yetkazib beramiz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

