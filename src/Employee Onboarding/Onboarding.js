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
import Onboard from '../Pages/Onboard/Onboard';
import { GoPersonAdd } from "react-icons/go";



function Onboarding() {

    const [activeTab, setActiveTab] = useState('Onboarding')
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                                <div className='hire-flex' onClick={() => {
                                    setIsModalOpen(true);
                                    setActiveTab('Onboard');
                                }}>
                                    <div className='hire-icon'>
                                        <GoPlus />
                                    </div>
                                    <div className=''>
                                        <button className='addebtn'>Add New Hire</button>
                                    </div>

                                </div>
                            </div>
                        </div><br />

                        {isModalOpen && (
                            <div className="modal-overlay">
                                <div className="modal">
                                    <div className='modal-add' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px' }}>
                                            <div className='modal-icon' style={{ fontSize: '21px',  color: '#5b8af0' }}>
                                                <GoPersonAdd />
                                            </div>
                                            <div
                                            ><h3>Add New Hire</h3></div>
                                        </div>
                                        <button className='x-btn' onClick={() => setIsModalOpen(false)}>✖</button>

                                    </div>
                                   
                                    <br />

                                    <form>
                                        <div className='performance-content'>
                                            {activeTab === 'Onboard' && <Onboard />}


                                        </div>

                                    </form>
                                </div>
                            </div>
                        )}

                        <div className='sub-board'>
                            <div>
                                <h3 onClick={() => handleTabClick('Onboarding')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Onboarding' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text' >Onboarding Pipeline</h3>
                            </div>
                            <div>
                                <h3 onClick={() => handleTabClick('Task')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Task' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text' >Task Management</h3>
                            </div>
                            <div>
                                <h3 onClick={() => handleTabClick('Templates')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Templates' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text'>Templates</h3>
                            </div>
                            <div>
                                <h3 onClick={() => handleTabClick('Analytics')}
                                    style={{
                                        cursor: 'pointer', marginTop: '10px',
                                        backgroundColor: activeTab === 'Analytics' ? '#f5f5faff' : 'transparent',
                                        padding: '7px 35px',
                                        borderRadius: '6px',
                                        transition: 'background-color 0.3s ease',
                                        marginTop: '-6px'
                                    }}
                                    className='onboard-text'>Analytics</h3>
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