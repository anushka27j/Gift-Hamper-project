import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGift } from '../context/GiftContext';
import './BoxSelectionPage.css';
import Navbar from './Navbar.js';

const boxOptions = [
  { name: 'Classic Box', price: '₹499' },
  { name: 'Luxury Box', price: '₹899' },
  { name: 'Eco-friendly Box', price: '₹699' }
];

const BoxSelectionPage = () => {
  const { setBox } = useGift();
  const navigate = useNavigate();

  const handleSelect = (box) => {
    setBox(box);
    navigate('/items');
  };

  return (
    <div className="page-container alt-bg">
      <Navbar />
      <div className="page-card">
        <h1>Step 2: Choose a Box</h1>
        <div className="box-list">
          {boxOptions.map(({ name, price }) => (
            <div className="box-item" key={name} onClick={() => handleSelect(name)}>
              <strong>{name}</strong>
              <br />
              <span>{price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxSelectionPage;