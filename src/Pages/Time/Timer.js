import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Timer({ data = {}, onNext, onClose }) {
    const [formData, setFormData] = useState({
        current_task: data.current_task || "",
        project_id: data.project_id || "",
        task_type: data.task_type || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.current_task || !formData.project_id) {
            toast.error("Please fill all required fields");
            return;
        }
        
        if (typeof onNext === 'function') {
            onNext(formData);
        }
    };
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <h3>Live Timer</h3>
                        <p>Track time in real-time as you work</p>
                        <br />

                        <div className='real-time'>
                            <h1>00:00:00</h1>
                            <div className='real-buttons' style={{ display: 'flex', width: '22%', margin: 'auto', gap: '15px', marginTop: '15px' }}>
                                <div>
                                    <button className='real-btns'>Start</button>
                                </div>
                                <div>
                                    <button className='real--btns'>Stop</button>
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className='d-line'></div>

                        <div className='timer-inputfield'>
                            <label>Current Task *</label>
                            <input name='current_task' value={formData.current_task} onChange={handleChange} placeholder='What are you working on?' />
                        </div>

                        <div className="person-input-fields" style={{marginTop:'20px'}}>
                            <div className="per-input">
                                <label>Project *</label>
                                <select name='project_id' value={formData.project_id} onChange={handleChange}>
                                    <option value=''>Select project</option>
                                    <option value='1'>Website Redesign - ACME</option>
                                </select>
                            </div>
                            <div className="per-input">
                                <label>Task Type</label>
                                <select name='task_type' value={formData.task_type} onChange={handleChange}>
                                    <option value=''>Select task type</option>
                                    <option value='design'>Design</option>
                                    <option value='testing'>Testing</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <br/>

                </div>
                <br />
                <br />
                <div className='jay-jay' style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <div>
                        <button type='button' className='job-previous' onClick={onClose}>Cancel</button>
                    </div>
                    <div>
                        <button type='button' className='job-next' onClick={handleNext}>Next</button>
                    </div>
                </div>
                <br />
                <ToastContainer position="top-right" autoClose={3000} />

            </div>
        </div>
    )
}

export default Timer