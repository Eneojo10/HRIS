import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import Timedetails from './Timedetails';
import { GoPlus } from "react-icons/go";
import Sheetdetails from './Sheetdetails';
import Attendancedetails from './Attendancedetails';
import Anadetails from './Anadetails';

function Tracking() {

    const [activeTab, setActiveTab] = useState('Timing')


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div>
            <div className='tracking--container'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='tracking-container'>
                    <div className='tc-header'>
                        <div className='tt'>
                            <h2>Time Tracking</h2>
                            <span className='time-trcke-tex'>Manage employee time, attendance, and schedules</span>
                        </div>
                        <div className='entry-btn'>
                            <div className='plus'>
                                <div className='goplus'><GoPlus /></div>
                                <span className='new_entry'>New Entry</span>
                            </div>
                        </div>
                    </div>
                    <div className='d-line_'></div>
                    <div className='tracing_bg__color'>
                        <div className='tracking-sub-list'><br /><br />
                            {activeTab === 'Timing' && (
                                <div className='sheet-cards'>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>

                                </div>
                            )}
                            {activeTab === 'Sheet' && (
                                <div className='sheet-cards'>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>

                                </div>
                            )}
                            {activeTab === 'Attendance' && (
                                <div className='sheet-cards'>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>

                                </div>
                            )}
                            {activeTab === 'Analytics' && (
                                <div className='sheet-cards'>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>
                                    <div className='t1'></div>

                                </div>
                            )}<br />
                            <div className='tracking-bg'>
                                <div className='tracking-text'>
                                    <div className='tracking-sheets'><h4 onClick={() => handleTabClick('Timing')}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: activeTab === 'Timing' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',  
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'
                                        }}
                                    >Time Entry</h4></div>
                                    <div className='tracking-sheets'><h4 onClick={() => handleTabClick('Sheet')}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: activeTab === 'Sheet' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',       
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'

                                        }}
                                    >Timesheets</h4></div>
                                    <div className='tracking-sheets'><h4 onClick={() => handleTabClick('Attendance')}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: activeTab === 'Attendance' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',       
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'
                                        }}
                                    >Attendance</h4></div>
                                    <div className='tracking-sheets'><h4 onClick={() => handleTabClick('Analytics')}
                                        style={{
                                            cursor: 'pointer',
                                             backgroundColor: activeTab === 'Analytics' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',       
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'
                                        }}
                                    >Analytics</h4></div>
                                </div>
                            </div><br />
                            <div className='performance-content'>
                                {activeTab === 'Timing' && <Timedetails />}
                                {activeTab === 'Sheet' && <Sheetdetails />}
                                {activeTab === 'Attendance' && <Attendancedetails />}
                                {activeTab === 'Analytics' && <Anadetails />}

                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tracking