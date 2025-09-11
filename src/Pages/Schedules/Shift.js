import React from 'react'

function Shift() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <h3>Create Single Shift</h3>
                        <p>Schedule a single shift for an employee</p>
                        <br />

                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employee</label>
                                <select>
                                    <option>Select Level</option>
                                    <option>Entry Level</option>
                                    <option>Mid-Level </option>
                                    <option>Senior-Level </option>
                                    <option>Lead/Principal </option>
                                    <option>Executive </option>

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Date</label>
                                <input placeholder=''></input>
                            </div>


                        </div>
                        <div className='person-input-fields' style={{ width: '65%' }}>

                            <div className='per-input'>
                                <label>Start Time</label>
                                <input placeholder=''></input>
                            </div>
                            <div className='per-input'>
                                <label>End Time</label>
                                <input placeholder=''></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Position</label>
                                <select>
                                    <option>Select Position</option>
                                    <option>Entry Level</option>
                                    <option>Mid-Level </option>
                                    <option>Senior-Level </option>
                                    <option>Lead/Principal </option>
                                    <option>Executive </option>

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Location</label>
                                <select>
                                    <option>Select Location</option>
                                    <option>Entry Level</option>
                                    <option>Mid-Level </option>
                                    <option>Senior-Level </option>
                                    <option>Lead/Principal </option>
                                    <option>Executive </option>

                                </select>
                            </div>
                            {/* <div className='per-input'>
                                <label>Date</label>
                                <input placeholder='e.g. FCT Abuja, Nigeria'></input>
                            </div> */}


                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Notes</label><br />
                            <textarea placeholder='Add any special instruction or notes...'></textarea>
                        </div>

                    </div>

                </div>
                <br/>
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

export default Shift