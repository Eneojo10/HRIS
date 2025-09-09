import React, { useState } from 'react';
import Dashboard from '../Menu/Dashboard';
import { GoPlus } from "react-icons/go";
import { PiExport } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPeopleOutline, IoAnalyticsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import Recruitmentdetails from './Recruitmentdetails';
import Postingdetails from './Postingdetails';
import Interviewdetails from './Interviewdetails';
import Analyticdetails from './Analyticdetails';
import { LuBriefcase } from "react-icons/lu";
import Basic from '../Pages/Postjob/Basic';

function Recruitment() {
    const [activeTab, setActiveTab] = useState('Candidate Pipeline');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTab, setModalTab] = useState('Basic')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const tabStyle = (tabName) => ({
        cursor: 'pointer',
        backgroundColor: activeTab === tabName ? 'black' : 'transparent',
        color: activeTab === tabName ? 'white' : 'black',
        padding: '3px 35px',
        borderRadius: '6px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    });

    return (
        <div>
            <div className='recruitment--container'>
                <div className='main1'>
                    <Dashboard />
                </div>

                <div className='recruitment-container'>
                    <div className='recruitment-nav'>
                        <div className='recruitment-navigation-flex'>
                            <div>
                                <h2>Recruitment Center</h2>
                                <span>Manage your hiring pipeline and talent acquisition</span>
                            </div>

                            <div className='recruitment-navigation-right'>
                                <div className='re-bell-border'>
                                    <div className='re-bell'>
                                        <div className='bell-noti'><IoIosNotificationsOutline /></div>
                                        <h4>Notifications</h4>
                                    </div>
                                </div>

                                <div className='new_export'>
                                    <div className='dipslay_export'>
                                        <div className='newjob_plus_'><PiExport /></div>
                                        <h4>Export</h4>
                                    </div>
                                </div>

                                <div className='new-job-bg'>
                                    <div className='new-job' onClick={() => {
                                            setIsModalOpen(true);
                                            setModalTab('Basic'); // 👈 always start modal at Basic
                                        }}>
                                        <div className='newjob_plus'><GoPlus /></div>
                                        <button className='addebtn'>Post New Job</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br /><br />
                        {isModalOpen && (
                            <div className="modal-overlay">
                                <div className="modal">
                                    <div className='modal-add' style={{ display: 'flex', gap: '5px' }}>
                                        <div className='modal-icon' style={{ fontSize: '21px',marginTop:'5px' }}>
                                            <LuBriefcase />
                                        </div>
                                        <div
                                        ><h2>Post New Job</h2></div>
                                    </div>
                                    <br />
                                    <div className='modal-bg'>
                                        <div className='p-flex'>
                                            <div onClick={() => setModalTab('Basic')}
                                                style={{
                                                    backgroundColor: modalTab === 'Basic' ? 'white' : 'transparent',
                                                    cursor: 'pointer',
                                                    padding: '3px 20px'
                                                }}
                                                className='person-one'>
                                                <h4>Basic Info</h4>
                                            </div>
                                            <div
                                                className='person-one'>
                                                <h4>Job Details</h4>
                                            </div>
                                            <div
                                                className='person-one'>
                                                <h4>Settings</h4>
                                            </div>


                                        </div>

                                    </div>

                                    <form>
                                        <div className='performance-content'>
                                            {modalTab === 'Basic' && <Basic />}
                                            {/* {activeTab === 'Employment' && <Employment />}
                                            {activeTab === 'Contact' && <Contact />} */}


                                        </div>

                                    </form>
                                </div>
                            </div>
                        )}

                        <div className='recruitment-sub-list'>
                            <div onClick={() => handleTabClick('Candidate Pipeline')} style={tabStyle('Candidate Pipeline')} className='candidates'>
                                <div className='can-didate-icon'><IoPeopleOutline /></div>
                                <h4

                                >
                                    Candidate Pipeline
                                </h4>
                                <div className='can-numbers'><h5>105</h5></div>
                            </div>

                            <div onClick={() => handleTabClick('Job Postings')} style={tabStyle('Job Postings')} className='job-posting'>
                                <div className='can-didate-icon1'><LuBriefcase /></div>
                                <h4


                                >
                                    Job Postings
                                </h4>
                                <div className='job-number'><h5>12</h5></div>
                            </div>

                            <div onClick={() => handleTabClick('Interview')} style={tabStyle('Interview')} className='job-posting_'>
                                <div className='can-didate-icon1'><SlCalender /></div>
                                <h4

                                >Interviews</h4>
                                <div className='job-number'><h5>28</h5></div>
                            </div>

                            <div onClick={() => handleTabClick('Analytics')} style={tabStyle('Analytics')} className='job-posting__'>
                                <div className='can-didate-icon1'><IoAnalyticsOutline /></div>
                                <h4 onClick={() => handleTabClick('')}

                                >Analytics</h4>
                            </div>
                        </div>
                    </div>

                    <div className='d-likne'></div>

                    <div className='performance-content'>
                        {activeTab === 'Candidate Pipeline' && <Recruitmentdetails />}
                        {activeTab === 'Job Postings' && <Postingdetails />}
                        {activeTab === 'Interview' && <Interviewdetails />}
                        {activeTab === 'Analytics' && <Analyticdetails />}
                        {/* {activeTab === 'Basic' && <Basic />} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recruitment;
