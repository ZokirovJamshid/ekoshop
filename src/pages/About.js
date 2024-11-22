import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <div>
      <h1 className="mb-4">Ekoshop haqida</h1>
      <Row>
        <Col md={6}>
          <Image src="/images/about-us.jpg" fluid rounded />
        </Col>
        <Col md={6}>
          <p>
            Ekoshop - bu O'zbekistonning turli hududlaridan kelgan ekologik toza mahsulotlarni 
            bir joyda to'plagan onlayn platforma. Bizning maqsadimiz - mahalliy fermerlar va 
            ishlab chiqaruvchilarni qo'llab-quvvatlash, hamda iste'molchilarga sifatli va 
            foydali mahsulotlarni taqdim etish.
          </p>
          <p>
            Biz 2023-yilda tashkil topganmiz va qisqa vaqt ichida O'zbekistonning yetakchi 
            ekologik mahsulotlar onlayn do'koniga aylandik. Bizning jamoamiz mahsulotlarning 
            sifatini nazorat qiladi va faqat eng yaxshi mahsulotlarni sizga yetkazib beradi.
          </p>
          <p>
            Ekoshop bilan sog'lom va ekologik toza hayot tarzini tanlang!
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;

