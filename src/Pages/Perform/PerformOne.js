import React from 'react'
import { LuBriefcase } from "react-icons/lu";

function PerformOne() {
    return (
        <div>
            <div className='scrollable'>
                <div className='personal-details'>

                    <br />


                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Reviewer *</label>
                            <select>
                                <option>Select department</option>
                                <option>Engineering</option>
                                <option>Human Resources </option>
                                <option>Sales </option>
                                <option>Marketing</option>

                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Review Date *</label>
                            <input placeholder='e.g. FCT Abuja, Nigeria'></input>
                        </div>
                        {/* <div className='per-input'>
                                <label>Employment Type</label>
                                <select>
                                    <option>Select Type</option>
                                    <option>Full-time</option>
                                    <option>Part-time </option>
                                    <option>Contract </option>
                                    <option>Internship </option>

                                </select>
                            </div> */}

                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Employee *</label>
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
                            <label>Due Date</label>
                            <input placeholder='e.g. FCT Abuja, Nigeria'></input>
                        </div>


                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Review Type *</label>
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
                            <label>Review Template</label>
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
                    <div className='s-textarea' style={{ marginBottom: '10px' }}>
                        <label>Review Description</label><br />
                        <textarea placeholder='Enter review description and objectives...'></textarea>
                    </div>
                    

                   
                    <br />
                    <div className='d-line'></div><br />
                    <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                       
                        <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                            <div>
                                <button className='job-previous'>Cancel</button>
                            </div>
                            <div>
                                <button className='job-next'>Create Performance Review</button>
                            </div>
                        </div>
                    </div>


                </div>
                <br />

            </div>

        </div>
    )
}

export default PerformOne