import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { IoPeopleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiExport } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import Onboardingdetails from './Onboardingdetails';
import Taskdetails from './Taskdetails';
import Templatesdetails from './Templatesdetails';
import Analyticdetails from './Analyticdetails';

function Onboarding() {

    const [activeTab, setActiveTab] = useState('Onboarding')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className='onboarding--navigations'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='onboarding-navigations'>
                    <div className='on-board'>
                        <div className='onboard-flex'>
                            <div className='eb-header'>
                                <h3>Employee Onboarding</h3>
                                <span className='streamline'>Streamline new hire integration and track onboarding progress</span>
                            </div>
                            <div className='bg_schedule'>
                                <div className='bg_scheduleflex'>
                                    <div className='rem-icon'>
                                        <AiOutlineSchedule />
                                    </div>
                                    <h3>Schedule</h3>
                                </div>
                            </div>
                            <div className='reminder-bg'>
                                <div className='reminder-flex'>
                                    <div className='rem-icon'>
                                        <IoIosNotificationsOutline />
                                    </div>
                                    <h3>Reminders</h3>
                                </div>
                            </div>
                            <div className='nav-boarding-border'>
                                <div className='boarding-flex_'>
                                    <div className='rem-icon'>
                                        <PiExport />
                                    </div>
                                    <h3>Export</h3>
                                </div>
                            </div>
                            <div className='hire'>
                                <div className='hire-flex'>
                                    <div className='hire-icon'>
                                        <GoPlus />
                                    </div>
                                    <div>
                                        <h4>Add New Hire</h4>
                                    </div>

                                </div>
                            </div>
                        </div><br />
                        <div className='sub-board'>
                            <div>
                                <h4 onClick={() => handleTabClick('Onboarding')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Onboarding' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text' >Onboarding Pipeline</h4>
                            </div>
                            <div>
                                <h4 onClick={() => handleTabClick('Task')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Task' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text' >Task Management</h4>
                            </div>
                            <div>
                                <h4 onClick={() => handleTabClick('Templates')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Templates' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text'>Templates</h4>
                            </div>
                            <div>
                                <h4 onClick={() => handleTabClick('Analytics')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Analytics' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text'>Analytics</h4>
                            </div>
                        </div>
                    </div><br />
                    <div className='d-line_'></div>
                    <div className='performance-content'>
                        {activeTab === 'Onboarding' && <Onboardingdetails />}
                        {activeTab === 'Task' && <Taskdetails />}
                        {activeTab === 'Templates' && <Templatesdetails />}
                        {activeTab === 'Analytics' && <Analyticdetails />}

                    </div>


                </div>


            </div>

        </div>
    )
}

export default Onboarding