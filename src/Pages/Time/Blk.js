import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';

function Blk() {


    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);


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




    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <h3>Weekly Time Entry</h3>
                        <p>Enter time for multiple days at once</p>

                        <div className='perosnal'>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <div className='bulk-weeks' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='monday' style={{ marginTop: '20px' }}>
                                        <p>Monday</p>
                                        <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-15</span>
                                    </div>
                                    <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                                        <div className='b-input'>
                                            <p>Hours</p>
                                            <input placeholder='0.00'></input>
                                        </div>
                                        <div className='b-input'>
                                            <p>Project</p>
                                            <select>
                                                <option>Select</option>
                                                {projects.map(project => (
                                                    <option key={project._id} value={project._id}>
                                                        {project.project_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='b-input'>
                                            <p>Task</p>
                                            <select>
                                                <option>Select</option>
                                                {tasks.map(task => (
                                                    <option key={task._id} value={task._id}>
                                                        {task.task_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />

                        </div>
                        <div className='perosnal'>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <div className='bulk-weeks' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='monday' style={{ marginTop: '20px' }}>
                                        <p>Tuesday</p>
                                        <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-15</span>
                                    </div>
                                    <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                                        <div className='b-input'>
                                            <p>Hours</p>
                                            <input placeholder='0.00'></input>
                                        </div>
                                        <div className='b-input'>
                                            <p>Project</p>
                                            <select>
                                                <option>Select</option>
                                                {projects.map(project => (
                                                    <option key={project._id} value={project._id}>
                                                        {project.project_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='b-input'>
                                            <p>Task</p>
                                            <select>
                                                <option>Select</option>
                                                {tasks.map(task => (
                                                    <option key={task._id} value={task._id}>
                                                        {task.task_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />

                        </div>
                        <div className='perosnal'>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <div className='bulk-weeks' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='monday' style={{ marginTop: '20px' }}>
                                        <p>Wednesday</p>
                                        <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-15</span>
                                    </div>
                                    <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                                        <div className='b-input'>
                                            <p>Hours</p>
                                            <input placeholder='0.00'></input>
                                        </div>
                                        <div className='b-input'>
                                            <p>Project</p>
                                            <select>
                                                <option>Select</option>
                                                {projects.map(project => (
                                                    <option key={project._id} value={project._id}>
                                                        {project.project_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='b-input'>
                                            <p>Task</p>
                                            <select>
                                                <option>Select</option>
                                                {tasks.map(task => (
                                                    <option key={task._id} value={task._id}>
                                                        {task.task_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />

                        </div>
                        <div className='perosnal'>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <div className='bulk-weeks' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='monday' style={{ marginTop: '20px' }}>
                                        <p>Thursday</p>
                                        <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-15</span>
                                    </div>
                                    <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                                        <div className='b-input'>
                                            <p>Hours</p>
                                            <input placeholder='0.00'></input>
                                        </div>
                                        <div className='b-input'>
                                            <p>Project</p>
                                            <select>
                                                <option>Select</option>
                                                {projects.map(project => (
                                                    <option key={project._id} value={project._id}>
                                                        {project.project_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='b-input'>
                                            <p>Task</p>
                                            <select>
                                                <option>Select</option>
                                                {tasks.map(task => (
                                                    <option key={task._id} value={task._id}>
                                                        {task.task_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />

                        </div>
                        <div className='perosnal'>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <div className='bulk-weeks' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='monday' style={{ marginTop: '20px' }}>
                                        <p>Friday</p>
                                        <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-15</span>
                                    </div>
                                    <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                                        <div className='b-input'>
                                            <p>Hours</p>
                                            <input placeholder='0.00'></input>
                                        </div>
                                        <div className='b-input'>
                                            <p>Project</p>
                                            <select>
                                                <option>Select</option>
                                                <option>Website Redesign</option>
                                                <option>Internal Training</option>
                                            </select>
                                        </div>
                                        <div className='b-input'>
                                            <p>Task</p>
                                            <select>
                                                <option>Select</option>
                                                <option>Meeting</option>
                                                <option>Training</option>
                                            </select>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <br />

                        </div>
                        <br />
                        <div className='blk-hours' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <h3>Total: 0.00 hours</h3>
                        </div>

                    </div>
                    <br />



                </div>
                <br />
                <br />

                <div className='jay-jay' style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <div>
                        <button className='job-previous'>Cancel</button>
                    </div>
                    <div>
                        <button className='job-next'>Save Time Entry</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blk