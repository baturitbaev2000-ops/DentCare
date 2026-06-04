import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FaTooth } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-navbar${scrolled ? ' scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <FaTooth className="brand-icon" />
          <span>Dent<strong>Care</strong></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" onClick={() => setExpanded(e => !e)} />

        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto nav-links">
            {[
              { to: '/', label: 'Главная' },
              { to: '/about', label: 'О нас' },
              { to: '/services', label: 'Услуги' },
              { to: '/contacts', label: 'Контакты' },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                end={to === '/'}
                onClick={() => setExpanded(false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Button
            as={Link}
            to="/contacts"
            variant="primary"
            className="btn-appoint"
            onClick={() => setExpanded(false)}
          >
            Записаться
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
