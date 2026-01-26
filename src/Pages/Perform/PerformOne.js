import React, { useState } from 'react'
import { LuBriefcase } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PerformOne({ data = {}, onNext, onClose }) {
    const [formData, setFormData] = useState({
        employee_id: data.employee_id || "",
        review_date: data.review_date || "",
        reviewer_id: data.reviewer_id || "",
        due_date: data.due_date || "",
        review_type: data.review_type || "",
        review_template: data.review_template || "",
        review_period: data.review_period || "",
        priority: data.priority || "",
        description: data.description || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.employee_id || !formData.review_date || !formData.reviewer_id || !formData.review_type || !formData.review_period) {
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
                <div className='personal-details'>

                    <br />


                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Employee *</label>
                            <select name='employee_id' value={formData.employee_id} onChange={handleChange}>
                                <option value=''>Select employee...</option>
                                <option value='1'>John Doe- Software</option>
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Review Date *</label>
                            <input name='review_date' value={formData.review_date} onChange={handleChange} placeholder='' />
                        </div>
                        
                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Reviewer *</label>
                            <select name='reviewer_id' value={formData.reviewer_id} onChange={handleChange}>
                                <option value=''>Select reviewer...</option>
                                <option value='1'>John Doe- Software</option>
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Due Date</label>
                            <input placeholder=''></input>
                        </div>


                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Review Type *</label>
                            <select name='review_type' value={formData.review_type} onChange={handleChange}>
                                <option value=''>Select review type</option>
                                <option value='annual'>Annual Review</option>
                                <option value='quarterly'>Quarterly Review</option>
                                <option value='probation'>Probation Review</option>
                                <option value='promotion'>Promotion Review</option>
                                <option value='360'>360-degree Review</option>
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Review Template</label>
                            <select>
                                <option>Select Level (Optional)</option>
                                <option>Standard Performance Review</option>
                                <option>Technical Role Review </option>
                                <option>Leadership Review</option>
                                <option>Sales Performance Review </option>
                                

                            </select>
                        </div>



                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Review Period *</label>
                            <select name='review_period' value={formData.review_period} onChange={handleChange}>
                                <option value=''>Select period</option>
                                <option value='q1-2024'>Q1 2024</option>
                                <option value='q2-2024'>Q2 2024</option>
                                <option value='q3-2024'>Q3 2024</option>
                                <option value='q4-2024'>Q4 2024</option>
                                <option value='annual-2024'>Annual 2024</option>
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Priority</label>
                            <select>
                                <option>Select priority</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                                

                            </select>
                        </div>



                    </div>
                    <div className='s-textarea' style={{ marginBottom: '10px' }}>
                        <label>Review Description</label><br />
                        <textarea placeholder='Enter review description and objectives...'></textarea>
                    </div>
                    

                   
                    <br />
                    <div className='d-line'></div><br />
                    <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                       
                        <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                            <div>
                                <button type='button' className='job-previous' onClick={onClose}>Cancel</button>
                            </div>
                            <div>
                                <button type='button' className='job-next' onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    </div>


                </div>
                <br />

            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default PerformOne