import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';

function Timer({ data = {}, onNext, onClose, globalTimer, setGlobalTimer, formatTime }) {
    const [formData, setFormData] = useState({
        current_task: data.current_task || "",
        project_id: data.project_id || "",
        task_type: data.task_type || "",
        status: data.status || "Active"
    });

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setFormData(prev => ({
                ...prev,
                current_task: data.current_task || prev.current_task,
                project_id: data.project_id || prev.project_id,
                task_type: data.task_type || prev.task_type,
                status: data.status || prev.status
            }));
        }
    }, [data]);

    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);

    const handleStart = () => {
        setGlobalTimer(prev => ({ ...prev, isRunning: true, task: formData.current_task }));
    };

    const handleStop = () => {
        setGlobalTimer(prev => ({ ...prev, isRunning: false }));
    };



    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/projects`, { headers });
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/tasks`, { headers });
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };


        fetchTasks();
    }, []);
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
                            <h1>{formatTime(globalTimer.time)}</h1>
                            <div className='real-buttons' style={{ display: 'flex', width: '22%', margin: 'auto', gap: '15px', marginTop: '15px' }}>
                                <div>
                                    <button className='real-btns' onClick={handleStart} disabled={globalTimer.isRunning}>Start</button>
                                </div>
                                <div>
                                    <button className='real--btns' onClick={handleStop} disabled={!globalTimer.isRunning}>Stop</button>
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className='d-line'></div>

                        <div className='timer-inputfield'>
                            <label>Current Task *</label>
                            <input name='current_task' value={formData.current_task} onChange={handleChange} placeholder='What are you working on?' />
                        </div>

                        <div className="person-input-fields" style={{ marginTop: '20px' }}>
                            <div className='per-input'>
                                <label>Project *</label>
                                <select name='project_id' value={formData.project_id} onChange={handleChange}>
                                    <option value=''>Select project</option>
                                    {projects.map(project => (
                                        <option key={project._id} value={project._id}>
                                            {project.project_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="per-input">
                                <label>Task Type</label>
                                <select name='task_type' value={formData.task_type} onChange={handleChange}>
                                    <option value=''>Select task type</option>
                                    {tasks.map(task => (
                                        <option key={task._id} value={task._id}>
                                            {task.task_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="person-input-fields" style={{ marginTop: '20px' }}>
                            <div className='per-input'>
                                <label>Status</label>
                                <select name='status' value={formData.status} onChange={handleChange}>
                                    <option value='Active'>Active</option>
                                    <option value='approved'>Approved</option>
                                    <option value='Excellent'>Excellent</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <br />

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