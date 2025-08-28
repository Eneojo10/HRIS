import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import Paydetails from './Paydetails';
import Employeedetails from './Employeedetails';
import Ticsdetails from './Ticsdetails';

function Payroll() {

    const [activeTab, setActiveTab] = useState('Payroll')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }


    return (
        <div>
            <div className='payroll-container'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='payroll-section'>
                    <div className='payroll-details'>
                        <div className='pay-navigation'>
                            <div className='payroll_mgt'>
                                <h2>Payroll Management</h2>
                                <span>Manage employee compensation and payroll processing</span>
                            </div>
                            <div className='pay_navlist'>
                                <div>
                                    <span className='np1'>Export</span>
                                </div>
                                <div>
                                    <span className='np1'>Settings</span>
                                </div>
                                <div className='np'>
                                    <div className='np-flex'>
                                        <div className='np_icon'>
                                            <GoPlus />
                                        </div>
                                        <span>New Payroll</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-line_'></div>
                    <div className='payroll-background'>
                        <div className='payroll_cards'>
                            <div className='payroll-cards'>
                                <div className='p-card1'></div>
                                <div className='p-card1'></div>
                                <div className='p-card1'></div>
                                <div className='p-card1'></div>

                            </div><br />
                            <div className='pay_bg'>
                                <div className='pay_list'>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Payroll')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Payroll' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',       
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'
                                            }}
                                        >Payroll Processing</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Employee')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Employee' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',       
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'
                                            }}
                                        >Employee Payroll</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Report')}
                                        style={{
                                            cursor:'pointer',
                                            backgroundColor: activeTab === 'Report' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',       
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'
                                        }}
                                            >Reports </h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Analytics')}
                                        style={{
                                            cursor:'pointer',
                                            backgroundColor: activeTab === 'Analytics' ? 'white' : 'transparent',
                                            padding: '7px 35px',           
                                            borderRadius: '6px',       
                                            transition: 'background-color 0.3s ease',
                                            marginTop:'-6px'
                                        }}
                                            >Analytics </h4>
                                    </div>
                                </div>
                            </div><br />
                            <div className='performance-content'>
                                {activeTab === 'Payroll' && <Paydetails />}
                                {activeTab === 'Employee' && <Employeedetails />}
                                {activeTab === 'Analytics' && <Ticsdetails />}
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Payroll