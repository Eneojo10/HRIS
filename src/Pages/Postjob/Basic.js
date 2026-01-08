import React, { useState, useEffect } from 'react'
import { LuBriefcase } from "react-icons/lu";
import axios from 'axios';
import { BASE_URL } from '../Utils/globals';

function Basic() {
    const [currency, setCurrency] = useState([]);
    const [department, setDepartment] = useState([]);
    const [employmentType, setEmploymentType] = useState([]);
    const [experienceLevel, setExperienceLevel] = useState([]);



    useEffect(() => {
        axios.get(`${BASE_URL}/dept`)
            .then(res => setDepartment(res.data?.data || res.data || []))
            .catch(() => setDepartment([]));
            
        axios.get(`${BASE_URL}/type`)
            .then(res => setEmploymentType(res.data?.data || res.data || []))
            .catch(() => setEmploymentType([]));

        
        axios.get(`${BASE_URL}/currency`)
            .then(res => setCurrency(res.data?.data || res.data || []))
            .catch(() => setCurrency([]));

        axios.get(`${BASE_URL}/experiences`)
            .then(res => setExperienceLevel(res.data?.data || res.data || []))
            .catch(() => setExperienceLevel([]));

        

    })
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
                                <input type='text' placeholder='e.g. Senior Software Engineer'></input>
                            </div>
                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Department *</label>
                                <select>
                                    <option>Select department</option>
                                    {department.map((dept) => (
                                        <option key={dept._id} value={dept._id}>{dept.dept}</option>
                                    ))}

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select >
                                    <option>Select Type</option>
                                    {employmentType.map((empType) => (
                                        <option key={empType._id} value={empType._id}>{empType.type}</option>
                                    ))}

                                </select>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Location</label>
                                <input placeholder='e.g. FCT Abuja, Nigeria'></input>
                            </div>
                            <div className='per-input'>
                                <label>Experience Level</label>
                                <select>
                                    <option>Select Level</option>
                                    {experienceLevel.map((expLevel) => (
                                        <option key={expLevel._id} value={expLevel._id}>{expLevel.experience_level}</option>
                                    ))}

                                </select>
                            </div>

                        </div>
                        <div className='pjobflex'>
                            <div className='city-one'>
                                <label>Min Salary</label>
                                <input placeholder='₦
'></input>
                            </div>
                            <div className='city-one'>
                                <label>Max Salary</label>
                                <input placeholder='₦
'></input>
                            </div>
                            <div className='city-one'>
                                <label>Currency</label>
                                <select>
                                    <option>Select Currency</option>
                                    {currency.map((curr) => (
                                        <option key={curr._id} value={curr._id}>{curr.currency}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className='job-checked' style={{ display: 'flex', gap: '20px' }}>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>Remote work available</h4>
                                </div>
                            </div>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>
                                        Urgent hiring</h4>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='d-line'></div><br />
                        <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <button className='job-cancel'>Cancel</button>
                            </div>
                            <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                                <div>
                                    <button className='job-previous'>Previous</button>
                                </div>
                                <div>
                                    <button className='job-next'>Next</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <br />


                </div>

            </div>

        </div>
    )
}

export default Basic