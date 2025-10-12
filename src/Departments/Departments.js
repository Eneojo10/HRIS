import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { CiImport } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import Ddetails from './Ddetails';
import Structure from './Structure';
import Budgets from './Budgets';
import Banalytics from './Banalytics';
import { TbCurrencyNaira } from "react-icons/tb";
import { SiClickhouse } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import Dept from '../Pages/DepartmentTwo/Dept';
import { BiBuildingHouse } from "react-icons/bi";
import { FcSalesPerformance } from "react-icons/fc";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";


function Departments() {

    const [activeTab, setActiveTab] = useState('Departments')
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                                <div className='dep-t-flex' onClick={() => {
                                    setIsModalOpen(true);
                                    setActiveTab('Departments')
                                }}>
                                    <div className='impo-rt-icon'>
                                        <GoPlus />
                                    </div>
                                    <button className='addebtn'>New Department</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className='modal-add' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='modal-modal-add' style={{ display: 'flex', gap: '5px' }}>
                                        <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#5b8af0' }}>
                                            <BiBuildingHouse />
                                        </div>
                                        <div
                                        ><h3>Create Department</h3></div>
                                    </div>
                                    <button className='x-btn' onClick={() => setIsModalOpen(false)}>✖</button>

                                </div>

                                <br />

                                <form>
                                    <div className='performance-content'>
                                        {activeTab === 'Departments' && <Dept />}


                                    </div>

                                </form>
                            </div>
                        </div>
                    )}
                    <div className='d-line_'></div>
                    <div className='dept-back-ground-color'>
                        <div className='dept--main'><br />
                            <div className='dept--cards'>
                                <div className='dept-card010'>
                                    <div className='total-department'>
                                        <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                                            <div>
                                                <h4>Total Departments</h4>
                                                <p>12</p>
                                            </div>
                                            <div className='icon-dept' style={{ marginTop: '20px', color: '#2563eb', backgroundColor: '#eff6ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                                                <SiClickhouse />
                                            </div>
                                        </div>
                                        <div className='farrow' style={{ display: 'flex',gap:'4px',color:'green' }}>
                                            <div>
                                                <FaArrowTrendUp />
                                            </div>
                                            <div>
                                                <p>+2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='dept-card010'>
                                    <div className='total-department'>
                                        <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                                            <div>
                                                <h4>Total Employees</h4>
                                                <p>1,247</p>
                                            </div>
                                            <div className='icon-dept' style={{ marginTop: '20px', color: '#23a854', backgroundColor: '#f0fdf4', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                                                <IoPeopleOutline />
                                            </div>
                                        </div>
                                        <div className='farrow' style={{ display: 'flex',gap:'4px',color:'green' }}>
                                            <div>
                                                <FaArrowTrendUp />
                                            </div>
                                            <div>
                                                <p>+8.2%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='dept-card010'>
                                    <div className='total-department'>
                                        <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                                            <div>
                                                <h4>Total Budget</h4>
                                                <p>₦550M</p>
                                            </div>
                                            <div className='icon-dept' style={{ marginTop: '20px', color: 'purple', backgroundColor: '#eee7f4', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                                                <TbCurrencyNaira />
                                            </div>
                                        </div>
                                        <div className='farrow' style={{ display: 'flex',gap:'4px',color:'green' }}>
                                            <div>
                                                <FaArrowTrendUp />
                                            </div>
                                            <div>
                                                <p>+5.1%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='dept-card010'>
                                    <div className='total-department'>
                                        <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                                            <div>
                                                <h4>Avg Performance</h4>
                                                <p>87.3%</p>
                                            </div>
                                            <div className='icon-dept' style={{ marginTop: '20px', color: '#ea580c', backgroundColor: '#fff7ed', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                                                <FcSalesPerformance />
                                            </div>
                                        </div>
                                        <div className='farrow' style={{ display: 'flex',gap:'4px',color:'red' }}>
                                            <div>
                                                <FaArrowTrendDown />
                                            </div>
                                            <div>
                                                <p>-2.1%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


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