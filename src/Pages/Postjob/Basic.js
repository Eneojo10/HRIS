import React, { useState, useEffect } from 'react'
import { LuBriefcase } from "react-icons/lu";
import axios from 'axios';
import { BASE_URL } from '../Utils/globals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Basic({ data = {}, onNext, onClose }) {
    const [currency, setCurrency] = useState([]);
    const [department, setDepartment] = useState([]);
    const [employmentType, setEmploymentType] = useState([]);
    const [experienceLevel, setExperienceLevel] = useState([]);

    const [formData, setFormData] = useState({
        job_title: data.job_title || "",
        dept_id: data.dept_id || "",
        type_id: data.type_id || "",
        location: data.location || "",
        experience_id: data.experience_id || "",
        min_salary: data.min_salary || "",
        max_salary: data.max_salary || "",
        currency_id: data.currency_id || "",
        remote_work: data.remote_work || false,
        urgent_hiring: data.urgent_hiring || false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.job_title || !formData.dept_id || !formData.type_id) {
            toast.error("Please fill all required fields");
            return;
        }
        if (typeof onNext === 'function') {
            onNext(formData);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [deptRes, typeRes, currRes, expRes] = await Promise.all([
                    axios.get(`${BASE_URL}/dept`),
                    axios.get(`${BASE_URL}/type`),
                    axios.get(`${BASE_URL}/currency`),
                    axios.get(`${BASE_URL}/experiences`)
                ]);
                setDepartment(deptRes.data?.data || deptRes.data || []);
                setEmploymentType(typeRes.data?.data || typeRes.data || []);
                setCurrency(currRes.data?.data || currRes.data || []);
                setExperienceLevel(expRes.data?.data || expRes.data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '5px' }}>
                                <LuBriefcase />
                            </div>
                            <div>
                                <h3>Basic Information</h3>

                            </div>
                        </div>
                        <br />

                        <div className='person-input-fields'>
                            <div className='per--input'>
                                <label>Job Title *</label>
                                <input
                                    type='text'
                                    name='job_title'
                                    value={formData.job_title}
                                    onChange={handleChange}
                                    placeholder='e.g. Senior Software Engineer'
                                />
                            </div>
                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Department *</label>
                                <select name='dept_id' value={formData.dept_id} onChange={handleChange}>
                                    <option value=''>Select department</option>
                                    {department.map((dept) => (
                                        <option key={dept._id} value={dept._id}>{dept.dept}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select name='type_id' value={formData.type_id} onChange={handleChange}>
                                    <option value=''>Select Type</option>
                                    {employmentType.map((empType) => (
                                        <option key={empType._id} value={empType._id}>{empType.type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Location</label>
                                <input
                                    name='location'
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder='e.g. FCT Abuja, Nigeria'
                                />
                            </div>
                            <div className='per-input'>
                                <label>Experience Level</label>
                                <select name='experience_id' value={formData.experience_id} onChange={handleChange}>
                                    <option value=''>Select Level</option>
                                    {experienceLevel.map((expLevel) => (
                                        <option key={expLevel._id} value={expLevel._id}>{expLevel.experience_level}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='pjobflex'>
                            <div className='city-one'>
                                <label>Min Salary</label>
                                <input
                                    name='min_salary'
                                    value={formData.min_salary}
                                    onChange={handleChange}
                                    placeholder='₦'
                                />
                            </div>
                            <div className='city-one'>
                                <label>Max Salary</label>
                                <input
                                    name='max_salary'
                                    value={formData.max_salary}
                                    onChange={handleChange}
                                    placeholder='₦'
                                />
                            </div>
                            <div className='city-one'>
                                <label>Currency</label>
                                <select name='currency_id' value={formData.currency_id} onChange={handleChange}>
                                    <option value=''>Select Currency</option>
                                    {currency.map((curr) => (
                                        <option key={curr._id} value={curr._id}>{curr.currency}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='job-checked' style={{ display: 'flex', gap: '20px' }}>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <input
                                    type='checkbox'
                                    name='remote_work'
                                    checked={formData.remote_work}
                                    onChange={handleChange}
                                />
                                <h4>Remote work available</h4>
                            </div>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <input
                                    type='checkbox'
                                    name='urgent_hiring'
                                    checked={formData.urgent_hiring}
                                    onChange={handleChange}
                                />
                                <h4>Urgent hiring</h4>
                            </div>
                        </div>
                        <br />
                        <div className='d-line'></div><br />
                        <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button type='button' className='job-cancel' onClick={onClose}>Cancel</button>
                            <button type='button' className='job-next' onClick={handleSubmit}>Next</button>
                        </div>
                        <br />
                    </div>

                </div>
                <br />
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default Basic