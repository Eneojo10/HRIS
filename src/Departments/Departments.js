import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { CiImport } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import Ddetails from './Ddetails';
import Structure from './Structure';
import Budgets from './Budgets';
import Banalytics from './Banalytics';

function Departments() {

    const [activeTab, setActiveTab] = useState('Departments')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    };


    return (
        <div>
            <div className='departments-section'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='dept_sect'>
                    <div className='dept__sect'>
                        <div className='dept-mgt'>
                            <h2>Department Management</h2>
                            <span>Manage organizational structure and department operations</span>
                        </div>
                        <div className='dept_navright'>
                            <div className='dvr2'>
                                <div className='dvr2-flex'>
                                    <div className='impo-rt-icon'>
                                        <CiImport />
                                    </div>
                                    <span>Export</span>
                                </div>
                            </div>
                            <div className='flex-setting-holder'>
                                <div className='sett-ings-flex'>
                                    <div className='impo-rt-icon'>
                                        <LuSettings />
                                    </div>
                                    <span>Settings</span>
                                </div>
                            </div>
                            <div className='deptblack-bg'>
                                <div className='dep-t-flex'>
                                    <div className='impo-rt-icon'>
                                        <GoPlus />
                                    </div>
                                    <span>New Department</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-line_'></div>
                    <div className='dept-back-ground-color'>
                        <div className='dept--main'><br />
                            <div className='dept--cards'>
                                <div className='dept-card010'></div>
                                <div className='dept-card010'></div>
                                <div className='dept-card010'></div>
                                <div className='dept-card010'></div>


                            </div>
                            <br />
                            <div className='dept--bg'>
                                <div className='dept-subs'>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Departments')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Departments' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Department Overview</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Structure')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Structure' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Organization Structure</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Budgets')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Budgets' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Budgets & Costs</h4>
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
                            </div><br />
                            <div className='performance-content'>
                                {activeTab === 'Departments' && <Ddetails />}
                                {activeTab === 'Structure' && <Structure />}
                                {activeTab === 'Budgets' && <Budgets />}
                                {activeTab === 'Analytics' && <Banalytics />}

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Departments