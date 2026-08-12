import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGift } from '../context/GiftContext';
import './ItemSelectionPage.css';
import Navbar from './Navbar.js';

const itemOptions = [
  { name: 'Chocolate Bar', price: '₹150' },
  { name: 'Scented Candle', price: '₹200' },
  { name: 'Coffee Mug', price: '₹250' },
  { name: 'Notebook', price: '₹180' },
  { name: 'Organic Soap', price: '₹120' },
  { name: 'Mini Plant', price: '₹300' }
];

const ItemSelectionPage = () => {
  const { items, toggleItem } = useGift();
  const navigate = useNavigate();

  return (
    <div className="page-container alt-bg">
      <Navbar />
      <div className="page-card">
        <h1>Step 3: Choose Items</h1>
        <div className="items-grid">
          {itemOptions.map(({ name, price }) => (
            <div
              className={`item-card ${items.includes(name) ? 'selected' : ''}`}
              key={name}
              onClick={() => toggleItem(name)}
            >
              <strong>{name}</strong>
              <br />
              <span>{price}</span>
            </div>
          ))}
        </div>
        <button
          style={{ marginTop: '1.5rem', width: '100%' }}
          className="confirm-btn"
          onClick={() => navigate('/summary')}
        >
          Finalize Gift
        </button>
      </div>
    </div>
  );
};

export default ItemSelectionPage;
