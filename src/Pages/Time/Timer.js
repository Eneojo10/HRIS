import React from 'react'

function Timer() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <h3>Live Timer</h3>
                        <p>Track time in real-time as you work</p>
                        <br />

                        <div className='real-time'>
                            <h1>00:00:00</h1>
                            <div className='real-buttons' style={{ display: 'flex', width: '22%', margin: 'auto', gap: '15px', marginTop: '15px' }}>
                                <div>
                                    <button className='real-btns'>Start</button>
                                </div>
                                <div>
                                    <button className='real--btns'>Stop</button>
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className='d-line'></div>

                        <div className='timer-inputfield'>
                            <label>Current Task</label>
                            <input placeholder='What are you working on?'></input>

                        </div>

                        <div className="person-input-fields" style={{marginTop:'20px'}}>
                            <div className="per-input">
                                <label>Project</label>
                                <select>
                                    <option>Select project</option>
                                    <option>Website Redesign - ACME</option>

                                </select>
                            </div>
                            <div className="per-input">
                                <label>Task Type</label>
                                <select>
                                    <option>Select task type</option>
                                    <option>Design</option>
                                    <option>Testing</option>


                                </select>
                            </div>
                        </div>

                    </div>
                    <br/>

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
                <br />

            </div>
        </div>
    )
}

export default Timer