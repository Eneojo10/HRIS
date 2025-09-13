import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import Timedetails from './Timedetails';
import { GoPlus } from "react-icons/go";
import Sheetdetails from './Sheetdetails';
import Attendancedetails from './Attendancedetails';
import Anadetails from './Anadetails';
import { PiExport } from "react-icons/pi";
import Time from '../Pages/Time/Time';
import { IoTime } from 'react-icons/io5';

function Tracking() {

    const [activeTab, setActiveTab] = useState('Timing')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalTab, setModalTab] = useState('Time')





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
                        <div className='new-flex'>
                            <div className='schedule_export' style={{ marginTop: '11px' }}>
                                <div className='schedule_exp-flex'>
                                    <div className='ec--icon'>
                                        <PiExport />
                                    </div>
                                    <h4>Export</h4>
                                </div>
                            </div>
                            <div className='entry-btn'>

                                <div className='plus' onClick={() => {
                                    setIsModalOpen(true);
                                    setModalTab('Time')
                                }}>
                                    <div className='goplus'><GoPlus /></div>
                                    <button className='addebtn'>New Entry</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className='modal-add' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='modal-modal-add' style={{ display: 'flex', gap: '5px' }}>
                                        <div className='modal-icon' style={{ fontSize: '21px', color: '#5b8af0' }}>
                                            <IoTime />
                                        </div>
                                        <div
                                        ><h3>Time Entry</h3></div>
                                    </div>
                                    <button className='x-btn' onClick={() => setIsModalOpen(false)}>✖</button>

                                </div>

                                <br />
                                {/* Modal Tabs */}
                                <div className='modal-bg'>
                                    <div className='p-flex'>
                                        <div
                                            onClick={() => setModalTab('Time')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Time' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Manual Entry</h4>
                                        </div>
                                        <div
                                            onClick={() => setModalTab('GoalsKPIs')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'GoalsKPIs' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Live Timer</h4>
                                        </div>
                                        <div
                                            onClick={() => setModalTab('Core')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Core' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Bulk Entry</h4>
                                        </div>
                                       
                                    </div>
                                </div>

                                <form>
                                    <div className='performance-content'>
                                        {modalTab === 'Time' && <Time />}


                                    </div>

                                </form>
                            </div>
                        </div>
                    )}
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
                                            marginTop: '-6px'
                                        }}
                                    >Time Entry</h4></div>
                                    <div className='tracking-sheets'><h4 onClick={() => handleTabClick('Sheet')}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: activeTab === 'Sheet' ? 'white' : 'transparent',
                                            padding: '7px 35px',
                                            borderRadius: '6px',
                                            transition: 'background-color 0.3s ease',
                                            marginTop: '-6px'

                                        }}
                                    >Timesheets</h4></div>
                                    <div className='tracking-sheets'><h4 onClick={() => handleTabClick('Attendance')}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: activeTab === 'Attendance' ? 'white' : 'transparent',
                                            padding: '7px 35px',
                                            borderRadius: '6px',
                                            transition: 'background-color 0.3s ease',
                                            marginTop: '-6px'
                                        }}
                                    >Attendance</h4></div>
                                    <div className='tracking-sheets'><h4 onClick={() => handleTabClick('Analytics')}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: activeTab === 'Analytics' ? 'white' : 'transparent',
                                            padding: '7px 35px',
                                            borderRadius: '6px',
                                            transition: 'background-color 0.3s ease',
                                            marginTop: '-6px'
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