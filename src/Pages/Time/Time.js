import React from 'react'

function Time() {
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
                <label>Date</label><br />
                <input></input>
              </div>
              <div className='time_inputs-one'>
                <label>Start Time</label><br />
                <input></input>
              </div>
              <div className='time_inputs-one'>
                <label>End Time</label><br />
                <input></input>
              </div>
            </div>
            <br />

            <div className='person-input-fields'>
              <div className='per-input'>
                <label>Project</label>
                <select>
                  <option>Select project</option>
                  <option>Website Redesign - Acme Corp</option>
                 

                </select>
              </div>
              <div className='per-input'>
                <label>Task</label>
                <select>
                  <option>Select task type</option>
                  <option>Developing</option>
                  <option>Design</option>
                  <option>Testing</option>

                </select>
              </div>



            </div>

            <div className='s-textarea' style={{ marginBottom: '10px' }}>
              <label>Description</label><br />
              <textarea placeholder='Described what you worked on...'></textarea>
            </div>

            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
              <div>
                <input type='checkbox'></input>
              </div>
              <div>
                <h4>
                  Billable time</h4>
              </div>
            </div>

          </div>
          <br />

        </div>

        <br />
        <br />

        <div className='jay-jay' style={{ display: 'flex', justifyContent: 'flex-end',gap:'10px' }}>
          <div>
            <button className='job-previous'>Cancel</button>
          </div>
          <div>
            <button className='job-next'>Save Time Entry</button>
          </div>
        </div>
        <br/>

      </div>

    </div>
  )
}

export default Time