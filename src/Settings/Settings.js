import React, { useState, useEffect } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { PiExportThin } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuLockKeyhole } from "react-icons/lu";
import { PiLinkSimpleBold } from "react-icons/pi";
import System from './System';
import Umanagement from './Umanagement';
import Security from './Security';
import Integration from './Integration';
import { IoPersonAddSharp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import axios from 'axios';
import { BASE_URL } from '../Pages/Utils/globals';

function Settings() {

    const [activeTab, setActiveTab] = useState('System')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const [department, setDepartment] = useState([]);
    const [dept_id, setDept] = useState('');
    const [role, setRole] = useState('');
    const [roles, setRoles] = useState([]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }



    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${BASE_URL}/dept`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setDepartment(response.data);
            } catch (error) {
                console.error('Error fetching departments', error);
            }
        };

        fetchDepartments();
    }, []);


    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${BASE_URL}/roles`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles', error);
            }
        };

        fetchRoles();
    }, []);


    return (



        <div>
            <div className='settings-container'>
                <div className='main1'>
                    <Dashboard />
                </div>

                <div className='settings-details'>
                    <div className='subSettingd-container'>
                        <div className='settings-flex'>
                            <div className='settings-nav'>
                                <h2>System Settings</h2>
                                <span>Manage system configuration and administrative controls</span>
                            </div>
                            <div className='settings__nav'>
                                <div className='set-tings-input'>
                                    <input type='text' placeholder='Search settings...'></input>
                                </div>
                                <div className='set1'>
                                    <div className='set1-nav'>
                                        <div className=''>
                                            <PiExportThin />
                                        </div>
                                        <span className='configexp'>Export Config</span>
                                    </div>
                                </div>
                                <div className='set2'>
                                    <div className='set2-nav'>
                                        <div className='set3-icon'>
                                            <CiSettings />
                                        </div>
                                        <span>Backup</span>
                                    </div>
                                </div>
                                <div className='set3'>
                                    <button className='set3-nav addebtn' onClick={() => {
                                        setIsModalOpen(true)
                                        setActiveTab('System')
                                    }}>
                                        <div className='set3-icon'>
                                            <GoPlus />
                                        </div>
                                        <span className='ass-s' style={{ paddingTop: '3px' }}>Add User</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='d-line_'></div>
                    <div className='setting-cards'>
                        <div className='settings-cards-flex'>
                            <div className='set-card1'>
                                <div className='set0ne'>
                                    <h3>Active Users</h3>
                                    <h2>247</h2>
                                    <br />
                                    <p>Total system users</p>
                                </div>
                            </div>
                            <div className='set-card1'>
                                <div className='set0ne'>
                                    <h3>System Uptime</h3>
                                    <h2>99.9%</h2>
                                    <br />
                                    <p>Last 30 days</p>
                                </div>
                            </div>
                            <div className='set-card1'>
                                <div className='set0ne'>
                                    <h3>Storage Used</h3>
                                    <h2>2.4 TB</h2>
                                    <br />
                                    <p>Of 5 TB available</p>
                                </div>
                            </div>
                            <div className='set-card1'>
                                <div className='set0ne'>
                                    <h3>API Calls</h3>
                                    <h2>1.2M</h2>
                                    <br />
                                    <p>This month</p>
                                </div>
                            </div>
                        </div><br /><br /><br />
                        <div className='settings-big-border'>
                            <div className='setting_lists'>
                                <div className='st-one' style={{ display: 'flex', width: '15%', justifyContent: 'space-between' }}>
                                    <div className='st-one-icon' style={{ fontSize: '19px' }}>
                                        <TbSettings />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('System')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "System" ? 'blue' : '#6b7280',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >System Settings</h4>
                                    </div>
                                </div>
                                <div className='st-one' style={{ display: 'flex', width: '17%', justifyContent: 'space-between' }}>
                                    <div className='st-one-icon' style={{ fontSize: '19px' }}>
                                        <HiOutlineUsers />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Management')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "Management" ? 'blue' : '#6b7280',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >User Management</h4>
                                    </div>
                                </div>
                                <div className='st-one' style={{ display: 'flex', width: '9%', justifyContent: 'space-between' }}>
                                    <div className='st-one-icon' style={{ fontSize: '17px' }}>
                                        <LuLockKeyhole />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Security')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "Security" ? 'blue' : '#6b7280',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >Security</h4>
                                    </div>
                                </div>
                                <div className='st-one' style={{ display: 'flex', width: '11%', justifyContent: 'space-between' }}>
                                    <div>
                                        <PiLinkSimpleBold />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Integration')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "Integration" ? 'blue' : '#6b7280',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >Integration</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='d-line'></div>
                            <div className='setting-system'>
                                <div className='performance-content'>
                                    {activeTab === 'System' && <System />}
                                    {activeTab === 'Management' && <Umanagement />}
                                    {activeTab === 'Security' && <Security />}
                                    {activeTab === 'Integration' && <Integration />}
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>

            {/* Add User Modal */}
            {isModalOpen && (
                <div className='modal-overlay'>
                    <div className='modal' style={{ width: '50%', height: 'auto', maxHeight: '90vh', overflowY: 'auto' }}>
                        <div className='modal--bg'>
                            <div className='p-flex'>
                                <div className='person-one'>
                                    <div className='addsharp'>
                                        <IoPersonAddSharp />
                                    </div>
                                    <div>
                                        <h2>Add New User</h2>
                                    </div>
                                </div>
                                <button className='x-btn' onClick={() => { setIsModalOpen(false); setModalStep(1); }}>
                                    ✕
                                </button>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className='dept-progress-container' style={{ display: 'flex', width: '95%', justifyContent: 'space-between', margin: 'auto' }}>
                            <div className='no1' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    {modalStep !== 1 ? (
                                        <IoMdCheckmarkCircleOutline size={24} color="green" />
                                    ) : (
                                        <h2>1</h2>
                                    )}
                                </div>
                                <div>
                                    <h4>Basic Info</h4>
                                    <p>Personal details</p>
                                </div>
                            </div>

                            <div className='line-line' style={{ marginTop: '15px', color: '#717379ff' }}>
                                <TfiLayoutLineSolid />
                            </div>

                            <div className='no1' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    {modalStep > 2 ? (
                                        <IoMdCheckmarkCircleOutline size={24} color="green" />
                                    ) : (
                                        <h2>2</h2>
                                    )}
                                </div>
                                <div>
                                    <h4>Role & Dept</h4>
                                    <p>Role and department</p>
                                </div>
                            </div>

                            <div className='line-line' style={{ marginTop: '15px', color: '#717379ff' }}>
                                <TfiLayoutLineSolid />
                            </div>

                            <div className='no1' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <h2>3</h2>
                                </div>
                                <div>
                                    <h4>Permissions</h4>
                                    <p>Access permissions</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className='scrollable' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                            <div className='personal-details'>
                                {modalStep === 1 && (
                                    <>
                                        <div className='person-input-fields'>
                                            <div className='per-input'>
                                                <label>First Name</label>
                                                <input type='text' placeholder='Enter first name' />
                                            </div>
                                            <div className='per-input'>
                                                <label>Last Name</label>
                                                <input type='text' placeholder='Enter last name' />
                                            </div>
                                        </div>
                                        <div className='person-input-fields-fields'>
                                            <div className='per-input-fields'>
                                                <label>Email</label>
                                                <input type='email' placeholder='Enter email address' />
                                            </div>
                                            <div className='per-input-fields'>
                                                <label>Phone</label>
                                                <input type='tel' placeholder='Enter phone number' />
                                            </div>
                                            <div className='per-input-fields'>
                                                <label>Employee ID</label>
                                                <input type='text' placeholder='EMP-12345' />
                                            </div>
                                            <div className='per-input-fields'>
                                                <label>Start Date</label>
                                                <input type='date' />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {modalStep === 2 && (
                                    <>
                                        <div className='person-input-fields'>
                                            <div className='per-input-fields'>
                                                <label>Role</label>
                                                <select>
                                                    <option>Select role</option>
                                                    {roles.map((role) => (
                                                        <option key={role._id} value={role.role}>
                                                            {role.roles}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                        </div>
                                        <div className='person-input-fields'>
                                            <div className='per-input-fields'>
                                                <label>Departments</label>
                                                <select
                                                    value={dept_id}
                                                    onChange={(e) => setDept(e.target.value)}
                                                >
                                                    <option value="" disabled>
                                                        Select Department
                                                    </option>

                                                    {department.map((dept) => (
                                                        <option key={dept._id} value={dept._id}>
                                                            {dept.dept}
                                                        </option>
                                                    ))}
                                                </select>

                                            </div>

                                        </div>
                                        <div className='per-input-fields'>
                                            <label>Position/Job Title</label>
                                            <input type='text' placeholder='e.g., Senior Software Engineer' />
                                        </div>
                                        <div className='per-input-fields'>
                                            <label>Office Location</label>
                                            <input type='text' placeholder='e.g., Garki Abuja' />
                                        </div>

                                    </>
                                )}

                                {modalStep === 3 && (
                                    <>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>User Management</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>Payroll Access</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>Reports Access</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>System Settings</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>View Employees</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>Manage Departments</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>View Analytics</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>Manage Benefits</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' />
                                            <h4>Edit Employees</h4>
                                        </div>
                                        <div className="checked_" style={{ marginBottom: '15px', backgroundColor: '#eff6ff', height: '70px', borderRadius: '4px', border: '1px solid #ccc' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <input type="checkbox" />
                                                <span>Send Invitation Email</span>
                                            </label>
                                            <p style={{ marginLeft: '22px', fontSize: '14px', marginTop: '-2px' }}>
                                                User will receive an email to set up their password and access the system
                                            </p>
                                        </div>

                                    </>
                                )}
                            </div>
                        </div>

                        <div className='modal-actions'>
                            {modalStep > 1 && (
                                <button className='cancel-btn' onClick={() => setModalStep(modalStep - 1)}>
                                    Previous
                                </button>
                            )}
                            <button className='cancel-btn' onClick={() => { setIsModalOpen(false); setModalStep(1); }}>
                                Cancel
                            </button>
                            {modalStep < 3 ? (
                                <button className='cancel-btnn' onClick={() => setModalStep(modalStep + 1)}>
                                    Next
                                </button>
                            ) : (
                                <button className='cancel-btnn' onClick={() => { setIsModalOpen(false); setModalStep(1); }}>
                                    Add User
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Settings