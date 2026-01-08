import React, { useState } from 'react';
import { BsPeople, BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Calender() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); 
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

 
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

 
  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); 
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendar = [];
    let dayCounter = 1;

    // Calendar has up to 6 rows
    for (let week = 0; week < 6; week++) {
      const days = [];
      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < firstDay) || dayCounter > daysInMonth) {
          days.push(<td key={`${week}-${day}`}></td>);
        } else {
          days.push(<td key={`${week}-${day}`}>{dayCounter}</td>);
          dayCounter++;
        }
      }
      calendar.push(<tr key={week}>{days}</tr>);
    }
    return calendar;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3>Leave Calendar - {monthName} {currentYear}</h3>
        <div style={{display: 'flex', gap: '10px'}}>
          <BsChevronLeft style={{cursor: 'pointer'}} onClick={goToPreviousMonth} />
          <BsChevronRight style={{cursor: 'pointer'}} onClick={goToNextMonth} />
        </div>
      </div>
      <br />

      <div className='calender-border'>
        <table className="weekdays-table" style={{ width: '96%', margin: 'auto', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody><br/>
            {generateCalendar()}
          </tbody>
        </table><br />
      </div><br />

      <div className='todays-leave'>
        <div className='tl' style={{ width: '95%', margin: 'auto', marginTop: '25px' }}>
          <h3>Today's Leave</h3><br />
          <div className='on-leave' style={{ display: 'flex', gap: '10px' }}>
            <div className='on-icon' style={{ marginTop: '2px', color: 'blue' }}>
              <BsPeople />
            </div>
            <div className='five' style={{marginBottom:'10px'}}>
              <p>5 employees on leave</p>
            </div>
          </div>
          <div className='sj' style={{ marginBottom: '5px' }}>
            <p className='sjj' style={{ fontWeight: '500' }}>Sarah Johnson</p>
            <p className='ann' style={{ fontSize: '11px' }}>Annual Leave</p>
          </div>
          <div className='sj' style={{ marginBottom: '5px' }}>
            <p className='sjj' style={{ fontWeight: '500' }}>Sarah Johnson</p>
            <p className='ann' style={{ fontSize: '11px' }}>Sick Leave</p>
          </div>
          <div className='sj' style={{ marginBottom: '5px' }}>
            <p className='sjj' style={{ fontWeight: '500' }}>Sarah Johnson</p>
            <p className='ann' style={{ fontSize: '11px' }}>Personal Leave</p>
          </div>
        </div><br/>
      </div><br />

      <div className='legend-border'>
        <div className='legend_'>
          <h4>Legend</h4><br />
          <div className='leave_color' style={{display:'flex',gap:'10px'}}>
            <div className='Lcolor1'></div>
            <div><p>Annual Leave</p></div>
          </div>
          <div className='leave_color' style={{display:'flex',gap:'10px'}}>
            <div className='Lcolor2'></div>
            <div><p>Sick Leave</p></div>
          </div>
          <div className='leave_color' style={{display:'flex',gap:'10px'}}>
            <div className='Lcolor3'></div>
            <div><p>Personal Leave</p></div>
          </div>
        </div><br/>
      </div><br/>
    </div>
  );
}

export default Calender;
