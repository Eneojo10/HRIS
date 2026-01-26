import React, { useState, useEffect } from 'react'
import { IoMdTime } from "react-icons/io";
import axios from 'axios';
import { BASE_URL } from '../Utils/globals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Jobsettings({ data = {}, onBack, onClose }) {
    const [hiringManager, setHiringManager] = useState([]);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        manager_id: data.manager_id || "",
        positions_available: data.positions_available || 1,
        application_deadline: data.application_deadline || "",
        publish_immediately: data.publish_immediately || false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.manager_id || !formData.application_deadline) {
            toast.error("Please fill all required fields");
            return;
        }

        setLoading(true);
        try {
            const completeData = { ...data, ...formData };
            const response = await axios.post(`${BASE_URL}/job`, completeData, {
                headers: { "Content-Type": "application/json" },
            });
            
            toast.success("Job posted successfully!");
            setTimeout(() => {
                onClose();
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error("Error posting job. Please try again.");
        } finally {
            setLoading(false);
        }
    };
   

    useEffect(() => {
        axios.get(`${BASE_URL}/managers`)
            .then(res => setHiringManager(res.data?.data || res.data || []))
            .catch(() => setHiringManager([]));

        
    }, []);

    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '5px' }}>
                                <IoMdTime />
                            </div>
                            <div>
                                <h3>Job Settings</h3>

                            </div>
                        </div>
                        <br />
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Hiring Manager</label>
                                <select name='manager_id' value={formData.manager_id} onChange={handleChange}>
                                    <option value=''>Select hiring manager</option>
                                    {hiringManager.map((manager) => (
                                        <option key={manager._id} value={manager._id}>{manager.manager_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Positions Available</label>
                                <input 
                                    type='number' 
                                    name='positions_available'
                                    value={formData.positions_available}
                                    onChange={handleChange}
                                    placeholder='1'
                                    min='1'
                                />
                            </div>
                        </div>
                        <div className='person-input-fields'>
                            <div className='per--input'>
                                <label>Application Deadline</label>
                                <input 
                                    type='date' 
                                    name='application_deadline'
                                    value={formData.application_deadline}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                        </div>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <input 
                                type='checkbox'
                                name='publish_immediately'
                                checked={formData.publish_immediately}
                                onChange={handleChange}
                            />
                            <h4>Publish job immediately</h4>
                        </div>
                        <br/>

                    </div>

                </div><br />
                <div className='d-line'></div><br />
                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className='job-cancel' onClick={onClose}>Cancel</button>
                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <button className='job-previous' onClick={onBack}>Previous</button>
                        <button 
                            className='job-next' 
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Posting...' : 'Post Job'}
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default Jobsettings