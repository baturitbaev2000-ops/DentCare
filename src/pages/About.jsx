import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { teamMembers, stats } from '../data';
import './About.css';

export default function About() {
  return (
    <div className="about-page page-top">
      <div className="page-hero about-hero">
        <Container>
          <Breadcrumb className="custom-breadcrumb">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Главная</Breadcrumb.Item>
            <Breadcrumb.Item active>О нас</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="page-title">О нашей клинике</h1>
          <p className="page-subtitle">15 лет заботы о вашей улыбке</p>
        </Container>
      </div>

      {/* History */}
      <section>
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <h2 className="section-title">История клиники</h2>
              <p>
                Клиника <strong>DentCare</strong> была основана в 2010 году командой энтузиастов,
                объединённых одной целью — сделать стоматологическую помощь комфортной, безболезненной
                и доступной для каждого жителя города.
              </p>
              <p>
                За 15 лет работы мы прошли путь от небольшого кабинета до современного медицинского центра
                с шестью специализированными врачами, цифровой диагностикой и лазерным оборудованием.
              </p>
              <p>
                Сегодня DentCare — это более 12 000 пациентов, сотни успешно выполненных имплантаций,
                брекет-систем и эстетических реставраций. Мы постоянно совершенствуемся и следим за
                новейшими тенденциями мировой стоматологии.
              </p>
            </Col>
            <Col md={6}>
              <div className="clinic-image-placeholder">
                <div className="clinic-image-inner">
                  <span>🏥</span>
                  <p>DentCare Clinic</p>
                  <small>г. Алматы, ул. Абая, 50</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <Container>
          <Row className="g-4 text-center">
            {stats.map(s => (
              <Col key={s.id} xs={6} md={3}>
                <div className="stat-card">
                  <div className="stat-value">{s.value.toLocaleString()}{s.suffix}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team */}
      <section>
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Команда врачей</h2>
              <p className="section-subtitle">Профессионалы с большим опытом и постоянным развитием</p>
            </Col>
          </Row>
          <Row className="g-4">
            {teamMembers.map((member, i) => {
              const colors = ['#1A6FAF','#4CBAB0','#E76F51','#2A9D8F','#E9C46A','#264653'];
              const initials = member.name.split(' ').map(n => n[0]).join('').slice(0, 2);
              return (
                <Col key={member.id} xs={12} sm={6} md={4}>
                  <Card className="team-card h-100">
                    <Card.Body className="text-center p-4">
                      <div className="team-avatar" style={{ background: colors[i % colors.length] }}>
                        {initials}
                      </div>
                      <h6 className="team-name">{member.name}</h6>
                      <p className="team-role">{member.role}</p>
                      <p className="team-specialty">{member.specialty}</p>
                      <div className="team-meta">
                        <span>🎓 {member.education}</span>
                        <span>📅 Стаж {member.experience} лет</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Licenses */}
      <section className="bg-light-section-pad">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Лицензии и сертификаты</h2>
              <p className="section-subtitle">Все разрешительные документы в порядке</p>
            </Col>
          </Row>
          <Row className="g-3">
            {['Медицинская лицензия МЗ РК', 'ISO 9001:2015', 'Сертификат Invisalign', 'Сертификат ZOOM', 'Аккредитация МЗ РК', 'Сертификат Straumann'].map((cert, i) => (
              <Col key={i} xs={6} md={4} lg={2}>
                <Card className="cert-card text-center p-3">
                  <div className="cert-icon">📜</div>
                  <small className="cert-name">{cert}</small>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Partners */}
      <section>
        <Container>
          <h2 className="section-title text-center mb-4">Партнёры</h2>
          <div className="partners-row">
            {['Straumann', 'Nobel Biocare', 'Dentsply', 'Invisalign', '3M ESPE', 'KaVo'].map((p, i) => (
              <div key={i} className="partner-logo">{p}</div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
