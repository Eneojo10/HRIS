import React from 'react'
import { IoPerson } from "react-icons/io5";
import { BiExport } from 'react-icons/bi';
import image from '../../Images/user2.jpg'

function Personal() {
    return (
        <div>
            <div className='perosnal'>
                <div className='personal-details scrollable'>
                    <div className='per-sonal-flex'>
                        <div className='pee-icon'>
                            <IoPerson />
                        </div>
                        <div>
                            <h3>Personal Information</h3>
                        </div>
                    </div>
                    <br />
                    <div className='personimage-holder'>
                        <div className='upload-img'>
                            <img src={image} alt='' />

                        </div>
                        <div className='image-border'>
                            <div className='imgae-holder'>
                                <div>
                                    <BiExport />
                                </div>
                                <div>
                                    <h4>Upload Photo</h4>
                                    {/* <p>JPG, PNG up to 5MB</p> */}
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>First Name*</label>
                            <input type='text'></input>
                        </div>
                        <div className='per-input'>
                            <label>Last Name*</label>
                            <input type='text'></input>
                        </div>

                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Email Address*</label>
                            <input type='text'></input>
                        </div>
                        <div className='per-input'>
                            <label>Phone Number*</label>
                            <input type='text'></input>
                        </div>

                    </div>
                    <div className='person-input-fields'>
                        <div className='per-input'>
                            <label>Date of Birth*</label>
                            <input type='text'></input>
                        </div>
                        <div className='per-input'>
                            <label>Gender*</label>
                            <select>
                                <option>Select gender</option>
                                <option>Male</option>
                                <option>Female </option>

                            </select>
                        </div>

                    </div>
                    <div className='person-input-fields'>
                        <div className='per--input'>
                            <label>Address*</label>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className='postal-code'>
                        <div className='city-one'>
                            <label>City</label>
                            <input></input>
                        </div>
                        <div className='city-one'>
                            <label>State</label>
                            <input></input>
                        </div>
                        <div className='city-one'>
                            <label>ZIP Code</label>
                            <input></input>
                        </div>
                        <div className='city-one'>
                            <label>Country</label>
                            <select>
                                <option>Select country</option>
                                <option>Nigeria</option>
                                <option>Ethopia</option>
                                <option>UK</option>
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
    )
}

export default Personal