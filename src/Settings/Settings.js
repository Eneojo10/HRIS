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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PERMISSION_KEYS = [
    'manageDepartments',
    'viewAnalytics',
    'userManagement',
    'payrollAccess',
    'reportAccess',
    'systemSettings',
    'viewEmployees',
    'manageBenefits',
    'editEmployees',
    'sendInvitations'
];

function Settings() {

    const [activeTab, setActiveTab] = useState('System')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const [department, setDepartment] = useState([]);
    const [positions, setPositions] = useState([]);
    const [locations, setLocations] = useState([]);
    const [dropdownLoading, setDropdownLoading] = useState({
        roles: true,
        departments: true,
        positions: true,
        locations: true
    });
    const [dept_id, setDept] = useState('');
    const [roles, setRoles] = useState([]);
    const [formData, setFormData] = useState({
        domainName: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        employee_id: '',
        start_date: '',
        role_id: '',
        position_id: '',
        location_id: '',
        dept_id: '',
        permissions: {}
    });
    const [selectedPermissions, setSelectedPermissions] = useState({});

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    const resetModal = () => {
        setIsModalOpen(false);
        setModalStep(1);
        setFormData({
            domainName: '', firstname: '', lastname: '', email: '', phone: '',
            employee_id: '', start_date: '', role_id: '', position_id: '',
            location_id: '', dept_id: '', permissions: {}
        });
        setSelectedPermissions({});
        setDept('');
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handlePermissionChange = (permission) => {
        setSelectedPermissions(prev => ({
            ...prev,
            [permission]: !prev[permission]
        }));
    }

    const getNormalizedPermissions = () => {
        return PERMISSION_KEYS.reduce((acc, key) => {
            acc[key] = Boolean(selectedPermissions[key]);
            return acc;
        }, {});
    };

    const isObjectId = (value) => /^[0-9a-fA-F]{24}$/.test(value);
    const isDropdownDataLoaded = Object.values(dropdownLoading).every((isLoading) => !isLoading);
    const isCreateAdminDisabled = !isDropdownDataLoaded || roles.length === 0 || department.length === 0 || positions.length === 0 || locations.length === 0;

    const validateForm = () => {
        if (modalStep === 1) {
            if (!formData.domainName.trim()) {
                toast.error('Domain name is required');
                return false;
            }
            if (!formData.firstname.trim()) {
                toast.error('First name is required');
                return false;
            }
            if (!formData.lastname.trim()) {
                toast.error('Last name is required');
                return false;
            }
            if (!formData.email.trim()) {
                toast.error('Email is required');
                return false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                toast.error('Please enter a valid email');
                return false;
            }
            if (!formData.phone.trim()) {
                toast.error('Phone number is required');
                return false;
            }
            if (!formData.employee_id.trim()) {
                toast.error('Employee ID is required');
                return false;
            }
            if (!formData.start_date) {
                toast.error('Start date is required');
                return false;
            }
        }
        if (modalStep === 2) {
            if (!formData.role_id) {
                toast.error('Role is required');
                return false;
            }
            if (!dept_id) {
                toast.error('Department is required');
                return false;
            }
            if (!formData.position_id.trim()) {
                toast.error('Position/Job Title is required');
                return false;
            }
            if (!formData.location_id.trim()) {
                toast.error('Office Location is required');
                return false;
            }
            if (!isObjectId(formData.position_id)) {
                toast.error('Please select a valid position from the list');
                return false;
            }
            if (!isObjectId(formData.location_id)) {
                toast.error('Please select a valid office location from the list');
                return false;
            }
        }
        if (modalStep === 3) {
            if (Object.values(selectedPermissions).every(val => !val)) {
                toast.error('Please select at least one permission');
                return false;
            }
        }
        return true;
    }

    const createAdmin = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Your session has expired. Please login again.');
                return;
            }

            const normalizedPermissions = getNormalizedPermissions();
            
            // Step 1: Create admin
            const createPayload = {
                domainName: formData.domainName,
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                phone: formData.phone,
                employee_id: formData.employee_id,
                start_date: formData.start_date,
                role_id: formData.role_id,
                position_id: formData.position_id,
                location_id: formData.location_id,
                dept_id: dept_id || formData.dept_id
            };
            console.log('Create Admin Payload:', createPayload);
            const createResponse = await axios.post(`${BASE_URL}/superadmin/create-admin`, createPayload, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log('Admin created:', createResponse.data);
            toast.success('Admin created successfully');
            
            // Step 2: Assign permissions
            const permissionsPayload = {
                email: formData.email,
                firstname: formData.firstname,
                lastname: formData.lastname,
                phone: formData.phone,
                role_id: formData.role_id,
                position_id: formData.position_id,
                location_id: formData.location_id,
                dept_id: dept_id || formData.dept_id,
                start_date: formData.start_date,
                permissions: normalizedPermissions
            };
            console.log('Assign Permissions Payload:', permissionsPayload);
            const permissionsResponse = await axios.post(`${BASE_URL}/admin/assign-permissions`, permissionsPayload, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log('Permissions assigned:', permissionsResponse.data);
            toast.success('Permissions assigned successfully');
            
            // Close modal and reset
            setIsModalOpen(false);
            setModalStep(1);
            setFormData({
                domainName: '', firstname: '', lastname: '', email: '', phone: '',
                employee_id: '', start_date: '', role_id: '', position_id: '',
                location_id: '', dept_id: '', permissions: {}
            });
            setSelectedPermissions({});
            setDept('');
        } catch (error) {
            console.error('Error:', error);
            console.error('Error response:', error.response?.data);
            toast.error(error.response?.data?.error || 'Error creating admin or assigning permissions');
        }
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
                setDepartment(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching departments', error);
            } finally {
                setDropdownLoading((prev) => ({ ...prev, departments: false }));
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
                setRoles(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching roles', error);
            } finally {
                setDropdownLoading((prev) => ({ ...prev, roles: false }));
            }
        };

        fetchRoles();
    }, []);

    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${BASE_URL}/positions`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setPositions(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching positions', error);
            } finally {
                setDropdownLoading((prev) => ({ ...prev, positions: false }));
            }
        };

        fetchPositions();
    }, []);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${BASE_URL}/location`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setLocations(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching locations', error);
            } finally {
                setDropdownLoading((prev) => ({ ...prev, locations: false }));
            }
        };

        fetchLocations();
    }, []);


    return (



        <div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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
                                <button className='x-btn' onClick={resetModal}>
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
                                    {modalStep > 3 ? (
                                        <IoMdCheckmarkCircleOutline size={24} color="green" />
                                    ) : (
                                        <h2>3</h2>
                                    )}
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
                                {modalStep === 4 && (
                                    <>
                                        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                                            <h3 style={{ color: '#1e40af', marginBottom: '10px' }}>Admin Created Successfully!</h3>
                                            <p style={{ color: '#1e3a8a', marginBottom: '5px' }}><strong>Email:</strong> {formData.email}</p>
                                            <p style={{ color: '#1e3a8a' }}>Now assign permissions to this admin</p>
                                        </div>
                                    </>
                                )}
                                {modalStep === 1 && (
                                    <>
                                        <div className='person-input-fields'>
                                            <div className='per-input'>
                                                <label>Domain Name</label>
                                                <input type='text' name='domainName' placeholder='Enter domain name' value={formData.domainName} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className='person-input-fields'>
                                            <div className='per-input'>
                                                <label>First Name</label>
                                                <input type='text' name='firstname' placeholder='Enter first name' value={formData.firstname} onChange={handleInputChange} />
                                            </div>
                                            <div className='per-input'>
                                                <label>Last Name</label>
                                                <input type='text' name='lastname' placeholder='Enter last name' value={formData.lastname} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className='person-input-fields-fields'>
                                            <div className='per-input-fields'>
                                                <label>Email</label>
                                                <input type='email' name='email' placeholder='Enter email address' value={formData.email} onChange={handleInputChange} />
                                            </div>
                                            <div className='per-input-fields'>
                                                <label>Phone</label>
                                                <input type='tel' name='phone' placeholder='Enter phone number' value={formData.phone} onChange={handleInputChange} />
                                            </div>
                                            <div className='per-input-fields'>
                                                <label>Employee ID</label>
                                                <input type='text' name='employee_id' placeholder='EMP-12345' value={formData.employee_id} onChange={handleInputChange} />
                                            </div>
                                            <div className='per-input-fields'>
                                                <label>Start Date</label>
                                                <input type='date' name='start_date' value={formData.start_date} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {modalStep === 2 && (
                                    <>
                                        <div className='person-input-fields'>
                                            <div className='per-input-fields'>
                                                <label>Role</label>
                                                <select name='role_id' value={formData.role_id} onChange={handleInputChange} disabled={dropdownLoading.roles}>
                                                    <option value=''>{dropdownLoading.roles ? 'Loading roles...' : 'Select role'}</option>
                                                    {roles.map((role) => (
                                                        <option key={role._id} value={role._id}>
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
                                                    disabled={dropdownLoading.departments}
                                                >
                                                    <option value="" disabled>
                                                        {dropdownLoading.departments ? 'Loading departments...' : 'Select Department'}
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
                                            <select name='position_id' value={formData.position_id} onChange={handleInputChange} disabled={dropdownLoading.positions}>
                                                <option value=''>{dropdownLoading.positions ? 'Loading positions...' : 'Select position'}</option>
                                                {positions.map((position) => (
                                                    <option key={position._id} value={position._id}>
                                                        {position.position_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='per-input-fields'>
                                            <label>Office Location</label>
                                            <select name='location_id' value={formData.location_id} onChange={handleInputChange} disabled={dropdownLoading.locations}>
                                                <option value=''>{dropdownLoading.locations ? 'Loading locations...' : 'Select location'}</option>
                                                {locations.map((location) => (
                                                    <option key={location._id} value={location._id}>
                                                        {location.location_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                    </>
                                )}

                                {modalStep === 3 && (
                                    <>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.userManagement || false} onChange={() => handlePermissionChange('userManagement')} />
                                            <h4>User Management</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.payrollAccess || false} onChange={() => handlePermissionChange('payrollAccess')} />
                                            <h4>Payroll Access</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.reportAccess || false} onChange={() => handlePermissionChange('reportAccess')} />
                                            <h4>Reports Access</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.systemSettings || false} onChange={() => handlePermissionChange('systemSettings')} />
                                            <h4>System Settings</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.viewEmployees || false} onChange={() => handlePermissionChange('viewEmployees')} />
                                            <h4>View Employees</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.manageDepartments || false} onChange={() => handlePermissionChange('manageDepartments')} />
                                            <h4>Manage Departments</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.viewAnalytics || false} onChange={() => handlePermissionChange('viewAnalytics')} />
                                            <h4>View Analytics</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.manageBenefits || false} onChange={() => handlePermissionChange('manageBenefits')} />
                                            <h4>Manage Benefits</h4>
                                        </div>
                                        <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                            <input type='checkbox' checked={selectedPermissions.editEmployees || false} onChange={() => handlePermissionChange('editEmployees')} />
                                            <h4>Edit Employees</h4>
                                        </div>
                                        <div className="checked_" style={{ marginBottom: '15px', backgroundColor: '#eff6ff', height: '70px', borderRadius: '4px', border: '1px solid #ccc' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <input type="checkbox" checked={selectedPermissions.sendInvitations || false} onChange={() => handlePermissionChange('sendInvitations')} />
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
                            {modalStep > 1 && modalStep !== 4 && (
                                <button className='cancel-btn' onClick={() => setModalStep(modalStep - 1)}>
                                    Previous
                                </button>
                            )}
                            <button className='cancel-btn' onClick={resetModal}>
                                Cancel
                            </button>
                            {modalStep < 3 ? (
                                <button className='cancel-btnn' onClick={() => {
                                    if (validateForm()) {
                                        setModalStep(modalStep + 1);
                                    }
                                }}>
                                    Next
                                </button>
                            ) : modalStep === 3 ? (
                                <button className='cancel-btnn' disabled={isCreateAdminDisabled} onClick={() => {
                                    if (validateForm()) {
                                        createAdmin();
                                    }
                                }}>
                                    Create Admin
                                </button>
                            ) : null}
                            {modalStep === 3 && isCreateAdminDisabled && (
                                <p style={{ color: '#6b7280', marginTop: '8px' }}>
                                    Waiting for roles, departments, positions and locations to finish loading.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Settings