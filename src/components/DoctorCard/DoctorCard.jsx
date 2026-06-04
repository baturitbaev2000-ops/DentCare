import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaCommentAlt } from 'react-icons/fa';
import './DoctorCard.css';

const avatarColors = ['#1A6FAF', '#4CBAB0', '#E76F51', '#2A9D8F', '#E9C46A', '#264653'];

export default function DoctorCard({ doctor, index = 0 }) {
  const initials = doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const color = avatarColors[index % avatarColors.length];

  return (
    <Card className="doctor-card text-center">
      <Card.Body>
        <div className="doctor-avatar" style={{ background: color }}>
          {initials}
        </div>
        <h6 className="doctor-name">{doctor.name}</h6>
        <p className="doctor-specialty">{doctor.specialty}</p>
        <div className="doctor-meta">
          <span className="meta-item"><FaStar className="star-icon" /> 5.0</span>
          <span className="meta-item"><FaCommentAlt className="review-icon" /> {doctor.reviews}</span>
          <span className="meta-item">Стаж {doctor.experience} лет</span>
        </div>
      </Card.Body>
    </Card>
  );
}
