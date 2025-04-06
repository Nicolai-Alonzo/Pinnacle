import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './profile';
import Account from './account';
import ChangePassword from './changepassword';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/change-password">Change Pass</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/change-password" element={<ChangePassword />} />
            {/* You can add a default route if needed */}
            <Route path="/" element={<div>Welcome!</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;