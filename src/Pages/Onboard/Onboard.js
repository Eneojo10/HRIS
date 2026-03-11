import React, { useState, useEffect } from 'react'
import { LuBriefcase } from "react-icons/lu";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BASE_URL, getAuthHeaders } from '../Utils/globals';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoMdPerson } from "react-icons/io";

function Onboard({ onSuccess }) {

    const [templateList, setTemplateList] = useState([]);
    const [template_id, setTemplate_id] = useState(null);
    const [manager, setManager] = useState([]);
    const [manager_id, setManager_id] = useState(null);
    const [manager_id_2, setManager_id_2] = useState(null);
    const [work, setWork] = useState([]);
    const [work_id, setWork_id] = useState(null);
    const [work_id_2, setWork_id_2] = useState(null);
    const [type, setType] = useState([]);
    const [type_id, setType_id] = useState(null);
    const [type_id_2, setType_id_2] = useState(null);
    const [department, setDepartment] = useState([]);
    const [department_id, setDepartment_id] = useState(null);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [job_title, setJob_title] = useState('');
    const [start_date, setStart_date] = useState('');
    const [sendWelcomeEmail, setSendWelcomeEmail] = useState(false);
    const [assignOnboardingBuddy, setAssignOnboardingBuddy] = useState(false);
    const [special_instructions, setSpecial_instructions] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [status, setStatus] = useState('On-track');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/templates`, { headers });
                setTemplateList(Array.isArray(response.data) ? response.data : response.data.data || []);
            } catch (error) {
                console.error("Error fetching templates:", error);
            }
        };

        fetchTemplates();
    }, []);


    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/managers`, { headers });
                setManager(Array.isArray(response.data) ? response.data : response.data.data || []);
            } catch (error) {
                console.error("Error fetching managers:", error);
            }
        };

        fetchManagers();
    }, []);


    useEffect(() => {
        const fetchWork = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/work`, { headers });
                setWork(Array.isArray(response.data) ? response.data : response.data.data || []);
            } catch (error) {
                console.error("Error fetching work locations:", error);
            }
        };

        fetchWork();
    }, []);


    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/type`, { headers });
                setType(Array.isArray(response.data) ? response.data : response.data.data || []);
            } catch (error) {
                console.error("Error fetching employment types:", error);
            }
        };

        fetchTypes();
    }, []);


    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/dept`, { headers });
                setDepartment(Array.isArray(response.data) ? response.data : response.data.data || []);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };

        fetchDepartments();
    }, []);

    const handleAddNewHire = async (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !email || !department_id || !type_id) {
            toast.error('Please fill in all required fields');
            return;
        }

        setLoading(true);
        try {
            const headers = getAuthHeaders();
            const payload = {
                firstname,
                lastname,
                email,
                phone,
                location,
                job_title,
                start_date,
                dept_id: department_id,
                type_id,
                location_id: work_id,
                Template_id: template_id,
                manager_id,
                sendWelcomeEmail,
                assignOnboardingBuddy,
                special_instructions,
                priority,
                status
            };
            console.log('Payload:', payload);

            await axios.post(`${BASE_URL}/onboarding`, payload, { headers });
            toast.success('New hire added successfully!');
            setFirstname('');
            setLastname('');
            setEmail('');
            setPhone('');
            setLocation('');
            setJob_title('');
            setStart_date('');
            setDepartment_id(null);
            setType_id(null);
            setWork_id(null);
            setTemplate_id(null);
            setManager_id(null);
            setSendWelcomeEmail(false);
            setAssignOnboardingBuddy(false);
            setSpecial_instructions('');
            setPriority('Medium');
            setStatus('On-track');
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Error adding new hire:', error);
            toast.error('Error adding new hire. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '2px' }}>
                                <IoMdPerson />
                            </div>

                            <div>
                                <h3>Personal Information</h3>

                            </div>
                        </div>
                        <br />
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>First Name <span style={{ color: 'red' }}>*</span></label>
                                <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                            </div>
                            <div className='per-input'>
                                <label>Last Name <span style={{ color: 'red' }}>*</span></label>
                                <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Email Address <span style={{ color: 'red' }}>*</span></label>
                                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className='per-input'>
                                <label>Phone Number</label>
                                <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9+\-\s()]/g, ''))}></input>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Location <span style={{ color: 'red' }}>*</span></label>
                                <input type='text' value={location} onChange={(e) => setLocation(e.target.value)}></input>
                            </div>
                           
                        </div>

                    </div>

                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '3px' }}>
                                <LuBriefcase />
                            </div>
                            <div>
                                <h3>Employment Details</h3>
                            </div>
                        </div><br />

                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Job Title <span style={{ color: 'red' }}>*</span></label>
                                <input type='text' value={job_title} onChange={(e) => setJob_title(e.target.value)} placeholder='Job title...'></input>
                            </div>
                            <div className='per-input'>
                                <label>Department <span style={{ color: 'red' }}>*</span></label>
                                <select value={department_id} onChange={(e) => setDepartment_id(e.target.value)}>
                                    <option>select department</option>
                                    {department.map((dept) => (
                                        <option key={dept._id} value={dept._id}>
                                            {dept.dept}
                                        </option>
                                    ))}

                                </select>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Manager</label>
                                <select value={manager_id} onChange={(e) => setManager_id(e.target.value)}>
                                    <option>Select manager </option>
                                    {manager.map((mgr) => (
                                        <option key={mgr._id} value={mgr._id}>
                                            {mgr.manager_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Start Date <span style={{ color: 'red' }}>*</span></label>
                                <input type='date' value={start_date} onChange={(e) => setStart_date(e.target.value)}></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select value={type_id || ''} onChange={(e) => setType_id(e.target.value)}>
                                    <option value=''>Select Type</option>
                                    {type.map((typ) => (
                                        <option key={typ._id} value={typ._id}>
                                            {typ.type}
                                        </option>
                                    ))}

                                </select>
                            </div>

                            <div className='per-input'>
                                <label>Work Location</label>
                                <select value={work_id} onChange={(e) => setWork_id(e.target.value)}>
                                    <option>Select Work Location</option>
                                    {work.map((w) => (
                                        <option key={w._id} value={w._id}>
                                            {w.work_Schedules}
                                        </option>
                                    ))}
                                </select>
                            </div>


                        </div>

                    </div>
                    <br />


                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '2px' }}>
                                <MdOutlineAppSettingsAlt />
                            </div>
                            <div>
                                <h3>Onboarding Settings</h3>
                            </div>
                        </div><br />

                        <div className='person-input-fields'>

                            <div className='per-in-put'>
                                <label>Onboarding Template </label><br />
                                <select
                                    value={template_id || ""}
                                    onChange={(e) => setTemplate_id(e.target.value)}
                                >
                                    <option value="">Select template</option>

                                    {templateList.map((template) => (
                                        <option key={template._id} value={template._id}>
                                            {template.template}
                                        </option>
                                    ))}
                                </select>

                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Manager</label>
                                <select value={manager_id_2 || ''} onChange={(e) => setManager_id_2(e.target.value)}>
                                    <option value=''>Select manager</option>
                                    {manager.map((mgr) => (
                                        <option key={mgr._id} value={mgr._id}>
                                            {mgr.manager_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Start Date <span style={{ color: 'red' }}>*</span></label>
                                <input type='date' placeholder='DD/MM/YYYY'></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select value={type_id_2 || ''} onChange={(e) => setType_id_2(e.target.value)}>
                                    <option value=''>Select Type</option>
                                    {type.map((typ) => (
                                        <option key={typ._id} value={typ._id}>
                                            {typ.type}
                                        </option>
                                    ))}

                                </select>
                            </div>

                            <div className='per-input'>
                                <label>Work Location</label>
                                <select value={work_id_2} onChange={(e) => setWork_id_2(e.target.value)}>
                                    <option>Select Work Location</option>
                                    {work.map((w) => (
                                        <option key={w._id} value={w._id}>
                                            {w.work_Schedules}
                                        </option>
                                    ))}
                                </select>
                            </div>




                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Priority</label>
                                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Status</label>
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value='On-track'>On-track</option>
                                    <option value='In progress'>In progress</option>
                                    <option value='Complete'>Complete</option>
                                </select>
                            </div>
                        </div>
                        <div className='job-checked'>
                            <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '4px' }}>
                                <div className='buddy-icon' style={{ marginTop: '3px' }}>
                                    <input type='checkbox' checked={sendWelcomeEmail} onChange={(e) => setSendWelcomeEmail(e.target.checked)}></input>
                                </div>
                                <div>
                                    <h4>Send welcome email automatically</h4>
                                </div>
                            </div>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div style={{ marginTop: '1px' }}>
                                    <input type='checkbox' checked={assignOnboardingBuddy} onChange={(e) => setAssignOnboardingBuddy(e.target.checked)}></input>
                                </div>
                                <div>
                                    <h4>Asign onboarding buddy</h4>
                                </div>
                            </div>
                        </div><br />
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Special Instructions</label><br />
                            <textarea value={special_instructions} onChange={(e) => setSpecial_instructions(e.target.value)} placeholder='Any special onboarding requirements or notes...'></textarea>
                        </div>

                    </div>
                    <br />


                </div><br />
                <div className='d-line'></div><br />
                <div className='jay-jay' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <button className='job-previous' type='button'>Cancel</button>
                    </div>
                    <div>
                        <button className='job-next' type='button' onClick={handleAddNewHire} disabled={loading}>
                            {loading ? 'Adding...' : 'Add New Hire'}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Onboard
