import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import Paydetails from './Paydetails';
import Employeedetails from './Employeedetails';
import Ticsdetails from './Ticsdetails';
import Reportdetails from './Reportdetails';
import { PiExport } from "react-icons/pi";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { IoCalendarClear } from 'react-icons/io5';
import { IoTriangleOutline } from 'react-icons/io5';
import { CiSettings } from "react-icons/ci";

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
                                <div className='np1'>
                                    <div className='np__flex'>
                                        <div className='npi-con'>
                                            <PiExport />
                                        </div>
                                        <h4>Export</h4>
                                    </div>
                                </div>
                                 <div className='np1'>
                                    <div className='np__flex'>
                                        <div className='npi-con'>
                                            <CiSettings />
                                        </div>
                                        <h4>Settings</h4>
                                    </div>
                                </div>
                                <div className='np'>
                                    <div className='np-flex'>
                                        <div className='np_icon'>
                                            <GoPlus />
                                        </div>
                                        <h4>New Payroll</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-line_'></div>
                    <div className='payroll-background'>
                        <div className='payroll_cards'>
                            <div className='payroll-cards'>
                                <div className='p-card1'>
                                    <div className='pay_rollcards' style={{ width: '90%', margin: 'auto', marginTop: '10px' }}>
                                        <div className='payrollcards' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className='prollcards' style={{ display: 'flex', width: '65%', gap: '10px' }}>
                                                <div className='payroll-naira'>
                                                    <TbCurrencyNaira />
                                                </div>
                                                <div className='payroll-total' style={{ marginTop: '3px' }}>
                                                    <h3>Total Payroll</h3>
                                                </div>
                                            </div>
                                            <div className='payrolltrend' style={{ marginTop: '3px', color: 'green' }}>
                                                <p>+12.5%</p>
                                            </div>

                                        </div><br />
                                        <div>
                                            <h2>$2,847,500</h2>
                                        </div>
                                        <span>This month</span>
                                    </div>

                                </div>
                                <div className='p-card1'>
                                    <div className='pay_rollcards' style={{ width: '90%', margin: 'auto', marginTop: '10px' }}>
                                        <div className='payrollcards' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className='prollcards' style={{ display: 'flex', width: '65%', gap: '10px' }}>
                                                <div className='payroll-naira'>
                                                    <IoPeopleOutline />
                                                </div>
                                                <div className='payroll-total' style={{ marginTop: '3px' }}>
                                                    <h3>Employees Paid</h3>
                                                </div>
                                            </div>
                                            <div className='payrolltrend' style={{ marginTop: '3px', color: 'green' }}>
                                                <p>+12.5%</p>
                                            </div>

                                        </div>
                                        <div>
                                            <h2>1,247</h2>
                                        </div>
                                        <span>Active employees</span>
                                    </div>

                                </div>
                                <div className='p-card1'>
                                    <div className='pay_rollcards' style={{ width: '90%', margin: 'auto', marginTop: '10px' }}>
                                        <div className='payrollcards' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className='prollcards' style={{ display: 'flex', width: '65%', gap: '10px' }}>
                                                <div className='payroll-naira'>
                                                    <IoCalendarClear />
                                                </div>
                                                <div className='payroll-total' style={{ marginTop: '3px' }}>
                                                    <h3>Processing Time</h3>
                                                </div>
                                            </div>
                                            <div className='payrolltrend' style={{ marginTop: '3px', color: 'green' }}>
                                                <p>0.5days</p>
                                            </div>

                                        </div>
                                        <div>
                                            <h2>2.3 days</h2>
                                        </div>
                                        <span>Average processing</span>
                                    </div>

                                </div>
                                <div className='p-card1'>
                                    <div className='pay_rollcards' style={{ width: '90%', margin: 'auto', marginTop: '10px' }}>
                                        <div className='payrollcards' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className='prollcards' style={{ display: 'flex', width: '65%', gap: '10px' }}>
                                                <div className='payroll-naira'>
                                                    <IoTriangleOutline />
                                                </div>
                                                <div className='payroll-total' style={{ marginTop: '3px' }}>
                                                    <h3>Pending Reviews</h3>
                                                </div>
                                            </div>
                                            <div className='payrolltrend' style={{ marginTop: '3px', color: 'green' }}>
                                                <p>-8</p>
                                            </div>

                                        </div>
                                        <div>
                                            <h2>23</h2>
                                        </div>
                                        <span>Require attention</span>
                                    </div>

                                </div>

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
                                                marginTop: '-6px'
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
                                                marginTop: '-6px'
                                            }}
                                        >Employee Payroll</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Report')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Report' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Reports </h4>
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
                                        >Analytics </h4>
                                    </div>
                                </div>
                            </div><br />
                            <div className='performance-content'>
                                {activeTab === 'Payroll' && <Paydetails />}
                                {activeTab === 'Employee' && <Employeedetails />}
                                {activeTab === 'Analytics' && <Ticsdetails />}
                                {activeTab === 'Report' && <Reportdetails />}
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Payroll