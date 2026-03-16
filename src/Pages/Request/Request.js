import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, getAuthHeaders } from '../Utils/globals'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Request() {

    const [backup, setBackup] = useState([])
    const [employees, setEmployees] = useState([])
    const [vacation, setVacation] = useState([])
    const [priorities, setPriorities] = useState([])
    const [managers, setManagers] = useState([])

    const [formData, setFormData] = useState({
        employee_id: '',
        leave_type_id: '',
        start_date: '',
        end_date: '',
        reason: '',
        manager_id: '',
        backup_id: '',
        priority_id: '',
        notes: '',
        confirm: false,
        status: 'Pending',
        approved: false,
        reject: false
    });

    useEffect(() => {
        const fetcBackup = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/backups`, { headers });
                setBackup(response.data);
            } catch (error) {
                console.error("Error fetching backup employees:", error);
            }
        };

        fetcBackup();
    }, []);

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
        const fetchVacation = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/leave-types`, { headers });
                setVacation(Array.isArray(response.data) ? response.data : response.data.data);
            } catch (error) {
                console.error("Error fetching vacation data:", error);
                setVacation([]);
            }
        };

        fetchVacation();
    }, []);

    useEffect(() => {
        const fetchPriorities = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/prioritylevels`, { headers });
                setPriorities(response.data);
            } catch (error) {
                console.error("Error fetching priorities:", error);
            }
        };

        fetchPriorities();
    }, []);

    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/managers`, { headers });
                setManagers(response.data);
            } catch (error) {
                console.error("Error fetching managers:", error);
            }
        };

        fetchManagers();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.employee_id.trim()) {
            toast.error('Please select an employee');
            return;
        }

        if (!formData.leave_type_id.trim()) {
            toast.error('Please select a leave type');
            return;
        }

        if (!formData.start_date.trim()) {
            toast.error('Please select a start date');
            return;
        }

        if (!formData.end_date.trim()) {
            toast.error('Please select an end date');
            return;
        }

        if (new Date(formData.start_date) > new Date(formData.end_date)) {
            toast.error('Start date cannot be after end date');
            return;
        }

        if (!formData.reason.trim()) {
            toast.error('Please provide a reason for leave');
            return;
        }

        if (formData.reason.trim().length < 10) {
            toast.error('Reason must be at least 10 characters long');
            return;
        }

        if (!formData.manager_id.trim()) {
            toast.error('Please select a reporting manager');
            return;
        }

        if (!formData.confirm) {
            toast.error('Please confirm work handover completion');
            return;
        }

        try {
            const headers = getAuthHeaders();
            const response = await axios.post(`${BASE_URL}/leave`, formData, { headers });
            console.log('Leave request submitted:', response.data);
            toast.success('Leave request submitted successfully');
            setFormData({
                employee_id: '',
                leave_type_id: '',
                start_date: '',
                end_date: '',
                reason: '',
                manager_id: '',
                backup_id: '',
                priority_id: '',
                notes: '',
                confirm: false,
                status: 'Pending',
                approved: false,
                reject: false
            });
        } catch (error) {
            console.error('Error submitting leave request:', error);
            toast.error(error.response?.data?.message || 'Failed to submit leave request');
        }
    };

    return (
        <div>
            <div className='scrollable'>
                <div className='d-right' style={{ display: 'flex', gap: '10px' }}>
                    <div className='person-input-fieldss'>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label>Employee <span style={{color: 'red'}}>*</span></label>
                            <select name='employee_id' value={formData.employee_id} onChange={handleChange}>
                                <option value=''>Select employee</option>
                                {employees.map(emp => (
                                    <option key={emp._id} value={emp._id}>
                                        {emp.firstname} {emp.lastname}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label>Leave Type <span style={{color: 'red'}}>*</span></label><br />
                            <select name='leave_type_id' value={formData.leave_type_id} onChange={handleChange}>
                                <option value=''>Select leave type</option>
                                {Array.isArray(vacation) &&
                                    vacation.map((vac) => (
                                        <option key={vac._id} value={vac._id}>
                                            {vac.leave_type}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label>Start Date <span style={{color: 'red'}}>*</span></label>
                            <input type='date' name='start_date' value={formData.start_date} onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className='lrb'>
                        <div className='leave-rightside-border'>
                            <div className='leave-balance'>
                                <h3>Leave Balance</h3><br />

                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Vacation</p>
                                    </div>
                                    <div className='tweleve-weeks'>
                                        <p>15 days</p>
                                    </div>
                                </div>
                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Sick Leave</p>
                                    </div>
                                    <div className='tweleve-weeks'>
                                        <p>10 days</p>
                                    </div>
                                </div>
                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Personal</p>
                                    </div>
                                    <div className='tweleve-weeks'>
                                        <p>5 days</p>
                                    </div>
                                </div>
                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Maternity</p>
                                    </div>
                                    <div className='tweleve-weeks'>
                                        <p>12 weeks</p>
                                    </div>
                                </div>
                            </div><br />
                        </div>
                    </div>
                </div>
                <div className='person-input-fields'>
                    <div className='per-input'>
                        <label>End Date <span style={{color: 'red'}}>*</span></label>
                        <input type='date' name='end_date' value={formData.end_date} onChange={handleChange}></input>
                    </div>
                    <div className='per-input'>
                        <label>Reporting Manager <span style={{color: 'red'}}>*</span></label>
                        <select name='manager_id' value={formData.manager_id} onChange={handleChange}>
                            <option value=''>Select manager</option>
                            {managers.map(manager => (
                                <option key={manager._id} value={manager._id}>
                                    {manager.manager_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='person-input-fie-lds'>
                    <div className='three-flex' style={{ width: '100%', gap: '10px', display: 'flex' }}>
                        <div className='per-inputt'>
                            <label>Backup Person</label><br />
                            <select name='backup_id' value={formData.backup_id} onChange={handleChange}>
                                <option value=''>Select backup (optional)</option>
                                {backup.map(bck => (
                                    <option key={bck._id} value={bck._id}>
                                        {bck.backup_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label>Priority</label><br />
                            <select name='priority_id' value={formData.priority_id} onChange={handleChange}>
                                <option value=''>Select priority</option>
                                {priorities.map(pri => (
                                    <option key={pri._id} value={pri._id}>
                                        {pri.priority_level}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <div className='leave-reason'>
                    <label>Reason for Leave <span style={{color: 'red'}}>*</span></label>
                    <textarea name='reason' value={formData.reason} onChange={handleChange}></textarea>
                </div>
                <div className='perosnal'>
                    <div className='support-doc' style={{ padding: '25px' }}>
                        <h3>Supporting Documents</h3><br />
                        <div className="with-dash-border">
                            <div className='med' style={{ textAlign: 'center' }}>
                                <h4>Upload supporting documents (medical certificates, etc.)</h4><br />
                                <input type='file'></input><br />
                                <p>Supported formats: PDF, JPG, PNG (Max 5MB each)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='perosnal' style={{ padding: '25px' }}>
                    <div className='handover'>
                        <h4>Work Handover</h4><br />

                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Handover Notes</label><br />
                            <textarea name='notes' value={formData.notes} onChange={handleChange} placeholder='Describe work that need to be handed over, important deadlines, contacts etc.'></textarea>

                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <input type='checkbox' name='confirm' checked={formData.confirm} onChange={handleChange}></input>
                                </div>
                                <div>
                                    <h4>I confirm that all necessary work handover has been completed</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />
                <div className='leave-request-bg'>
                </div>
                <br />
                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <div>
                            <button type='button' className='job-previous' onClick={() => window.location.reload()}>Cancel</button>
                        </div>
                        <div>
                            <button type='button' className='job-next' onClick={handleSubmit}>Submit Leave Request</button>
                        </div>
                    </div>
                </div>
                <br />
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    )
}

export default Request
