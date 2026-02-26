import React, { useState, useEffect } from 'react'
import { LuBriefcase } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';
import axios from 'axios';

function PerformOne({ data = {}, onNext, onClose }) {
    const [formData, setFormData] = useState({
        employee_id: data.employee_id || "",
        review_date: data.review_date || "",
        reviewer_id: data.reviewer_id || "",
        due_date: data.due_date || "",
        review_type: data.review_type || "",
        review_template_: data.review_template_ || "",
        review_period: data.review_period || "",
        priority: data.priority || "",
        position: data.position || "",
        description: data.description || ""
    });
    const [employee, setEmployee] = useState([]);
    const [reviewer, setReviewer] = useState([]);
    const [reviewType, setReviewType] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [period, setPeriod] = useState([]);
    const [priority, setPriority] = useState([]);
    const [positions, setPositions] = useState([]);



    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/employees`, { headers });
                setEmployee(response.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };

        fetchEmployee();
    }, []);


    useEffect(() => {
        const fetchReviewer = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/reviewer`, { headers });
                setReviewer(response.data);
            } catch (error) {
                console.error("Error fetching reviewers:", error);
            }
        };

        fetchReviewer();
    }, []);

    useEffect(() => {
        const fetchReviewType = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/reviewtype`, { headers });
                setReviewType(response.data);
            } catch (error) {
                console.error("Error fetching review types:", error);
            }
        };

        fetchReviewType();
    }, []);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/review-templates`, { headers });
                setTemplates(response.data);
            } catch (error) {
                console.error("Error fetching templates:", error);
            }
        };

        fetchTemplates();
    }, []);

    useEffect(() => {
        const fetchPeriod = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/periods`, { headers });
                setPeriod(response.data);
            } catch (error) {
                console.error("Error fetching periods:", error);
            }
        };

        fetchPeriod();
    }, []);

    useEffect(() => {
        const fetchPriority = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/prioritylevels`, { headers });
                setPriority(response.data);
            } catch (error) {
                console.error("Error fetching priorities:", error);
            }
        };

        fetchPriority();
    }, []);

    useEffect(() => {
        const fetchPositions = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/positions`, { headers });
                console.log('Positions fetched:', response.data);
                setPositions(response.data);
            } catch (error) {
                console.error("Error fetching positions:", error);
            }
        };

        fetchPositions();
    }, []);

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
                            <label>Employee</label>
                            <select
                                name="employee_id"
                                value={formData.employee_id}
                                onChange={handleChange}
                            >
                                <option value="">Select employee...</option>

                                {employee.map(emp => {
                                    const fullName = `${emp.firstname || ''} ${emp.lastname || ''}`.trim();
                                    return (
                                        <option key={emp._id} value={emp._id}>
                                            {fullName}
                                        </option>
                                    );
                                })}
                            </select>


                        </div>
                        <div className='per-input'>
                            <label>Review Date</label>
                            <input name='review_date' type='date' value={formData.review_date} onChange={handleChange} placeholder='' />
                        </div>

                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Reviewer</label>
                            <select name='reviewer_id' value={formData.reviewer_id} onChange={handleChange}>
                                <option value=''>Select reviewer...</option>
                                {reviewer.map(rev => {
                                    return (
                                        <option key={rev._id} value={rev._id}>
                                            {rev.reviewer_name}
                                        </option>
                                    );
                                })}


                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Due Date</label>
                            <input name='due_date' type='date' value={formData.due_date} onChange={handleChange} />
                        </div>


                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Review Type</label>
                            <select name='review_type' value={formData.review_type} onChange={handleChange}>
                                <option value=''>Select review type</option>
                                {reviewType.map(rt => {
                                    return (
                                        <option key={rt._id} value={rt._id}>
                                            {rt.review_type}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Review Template</label>
                            <select name='review_template_' value={formData.review_template_} onChange={handleChange}>
                                <option value=''>Select Level (Optional)</option>
                                {templates.map(template => (
                                    <option key={template._id} value={template._id}>
                                        {template.template_name}
                                    </option>
                                ))}
                            </select>
                        </div>



                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Review Period</label>
                            <select name='review_period' value={formData.review_period} onChange={handleChange}>
                                <option value=''>Select period</option>
                                {period.map(rp => {
                                    return (
                                        <option key={rp._id} value={rp._id}>
                                            {rp.period_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Position</label>
                            <select name='position' value={formData.position} onChange={handleChange}>
                                <option value=''>Select position</option>
                                {positions.length > 0 ? positions.map(pos => (
                                    <option key={pos._id} value={pos._id}>
                                        {pos.position_name}
                                    </option>
                                )) : (
                                    <>
                                        <option value='developer'>Developer</option>
                                        <option value='manager'>Manager</option>
                                        <option value='analyst'>Analyst</option>
                                    </>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Priority</label>
                            <select name='priority' value={formData.priority} onChange={handleChange}>
                                <option value=''>Select priority</option>
                                {priority.map(pri => (
                                    <option key={pri._id} value={pri._id}>
                                        {pri.priority_level}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Description</label>
                            <div className='description-textarea'>
                                <textarea name='description' value={formData.description} onChange={handleChange} placeholder='Enter review description and objectives...' />
                            </div>
                        </div>
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