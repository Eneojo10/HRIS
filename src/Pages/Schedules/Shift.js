import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';

function Shift({ data = {}, onNext, onClose }) {
    const [formData, setFormData] = useState({
        employee_id: data.employee_id || "",
        date: data.date || "",
        start_time: data.start_time || "",
        end_time: data.end_time || "",
        position: data.position || "",
        location: data.location || "",
        notes: data.notes || ""
    });

    const [employees, setEmployees] = useState([]);
    const [positions, setPositions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.employee_id || !formData.date || !formData.start_time || !formData.end_time) {
            toast.error("Please fill all required fields");
            return;
        }
        
        if (typeof onNext === 'function') {
            onNext(formData);
        }
    };



    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/employees`, { headers });
                setEmployees(response.data);
            }catch (error) {
                console.error("Error fetching employees:", error);
            }
        };


        fetchEmployees();
    },[]);


    useEffect(() => {
        const fetchPositions = async () => {
            try{
                const response = await axios.get(`${BASE_URL}/positions`);
                setPositions(response.data);
            }catch (error) {
                console.error("Error fetching positions:", error);
            }
        };

        fetchPositions();
    },[]);


    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <h3>Create Single Shift</h3>
                        <p>Schedule a single shift for an employee</p>
                        <br />

                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employee *</label>
                                <select name='employee_id' value={formData.employee_id} onChange={handleChange}>
                                    <option value=''>Select Employee</option>
                                    {employees.map(employee => (
                                        <option key={employee._id} value={employee._id}>
                                            {employee.firstname} {employee.lastname}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Date *</label>
                                <input name='date' value={formData.date} onChange={handleChange} type='date' />
                            </div>


                        </div>
                        <div className='person-input-fields' style={{ width: '65%' }}>

                            <div className='per-input'>
                                <label>Start Time *</label>
                                <input name='start_time' value={formData.start_time} onChange={handleChange} type='time' />
                            </div>
                            <div className='per-input'>
                                <label>End Time *</label>
                                <input name='end_time' value={formData.end_time} onChange={handleChange} type='time' />
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Position</label>
                                <select name='position' value={formData.position} onChange={handleChange}>
                                    <option value=''>Select Position</option>
                                    {positions.map(position => (
                                        <option key={position._id} value={position._id}>
                                            {position.position_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Location</label>
                                <select name='location' value={formData.location} onChange={handleChange}>
                                    <option value=''>Select Location</option>
                                    <option value='main_office'>Main Office</option>
                                    <option value='branch_office'>Branch Office</option>
                                    <option value='remote'>Remote</option>
                                    <option value='client_site'>Client Site</option>
                                </select>
                            </div>
                            {/* <div className='per-input'>
                                <label>Date</label>
                                <input placeholder='e.g. FCT Abuja, Nigeria'></input>
                            </div> */}


                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Notes</label><br />
                            <textarea name='notes' value={formData.notes} onChange={handleChange} placeholder='Add any special instruction or notes...' />
                        </div>

                    </div>

                </div>
                <br/>
                <div className='jay-jay' style={{ gap: '10px', display: 'flex',justifyContent:'flex-end' }}>
                    <div>
                        <button type='button' className='job-previous' onClick={onClose}>Cancel</button>
                    </div>
                    <div>
                        <button type='button' className='job-next' onClick={handleNext}>Next</button>
                    </div>
                </div>
                <ToastContainer position="top-right" autoClose={3000} />

            </div>

        </div>
    )
}

export default Shift