import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';



function Time({ data = {}, onNext, onClose }) {
  const [formData, setFormData] = useState({
    employee_id: data.employee_id || "",
    date: data.date || "",
    start_time: data.start_time || "",
    end_time: data.end_time || "",
    project_id: data.project_id || "",
    task: data.task || "",
    description: data.description || "",
    billable: data.billable || false
  });

  useEffect(() => {
    setFormData({
      employee_id: data.employee_id || "",
      date: data.date || "",
      start_time: data.start_time || "",
      end_time: data.end_time || "",
      project_id: data.project_id || "",
      task: data.task || "",
      description: data.description || "",
      billable: data.billable || false
    });
  }, [data]);

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);


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
  },[]);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const headers = getAuthHeaders();
        const response = await axios.get(`${BASE_URL}/tasks`, { headers });
        setTasks(response.data);
      }catch(error) {
        console.error("Error fetching tasks:", error);
      }
    };


    fetchTasks();
  },[]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!formData.employee_id || !formData.date || !formData.start_time || !formData.end_time || !formData.project_id) {
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
            <h3>Add Time Entry</h3>
            <p>Manually enter your time for a specific task</p>
            <br />

            <div className='person-input-fields'>
              <div className='per-input'>
                <label>Employee <span style={{color: 'red'}}>*</span></label>
                <select name='employee_id' value={formData.employee_id} onChange={handleChange}>
                  <option value=''>Select employee</option>
                  {employees.map(emp => {
                    const fullName = `${emp.firstname || ''} ${emp.lastname || ''}`.trim();
                    return (
                      <option key={emp._id} value={emp._id}>
                        {fullName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            

            <div className='time-inputs' style={{ display: 'flex', gap: '15px' }}>
              <div className='time_inputs-one'>
                <label>Date <span style={{color: 'red'}}>*</span></label><br />
                <input name='date' value={formData.date} onChange={handleChange} type='date' />
              </div>
              <div className='time_inputs-one'>
                <label>Start Time <span style={{color: 'red'}}>*</span></label><br />
                <input name='start_time' value={formData.start_time} onChange={handleChange} type='time' />
              </div>
              <div className='time_inputs-one'>
                <label>End Time <span style={{color: 'red'}}>*</span></label><br />
                <input name='end_time' value={formData.end_time} onChange={handleChange} type='time' />
              </div>
            </div>
            <br />

            <div className='person-input-fields'>
              <div className='per-input'>
                <label>Project <span style={{color: 'red'}}>*</span></label>
                <select name='project_id' value={formData.project_id} onChange={handleChange}>
                  <option value=''>Select project</option>
                  {projects.map(project => (
                    <option key={project._id} value={project._id}>
                      {project.project_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='per-input'>
                <label>Task</label>
                <select name='task' value={formData.task} onChange={handleChange}>
                  <option value=''>Select task type</option>
                  {tasks.map(task => (
                    <option key={task._id} value={task._id}>
                      {task.task_name}
                    </option>
                  ))}
                </select>
              </div>



            </div>

            <div className='s-textarea' style={{ marginBottom: '10px' }}>
              <label>Description</label><br />
              <textarea name='description' value={formData.description} onChange={handleChange} placeholder='Described what you worked on...' />
            </div>

            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
              <div>
                <input type='checkbox' name='billable' checked={formData.billable} onChange={handleChange} />
              </div>
              <div>
                <h4>Billable time</h4>
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

export default Time
