import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu yerda forma ma'lumotlarini serverga yuborish kerak
    console.log('Forma yuborildi:', { name, email, message });
    setShowAlert(true);
    // Forma maydonlarini tozalash
    setName('');
    setEmail('');
    setMessage('');
    // 5 soniyadan keyin xabarni yashirish
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div>
      <h1 className="mb-4">Biz bilan bog'laning</h1>
      {showAlert && (
        <Alert variant="success">
          Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Ismingiz</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ismingizni kiriting"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Elektron pochta</Form.Label>
          <Form.Control
            type="email"
            placeholder="Elektron pochtangizni kiriting"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Xabar</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Xabaringizni kiriting"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Yuborish
        </Button>
      </Form>
    </div>
  );
}

export default Contact;

