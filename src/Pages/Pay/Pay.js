import React from 'react'

function Pay() {
    return (
        <div>
            <div className='scrollable'>
                <div className='personal-details'>
                    <div className='proc-ess-payroll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='no1' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <h2>1</h2>
                            </div>
                            <div>
                                <h4>Setup</h4>
                                <p>Configure payroll<br /> parameters</p>
                            </div>
                        </div>
                        <div className='no1' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <h2>2</h2>
                            </div>
                            <div>
                                <h4>Review</h4>
                                <p>Review employee data and<br /> calculations</p>
                            </div>
                        </div>
                        <div className='no1' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <h2>3</h2>
                            </div>
                            <div>
                                <h4>Process</h4>
                                <p>Execute payroll <br />processing</p>
                            </div>
                        </div>
                        <div className='no1' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <h2>4</h2>
                            </div>
                            <div>
                                <h4>Complete</h4>
                                <p>Finalize and<br /> distribute</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Pay Period</label>
                            <select>
                                <option>Select pay period</option>
                                <option>Jan 1 -jan 15 2024</option>
                                <option>Jan 1 -jan 15 2024</option>
                                <option>Jan 1 -jan 15 2024</option>

                            </select>
                        </div>
                        <div className='per-input'>
                            <label>Pay Date</label>
                            <input placeholder='mm/dd/yyyy'></input>
                        </div>


                    </div>
                    <div className='pay-select'>
                        <label>Department Filter</label>
                        <select>
                            <option>Select department</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                            <option>Engineering</option>
                        </select>

                    </div>
                    <div>
                        <p>Include Additional Payments</p>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <h4>Overtime Pay</h4>
                            </div>
                        </div>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <h4>Bonuses</h4>
                            </div>
                        </div>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <h4>Commissions</h4>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <button className='job-previous'>Previous</button>
                        </div>

                        <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                            <div>
                                <button className='job-previous'>Cancel</button>
                            </div>
                            <div>
                                <button className='job-next'>Next

                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Pay