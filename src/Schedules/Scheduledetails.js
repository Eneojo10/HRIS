import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

function Scheduledetails() {
    return (
        <div>
            <div className='schedule-table-border'>
                <div className='schedule-cal'>
                    <div>
                        <h2>Schedule Calender</h2>
                    </div>
                    <div className='schedule_months'>
                        <div>
                            <span>Time</span>
                        </div>
                        <div className='schedule-list-tag'>
                            <ul>
                                <li></li>
                                <li>06:00</li>
                                <br /><br />
                                <li>09:00</li>
                                <br /><br />
                                <li>10:00</li>
                            </ul>
                        </div>
                        <div className='months-container'>
                            <div className='schedule_months_'>
                                <div className='m1'>
                                    <span>Monday</span>

                                </div>

                                <div className='m1'>
                                    <span>Tuesday</span>
                                </div>
                                <div className='m1'>
                                    <span>Wednesday</span>
                                </div>
                                <div className='m1'>
                                    <span>Thursday</span>
                                </div>
                                <div className='m1'>
                                    <span>Friday</span>
                                </div>
                                <div className='m1'>
                                    <span>Saturday</span>
                                </div>
                                <div className='m1'>
                                    <span>Sunday</span>
                                </div>
                            </div>

                            <div className='week-days'>

                                <div className='m1-border'>

                                </div>
                                <div className='m1--border'>

                                </div>
                                <div className='m1---border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                            </div>
                            <div className='week-days'>

                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                            </div>
                            <div className='week-days'>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                                <div className='m1-border'>

                                </div>
                            </div>
                        </div>


                    </div>


                </div>

                <div className='schedule-table-border'>
                    <div className='today-schedule'>
                        <div className='t-schedule'style={{display:'flex',gap:'10px'}}>
                            <div>
                                <MdAccessTime style={{ fontSize: '25px'}} />
                            </div>
                            <div>
                                <h3>Today's Schedule Overview</h3>
                            </div></div><br />
                        <div className='today_cards'>
                            <div className='today-cards'>
                                <div className='morn'style={{padding:'15px'}}>
                                    <div className='morn-staff'style={{display:'flex',justifyContent:'space-between'}}>
                                        <div>
                                            <p>Morning Shift</p>
                                        </div>
                                        <div className='ten-staff'>
                                            <p>10 staff</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <MdAccessTime/>
                                        </div>
                                        <div>
                                            <p>06:00 - 14:00</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <BsPeopleFill/>
                                        </div>
                                        <div>
                                            <p>Production</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <IoLocationOutline/>
                                        </div>
                                        <div>
                                            <p>Factory Floor</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='morn-btn'>View Details</button>
                                    </div>
                                </div>

                            </div>
                            <div className='today-cards'>
                                <div className='morn'style={{padding:'15px'}}>
                                    <div className='morn-staff'style={{display:'flex',justifyContent:'space-between'}}>
                                        <div>
                                            <p>Afternoon Shift</p>
                                        </div>
                                        <div className='ten--staff'>
                                            <p>10 staff</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <MdAccessTime/>
                                        </div>
                                        <div>
                                            <p>06:00 - 14:00</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <BsPeopleFill/>
                                        </div>
                                        <div>
                                            <p>Production</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <IoLocationOutline/>
                                        </div>
                                        <div>
                                            <p>Factory Floor</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='morn-btn'>View Details</button>
                                    </div>
                                </div>

                            </div>
                            <div className='today-cards'>
                                <div className='morn'style={{padding:'15px'}}>
                                    <div className='morn-staff'style={{display:'flex',justifyContent:'space-between'}}>
                                        <div>
                                            <p>Night Shift</p>
                                        </div>
                                        <div className='ten---staff'>
                                            <p>10 staff</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <MdAccessTime/>
                                        </div>
                                        <div>
                                            <p>06:00 - 14:00</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <BsPeopleFill/>
                                        </div>
                                        <div>
                                            <p>Security</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <IoLocationOutline/>
                                        </div>
                                        <div>
                                            <p>Main Building</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='morn-btn'>View Details</button>
                                    </div>
                                </div>

                            </div>
                            <div className='today-cards'>
                                <div className='morn'style={{padding:'15px'}}>
                                    <div className='morn-staff'style={{display:'flex',justifyContent:'space-between'}}>
                                        <div>
                                            <p>Office Hours</p>
                                        </div>
                                        <div className='ten----staff'>
                                            <p>45 staff</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <MdAccessTime/>
                                        </div>
                                        <div>
                                            <p>06:00 - 14:00</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <BsPeopleFill/>
                                        </div>
                                        <div>
                                            <p>Administration</p>
                                        </div>
                                    </div>
                                    <div className='ms'style={{display:'flex',marginTop:'10px',gap:'6px',color:'#82828a'}}>
                                        <div className='morn-icon'style={{marginTop:'1px'}}>
                                            <IoLocationOutline/>
                                        </div>
                                        <div>
                                            <p>Office Building</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='morn-btn'>View Details</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    <br />

                </div>
            </div>
            <br />

        </div>
    )
}

export default Scheduledetails