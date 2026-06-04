import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-page page-top">
      <Container className="text-center py-5">
        <div className="notfound-emoji">🦷</div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Страница не найдена</h2>
        <p className="notfound-text">
          Возможно, вы ввели неверный адрес или страница была удалена.
        </p>
        <Button as={Link} to="/" variant="primary" size="lg">
          Вернуться на главную
        </Button>
      </Container>
    </div>
  );
}
