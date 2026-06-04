import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import ContactForm from '../components/ContactForm/ContactForm';
import ClinicMap from '../components/Map/ClinicMap';
import QRSection from '../components/QRSection/QRSection';
import './Contacts.css';

const hours = [
  { day: 'Понедельник', time: '9:00 – 20:00' },
  { day: 'Вторник', time: '9:00 – 20:00' },
  { day: 'Среда', time: '9:00 – 20:00' },
  { day: 'Четверг', time: '9:00 – 20:00' },
  { day: 'Пятница', time: '9:00 – 20:00' },
  { day: 'Суббота', time: '10:00 – 17:00' },
  { day: 'Воскресенье', time: 'Выходной' },
];

export default function Contacts() {
  return (
    <div className="contacts-page page-top">
      <div className="page-hero contacts-hero">
        <Container>
          <Breadcrumb className="custom-breadcrumb">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Главная</Breadcrumb.Item>
            <Breadcrumb.Item active>Контакты</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="page-title">Контакты</h1>
          <p className="page-subtitle">Запишитесь на приём или свяжитесь с нами</p>
        </Container>
      </div>

      <section>
        <Container>
          <Row className="g-5">
            {/* Form */}
            <Col lg={7}>
              <ContactForm />
            </Col>

            {/* Contact info */}
            <Col lg={5}>
              <div className="contact-info-card">
                <h5 className="contact-info-title">Контактная информация</h5>

                <div className="contact-info-item">
                  <FaMapMarkerAlt className="contact-info-icon" />
                  <div>
                    <strong>Адрес</strong>
                    <p>г. Алматы, ул. Абая, 50</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <FaPhone className="contact-info-icon" />
                  <div>
                    <strong>Телефон</strong>
                    <p><a href="tel:+77001234567">+7 (700) 123-45-67</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <FaEnvelope className="contact-info-icon" />
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@dentcare.kz">info@dentcare.kz</a></p>
                  </div>
                </div>

                <div className="hours-table">
                  <h6 className="hours-title">Часы работы</h6>
                  <table className="w-100">
                    <tbody>
                      {hours.map(h => (
                        <tr key={h.day} className={h.time === 'Выходной' ? 'day-off' : ''}>
                          <td>{h.day}</td>
                          <td className="text-end">{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="contact-socials">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://wa.me/77001234567" target="_blank" rel="noreferrer" className="social-icon whatsapp">
                    <FaWhatsapp />
                  </a>
                  <a href="https://t.me/dentcare" target="_blank" rel="noreferrer" className="social-icon telegram">
                    <FaTelegram />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map */}
      <section className="bg-light-section-pad">
        <Container>
          <h2 className="section-title mb-4">Как нас найти</h2>
          <ClinicMap />
        </Container>
      </section>

      {/* QR */}
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <QRSection />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
