import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGift } from '../context/GiftContext';
import './OccasionPage.css';
import Navbar from './Navbar';

const OccasionPage = () => {
  const occasions = [
    { name: 'Birthday', icon: '🎂', img: '/images/occasion-birthday.jpg' },
    { name: 'Anniversary', icon: '💖', img: '/images/occasion-anniversary.jpg' },
    { name: 'Thank You', icon: '🙏', img: '/images/occasion-thankyou.jpg' },
    { name: 'Festive', icon: '🎉', img: '/images/occasion-festive.jpg' },
    { name: 'Corporate', icon: '💼', img: '/images/occasion-corporate.jpg' }
  ];
  const { setOccasion } = useGift();
  const navigate = useNavigate();

  const handleSelect = (value) => {
    setOccasion(value);
    navigate('/box');
  };

  return (
    <div className="page-container alt-bg">
      <Navbar />
      <div className="page-card">
        <h1>Step 1: Choose Occasion</h1>
        <div className="items-grid">
          {occasions.map(({ name, icon, img }) => (
            <div
              key={name}
              className="item-card"
              onClick={() => handleSelect(name)}
            >
              <img
                src={img}
                alt={name}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '0.5rem' }}
              />
              <strong>{icon} {name}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OccasionPage;
