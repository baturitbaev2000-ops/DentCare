import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const categoryLabels = {
  adults: { label: 'Взрослые', bg: 'primary' },
  children: { label: 'Детские', bg: 'success' },
  surgery: { label: 'Хирургия', bg: 'danger' },
};

export default function ServiceCard({ service }) {
  const cat = categoryLabels[service.category] || { label: service.category, bg: 'secondary' };

  return (
    <Card className="service-card h-100">
      <div className="service-icon-wrap">
        <span className="service-icon">{service.icon}</span>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="service-name">{service.name}</Card.Title>
          <Badge bg={cat.bg} className="ms-2">{cat.label}</Badge>
        </div>
        <Card.Text className="service-desc flex-grow-1">{service.desc}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="service-price">от {service.price.toLocaleString()} ₸</span>
          <Button as={Link} to="/contacts" size="sm" variant="primary">Записаться</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
