import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [
    "", "", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10", "11", "12",
    "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26",
    "27", "28", "29", "30"
  ];

  const renderDateCell = (date) => {
    const events = {
      "1": [{ time: "7:00 PM", label: "Scheduling Activity", type: "success" }],
      "5": [{ time: "11:59 AM", label: "Capstone 1 Research", type: "success" }]
    };
//calemdar
    return (
      <div className="calendar-cell rounded border p-2 bg-white">
        <div className="fw-bold">{date}</div>
        {events[date] && events[date].map((event, idx) => (
          <div key={idx} className={`badge bg-${event.type} mt-1 w-100`}>
            <small>{event.time}</small><br />
            <small>{event.label}</small>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">April 2025</h4>
        <div>
          <span className="badge bg-success me-1">Activity</span>
          <span className="badge bg-primary me-1">Online Class</span>
          <span className="badge bg-danger">Exam</span>
        </div>
      </div>
      <div className="calendar-grid text-center">
        {days.map((day, idx) => (
          <div key={idx} className="calendar-header fw-bold">{day}</div>
        ))}
        {dates.map((date, idx) => (
          <div key={idx}>
            {date ? renderDateCell(date) : <div className="calendar-cell"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;