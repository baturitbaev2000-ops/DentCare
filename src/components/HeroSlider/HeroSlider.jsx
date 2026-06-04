import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { slides } from '../../data';
import './HeroSlider.css';

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 576, settings: { arrows: false } },
    ],
  };

  return (
    <div className="hero-slider-wrap">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div className="hero-slide" style={{ background: slide.bg }}>
              <div className="hero-content">
                <div className="hero-emoji">{slide.icon}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <Button
                  as={Link}
                  to="/contacts"
                  variant="light"
                  size="lg"
                  className="hero-cta"
                >
                  {slide.cta}
                </Button>
              </div>
              <div className="hero-decoration">
                <div className="deco-circle c1" />
                <div className="deco-circle c2" />
                <div className="deco-circle c3" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
