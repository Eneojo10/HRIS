import React from 'react'
import { RxCopy } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";

function Bulk() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className='bulk--button' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <div>
                                <h4>Bulk Scheduling</h4>
                                <p>Create multiple shifts at once</p>
                            </div>
                            <button className='shi-ft-btn'>Add Shift</button>
                        </div>
                        <br />
                        <div className='perosnal' style={{ borderLeft: '4px solid #3b82f6' }}>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <div className='bulk-delete' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Shift 1</p>
                                    </div>
                                    <div className='bulks----icons' style={{ display: 'flex',gap:'10px' }}>
                                        <div className='bulkone-icon'>
                                            <RxCopy />
                                        </div>
                                        <div className='bulkone-icon'>
                                            <AiOutlineDelete />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className='person-input-fields' style={{ width: '55%' }}>

                                    <div className='per-input'>
                                        <label>Start Time</label>
                                        <select>
                                            <option>Select employee</option>
                                        </select>
                                    </div>
                                    <div className='per-input'>
                                        <label>Date</label>
                                        <input placeholder='mm/dd/yyyy'></input>
                                    </div>


                                </div>
                                <div className='bulk-grid'>
                                    <div className='bulk-input'>
                                        <label>Start Time</label>
                                        <input placeholder='mm/dd/yyyy'></input>
                                    </div>
                                    <div className='bulk-input'>
                                        <label>End Time</label>
                                        <input placeholder='mm/dd/yyyy'></input>
                                    </div>
                                    <div className='bulk-input'>
                                        <label>Position</label>
                                        <select>
                                            <option>Select</option>
                                            <option>Team Lead</option>
                                        </select>
                                    </div>
                                    <div className='bulk-input'>
                                        <label>Location</label>
                                        <select>
                                            <option>Select</option>
                                            <option>Sales Floor</option>
                                        </select>
                                    </div>

                                </div>
                                <br />



                            </div>


                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className='t-shifts' style={{ textAlign: 'center' }}>
                            <h4>Total Shifts: 1</h4>
                            <p>Total Hours: 0.0</p>
                        </div>
                        <br/>
                        <br/>

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

export default Bulk