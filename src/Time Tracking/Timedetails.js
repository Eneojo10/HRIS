import React, { useState } from 'react'
import { IoMdTime } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import Time from '../Pages/Time/Time';

function Timedetails() {

    

    return (
        <div>


            <div className='tracking-big-box'>


                <div className='big-box1'>

                    <div className='time-flex' style={{ width: '90%', margin: 'auto', marginTop: '20px' }}>
                        <div className='tf' style={{ width: '60%', display: 'flex', gap: '15px' }}>
                            <div className='tf-icon' style={{ marginTop: '11px', fontSize: '24px' }}>
                                <IoMdTime />
                            </div>
                            <div className='te' style={{ marginTop: '10px', fontSize: '14px' }}>
                                <h2>Quick Time Entry</h2>
                            </div>
                        </div>
                        <div className='ep' style={{ display: 'flex', gap: '20px', marginTop: '15px', width: '100%' }}>
                            <div className='epp'>
                                <span>Employee</span>
                                <select>
                                    <option value="">Select Employee</option>
                                    <option value="john">John</option>
                                    <option value="jane">Jane</option>
                                    <option value="mike">Mike</option>
                                </select>
                            </div>

                            <div className='epp'>
                                <span>Project</span>
                                <select>
                                    <option value="">Select Project</option>
                                    <option value="alpha">Alpha</option>
                                    <option value="beta">Beta</option>
                                    <option value="gamma">Gamma</option>
                                </select>
                            </div>

                        </div><br />
                        <div>
                            <span>Take Description</span>
                            <div className='take_input'>
                                <input type='text' placeholder='Enter Task Description' />
                            </div>
                        </div>
                        <div className='ep' style={{ display: 'flex', gap: '20px', marginTop: '15px', width: '100%' }}>
                            <div className='epp'>
                                <span>Start Time</span>
                                <select>
                                    <option value="">--:-- --</option>
                                    <option value="john">John</option>
                                    <option value="jane">Jane</option>
                                    <option value="mike">Mike</option>
                                </select>
                            </div>

                            <div className='epp'>
                                <span>End Time</span>
                                <select>
                                    <option value="">Select Project</option>
                                    <option value="alpha">Alpha</option>
                                    <option value="beta">Beta</option>
                                    <option value="gamma">Gamma</option>
                                </select>
                            </div>


                        </div><br />
                        <div>
                            <span>Notes (Optional)</span>
                            <div className='take_input' style={{ marginTop: '10px' }}>
                                <textarea type='text' placeholder='Enter Task Description' />
                            </div>
                        </div><br />
                        <div className='entry-holder' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='entry-bg'>
                                <div className='entry' style={{ display: 'flex', width: '33%', justifyContent: 'space-between', paddingTop: '7px', fontWeight: '500', margin: 'auto' }}>
                                    <div className='entry-icon' style={{ fontSize: '21px', marginTop: '-2px' }}>
                                        <GoPlus />
                                    </div>
                                    <p>Add Entry</p>
                                </div>

                            </div>
                            <div className='timer' style={{ display: 'flex', width: '30%', gap: '10px' }}>
                                <div className='start-icon' style={{ marginTop: '2px' }}>
                                    <IoPlayOutline />
                                </div>
                                <p>Start Timer</p>
                            </div>
                        </div><br />
                    </div>

                </div>
                <div className='big-box1'>
                    <div className='flexx' style={{ width: '90%', margin: 'auto', marginTop: '20px' }}>
                        <div className='fle-xx' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div className='tt' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                                <div className='tf-icon' style={{ marginTop: '11px', fontSize: '24px' }}>
                                    <IoPlayOutline />
                                </div>
                                <div className='te' style={{ marginTop: '10px', fontSize: '14px' }}>
                                    <h2>Active Timers</h2>
                                </div>
                            </div>
                            <div className='ac-tive' style={{ marginTop: '15px',backgroundColor:'#f4f4f5',width:'15%',textAlign:'center',borderRadius:'16px',fontSize:'14px',height:'21px' }}>
                                <p>3 active</p>
                            </div>
                        </div>
                        <div className='t-border' style={{ border: '1px solid #ccc', height: '120px', borderRadius: '8px', marginBottom: '15px' }}>
                            <div className='container-border'>
                                <div className='t-border-flex'>
                                    <div className='person'style={{fontSize:'18px'}}>
                                        <BsPerson />
                                    </div>
                                    <div>
                                        <h4>John Smith</h4>
                                    </div>
                                    <div className='g-active'>
                                        <p>active</p>
                                    </div>
                                </div>
                                <h3>Mobile App - UI Testing</h3>
                                <div className='green-style' style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                                    <div className='g-style'>
                                        <h4>Started: 10:30 AM </h4>
                                    </div>
                                    <div className='green' style={{ color: 'green', fontFamily: 'monospace', fontSize: '15px', marginTop: '2px' }}>
                                        <h4>02:45:30</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='t-border' style={{ border: '1px solid #ccc', height: '120px', borderRadius: '8px', marginBottom: '15px' }}>
                            <div className='container-border'>
                                <div className='t-border-flex'>
                                    <div className='person'style={{fontSize:'18px'}}>
                                        <BsPerson />
                                    </div>
                                    <div>
                                        <h4>Mike Davids</h4>
                                    </div>
                                    <div className='g-active'>
                                        <p>active</p>
                                    </div>
                                </div>
                                <h3>Database Migration - Data Analysis</h3>
                                <div className='green-style' style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                                    <div className='g-style'>
                                        <h4>Started: 10:30 AM </h4>
                                    </div>
                                    <div className='green' style={{ color: 'green', fontFamily: 'monospace', fontSize: '15px', marginTop: '2px' }}>
                                        <h4>02:45:30</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='t-border' style={{ border: '1px solid #ccc', height: '120px', borderRadius: '8px', marginBottom: '15px' }}>
                            <div className='container-border'>
                                <div className='t-border-flex'>
                                    <div className='person'style={{fontSize:'18px'}}>
                                        <BsPerson />
                                    </div>
                                    <div>
                                        <h4>John Smith</h4>
                                    </div>
                                    <div className='g-active'>
                                        <p>active</p>
                                    </div>
                                </div>
                                <h3>Website Redesign - Frontend<br />Development</h3>
                                <div className='green-style' style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                                    <div className='g-style'>
                                        <h4>Started: 10:30 AM </h4>
                                    </div>
                                    <div className='green' style={{ color: 'green', fontFamily: 'monospace', fontSize: '15px', marginTop: '2px' }}>
                                        <h4>02:45:30</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                </div>

            </div><br /><br />
            <div className='tracking-table-border'><br />

                <div className='empolyee--directory'>
                    <div>
                        <h2>Recent Times Entries</h2>
                    </div><br /><br />
                    <table class="directory-table">
                        <thead>
                            <tr>

                                <th>Employee</th>
                                <th>Date</th>
                                <th>Project</th>
                                <th>Task</th>
                                <th>Hours </th>
                                <th>Status</th>
                                <th>Actions</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>


                                <td>Engineering</td>
                                <td>2024-01-26</td>
                                <td>Website Redesign</td>
                                <td>Backend API</td>
                                <td>8.5h</td>
                                <td>approved</td>
                                <td>$5,000</td>

                            </tr>
                            <tr>


                                <td>Engineering</td>
                                <td>+1234567890</td>
                                <td>New York</td>
                                <td>2023-01-15</td>
                                <td>Active</td>
                                <td>Excellent</td>
                                <td>$5,000</td>
                                {/* <td>2025-07-24</td> */}
                                {/* <td><HiOutlineDotsHorizontal /></td> */}
                            </tr>




                        </tbody>
                    </table>



                </div>
            </div>


        </div>
    )
}

export default Timedetails