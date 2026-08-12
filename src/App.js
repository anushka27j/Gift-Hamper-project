import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import OccasionPage from './pages/OccasionPage';
import BoxSelectionPage from './pages/BoxSelectionPage';
import ItemSelectionPage from './pages/ItemSelectionPage';
import SummaryPage from './pages/SummaryPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <Routes>
          <Route path="/" element={<Navigate to="/occasion" />} />
          <Route path="/occasion" element={<OccasionPage />} />
          <Route path="/box" element={<BoxSelectionPage />} />
          <Route path="/items" element={<ItemSelectionPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;