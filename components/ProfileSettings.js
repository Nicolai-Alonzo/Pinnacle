import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProfileSettings = () => {
  const [open, setOpen] = useState(false);

  const togglePanel = () => setOpen(!open);

  return (
    <>
      {/* Burger icon - top right */}
      <div
        className="position-fixed top-0 end-0 p-3"
        style={{ zIndex: 1050 }}
      >
        <button
          className="btn btn-outline-light"
          onClick={togglePanel}
          style={{ backgroundColor: '#040303', border: 'none' }}
        >
          <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
        </button>
      </div>

      {/* Right side panel */}
      <div
        className={`position-fixed top-0 end-0 h-100 p-4 transition ${
          open ? 'translate-x-0' : 'translate-x-100'
        }`}
        style={{
          width: '250px',
          backgroundColor: '#040303',
          color: '#ffffff',
          transition: 'transform 0.3s ease-in-out',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 1049,
        }}
      >
        <h5 className="mb-4">Settings</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <a href="/profile" className="nav-link text-white">
              <i className="bi bi-person me-2"></i> Profile
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/account" className="nav-link text-white">
              <i className="bi bi-gear me-2"></i> Account
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/change-password" className="nav-link text-white">
              <i className="bi bi-lock me-2"></i> Change Pass
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileSettings;
