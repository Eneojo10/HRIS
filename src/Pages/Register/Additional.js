import React, { useState } from 'react'
import { FcGraduationCap } from "react-icons/fc";
import { HiMiniPlusSmall } from "react-icons/hi2";
import axios from 'axios';
import { BASE_URL } from '../Utils/globals';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Additional({ data = {}, onClose }) {
    const [formData, setFormData] = useState({
        skill: data.skill || "",
        education: data.education || "",
        certifications: data.certifications || "",
        experience: data.experience || "",
        notes: data.notes || "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Get all accumulated data from parent component
            const completeData = { ...data, ...formData };
            const response = await axios.post(`${BASE_URL}/employee`, completeData, {
                headers: { "Content-Type": "application/json" },
            });
            
            toast.success("Employee created successfully!");
            setTimeout(() => {
                onClose();
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error("Error creating employee. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-naira" style={{ fontSize: '21px', marginTop: '5px' }}>
                                <FcGraduationCap />
                            </div>
                            <div>
                                <h3>Skills & Qualifications</h3>
                            </div>
                        </div>
                        <br />
                        <div className='skills_flex' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div className='per-input' style={{ width: '95%' }}>
                                <label>Skill</label>
                                <input 
                                    type='text' 
                                    name='skill'
                                    value={formData.skill}
                                    onChange={handleChange}
                                    placeholder='Add a skill'
                                />
                            </div>
                            <div className='button-job' style={{marginTop:'22px'}}>
                                <button className='skill-button' type='button'><HiMiniPlusSmall /></button>
                            </div>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Education</label><br />
                            <textarea 
                                name='education'
                                value={formData.education}
                                onChange={handleChange}
                                placeholder='Education background, degrees, institution...'
                            />
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Certifications</label><br />
                            <textarea 
                                name='certifications'
                                value={formData.certifications}
                                onChange={handleChange}
                                placeholder='Professional certifications, licenses...'
                            />
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Previous Experience</label><br />
                            <textarea 
                                name='experience'
                                value={formData.experience}
                                onChange={handleChange}
                                placeholder='Relevant work, experience...'
                            />
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Additional Notes</label><br />
                            <textarea 
                                name='notes'
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder='Any additional information...'
                            />
                        </div>
                    </div>
                </div><br /><br />
                <div className='d-line'></div><br />
                <div className='employee-option-btn'>
                    <button className='cancel-btn' type='button' onClick={onClose}>Cancel</button>
                    <button 
                        className='cancel-btnn' 
                        type='button' 
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Add Employee'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Additional