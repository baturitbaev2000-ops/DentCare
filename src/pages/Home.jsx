import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import DoctorCard from '../components/DoctorCard/DoctorCard';
import { advantages, services, doctors, reviews } from '../data';
import './Home.css';

export default function Home() {
  const doctorSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const reviewSliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Advantages */}
      <section className="advantages-section bg-light-section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title text-center">Почему выбирают нас</h2>
              <p className="section-subtitle">Более 15 лет мы помогаем пациентам сохранить здоровые зубы</p>
            </Col>
          </Row>
          <Row className="g-4">
            {advantages.map(adv => (
              <Col key={adv.id} xs={12} sm={6} md={3}>
                <div className="adv-card text-center">
                  <div className="adv-icon">{adv.icon}</div>
                  <h5 className="adv-title">{adv.title}</h5>
                  <p className="adv-text">{adv.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular Services */}
      <section>
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Популярные услуги</h2>
              <p className="section-subtitle">Широкий спектр стоматологических услуг для всей семьи</p>
            </Col>
          </Row>
          <Row className="g-4">
            {services.slice(0, 6).map(s => (
              <Col key={s.id} xs={12} sm={6} md={4}>
                <ServiceCard service={s} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/services" variant="outline-primary" size="lg">
              Все услуги
            </Button>
          </div>
        </Container>
      </section>

      {/* Doctors Slider */}
      <section className="bg-light-section">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Наши врачи</h2>
              <p className="section-subtitle">Опытные специалисты с многолетней практикой</p>
            </Col>
          </Row>
          <Slider {...doctorSliderSettings} className="doctors-slider">
            {doctors.map((doc, i) => (
              <div key={doc.id} className="px-2">
                <DoctorCard doctor={doc} index={i} />
              </div>
            ))}
          </Slider>
        </Container>
      </section>

      {/* Reviews */}
      <section>
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Отзывы пациентов</h2>
              <p className="section-subtitle">Что говорят о нас наши пациенты</p>
            </Col>
          </Row>
          <Slider {...reviewSliderSettings} className="reviews-slider">
            {reviews.map(r => (
              <div key={r.id} className="px-2">
                <Card className="review-card h-100">
                  <Card.Body>
                    <div className="review-stars">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                    <p className="review-text">"{r.text}"</p>
                    <div className="review-author">
                      <div className="review-avatar">{r.initials}</div>
                      <span className="review-name">{r.name}</span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <Container>
          <div className="cta-inner text-center">
            <h2 className="cta-title">Готовы позаботиться о вашей улыбке?</h2>
            <p className="cta-text">Запишитесь на бесплатную консультацию и получите скидку 10% на первый визит</p>
            <Button as={Link} to="/contacts" variant="light" size="lg" className="cta-btn">
              Записаться на приём
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
