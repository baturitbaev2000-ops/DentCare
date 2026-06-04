import React, { useState } from 'react';
import { Container, Row, Col, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { services } from '../data';
import './Services.css';

const filters = [
  { key: 'all', label: 'Все услуги' },
  { key: 'adults', label: 'Взрослые' },
  { key: 'children', label: 'Детские' },
  { key: 'surgery', label: 'Хирургия' },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? services
    : services.filter(s => s.category === activeFilter);

  return (
    <div className="services-page page-top">
      <div className="page-hero services-hero">
        <Container>
          <Breadcrumb className="custom-breadcrumb">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Главная</Breadcrumb.Item>
            <Breadcrumb.Item active>Услуги</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="page-title">Наши услуги</h1>
          <p className="page-subtitle">Полный спектр стоматологической помощи для всей семьи</p>
        </Container>
      </div>

      <section>
        <Container>
          {/* Filter buttons */}
          <div className="filter-row mb-4">
            {filters.map(f => (
              <Button
                key={f.key}
                variant={activeFilter === f.key ? 'primary' : 'outline-primary'}
                className="filter-btn"
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </Button>
            ))}
          </div>

          <Row className="g-4">
            {filtered.map(s => (
              <Col key={s.id} xs={12} sm={6} md={4}>
                <ServiceCard service={s} />
              </Col>
            ))}
          </Row>

          {filtered.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">Услуги не найдены</p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA block */}
      <section className="services-cta-section">
        <Container>
          <div className="text-center">
            <h3 className="services-cta-title">Не нашли нужную услугу?</h3>
            <p className="services-cta-text">Свяжитесь с нами — мы подберём оптимальное решение</p>
            <Button as={Link} to="/contacts" variant="light" size="lg" className="cta-btn">
              Связаться с нами
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
