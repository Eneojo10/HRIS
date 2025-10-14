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
                            <label>Employee *</label>
                            <select>
                                <option>Select employee...</option>
                                <option>John Doe- Software</option>

                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Review Date *</label>
                            <input placeholder=''></input>
                        </div>
                        
                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Reviewer *</label>
                            <select>
                                <option>Select reviewer...</option>
                                <option>John Doe- Software</option>
                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Due Date</label>
                            <input placeholder=''></input>
                        </div>


                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Review Type *</label>
                            <select>
                                <option>Select review type</option>
                                <option>Annual Review</option>
                                <option>Quarterly Review</option>
                                <option>Probabtion Review </option>
                                <option>Promotion Review</option>
                                <option>360-degree Review</option>
                                

                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Review Template</label>
                            <select>
                                <option>Select Level (Optional)</option>
                                <option>Standard Performance Review</option>
                                <option>Technical Role Review </option>
                                <option>Leadership Review</option>
                                <option>Sales Performance Review </option>
                                

                            </select>
                        </div>



                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Review Period *</label>
                            <select>
                                <option>Select period</option>
                                <option>Q1 2024</option>
                                <option>Q2 2024</option>
                                <option>Q3 2024</option>
                                <option>Q4 2024</option>
                                <option>Annual 2024</option>

                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Priority</label>
                            <select>
                                <option>Select priority</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                                

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