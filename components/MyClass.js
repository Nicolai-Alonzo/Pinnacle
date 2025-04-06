
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MyClass.css';

const tabs = [
  { key: 'assignments', label: 'ASSIGNMENTS' },
  { key: 'quizzes', label: 'QUIZZES & EXAMS' },
  { key: 'online', label: 'ONLINE CLASSES' },
  { key: 'posts', label: 'CLASS POSTS' },
  { key: 'grades', label: 'POST GRADES' }
];

const tabContent = {
  assignments: 'No Assignments Found',
  quizzes: 'No Quizzes/Exams Found',
  online: 'No Online Classes Found',
  posts: 'No Class Posts Found',
  grades: 'No Grades Found',
};

function MyClass() {
  const [activeTab, setActiveTab] = useState('assignments');

  return (
    <div className="main-wrapper">
      <div className="container mt-4 p-4 rounded shadow bg-white content-container">
        <div className="card text-white bg-dark mb-3">
          <div className="card-body">
            <h2 className="card-title">HMN101 <small className="text-muted">Art Appreciation</small></h2>
            <p className="card-text">3IT-D<br/>Lecture: Rafaelito M. Manila<br/>Monday & Thursday, 2:30 pm - 4:00 pm (BCH 503)</p>
          </div>
        </div>

        <ul className="nav nav-tabs mb-3">
          {tabs.map(tab => (
            <li className="nav-item" key={tab.key}>
              <button className={`nav-link ${activeTab === tab.key ? 'active' : ''}`} onClick={() => setActiveTab(tab.key)}>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="card">
          <div className="card-body text-center text-muted">
            <i className="bi bi-inbox" style={{ fontSize: '2rem' }}></i>
            <p className="mt-2">{tabContent[activeTab]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClass;
