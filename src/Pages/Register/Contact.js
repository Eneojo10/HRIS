import React from 'react'
import { FiPhone } from "react-icons/fi";

function Contact() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px' }}>
                                <FiPhone />
                            </div>
                            <div>
                                <h3>Emergency Contact</h3>
                            </div>
                        </div>
                        <br />
                        <div className='person-input-fields'>
                            <div className='per--input'>
                                <label>Contact Name</label>
                                <input type='text'placeholder='Full name'></input>
                            </div>
                        </div>
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Phone number</label>
                                <input type='text' placeholder='Phone number'></input>
                            </div>
                            <div className='per-input'>
                                <label>Relationship</label>
                                <select>
                                    <option>Select relationship</option>
                                    <option>Spouse</option>
                                    <option>Parent </option>
                                    <option>Sibling </option>
                                    <option>Child </option>
                                    <option>Friend </option>
                                    <option>Other </option>

                                </select>
                            </div>
                            

                        </div>
                        <div className='employee-option-btn'>
                            <button className='cancel-btn'>Cancel</button>
                            <button className='cancel-btnn'>Add Employee</button>
                        </div>

                    </div>
                    <br/>

                </div>

            </div>
        </div>
    )
}

export default Contact