import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Time({ data = {}, onNext, onClose }) {
  const [formData, setFormData] = useState({
    date: data.date || "",
    start_time: data.start_time || "",
    end_time: data.end_time || "",
    project_id: data.project_id || "",
    task_type: data.task_type || "",
    description: data.description || "",
    billable: data.billable || false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.date || !formData.start_time || !formData.end_time || !formData.project_id) {
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

            <div className='time-inputs' style={{ display: 'flex', gap: '15px' }}>
              <div className='time_inputs-one'>
                <label>Date *</label><br />
                <input name='date' value={formData.date} onChange={handleChange} type='date' />
              </div>
              <div className='time_inputs-one'>
                <label>Start Time *</label><br />
                <input name='start_time' value={formData.start_time} onChange={handleChange} type='time' />
              </div>
              <div className='time_inputs-one'>
                <label>End Time *</label><br />
                <input name='end_time' value={formData.end_time} onChange={handleChange} type='time' />
              </div>
            </div>
            <br />

            <div className='person-input-fields'>
              <div className='per-input'>
                <label>Project *</label>
                <select name='project_id' value={formData.project_id} onChange={handleChange}>
                  <option value=''>Select project</option>
                  <option value='1'>Website Redesign - Acme Corp</option>
                </select>
              </div>
              <div className='per-input'>
                <label>Task</label>
                <select name='task_type' value={formData.task_type} onChange={handleChange}>
                  <option value=''>Select task type</option>
                  <option value='developing'>Developing</option>
                  <option value='design'>Design</option>
                  <option value='testing'>Testing</option>
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

        <div className='jay-jay' style={{ display: 'flex', justifyContent: 'flex-end',gap:'10px' }}>
          <div>
            <button type='button' className='job-previous' onClick={onClose}>Cancel</button>
          </div>
          <div>
            <button type='button' className='job-next' onClick={handleNext}>Next</button>
          </div>
        </div>
        <br/>
        <ToastContainer position="top-right" autoClose={3000} />

      </div>

    </div>
  )
}

export default Time