import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SidePanel = () => {
  return (
    <div
      className="d-flex flex-column vh-100 p-3"
      style={{ width: '250px', backgroundColor: '#040303', color: '#ffffff' }}
    >
      <h4 className="mb-4">EduPortal</h4>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-3">
          <Link to="/dashboard" className="nav-link text-white">
            <i className="bi bi-grid me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/classes" className="nav-link text-white">
            <i className="bi bi-people me-2"></i> Classes
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/schedule" className="nav-link text-white">
            <i className="bi bi-clock me-2"></i> Schedule
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/calendar" className="nav-link text-white">
            <i className="bi bi-calendar3 me-2"></i> Calendar
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/regform" className="nav-link text-white">
            <i className="bi bi-pencil-square me-2"></i> Reg Form
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/library" className="nav-link text-white">
            <i className="bi bi-book me-2"></i> Library
          </Link>
        </li>
      </ul>

      <div className="mt-auto">
        <Link to="/logout" className="nav-link text-white">
          <i className="bi bi-box-arrow-right me-2"></i> Log out
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
