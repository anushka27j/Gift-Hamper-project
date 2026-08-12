import React, { createContext, useState, useContext } from 'react';

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [occasion, setOccasion] = useState('');
  const [box, setBox] = useState('');
  const [items, setItems] = useState([]);

  const toggleItem = (item) => {
    setItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <GiftContext.Provider value={{ occasion, box, items, setOccasion, setBox, toggleItem }}>
      {children}
    </GiftContext.Provider>
  );
};

export const useGift = () => {
  const context = useContext(GiftContext);
  if (!context) throw new Error('useGift must be used within GiftProvider');
  return context;
};

