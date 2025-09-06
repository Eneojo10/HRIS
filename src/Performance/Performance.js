import React, { useState } from 'react';
import Dashboard from '../Menu/Dashboard';
import Performancedetails from '../Performance/Performancedetails';
import Feedback from './Feedback';
import Performanceanalytics from './Performanceanalytics';
import Goals from './Goals';
import { BsPlus } from "react-icons/bs";
import { PiExport } from "react-icons/pi";

function Performance() {
    const [activeTab, setActiveTab] = useState('Performance'); 

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='performance-container'>
            <div className='main1'>
                <Dashboard />
            </div>
            <div className='performance-navigations'>
                <div className='performance-header'>
                    <div className='performance-header-flex'>
                        <div>
                            <h2>Performance Management</h2>
                            <span className='performance-mgt'>
                                Manage employee performance, goals, and development
                            </span>
                        </div>
                        <div className='performance-right'>
                            <div className='exp-bg-bg'>
                                <div className='exp-exp'>
                                    <div className='exp-exp-icon'>
                                        <PiExport />
                                    </div>
                                    <div className='er-export'><h4>Export Report</h4></div>
                                </div>
                            </div>
                            <div className='cycle--flex'>
                                <div className='cycle-flex' style={{ display: 'flex', gap: '10px' }}>
                                    <div className='cycle-plus'>
                                        <BsPlus />
                                    </div>
                                    <div className='chfour'><h4>New Review Cycle</h4></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <br />

                    {/* Tabs */}
                    <div className='goal'>
                        <div>
                            <h4
                                onClick={() => handleTabClick('Performance')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Performance' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >
                                Performance Reviews
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => handleTabClick('Goals')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Goals' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >
                                Goal Tracking
                            </h4>
                        </div>
                        <div>
                            <h4 onClick={() => handleTabClick('Feedback')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Feedback' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >Feedback Center</h4>
                        </div>
                        <div>
                            <h4 onClick={() => handleTabClick('Analytics')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Analytics' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >Analytics</h4>
                        </div>
                    </div>

                    <div className='d-line_'></div>
                </div>

                {/* Content Switch */}
                <div className='performance-content'>
                    {activeTab === 'Performance' && <Performancedetails />}
                    {activeTab === 'Feedback' && <Feedback />}
                    {activeTab === 'Analytics' && <Performanceanalytics />}
                    {activeTab === 'Goals' && <Goals />}
                </div>
            </div>
        </div>
    );
}

export default Performance;
