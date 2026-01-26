import React, { useState } from 'react'
import { HiMiniPlusSmall } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Details({ data = {}, onNext, onBack, onClose }) {
    const [formData, setFormData] = useState({
        job_description: data.job_description || "",
        key_responsibilities: data.key_responsibilities || "",
        requirements: data.requirements || "",
        benefits: data.benefits || "",
        required_skills: data.required_skills || [],
        current_skill: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddSkill = () => {
        if (formData.current_skill.trim()) {
            setFormData(prev => ({
                ...prev,
                required_skills: [...prev.required_skills, prev.current_skill.trim()],
                current_skill: ""
            }));
        }
    };

    const handleSubmit = () => {
        if (!formData.job_description || !formData.key_responsibilities || !formData.requirements) {
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
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Job Details</h3>

                            </div>
                        </div>
                        <br />
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Job Description</label><br />
                            <textarea 
                                name='job_description'
                                value={formData.job_description}
                                onChange={handleChange}
                                placeholder='Describe the role and what the candidates will be doing...'
                            />
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Key Responsibilities</label><br />
                            <textarea 
                                name='key_responsibilities'
                                value={formData.key_responsibilities}
                                onChange={handleChange}
                                placeholder='List the main responsibilities and duties...'
                            />
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Requirements</label><br />
                            <textarea 
                                name='requirements'
                                value={formData.requirements}
                                onChange={handleChange}
                                placeholder='List the required qualifications...'
                            />
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Benefits & Perks</label><br />
                            <textarea 
                                name='benefits'
                                value={formData.benefits}
                                onChange={handleChange}
                                placeholder='Describe the benefits packages & perks...'
                            />
                        </div>
                        <div className='skills_flex' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div className='per-input' style={{ width: '95%' }}>
                                <label>Required Skill</label>
                                <input 
                                    type='text' 
                                    name='current_skill'
                                    value={formData.current_skill}
                                    onChange={handleChange}
                                    placeholder='Add a required skill...'
                                />
                            </div>
                            <div className='button-job' style={{marginTop:'22px'}}>
                                <button 
                                    type='button'
                                    className='skill-button'
                                    onClick={handleAddSkill}
                                >
                                    <HiMiniPlusSmall />
                                </button>
                            </div>
                        </div>
                        {formData.required_skills.length > 0 && (
                            <div className='skills-list' style={{ marginBottom: '15px' }}>
                                <p>Added Skills:</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                    {formData.required_skills.map((skill, index) => (
                                        <span key={index} style={{ 
                                            background: '#e3f2fd', 
                                            padding: '4px 8px', 
                                            borderRadius: '4px',
                                            fontSize: '12px'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}


                    </div>


                </div><br />
                <div className='d-line'></div><br />

                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className='job-cancel' onClick={onClose}>Cancel</button>
                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <button className='job-previous' onClick={onBack}>Previous</button>
                        <button className='job-next' onClick={handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default Details