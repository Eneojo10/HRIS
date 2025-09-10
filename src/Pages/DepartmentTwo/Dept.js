import React from 'react'

function Dept() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Basic Information</h3>
                                <p>Define the core details of the department</p>

                            </div>
                        </div>
                        <br />
                        <div className='dept_input-field'>
                            <div className='inputfield-dept-one'>
                                <label>Department Name</label>
                                <input type='text' placeholder='e.g., Customer Success'></input>
                            </div>
                            <div className='inputfield-dept-one'>
                                <label>Department Code</label>
                                <input type='text' placeholder='e.g., CS'></input>
                            </div>

                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Description</label><br />
                            <textarea placeholder='Describe the department purpose and responsibilities...'></textarea>
                        </div>
                        <div className='dept_input-field'>
                            <div className='per-input'>
                                <label>Department Manager</label>
                                <select>
                                    <option>Mike Davis - VP Operations</option>


                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Parent Department</label>
                                <select>
                                    <option>Select parent (optional)</option>
                                    <option>Entry Level</option>
                                    <option>Mid-Level </option>
                                    <option>Senior-Level </option>
                                    <option>Lead/Principal </option>
                                    <option>Executive </option>

                                </select>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Operational Details</h3>
                                <p>Configure location, budget, and capacity</p>

                            </div>
                        </div>
                        <br />
                        <div className='dept_input-field'>
                            <div className='per-input'>
                                <label>Primary Location</label>
                                <select>
                                    <option>Select location</option>
                                    <option>Garki II</option>
                                    <option>Wuye</option>


                                </select>
                            </div>
                            <div className='inputfield-dept-one'>
                                <label>Cost Center</label>
                                <input type='text' placeholder='e.g., CC-001'></input>
                            </div>


                        </div>
                        <div className='dept_input-field'>
                            <div className='inputfield-dept-one'>
                                <label>Annual Budget (N)</label>
                                <input type='text' placeholder='e.g., 500000'></input>
                            </div>
                            <div className='inputfield-dept-one'>
                                <label>Target Headcount</label>
                                <input type='text' placeholder='e.g., 15'></input>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className='det_obj' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <div>
                                <h3>Department Objectives</h3>
                                <p>Set goals and targets for the department</p>
                            </div>
                            {/* <button>Add Objectives</button> */}
                        </div>
                        <div className='perosnal' style={{ borderLeft: '4px solid #3b82f6' }}>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <p>Objective 1</p><br />
                                <div className='person-input-fields'>
                                    <div className='per--input'>
                                        <label>Title </label>
                                        <input type='text' placeholder='e.g. Improve customer satisfaction'></input>
                                    </div>
                                </div>

                                <div className='s-textarea' style={{ marginBottom: '15px' }}>
                                    <label>Description</label><br />
                                    <textarea placeholder='Describe the objective in detail...'></textarea>
                                </div>
                                <div className='dept_input-field'>
                                    <div className='inputfield-dept-one'>
                                        <label>Target/KPI</label>
                                        <input type='text' placeholder='e.g., 95% satisfaction score'></input>
                                    </div>
                                    <div className='inputfield-dept-one'>
                                        <label>Target Date</label>
                                        <input type='text' placeholder='e.g., 15'></input>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='perosnal'>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <div>
                                    <h3>Summary</h3>
                                    <p>Review department configuration</p><br />

                                    <div className='depman' style={{ width: '75%', justifyContent: 'space-between', display: 'flex' }}>
                                        <div>
                                            <h4>Department</h4>
                                            <p>Not specified (No code)</p>
                                            <h4>Location</h4>
                                            <p>Not specified</p>
                                        </div>
                                        <div>
                                            <h4>Manager</h4>
                                            <p>Mike Davis</p>
                                            <h4>Objectives</h4>
                                            <p>

                                                0 defined</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <br />
                        <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'flex-end' }}>

                            <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                                <div>
                                    <button className='job-previous'>Cancel</button>
                                </div>
                                <div>
                                    <button className='job-next'>Create Department 
                                        
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dept