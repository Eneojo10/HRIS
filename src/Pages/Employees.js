import React from 'react'
import Dashboard from '../Menu/Dashboard'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import img1 from '../Images/user2.jpg'
import { GoPersonAdd } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { PiExport } from "react-icons/pi";
import { CiImport } from "react-icons/ci";


function Employees() {
    return (
        <div>
            <div className='employees-container'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='employees-nav'>
                    <div className='employee-navigation'>
                        <div className='all__employees'>
                            <div>
                                <h2>All Employees</h2>
                                <span>Manage your workforce and employee <br />information</span>
                            </div>
                            <div className='bulk-list'>
                                <div className='b_email'>
                                    <div className='email_flex'>
                                        <div className='outlineemail'><AiOutlineMail /></div>
                                        <span>Bulk Email</span>
                                    </div>
                                </div>
                                <div className='b_email'>
                                    <div className='email_flex'>
                                        <div className='outlineemail'><PiExport /></div>
                                        <span>Export</span>
                                    </div>
                                </div>
                                <div className='b_email'>
                                    <div className='email_flex'>
                                        <div className='outlineemail'><CiImport /></div>
                                        <span> Import</span>
                                    </div>
                                </div>
                                
                                <div className='add-people-bg'>
                                    <div className='add-people'>
                                        <div className='add_people_icon'><GoPersonAdd /></div>
                                        <h4>Add Employee</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className='d-line_'></div>
                    <div className='emp-bg'>
                        <div className='employee-cards'>
                            <div className='employee-cards--flex'>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>1,240</h2>
                                            <p>Total Employees</p>
                                            <span>Active worforce</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>1,240</h2>
                                            <p>Present Today</p>
                                            <span>Attendance rate</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>43</h2>
                                            <p>On Leave</p>
                                            <span>Various leave types</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>387</h2>
                                            <p>Remote Workers</p>
                                            <span>Working remotely</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>12</h2>
                                            <p>Department</p>
                                            <span>Active department</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>8</h2>
                                            <p>Locations</p>
                                            <span>Office locations</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>28</h2>
                                            <p>New Hires (30d)</p>
                                            <span>Recent additions</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br/>
                                        <div className='flex-number'>
                                            <h2>156</h2>
                                            <p>Top Performers</p>
                                            <span>High performers</span>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                            <div className='empolyee-directory'>
                                <div className='directory-header'>
                                    <div className=']'>
                                        <h3>Employee Directory</h3>
                                        <span className='numbers'>Showing 6 of 1,247 employees</span>
                                    </div>
                                    <div className='empolyee-directory'>
                                        <table class="directory-table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <input type="checkbox" name="subscribe" value="yes" />
                                                    </th>
                                                    <th>Employee</th>
                                                    <th>Department</th>
                                                    <th>Contact</th>
                                                    <th>Location</th>
                                                    <th>Join Date</th>
                                                    <th>Status</th>
                                                    <th>Performance</th>
                                                    <th>Salary</th>
                                                    <th>Last Active</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" name="subscribe" value="yes" />
                                                    </td>
                                                    <td>
                                                        <div className='image1'>
                                                            <div className='employee-image01'>
                                                                <img src={img1} alt="Sarah Johnson" />
                                                            </div>
                                                            <span className='employee-name'>Sarah Johnson</span>
                                                        </div>
                                                    </td>
                                                    <td>Engineering</td>
                                                    <td>+1234567890</td>
                                                    <td>New York</td>
                                                    <td>2023-01-15</td>
                                                    <td>Active</td>
                                                    <td>Excellent</td>
                                                    <td>$5,000</td>
                                                    <td>2025-07-24</td>
                                                    <td><HiOutlineDotsHorizontal /></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" name="subscribe" value="yes" />
                                                    </td>
                                                    <td>
                                                        <div className='image1'>
                                                            <div className='employee-image01'>
                                                                <img src={img1} alt="Sarah Johnson" />
                                                            </div>
                                                            <span className='employee-name'>Sarah Johnson</span>
                                                        </div>
                                                    </td>
                                                    <td>Engineering</td>
                                                    <td>+1234567890</td>
                                                    <td>New York</td>
                                                    <td>2023-01-15</td>
                                                    <td>Active</td>
                                                    <td>Excellent</td>
                                                    <td>$5,000</td>
                                                    <td>2025-07-24</td>
                                                    <td><HiOutlineDotsHorizontal /></td>
                                                </tr>




                                            </tbody>
                                        </table>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Employees