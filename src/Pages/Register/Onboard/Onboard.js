import React from 'react'
import { LuBriefcase } from "react-icons/lu";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

function Onboard() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Personal Information</h3>

                            </div>
                        </div>
                        <br />
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>First Name *</label>
                                <input type='text'></input>
                            </div>
                            <div className='per-input'>
                                <label>Last Name *</label>
                                <input type='text'></input>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Email Address *</label>
                                <input type='text'></input>
                            </div>
                            <div className='per-input'>
                                <label>Phone Number</label>
                                <input type='text'></input>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px' }}>
                                <LuBriefcase />
                            </div>
                            <div>
                                <h3>Employment Details</h3>
                            </div>
                        </div><br />

                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Job Title *</label>
                                <input type='text' placeholder='DD/MM/YYYY'></input>
                            </div>
                            <div className='per-input'>
                                <label>Department *</label>
                                <select>
                                    <option>Department *</option>
                                    <option>Engineering</option>
                                    <option>Sales </option>

                                </select>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Manager</label>
                                <select>
                                    <option>Select manager </option>
                                    <option>John Doe</option>
                                    <option>Jane Smith </option>

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Start Date *</label>
                                <input type='text' placeholder='DD/MM/YYYY'></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select>
                                    <option>Select Type </option>
                                    <option>Full-time</option>
                                    <option>Part-time </option>
                                    <option>Contract</option>
                                    <option>Intern </option>

                                </select>
                            </div>

                            <div className='per-input'>
                                <label>Work Location</label>
                                <select>
                                    <option>Select Location </option>
                                    <option>Office</option>
                                    <option>Remote </option>
                                    <option>Hybrid </option>

                                </select>
                            </div>



                        </div>

                    </div>
                    <br />


                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px' }}>
                                <MdOutlineAppSettingsAlt />
                            </div>
                            <div>
                                <h3>Onboarding Settings</h3>
                            </div>
                        </div><br />

                        <div className='person-input-fields'>

                            <div className='per-in-put'>
                                <label>Onboarding Template </label><br />
                                <select>
                                    <option>Select template</option>
                                    <option>Standard Onboarding</option>
                                    <option>Engineering Onboarding </option>
                                    <option>Sales Onboarding </option>
                                    <option>Management Onboarding </option>
                                    <option>Remote Employee Onboarding </option>

                                </select>
                            </div>

                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Manager</label>
                                <select>
                                    <option>Select manager </option>
                                    <option>John Doe</option>
                                    <option>Jane Smith </option>

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Start Date *</label>
                                <input type='text' placeholder='DD/MM/YYYY'></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Employment Type</label>
                                <select>
                                    <option>Select Type </option>
                                    <option>Full-time</option>
                                    <option>Part-time </option>
                                    <option>Contract</option>
                                    <option>Intern </option>

                                </select>
                            </div>

                            <div className='per-input'>
                                <label>Work Location</label>
                                <select>
                                    <option>Select Location </option>
                                    <option>Office</option>
                                    <option>Remote </option>
                                    <option>Hybrid </option>

                                </select>
                            </div>





                        </div>
                        <div className='job-checked'>
                            <div className='checked_' style={{ display: 'flex', gap: '5px', marginBottom: '4px' }}>
                                <div className='buddy-icon' style={{ marginTop: '3px' }}>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>Send welcome email automatically</h4>
                                </div>
                            </div>
                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div style={{ marginTop: '1px' }}>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>
                                        Asign onboarding buddy</h4>
                                </div>
                            </div>
                        </div><br />
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Special Instructions</label><br />
                            <textarea placeholder='Any special onboarding requirements or notes...'></textarea>
                        </div>

                    </div>
                    <br />


                </div><br />
                <div className='d-line'></div><br />
                <div className='jay-jay' style={{ display: 'flex',justifyContent:'space-between' }}>
                    <div>
                        <button className='job-previous'>Cancel</button>
                    </div>
                    <div>
                        <button className='job-next'>Add New Hire</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Onboard