import React from 'react'

function Request() {
    return (
        <div>
            <div className='scrollable'>
                <div className='d-right' style={{ display: 'flex', gap: '10px' }}>
                    <div className='person-input-fieldss'>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label>Employee *</label>
                            <select>
                                <option>Select employee</option>
                                <option>David Tunji</option>
                                <option>David Tunji</option>
                                <option>David Tunji</option>


                            </select>
                        </div>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label>Leave Type *</label><br />
                            <select>
                                <option>Select leave type</option>
                                <option>Vacation Leave</option>
                                <option>Sick Leave </option>
                                <option>Personal Leave </option>
                                <option>Maternity Leave </option>
                                <option>Parternity Leave </option>
                                <option>Bereavement Leave </option>
                                <option>Emergency Leave </option>

                            </select>
                        </div>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label>Start Date *</label>
                            <input type='text' placeholder='DD/MM/YYYY'></input>
                        </div>



                    </div>

                    <div className='lrb'>
                        <div className='leave-rightside-border'>
                            <div className='leave-balance'>
                                <h3>Leave Balance</h3><br />

                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Vacation</p>
                                    </div>
                                    <div>
                                        <p>15 days</p>
                                    </div>
                                </div>
                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Sick Leave</p>
                                    </div>
                                    <div>
                                        <p>10 days</p>
                                    </div>
                                </div>
                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Personal</p>
                                    </div>
                                    <div>
                                        <p>5 days</p>
                                    </div>
                                </div>
                                <div className='leave-days' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p>Maternity</p>
                                    </div>
                                    <div>
                                        <p>12 weeks</p>
                                    </div>
                                </div>

                            </div><br />
                            {/* <div className='per-inputt' style={{ marginBottom: '15px' }}>
                        <label>Employee *</label>
                        <select>
                            <option>Select gender</option>
                            <option>Male</option>
                            <option>Female </option>

                        </select>
                    </div>
                    <div className='per-inputt' style={{ marginBottom: '15px' }}>
                        <label>Employee *</label>
                        <select>
                            <option>Select gender</option>
                            <option>Male</option>
                            <option>Female </option>

                        </select>
                    </div> */}

                        </div>
                    </div>
                </div>
                <div className='person-input-fields'>
                    <div className='per-input'>
                        <label>End Date *</label>
                        <input type='text' placeholder='DD/MM/YYYY'></input>
                    </div>
                    <div className='per-input'>
                        <label>Reporting Manager *</label>
                        <select>
                            <option>Select manager</option>
                            <option>David Tunde</option>
                            <option>Elias Martins </option>

                        </select>
                    </div>

                </div>

                <div className='person-input-fie-lds'>
                    <div className='three-flex' style={{ width: '100%', gap: '10px', display: 'flex' }}>
                        <div className='per-inputt'>
                            <label>Duration</label>
                            <input type='text' placeholder='5'></input>
                        </div>
                        <div className='per-inputt' style={{ marginBottom: '15px' }}>
                            <label></label><br />
                            <select>
                                <option>Days</option>
                                <option>Hours</option>

                            </select>
                        </div>
                    </div>
                    <div className='per-inputt' style={{ marginBottom: '15px' }}>
                        <label>Backup Person</label><br />
                        <select>
                            <option>Select backup (optional)</option>
                            <option>Alice Johnson</option>
                            <option>Olawale Adesoji</option>

                        </select>
                    </div>
                </div>
                <div className='per-inputt' style={{ marginBottom: '15px', width: '50%' }}>
                    <label>Priority</label><br />
                    <select>
                        <option>Select priority</option>
                        <option>Urgent</option>
                        <option>Normal</option>
                        <option>Low</option>

                    </select>
                </div>
                <br />
                <div className='leave-reason'>
                    <label>Reason for Leave *</label>
                    <textarea></textarea>
                </div>
                <div className='perosnal'>
                    <div className='support-doc' style={{ padding: '25px' }}>
                        <h3>Supporting Documents</h3><br />
                        <div class="with-dash-border">
                            <div className='med' style={{ textAlign: 'center' }}>
                                <h4>Upload supporting documents (medical certificates, etc.)</h4><br />
                                <input type='file'></input><br />
                                <p>Supported formats: PDF, JPG, PNG (Max 5MB each)</p>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='perosnal' style={{ padding: '25px' }}>
                    <div className='handover'>
                        <h4>Work Handover</h4><br />

                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Handover Notes</label><br />
                            <textarea placeholder='Describe work that need to be handed over, important deadlines, contacts etc.'></textarea>

                            <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <input type='checkbox'></input>
                                </div>
                                <div>
                                    <h4>I confirm that all necessary work handover has been completed</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><br />
                <div className='leave-request-bg'>

                </div>
                <br />
                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'flex-end' }}>

                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <div>
                            <button className='job-previous'>Cancel</button>
                        </div>
                        <div>
                            <button className='job-next'>Submit Leave Request</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Request