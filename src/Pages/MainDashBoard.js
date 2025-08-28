import React from 'react'
import Dashboard from '../Menu/Dashboard'
import { BsPeople } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { VscRequestChanges } from "react-icons/vsc";
import { GoReport } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { GrDocumentPerformance } from "react-icons/gr";
import { GoPersonAdd } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { BiSolidReport } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { TbCurrencyNaira } from "react-icons/tb";
import image from '../Images/user2.jpg'

function MainDashBoard() {
    return (
        <div>
            <div className='main-board'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='main-detailx'>
                    <div className='main-details'>
                        <div className='hr-welcome'>
                            <h4>HR Dashboard</h4>
                            <p>Welcome back! Here's your HR overview</p>
                        </div>
                        <div>
                            <p>Friday, July 25, 2025</p>
                        </div>

                    </div>
                    <div className='d-line2'></div><br />
                    <div className='borders'>
                        <div className='border1'>
                            <div className='total-employees'>
                                <div>
                                    <span>Total Employees</span>
                                    <h2>1,247</h2>
                                    <span className='span-text'>+12% from last month</span>
                                </div>
                                <div>
                                    <IoPeople />
                                </div>

                            </div>
                        </div>
                        <div className='border1'>
                            <div className='total-employees'>
                                <div>
                                    <span>Present Today</span>
                                    <h2>1,247</h2>
                                    <span className='span-text'>92.7% from last month</span>
                                </div>
                                <div>
                                    <BsFillPersonCheckFill />
                                </div>

                            </div>
                        </div>
                        <div className='border1'>
                            <div className='total-employees'>
                                <div>
                                    <span>On Leave</span>
                                    <h2>28</h2>
                                    <span className='span--text'>-8% from last month</span>
                                </div>
                                <div>
                                    <BsFillPersonXFill />
                                </div>

                            </div>
                        </div>
                        <div className='border1'>
                            <div className='total-employees'>
                                <div>
                                    <span>New Hires (Month)</span>
                                    <h2>43</h2>
                                    <span className='span-text'>+23% from last month</span>
                                </div>
                                <div>
                                    <FaArrowTrendUp />
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='big-borders'>
                        <div className='bb-flex'>
                            <div className='big-borders1'>
                                <div className='weekly-attendance'>
                                    <h3>Weekly Attendance Overview</h3>
                                    <div className='weekly__container'>
                                        <div className="progress-wrapper">
                                            <span className="label">Mon</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill"></div>
                                            </div>
                                            <span className="percent">95%</span>
                                        </div>


                                    </div>
                                    <div className='weekly__container'>
                                        <div className="progress-wrapper">
                                            <span className="label">Tue</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill"></div>
                                            </div>
                                            <span className="percent">92%</span>
                                        </div>


                                    </div>
                                    <div className='weekly__container'>
                                        <div className="progress-wrapper">
                                            <span className="label">Wed</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill"></div>
                                            </div>
                                            <span className="percent">92%</span>
                                        </div>


                                    </div>
                                    <div className='weekly__container'>
                                        <div className="progress-wrapper">
                                            <span className="label">Thur</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill"></div>
                                            </div>
                                            <span className="percent">92%</span>
                                        </div>


                                    </div>
                                    <div className='weekly__container'>
                                        <div className="progress-wrapper">
                                            <span className="label">Fri</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill"></div>
                                            </div>
                                            <span className="percent">92%</span>
                                        </div>


                                    </div>
                                    <div className='weekly__container'>
                                        <div className="progress-wrapper">
                                            <span className="label">Sat</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill6"></div>
                                            </div>
                                            <span className="percent">22%</span>
                                        </div>


                                    </div>
                                    <div className='weekly__container'>
                                        <div className="progress-wrapper">
                                            <span className="label">Sun</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill7"></div>
                                            </div>
                                            <span className="percent">92%</span>
                                        </div>


                                    </div>
                                    <div className='legend'>
                                        <div className='g1'>
                                            <h5 className='green-radius'></h5>
                                            <span className='pre'>Present</span>
                                        </div>
                                        <div className='g1'>
                                            <h5 className='green-radius2'></h5>
                                            <span className='pre'>Absent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='big-borders2'>
                                <div className='quick-actions'>
                                    <h3>Quick Actions</h3>
                                </div>
                                <div className='onboarding'>
                                    <div className='add-1'>
                                        <IoMdPersonAdd />
                                    </div>
                                    <div>
                                        <h4>Add Employee</h4>
                                        <span className='on-board'>Onboard new team member</span>
                                    </div>
                                </div>
                                <div className='onboarding'>
                                    <div className='add-2'>
                                        <VscRequestChanges />
                                    </div>
                                    <div>
                                        <h4>Leave Request</h4>
                                        <span className='on-board'>Approve pending request</span>
                                    </div>
                                </div>
                                <div className='onboarding'>
                                    <div className='add-3'>
                                        <GoReport />
                                    </div>
                                    <div>
                                        <h4>Generate Report</h4>
                                        <span className='on-board'>Create HR analytics report</span>
                                    </div>
                                </div>
                                <div className='onboarding'>
                                    <div className='add-4'>
                                        <TbCurrencyNaira />
                                    </div>
                                    <div>
                                        <h4>Process Payroll</h4>
                                        <span className='on-board'>Run monthly payroll</span>
                                    </div>
                                </div>
                                <div className='onboarding'>
                                    <div className='add-5'>
                                        <IoMdTime />
                                    </div>
                                    <div>
                                        <h4>Time Tracking </h4>
                                        <span className='on-board'>Review attendance logs</span>
                                    </div>
                                </div>
                                <div className='onboarding'>
                                    <div className='add-6'>
                                        <GrDocumentPerformance />
                                    </div>
                                    <div>
                                        <h4>Performance Review</h4>
                                        <span className='on-board'>Schedule evaluations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bb-flex'>
                            <div className='big-borders02'>
                                <div className='weekly-attendance'>
                                    <h3>Recent Employees</h3>
                                </div>
                                <div className='recent_employees'>
                                    <div className='recent_1'>
                                        <div className='r1'>
                                            <div className='recent-bg-1'>
                                            
                                            </div>
                                            <div>
                                                <h4>Sarah Johnson</h4>
                                                <span className='engr'>Senior Developer</span>
                                                <div className='engr2'>
                                                    <div>
                                                        <p>Engineering</p>
                                                    </div>
                                                    <div className='active'>
                                                        <p>Active</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='socials'>
                                                <div>
                                                    <div><RxEnvelopeClosed /></div>
                                                </div>
                                                <div>
                                                    <div><BsTelephone /></div>
                                                </div>
                                                <div>
                                                    <div><BsThreeDots /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className='recent_1'>
                                        <div className='r1'>
                                            <div className='recent-bg-1'>

                                            </div>
                                            <div>
                                                <h4>Sarah Johnson</h4>
                                                <span className='engr'>Senior Developer</span>
                                                <div className='engr2'>
                                                    <div>
                                                        <p>Engineering</p>
                                                    </div>
                                                    <div className='active'>
                                                        <p>Active</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='socials'>
                                                <div>
                                                    <div><RxEnvelopeClosed /></div>
                                                </div>
                                                <div>
                                                    <div><BsTelephone /></div>
                                                </div>
                                                <div>
                                                    <div><BsThreeDots /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className='recent_1'>
                                        <div className='r1'>
                                            <div className='recent-bg-1'>

                                            </div>
                                            <div>
                                                <h4>Michael Chen</h4>
                                                <span className='engr'>Product Manager</span>
                                                <div className='engr2'>
                                                    <div>
                                                        <p>Engineering</p>
                                                    </div>
                                                    <div className='active'>
                                                        <p>Active</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='socials'>
                                                <div>
                                                    <div><RxEnvelopeClosed /></div>
                                                </div>
                                                <div>
                                                    <div><BsTelephone /></div>
                                                </div>
                                                <div>
                                                    <div><BsThreeDots /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className='recent_1'>
                                        <div className='r1'>
                                            <div className='recent-bg-1'>

                                            </div>
                                            <div>
                                                <h4>David Kim</h4>
                                                <span className='engr'>Data Analyst</span>
                                                <div className='engr2'>
                                                    <div>
                                                        <p>Engineering</p>
                                                    </div>
                                                    <div className='active'>
                                                        <p>Active</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='socials'>
                                                <div>
                                                    <div><RxEnvelopeClosed /></div>
                                                </div>
                                                <div>
                                                    <div><BsTelephone /></div>
                                                </div>
                                                <div>
                                                    <div><BsThreeDots /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br/>
                                </div>
                            </div>

                            <div className='big-borders03'>
                                <div className='quick-actions'>
                                    <h3>Recent Activities</h3>
                                </div><br />
                                <div className='activities-icons'>
                                    <div className='add-7'>
                                        <GoPersonAdd />
                                    </div>
                                    <div>
                                        <h4>New employee onboarded</h4>
                                        <span className='engr'>Sarah johnson joined Engineering team </span><br />
                                        <span className='engr'>2 hours ago</span>
                                    </div>
                                </div><br />
                                <div className='activities-icons'>
                                    <div className='add-8'>
                                        <SlCalender />
                                    </div>
                                    <div>
                                        <h4>Leave request approved</h4>
                                        <span className='engr'>Michael Chen's vacation request approved</span><br />
                                        <span className='engr'>4 hours ago</span>
                                    </div>
                                </div><br />
                                <div className='activities-icons'>
                                    <div className='add-9'>
                                        <BiSolidReport />
                                    </div>
                                    <div>
                                        <h4>Monthly report generated</h4>
                                        <span className='engr'>HR analytics report for November</span><br />
                                        <span className='engr'>4 hours ago</span>
                                    </div>
                                </div><br />
                                <div className='activities-icons'>
                                    <div className='add-10'>
                                        <FiDollarSign />
                                    </div>
                                    <div>
                                        <h4>Payroll processed</h4>
                                        <span className='engr'>November payroll completed successfully </span><br />
                                        <span className='engr'>4 hours ago</span>
                                    </div>
                                </div><br />
                                <div className='activities-icons'>
                                    <div className='add-11'>
                                        <IoMdTime />
                                    </div>
                                    <div>
                                        <h4>Attendance records updated</h4>
                                        <span className='engr'>Weekly attendance data synchronized </span><br />
                                        <span className='engr'>4 hours ago</span>
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

export default MainDashBoard