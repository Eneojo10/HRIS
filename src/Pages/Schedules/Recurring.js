import React from 'react'

function Recurring() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <h3>Create Recurring Shift</h3>
                        <p>Schedule repeating shifts for an employee</p>
                        <br />
                        <div className='pay-select'>
                            <label>Employee</label>
                            <select>
                                <option>Select employee</option>
                                <option>John Smith - Sales Associate</option>
                                <option>John Smith - Sales Associate</option>
                                <option>John Smith - Sales Associate</option>

                            </select>

                        </div>
                        <div className='person-input-fields'>

                            <div className='per-input'>
                                <label>Start Date</label>
                                <input placeholder='mm/dd/yyyy'></input>
                            </div>
                            <div className='per-input'>
                                <label>End Date</label>
                                <input placeholder='mm/dd/yyyy'></input>
                            </div>


                        </div>
                        <div className='person-input-fields' style={{ width: '55%' }}>

                            <div className='per-input'>
                                <label>Start Time</label>
                                <input placeholder='mm/dd/yyyy'></input>
                            </div>
                            <div className='per-input'>
                                <label>End Time</label>
                                <input placeholder='mm/dd/yyyy'></input>
                            </div>


                        </div>
                        <div className='days-of-week'>
                            <h4>Days of Week</h4>

                            <div className='grid-days'>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox'></input>
                                    </div>
                                    <p>Monday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox'></input>
                                    </div>
                                    <p>Tuesday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox'></input>
                                    </div>
                                    <p>Wednesday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox'></input>
                                    </div>
                                    <p>Thursday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox'></input>
                                    </div>
                                    <p>Friday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox'></input>
                                    </div>
                                    <p>Saturday</p>
                                </div>
                                <div className='grid_one'>
                                    <div>
                                        <input type='checkbox'></input>
                                    </div>
                                    <p>Sunday</p>
                                </div>

                            </div>
                        </div>

                        <div className='person-input-fields'style={{marginTop:'10px'}}>
                            <div className='per-input'>
                                <label>Position</label>
                                <select>
                                    <option>Select position</option>
                                    <option>Sales Associate</option>
                                    <option>Sales Manager</option>
                                    <option>Cashier</option>

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Location</label>
                                <select>
                                    <option>Select location</option>
                                    <option>Main Store</option>
                                    <option> Warehouse</option>
                                    <option>Customer Service Desk</option>
                                    

                                </select>
                            </div>
                            


                        </div>

                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Notes</label><br />
                            <textarea placeholder='Add any special instruction or notes...'></textarea>
                        </div>

                    </div>

                </div><br/>
                <div className='jay-jay' style={{ gap: '10px', display: 'flex',justifyContent:'flex-end' }}>
                    <div>
                        <button className='job-previous'>Cancel</button>
                    </div>
                    <div>
                        <button className='job-next'>Create Schedule</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recurring