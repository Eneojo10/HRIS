import React, { useState, useEffect } from 'react'
import { LuBriefcase } from "react-icons/lu";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BASE_URL, getAuthHeaders } from '../Utils/globals';
import axios from 'axios';

function Onboard() {

    const [templateList, setTemplateList] = useState([]);
    const [template_id, setTemplate_id] = useState(null);
    const [manager, setManager] = useState([]);
    const [manager_id, setManager_id] = useState(null);
    const [work, setWork] = useState([]);
    const [work_id, setWork_id] = useState(null);
    const [type, setType] = useState([]);
    const [type_id, setType_id] = useState(null);
    const [department, setDepartment] = useState([]);
    const [department_id, setDepartment_id] = useState(null);


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


    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Personal Information</h3>

                            </div>
                        </div>
                        <br />
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>First Name *</label>
                                <input type='text'></input>
                            </div>
                            <div className='per-input'>
                                <label>Last Name *</label>
                                <input type='text'></input>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Email Address *</label>
                                <input type='text'></input>
                            </div>
                            <div className='per-input'>
                                <label>Phone Number</label>
                                <input type='text'></input>
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
                                <label>Job Title *</label>
                                <input type='text' placeholder='Job title...'></input>
                            </div>
                            <div className='per-input'>
                                <label>Department *</label>
                                <select value={department_id} onChange={(e) => setDepartment_id(e.target.value)}>
                                    <option>Department *</option>
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
                                <label>Start Date *</label>
                                <input type='text' placeholder='DD/MM/YYYY'></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select value={type_id} onChange={(e) => setType_id(e.target.value)}>
                                    <option>Select Type </option>
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
                                <label>Start Date *</label>
                                <input type='text' placeholder='DD/MM/YYYY'></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select value={type_id} onChange={(e) => setType_id(e.target.value)}>
                                    <option>Select Type </option>
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
                        <div className='job-checked'>
                            <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '4px' }}>
                                <div className='buddy-icon' style={{ marginTop: '3px' }}>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>Send welcome email automatically</h4>
                                </div>
                            </div>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div style={{ marginTop: '1px' }}>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>
                                        Asign onboarding buddy</h4>
                                </div>
                            </div>
                        </div><br />
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Special Instructions</label><br />
                            <textarea placeholder='Any special onboarding requirements or notes...'></textarea>
                        </div>

                    </div>
                    <br />


                </div><br />
                <div className='d-line'></div><br />
                <div className='jay-jay' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <button className='job-previous'>Cancel</button>
                    </div>
                    <div>
                        <button className='job-next'>Add New Hire</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Onboard