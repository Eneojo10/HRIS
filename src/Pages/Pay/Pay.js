import React from 'react'


function Pay({ onNext, onBack }) {
    return (
        <div>
            <div className='scrollable'>
                <div className='personal-details'>
                   
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
                            <button className='job-previous' onClick={onBack}>Previous</button>
                        </div>

                        <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                            <div>
                                <button className='job-previous'>Cancel</button>
                            </div>
                            <div>
                                <button className='job-next' onClick={onNext}>Next

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