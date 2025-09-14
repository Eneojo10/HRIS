import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";

function Compensation() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-naira" style={{ fontSize: '21px',marginTop:'5px' }}>
                                <TbCurrencyNaira />
                            </div>
                            <div>
                                <h3>Compensation & Benefits</h3>
                            </div>
                        </div>
                        <br />
                        
                        <div className='person-input-fields'>
                            <div className='per-input'style={{width:'65%'}}>
                                <label>Annual Salary</label>
                                <input type='text' placeholder='0'></input>
                            </div>
                            <div className='per-input'style={{width:'35%'}}>
                                <label>Currency</label>
                                <select>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                    <option>CAD</option>
                                    <option>AUD</option>
                                    <option>NGN</option>
                                </select>
                            </div>


                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Pay Frequency</label>
                                <select>
                                    <option>Select frequency</option>
                                    <option>Weekly</option>
                                    <option>Bi-weekly</option>
                                    <option>Semi-monthly</option>
                                    <option>Monthly</option>
                                </select>
                            </div>
                            <div className="per-input">
                                <label>Benefits Package</label>
                                <select>
                                    <option>Select package</option>
                                    <option>Standard</option>
                                    <option>Premium</option>
                                    <option>Executive</option>
                                    <option>None</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className='employee-option-btn'>
                            <button className='cancel-btn'>Cancel</button>
                            <button className='cancel-btnn'>Add Employee</button>
                        </div>

                    </div>
                    <br />

                </div>

            </div>
        </div>
    )
}

export default Compensation