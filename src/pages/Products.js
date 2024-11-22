import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

// Mahsulotlar ma'lumotlari
const productsData = {
  products: [
    { id: 1, name: "Organik olma", price: 15000, category: "Mevalar", image: "/images/ananas.png" },
  { id: 2, name: "Organik pomidor", price: 12000, category: "Sabzavotlar", image: "/images/tomato.png" },
  { id: 3, name: "Organik sut", price: 10000, category: "Sut mahsulotlari", image: "/images/lemon.png" },
  { id: 4, name: "Organik tuxum", price: 20000, category: "Tuxumlar", image: "/images/grapes.png" },
  { id: 5, name: "Organik go'sht", price: 80000, category: "Go'sht mahsulotlari", image: "/images/sabzi.png" },
  { id: 6, name: "Mandarin", price: 17000, category: "Mevalar", image: "/images/strawberry.png" },
  { id: 7, name: "Brokkoli", price: 15000, category: "Sabzavotlar", image: "/images/olma.png" },
  { id: 8, name: "Yong'oq", price: 25000, category: "Quritilgan mevalar", image: "/images/arbuz.png" },
  { id: 9, name: "Organik asal", price: 60000, category: "Sut mahsulotlari", image: "/images/apelsin.png" },
  { id: 10, name: "Organik kartoshka", price: 8000, category: "Sabzavotlar", image: "/images/green-apple.png" },
  { id: 11, name: "Anor", price: 20000, category: "Mevalar", image: "/images/mango.png" },
  { id: 12, name: "Sabzi", price: 7000, category: "Sabzavotlar", image: "/images/sabzi.png" },
  { id: 13, name: "Qulupnay", price: 25000, category: "Mevalar", image: "/images/strawberry.png" },
  { id: 14, name: "Malina", price: 30000, category: "Mevalar", image: "/images/olma.png" },
  { id: 15, name: "Ko'katlar", price: 5000, category: "Sabzavotlar", image: "/images/grapes.png" },
  { id: 16, name: "Qovoq", price: 9000, category: "Sabzavotlar", image: "/images/mango.png" },
  { id: 17, name: "Qora uzum", price: 18000, category: "Mevalar", image: "/images/sabzi.png" },
  { id: 18, name: "Yogurt", price: 15000, category: "Sut mahsulotlari", image: "/images/arbuz.png" },
  { id: 19, name: "Quyon go'shti", price: 90000, category: "Go'sht mahsulotlari", image: "/images/olma.png" },
  { id: 20, name: "Smetana", price: 12000, category: "Sut mahsulotlari", image: "/images/green-apple.png" },
  { id: 21, name: "Xurmo", price: 30000, category: "Quritilgan mevalar", image: "/images/ananas.png" },
  { id: 22, name: "Organik ko'katlar", price: 8000, category: "Ko'katlar", image: "/images/apelsin.png" },
  { id: 23, name: "Turkcha tuxum", price: 25000, category: "Tuxumlar", image: "/images/lemon.png" },
  { id: 24, name: "Mol go'shti", price: 90000, category: "Go'sht mahsulotlari", image: "/images/olma.png" },
  { id: 25, name: "Limon", price: 20000, category: "Mevalar", image: "/images/lemon.png" },
  { id: 26, name: "Qovun", price: 18000, category: "Mevalar", image: "/images/melon.png" },
  { id: 27, name: "Sutli shokolad", price: 30000, category: "Shirinliklar", image: "/images/milk_chocolate.png" },
  { id: 28, name: "Quritilgan uzum", price: 25000, category: "Quritilgan mevalar", image: "/images/raisins.png" },
  { id: 29, name: "Tovuqli kolbasa", price: 40000, category: "Kolbasalar", image: "/images/chicken_sausage.png" },
  { id: 30, name: "Organik asalari suti", price: 120000, category: "Tabiiy mahsulotlar", image: "/images/royal_jelly.png" },
  // Shunga o'xshash ma'lumotlar 100 tagacha davom etadi
  ...Array(70).fill().map((_, index) => ({
    id: index + 31,
    name: `Organik mahsulot ${index + 31}`,
    price: Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000,
    category: ["Mevalar", "Sabzavotlar", "Sut mahsulotlari", "Go'sht mahsulotlari", "Yog'lar", "Ziravorlar", "Non mahsulotlari"][Math.floor(Math.random() * 7)],
    image: `/images/product${(index % 10) + 1}.png`
  }))
]
};

function Products() {
const [searchTerm, setSearchTerm] = useState('');
const [categoryFilter, setCategoryFilter] = useState('');
const [displayedProducts, setDisplayedProducts] = useState([]);
const [currentCount, setCurrentCount] = useState(12);

const categories = [...new Set(productsData.products.map(product => product.category))];

useEffect(() => {
  const filtered = productsData.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || product.category === categoryFilter)
  );
  setDisplayedProducts(filtered.slice(0, currentCount));
}, [searchTerm, categoryFilter, currentCount]);

const loadMore = () => {
  setCurrentCount(prevCount => prevCount + 12);
};

return (
  <div>
    <h1 className="mb-4">Mahsulotlar</h1>
    <Row className="mb-5">
      <Col md={6}>
        <Form.Control
          type="text"
          placeholder="Mahsulot qidirish"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Col>
      <Col md={6}>
        <Form.Control
          as="select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Barcha kategoriyalar</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </Form.Control>
      </Col>
    </Row>
    <Row>
      {displayedProducts.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
          <Card className="mb-5 h-100">
            <Card.Img variant="top" src={product.image} width="250" height="250"/>
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="mt-3">
                <strong>{product.price.toLocaleString()} so'm</strong>
              </Card.Text>
              <Button variant="success" className="mt-2 mb-0">Savatga qo'shish</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    {displayedProducts.length < productsData.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === '' || product.category === categoryFilter)
    ).length && (
      <div className="text-center mt-4 mb-4">
        <Button variant="primary" onClick={loadMore}>Ko'proq</Button>
      </div>
    )}
  </div>
);
}

export default Products;