import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import { PiExport } from "react-icons/pi";
import Scheduledetails from './Scheduledetails';
import Shiftdetails from './Shiftdetails';
import Employeedetailz from './Employeedetailz';
import Sanalytics from './Sanalytics';

function Schedules() {

    const [activeTab, setActiveTab] = useState('Calender')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div>
            <div className='schedule-container'>
                <div className='main1'>
                    <Dashboard />

                </div>
                <div className='analytics-flex-side'>
                    <div className='schedule-subcon'>
                        <div className='leave-flex'>
                            <div className='schedule_mgt'>
                                <h2>Management</h2>
                                <span>Manage employee schedules, shifts, and workforce planning</span>
                            </div>
                            <div className='ec'>
                                <div className='schedule_export'>
                                    <div className='schedule_exp-flex'>
                                        <div className='ec--icon'>
                                            <PiExport />
                                        </div>
                                        <h4>Export</h4>
                                    </div>
                                </div>
                                <div className='ec-bg'>
                                    <div className='ec_flex'>
                                        <div className='ec--icon'>
                                            <GoPlus />
                                        </div>
                                        <h4>Create</h4>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='d-line_'></div>
                    <div className='sch-du-le'>
                        <div className='leave_cards_'>
                            <div className='schedule-cards'>
                                <div className='schdule-card1'>

                                </div>
                                <div className='schdule-card1'>

                                </div>
                                <div className='schdule-card1'>

                                </div>
                                <div className='schdule-card1'>

                                </div>
                                <div className='schdule-card1'>

                                </div>
                                <div className='schdule-card1'>

                                </div>
                            </div>

                        </div><br />
                        <div className='schedule_details'>
                            <div className='schedule-bg'>
                                <div className='schdule_flex_'>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Calender')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Calender' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Schedule Calender</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Shift')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Shift' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Shift Management</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Schedule')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Schedule' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Employee Schedule</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Analytics')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Analytics' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Analytics</h4>
                                    </div>
                                </div>

                            </div>
                            <div className='performance-content'>
                                {activeTab === 'Calender' && <Scheduledetails />}
                                {activeTab === 'Shift' && <Shiftdetails />}
                                {activeTab === 'Schedule' && <Employeedetailz />}
                                {activeTab === 'Analytics' && <Sanalytics />}
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Schedules