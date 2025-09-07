import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import image from '../Images/user2.jpg'
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";


function Equipment() {
    return (
        <div>
            <div className='tsk-form'>
                <div className='tsk-form-one'>
                    <div className='f-orm'>
                        <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Complete I-9 Form</h3>
                                <p>Verify employment eligibility documentation with HR</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div><br />
                        <div className='ff-tsk' style={{ marginBottom: '25px' }}>
                            <div className='dee-one'>
                                <p>Documentation</p>
                            </div>
                            <div className='dee-two'>
                                <p>high priority</p>
                            </div>
                            <div className='dee-three'>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className='tsk-tsk'>
                            <div className='tsk-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Alex Thompson</h4>
                                <p>Engineering</p>
                            </div>
                        </div>
                        <br />
                        <div className='tsk-date-time'>
                            <div className='date-tsk'>
                                <div>
                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Due: 1/30/2024</p>
                                </div>
                            </div>
                            <div className='date-tsk'>
                                <div>
                                    <IoMdTime />
                                </div>
                                <div>
                                    <p>Est: time: 15 min</p>
                                </div>
                            </div>
                            <div className='date-tsk'>
                                <div>
                                    <LuBuilding2 />
                                </div>
                                <div>
                                    <p>Stage: pre boarding</p>
                                </div>
                            </div>

                        </div>
                        <div className='tsk_bg'>
                            <div className='verify' style={{ padding: '15px' }}>
                                <p>Requires valid ID and work authorization documents</p>
                            </div>

                        </div>
                        <div className='tsk-list-butons'>
                            <div>
                                <button className='tsk-complete'>Complete</button>
                            </div>
                            <div>
                                <button className='tsk-complete'>Edit</button>
                            </div>
                            <div>
                                <button className='tsk-complete'>Details</button>
                            </div>
                        </div>
                        <br />
                    </div>
                    <br /><br />

                </div>
                <div className='tsk-form-one'>
                    <div className='f-orm'>
                        <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Complete I-9 Form</h3>
                                <p>Verify employment eligibility documentation with HR</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div><br />
                        <div className='ff-tsk' style={{ marginBottom: '25px' }}>
                            <div className='dee-one'>
                                <p>Documentation</p>
                            </div>
                            <div className='dee-two'>
                                <p>high priority</p>
                            </div>
                            <div className='dee-three'>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className='tsk-tsk'>
                            <div className='tsk-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Alex Thompson</h4>
                                <p>Engineering</p>
                            </div>
                        </div>
                        <br />
                        <div className='tsk-date-time'>
                            <div className='date-tsk'>
                                <div>
                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Due: 1/30/2024</p>
                                </div>
                            </div>
                            <div className='date-tsk'>
                                <div>
                                    <IoMdTime />
                                </div>
                                <div>
                                    <p>Est: time: 15 min</p>
                                </div>
                            </div>
                            <div className='date-tsk'>
                                <div>
                                    <LuBuilding2 />
                                </div>
                                <div>
                                    <p>Stage: pre boarding</p>
                                </div>
                            </div>

                        </div>
                        <div className='tsk_bg'>
                            <div className='verify' style={{ padding: '15px' }}>
                                <p>Requires valid ID and work authorization documents</p>
                            </div>

                        </div>
                        <div className='tsk-list-butons'>
                            <div>
                                <button className='tsk-complete'>Complete</button>
                            </div>
                            <div>
                                <button className='tsk-complete'>Edit</button>
                            </div>
                            <div>
                                <button className='tsk-complete'>Details</button>
                            </div>
                        </div>
                        <br />
                    </div>
                    <br /><br />

                </div>




            </div>
        </div>
    )
}

export default Equipment