import React, { useState } from 'react';
import Dashboard from '../Menu/Dashboard';
import Analyticsdetails from '../Analytics/Analyticsdetails';
import { PiExportLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import Workforce from './Workforce';
import Metrics from './Metrics';
import Equity from './Equity';

function Analytics() {
    const [activeTab, setActiveTab] = useState('Executive Overview');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='analytics-section'>
            <div className='main1'>
                <Dashboard />
            </div>

            <div className='analytics-flex-side'>
                <div className='inside-analytics'>
                    <div className='anaylytics-logo'></div>
                    <div>
                        <h4>Work Intelligence<br /> Dashboard</h4>
                        <span>Q4 2023 • Last updated: 2 minutes ago</span>
                    </div>
                    <div className='live-data'>
                        <h4>Live Data</h4>
                    </div>
                    <div className='critical_alert'>
                        <h4># Critical Alerts</h4>
                    </div>
                    <div className='analytic-alert_'>
                        <div className='alerts-icon'>
                            <IoIosNotificationsOutline />
                        </div>
                        <h4>Alerts</h4>
                    </div>
                    <div className='calender_border'>
                        <div className='cal-ender-flex'>
                            <div><SlCalender /></div>
                            <h4>Q4 2023</h4>
                        </div>
                    </div>
                    <div className='exp1'>
                        <div className='export'>
                            <div className='exp-icon'><PiExportLight /></div>
                            <span className='exp_span'>Export Report</span>
                        </div>
                    </div>
                </div>

                <div className='analytics-bg'>
                    <div className='sub-analytics'>
                        <div className='font-hfour'>
                            <h4
                                onClick={() => handleTabClick('Executive Overview')}
                                style={{
                                    cursor: 'pointer',
                                    color: activeTab === 'Executive Overview' ? '#58595aff' : '#58595aff', 
                                }}
                            >
                                Executive Overview
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => handleTabClick('Workforce Analysis')}
                                style={{
                                    cursor: 'pointer',
                                    color: activeTab === 'Workforce Analysis' ? '#58595aff' : '#58595aff',
                                }}
                            >
                                Workforce Analysis
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => handleTabClick('Performance & Retention')}
                                style={{
                                    cursor: 'pointer',
                                    color: activeTab === 'Performance & Retention' ? '#58595aff' : '#58595aff',
                                }}
                            >
                                Performance & Retention
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => handleTabClick('Talent Acquisition')}
                                style={{
                                    cursor: 'pointer',
                                    color: activeTab === 'Talent Acquisition' ? '#58595aff' : '#58595aff',
                                }}
                            >
                                Talent Acquisition
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => handleTabClick('Compensation & Equity')}
                                style={{
                                    cursor: 'pointer',
                                    color: activeTab === 'Compensation & Equity' ? '#58595aff' : '#58595aff',
                                }}
                            >
                                Compensation & Equity
                            </h4>
                        </div>
                    </div>

                

                </div>
                <div className='analytics-tab-content'>
                    {activeTab === 'Executive Overview' && <Analyticsdetails />}
                    {activeTab === 'Workforce Analysis' && <Workforce />}
                    {activeTab === 'Performance & Retention' && <Metrics />}
                    {activeTab === 'Compensation & Equity' && <Equity />}
                </div>
            </div>


        </div>
    );
}

export default Analytics;
