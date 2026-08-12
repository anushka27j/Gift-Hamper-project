import React from 'react';
import { useGift } from '../context/GiftContext';
import './SummaryPage.css';
import Navbar from './Navbar.js';

const SummaryPage = () => {
  const { occasion, box, items } = useGift();

  return (
    <div className="page-container alt-bg">
      <Navbar />
      <div className="page-card">
        <h1>🎁 Summary</h1>
        <ul className="summary-list">
          <li><strong>Occasion:</strong> {occasion}</li>
          <li><strong>Box:</strong> {box}</li>
          <li><strong>Items:</strong> {items.length > 0 ? items.join(', ') : 'None selected'}</li>
        </ul>
        <button className="confirm-btn">Confirm and Proceed</button>
      </div>
    </div>
  );
};

export default SummaryPage;
