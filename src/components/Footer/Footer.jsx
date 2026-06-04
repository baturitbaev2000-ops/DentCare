import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTooth, FaInstagram, FaWhatsapp, FaTelegram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4">
          <Col xs={12} md={4}>
            <div className="footer-brand">
              <FaTooth className="footer-icon" />
              <span>Dent<strong>Care</strong></span>
            </div>
            <p className="footer-desc">
              Современная стоматологическая клиника с 15-летним опытом. Ваша улыбка — наша забота.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/77001234567" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="https://t.me/dentcare" target="_blank" rel="noreferrer"><FaTelegram /></a>
            </div>
          </Col>

          <Col xs={6} md={2}>
            <h6 className="footer-heading">Навигация</h6>
            <ul className="footer-links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/services">Услуги</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h6 className="footer-heading">Услуги</h6>
            <ul className="footer-links">
              <li><Link to="/services">Терапия</Link></li>
              <li><Link to="/services">Ортодонтия</Link></li>
              <li><Link to="/services">Имплантация</Link></li>
              <li><Link to="/services">Отбеливание</Link></li>
              <li><Link to="/services">Хирургия</Link></li>
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h6 className="footer-heading">Контакты</h6>
            <ul className="footer-contacts">
              <li><FaMapMarkerAlt /><span>г. Алматы, ул. Абая, 50</span></li>
              <li><FaPhone /><a href="tel:+77001234567">+7 (700) 123-45-67</a></li>
              <li><FaEnvelope /><a href="mailto:info@dentcare.kz">info@dentcare.kz</a></li>
            </ul>
            <div className="footer-hours">
              <small>Пн–Пт: 9:00–20:00 | Сб: 10:00–17:00</small>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DentCare. Все права защищены.</span>
        </div>
      </Container>
    </footer>
  );
}
