import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';

function Recurring() {

    const [employees, setEmployees] = useState([]);
    const [positions, setPositions] = useState([]);
    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState({
        employee_id: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        days: [],
        position: '',
        work_location: '',
        notes: ''
    });

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/employees`, { headers });
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };

        fetchEmployees();
    }, []);

    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/positions`, { headers });
                setPositions(response.data);
            } catch (error) {
                console.error("Error fetching positions:", error);
            }
        };

        fetchPositions();
    }, []);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/location`, { headers });
                setLocations(response.data);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocations();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                days: checked
                    ? [...prev.days, name]
                    : prev.days.filter(day => day !== name)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = () => {
        if (!formData.employee_id) {
            toast.error('Please select an employee');
            return;
        }
        if (!formData.start_date || !formData.end_date) {
            toast.error('Please select start and end dates');
            return;
        }
        if (!formData.start_time || !formData.end_time) {
            toast.error('Please select start and end times');
            return;
        }
        if (formData.days.length === 0) {
            toast.error('Please select at least one day');
            return;
        }
        console.log('Form data:', formData);
        toast.success('Recurring shift created successfully');
    };

    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <h3>Create Recurring Shift</h3>
                        <p>Schedule repeating shifts for an employee</p>
                        <br />
                        <div className='pay-select'>
                            <label>Employee <span style={{color: 'red'}}>*</span></label>
                            <select name='employee_id' value={formData.employee_id} onChange={handleChange}>
                                <option value=''>Select employee</option>
                                {employees.map(employee => (
                                    <option key={employee._id} value={employee._id}>
                                        {employee.firstname} {employee.lastname}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='person-input-fields'>

                            <div className='per-input'>
                                <label>Start Date <span style={{color: 'red'}}>*</span></label>
                                <input type='date' name='start_date' value={formData.start_date} onChange={handleChange}></input>
                            </div>
                            <div className='per-input'>
                                <label>End Date <span style={{color: 'red'}}>*</span></label>
                                <input type='date' name='end_date' value={formData.end_date} onChange={handleChange}></input>
                            </div>


                        </div>
                        <div className='person-input-fields' style={{ width: '55%' }}>

                            <div className='per-input'>
                                <label>Start Time <span style={{color: 'red'}}>*</span></label>
                                <input type='time' name='start_time' value={formData.start_time} onChange={handleChange}></input>
                            </div>
                            <div className='per-input'>
                                <label>End Time <span style={{color: 'red'}}>*</span></label>
                                <input type='time' name='end_time' value={formData.end_time} onChange={handleChange}></input>
                            </div>


                        </div>
                        <div className='days-of-week'>
                            <h4>Days of Week <span style={{color: 'red'}}>*</span></h4>

                            <div className='grid-days'>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox' name='Monday' checked={formData.days.includes('Monday')} onChange={handleChange}></input>
                                    </div>
                                    <p>Monday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox' name='Tuesday' checked={formData.days.includes('Tuesday')} onChange={handleChange}></input>
                                    </div>
                                    <p>Tuesday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox' name='Wednesday' checked={formData.days.includes('Wednesday')} onChange={handleChange}></input>
                                    </div>
                                    <p>Wednesday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox' name='Thursday' checked={formData.days.includes('Thursday')} onChange={handleChange}></input>
                                    </div>
                                    <p>Thursday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox' name='Friday' checked={formData.days.includes('Friday')} onChange={handleChange}></input>
                                    </div>
                                    <p>Friday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox' name='Saturday' checked={formData.days.includes('Saturday')} onChange={handleChange}></input>
                                    </div>
                                    <p>Saturday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox' name='Sunday' checked={formData.days.includes('Sunday')} onChange={handleChange}></input>
                                    </div>
                                    <p>Sunday</p>
                                </div>

                            </div>
                        </div>

                        <div className='person-input-fields' style={{marginTop:'10px'}}>
                            <div className='per-input'>
                                <label>Position</label>
                                <select name='position' value={formData.position} onChange={handleChange}>
                                    <option value=''>Select position</option>
                                    {positions.map(position => (
                                        <option key={position._id} value={position._id}>
                                            {position.position_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Location</label>
                                <select name='work_location' value={formData.work_location} onChange={handleChange}>
                                    <option value=''>Select location</option>
                                    {locations.map(location => (
                                        <option key={location._id} value={location._id}>
                                            {location.location_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            


                        </div>

                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Notes</label><br />
                            <textarea name='notes' value={formData.notes} onChange={handleChange} placeholder='Add any special instruction or notes...'></textarea>
                        </div>

                    </div>

                </div><br/>
                <div className='jay-jay' style={{ gap: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    <div>
                        <button type='button' className='job-previous'>Cancel</button>
                    </div>
                    <div>
                        <button type='button' className='job-next' onClick={handleSubmit}>Next</button>
                    </div>
                </div>
                <br />
                <ToastContainer position="top-right" autoClose={3000} />

            </div>
        </div>
    )
}

export default Recurring
