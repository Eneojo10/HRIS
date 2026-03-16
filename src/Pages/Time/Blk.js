import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL, getAuthHeaders } from '../Utils/globals';

function Blk({ data = {}, onClose }) {

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [bulkData, setBulkData] = useState({
    monday: { hours: '', project_id: '', task_id: '' },
    tuesday: { hours: '', project_id: '', task_id: '' },
    wednesday: { hours: '', project_id: '', task_id: '' },
    thursday: { hours: '', project_id: '', task_id: '' },
    friday: { hours: '', project_id: '', task_id: '' }
  });

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

  const handleDayChange = (day, field, value) => {
    setBulkData(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  const calculateTotal = () => {
    return Object.values(bulkData).reduce((sum, day) => sum + (parseFloat(day.hours) || 0), 0).toFixed(2);
  };

  const handleSubmit = async () => {
    console.log('Submit button clicked');
    console.log('Form data:', data);
    console.log('Bulk data:', bulkData);
    
    try {
      const headers = getAuthHeaders();
      const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
      const dates = ['2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19'];

      let employeeId = data.employee_id;
      
      if (!employeeId) {
        const userStr = localStorage.getItem('user');
        if (userStr) {
          const user = JSON.parse(userStr);
          employeeId = user._id || user.employee_id || user.id;
        }
      }
      
      console.log('Using employee_id:', employeeId);
      
      if (!employeeId) {
        toast.error('Employee ID not found. Please log in again.');
        return;
      }

      let successCount = 0;
      let errorCount = 0;

      for (let index = 0; index < days.length; index++) {
        const day = days[index];
        if (bulkData[day].hours && bulkData[day].project_id) {
          const entry = {
            employee_id: employeeId,
            date: dates[index],
            hours: parseFloat(bulkData[day].hours),
            project_id: bulkData[day].project_id,
            task_id: bulkData[day].task_id || null,
            status: data.status || 'pending',
            type_id: data.type_id || '',
            current_task: data.current_task || '',
            description: data.description || '',
            billable: data.billable || false
          };
          
          if (data.clock_in) entry.clock_in = data.clock_in;
          if (data.clock_out) entry.clock_out = data.clock_out;
          if (data.total_hours) entry.total_hours = data.total_hours;

          try {
            console.log('Submitting entry:', entry);
            const response = await axios.post(`${BASE_URL}/tracking`, entry, { headers });
            console.log('Success response:', response.data);
            successCount++;
          } catch (error) {
            console.error(`Error submitting ${day}:`, error.response?.data || error.message);
            errorCount++;
          }
        }
      }

      if (successCount > 0) {
        console.log(`Success: ${successCount} entries submitted`);
        toast.success(`${successCount} time entries submitted successfully`);
        setTimeout(() => {
          if (typeof onClose === 'function') {
            onClose();
          }
        }, 1500);
      }
      if (errorCount > 0) {
        console.log(`Error: ${errorCount} entries failed`);
        toast.error(`${errorCount} entries failed to submit`);
      }
      if (successCount === 0 && errorCount === 0) {
        console.log('No entries to submit');
        toast.warning('Please enter at least one day with hours and project');
      }
    } catch (error) {
      console.error('Error submitting time entries:', error);
      toast.error(error.response?.data?.error || 'Failed to submit time entries');
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
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
                      <input placeholder='0.00' value={bulkData.monday.hours} onChange={(e) => handleDayChange('monday', 'hours', e.target.value)} />
                    </div>
                    <div className='b-input'>
                      <p>Project</p>
                      <select value={bulkData.monday.project_id} onChange={(e) => handleDayChange('monday', 'project_id', e.target.value)}>
                        <option value=''>Select</option>
                        {projects.map(project => (
                          <option key={project._id} value={project._id}>
                            {project.project_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='b-input'>
                      <p>Task</p>
                      <select value={bulkData.monday.task_id} onChange={(e) => handleDayChange('monday', 'task_id', e.target.value)}>
                        <option value=''>Select</option>
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
                    <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-16</span>
                  </div>
                  <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                    <div className='b-input'>
                      <p>Hours</p>
                      <input placeholder='0.00' value={bulkData.tuesday.hours} onChange={(e) => handleDayChange('tuesday', 'hours', e.target.value)} />
                    </div>
                    <div className='b-input'>
                      <p>Project</p>
                      <select value={bulkData.tuesday.project_id} onChange={(e) => handleDayChange('tuesday', 'project_id', e.target.value)}>
                        <option value=''>Select</option>
                        {projects.map(project => (
                          <option key={project._id} value={project._id}>
                            {project.project_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='b-input'>
                      <p>Task</p>
                      <select value={bulkData.tuesday.task_id} onChange={(e) => handleDayChange('tuesday', 'task_id', e.target.value)}>
                        <option value=''>Select</option>
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
                    <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-17</span>
                  </div>
                  <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                    <div className='b-input'>
                      <p>Hours</p>
                      <input placeholder='0.00' value={bulkData.wednesday.hours} onChange={(e) => handleDayChange('wednesday', 'hours', e.target.value)} />
                    </div>
                    <div className='b-input'>
                      <p>Project</p>
                      <select value={bulkData.wednesday.project_id} onChange={(e) => handleDayChange('wednesday', 'project_id', e.target.value)}>
                        <option value=''>Select</option>
                        {projects.map(project => (
                          <option key={project._id} value={project._id}>
                            {project.project_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='b-input'>
                      <p>Task</p>
                      <select value={bulkData.wednesday.task_id} onChange={(e) => handleDayChange('wednesday', 'task_id', e.target.value)}>
                        <option value=''>Select</option>
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
                    <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-18</span>
                  </div>
                  <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                    <div className='b-input'>
                      <p>Hours</p>
                      <input placeholder='0.00' value={bulkData.thursday.hours} onChange={(e) => handleDayChange('thursday', 'hours', e.target.value)} />
                    </div>
                    <div className='b-input'>
                      <p>Project</p>
                      <select value={bulkData.thursday.project_id} onChange={(e) => handleDayChange('thursday', 'project_id', e.target.value)}>
                        <option value=''>Select</option>
                        {projects.map(project => (
                          <option key={project._id} value={project._id}>
                            {project.project_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='b-input'>
                      <p>Task</p>
                      <select value={bulkData.thursday.task_id} onChange={(e) => handleDayChange('thursday', 'task_id', e.target.value)}>
                        <option value=''>Select</option>
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
                    <span className='mon-day' style={{ fontSize: '12px' }}>2024-01-19</span>
                  </div>
                  <div className='blk-two' style={{ display: 'flex', width: '75%' }}>
                    <div className='b-input'>
                      <p>Hours</p>
                      <input placeholder='0.00' value={bulkData.friday.hours} onChange={(e) => handleDayChange('friday', 'hours', e.target.value)} />
                    </div>
                    <div className='b-input'>
                      <p>Project</p>
                      <select value={bulkData.friday.project_id} onChange={(e) => handleDayChange('friday', 'project_id', e.target.value)}>
                        <option value=''>Select</option>
                        {projects.map(project => (
                          <option key={project._id} value={project._id}>
                            {project.project_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='b-input'>
                      <p>Task</p>
                      <select value={bulkData.friday.task_id} onChange={(e) => handleDayChange('friday', 'task_id', e.target.value)}>
                        <option value=''>Select</option>
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
            <br />
            <div className='blk-hours' style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <h3>Total: {calculateTotal()} hours</h3>
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
            <button type='button' className='job-next' onClick={handleSubmit}>Save Time Entry</button>
          </div>
        </div>
        <br />

      </div>
    </div>
  )
}

export default Blk
