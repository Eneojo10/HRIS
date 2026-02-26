import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BASE_URL } from '../Utils/globals';


function Pay({ onNext, onBack }) {

    const [dept, setDept] = useState([]);


    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${BASE_URL}/dept`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setDept(response.data);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };

        fetchDepartments();
    }, []);


    return (
        <div>
            <div className='scrollable'>
                <div className='personal-details'>

                    <br />
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Pay Period</label>
                            <select>
                                <option>Select pay period</option>
                                <option>Jan 1 -jan 15 2024</option>
                                <option>Jan 1 -jan 15 2024</option>
                                <option>Jan 1 -jan 15 2024</option>

                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Pay Date</label>
                            <input type='date' placeholder='mm/dd/yyyy'></input>
                        </div>


                    </div>
                    <div className='pay-select'>
                        <label>Department Filter</label>
                        <select>
                            <option>Select department</option>
                            {dept.map(department => (
                                <option key={department._id} value={department._id}>
                                    {department.dept}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div>
                        <p>Include Additional Payments</p>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <h4>Overtime Pay</h4>
                            </div>
                        </div>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <h4>Bonuses</h4>
                            </div>
                        </div>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <h4>Commissions</h4>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <button className='job-previous' onClick={onBack}>Previous</button>
                        </div>

                        <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                            <div>
                                <button className='job-previous'>Cancel</button>
                            </div>
                            <div>
                                <button className='job-next' onClick={onNext}>Next

                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Pay