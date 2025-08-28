import React from 'react'
import image from '../Images/user2.jpg';
import { PiNotePencil } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { BsCameraVideo } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { IoLocation } from 'react-icons/io5';

function All() {
  return (
    <div>
        <div className='int-one'>
                <div className='int-holder' style={{ width: '95%', margin: 'auto', marginTop: '25px' }}>
                    <div className='int-flex-' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <div className='john-flex' style={{ display: 'flex', gap: '12px' }}>
                            <div className='ing-image'>
                                <img src={image} alt='' />

                            </div>
                            <div className='rah'>
                                <div className='ss' style={{ display: "flex", gap: '27px' }}>
                                    <div>
                                        <h4>Emily Rodriguez</h4>
                                    </div>
                                    <div className='duled'>
                                        <p>scheduled</p>
                                    </div>
                                </div>
                                <p>Senior Frontend Developer</p>
                                <div className='caflex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div>
                                                <SlCalender />
                                            </div>
                                            <p>2024-01-25</p>
                                        </div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div>
                                                <BsCameraVideo />
                                            </div>
                                            <p>Zoom Meeting</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div >
                                                <IoMdTime />
                                            </div>
                                            <p>10:00 AM (60 min)</p>
                                        </div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div >
                                                <BsPeople />
                                            </div>
                                            <p>John Smith</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='int--icons' style={{ display: 'flex', width: '25%', justifyContent: 'space-between', gap: '10px' }}>
                            <div className='int_iconbig' style={{ fontSize: '20px' }}>
                                <PiNotePencil />

                            </div>
                            <div className='int_iconbig' style={{ fontSize: '20px' }}>
                                <AiOutlineMail />

                            </div>
                            <div className='int_iconbig' style={{ fontSize: '20px' }}>
                                <RiDeleteBin6Line />

                            </div>
                        </div>

                    </div>
                    <div className='technical'>
                        <div className='te-ch'>
                            <h4>Technical Interview</h4>
                            <p>Focus on React and system design</p>
                        </div>

                    </div><br />

                </div>
            </div>

            <div className='int-one'>
                <div className='int-holder' style={{ width: '95%', margin: 'auto', marginTop: '25px' }}>
                    <div className='int-flex-' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <div className='john-flex' style={{ display: 'flex', gap: '12px' }}>
                            <div className='ing-image'>
                                <img src={image} alt='' />

                            </div>
                            <div className='rah'>
                                <div className='ss' style={{ display: "flex", gap: '27px' }}>
                                    <div>
                                        <h4>Michael Chen</h4>
                                    </div>
                                    <div className='duled'>
                                        <p>scheduled</p>
                                    </div>
                                </div>
                                <p>Product Manager </p>
                                <div className='caflex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div>
                                                <SlCalender />
                                            </div>
                                            <p>2024-01-25</p>
                                        </div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div>
                                                <IoLocation />
                                            </div>
                                            <p>Conference Room A</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div >
                                                <IoMdTime />
                                            </div>
                                            <p>10:00 AM (60 min)</p>
                                        </div>
                                        <div className='si' style={{ display: 'flex', gap: '10px' }}>
                                            <div >
                                                <BsPeople />
                                            </div>
                                            <p>John Smith</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='int--icons' style={{ display: 'flex', width: '25%', justifyContent: 'space-between', gap: '10px' }}>
                            <div className='int_iconbig' style={{ fontSize: '20px' }}>
                                <PiNotePencil />

                            </div>
                            <div className='int_iconbig' style={{ fontSize: '20px' }}>
                                <AiOutlineMail />

                            </div>
                            <div className='int_iconbig' style={{ fontSize: '20px' }}>
                                <RiDeleteBin6Line />

                            </div>
                        </div>

                    </div>
                    <div className='technical'>
                        <div className='te-ch'>
                            <h4>Technical Interview</h4>
                            <p>Focus on React and system design</p>
                        </div>

                    </div><br />

                </div>
            </div>
    </div>
  )
}

export default All