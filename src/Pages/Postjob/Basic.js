import React from 'react'
import { LuBriefcase } from "react-icons/lu";

function Basic() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '5px' }}>
                                <LuBriefcase />
                            </div>
                            <div>
                                <h3>Basic Information</h3>

                            </div>
                        </div>
                        <br />

                        <div className='person-input-fields'>
                            <div className='per--input'>
                                <label>Job Title *</label>
                                <input type='text' placeholder='e.g. Senior Software Engineer'></input>
                            </div>
                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Department *</label>
                                <select>
                                    <option>Select department</option>
                                    <option>Engineering</option>
                                    <option>Human Resources </option>
                                    <option>Sales </option>
                                    <option>Marketing</option>

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select>
                                    <option>Select Type</option>
                                    <option>Full-time</option>
                                    <option>Part-time </option>
                                    <option>Contract </option>
                                    <option>Internship </option>

                                </select>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Location</label>
                                <input placeholder='e.g. FCT Abuja, Nigeria'></input>
                            </div>
                            <div className='per-input'>
                                <label>Experience Level</label>
                                <select>
                                    <option>Select Level</option>
                                    <option>Entry Level</option>
                                    <option>Mid-Level </option>
                                    <option>Senior-Level </option>
                                    <option>Lead/Principal </option>
                                    <option>Executive </option>

                                </select>
                            </div>

                        </div>
                        <div className='pjobflex'>
                            <div className='city-one'>
                                <label>Min Salary</label>
                                <input placeholder='₦
'></input>
                            </div>
                            <div className='city-one'>
                                <label>Max Salary</label>
                                <input placeholder='₦
'></input>
                            </div>
                            <div className='city-one'>
                                <label>Currency</label>
                                <select>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>CAd</option>
                                    <option>NGN</option>
                                </select>
                            </div>

                        </div>
                        <div className='job-checked' style={{ display: 'flex', gap: '20px' }}>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>Remote work available</h4>
                                </div>
                            </div>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>
                                        Urgent hiring</h4>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='d-line'></div><br />
                        <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <button className='job-cancel'>Cancel</button>
                            </div>
                            <div className='jay-jay' style={{ gap: '10px', display:'flex'}}>
                               <div>
                                 <button className='job-previous'>Previous</button>
                               </div>
                                <div>
                                    <button className='job-next'>Next</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <br/>


                </div>

            </div>

        </div>
    )
}

export default Basic