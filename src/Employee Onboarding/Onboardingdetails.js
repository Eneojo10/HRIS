import React from 'react'
import { SlCalender } from "react-icons/sl";
import { GoPersonAdd } from "react-icons/go";
import image from '../Images/user2.jpg'
import { BsThreeDots } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { CgDanger } from "react-icons/cg";
import { IoLocation } from 'react-icons/io5';
import { LuBriefcase } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { BsListTask } from 'react-icons/bs';
import { IoPeopleOutline } from "react-icons/io5";

function Onboardingdetails() {
    return (
        <div>
            <div className='onboard-background'>
                <div className='employee-cards'>
                    <div className='employee-cards--flex'>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'blue' }}>
                                        <IoPeopleOutline />
                                    </div>
                                    <div className='twelve'>

                                        <p>+12</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>156</h2>
                                    <p>Active Onboarding</p>
                                    <span>New hires in process</span>
                                </div>

                            </div>
                        </div>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'green' }}>
                                        <GoPersonAdd />
                                    </div>
                                    <div className='twelve'>

                                        <p>+3</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>12</h2>
                                    <p>Completed This Month</p>
                                    <span>Successfully onboarded</span>
                                </div>

                            </div>
                        </div>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'purple' }}>
                                        <SlCalender />
                                    </div>
                                    <div className='twelve'>

                                        <p>0</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>8</h2>
                                    <p>Starting This week</p>
                                    <span>New arrivals</span>
                                </div>

                            </div>
                        </div>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'orange' }}>
                                        <IoMdTime />
                                    </div>
                                    <div className='twelve'>

                                        <p>-3 days</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>28 days</h2>
                                    <p>Avg. Completion Time</p>
                                    <span>Time to complete</span>
                                </div>

                            </div>
                        </div>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'green' }}>
                                        <IoMdCheckmarkCircleOutline />
                                    </div>
                                    <div className='twelve'>

                                        <p>+5.2%</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>87.5%</h2>
                                    <p>Task Completion Rate</p>
                                    <span>Overall completion</span>
                                </div>

                            </div>
                        </div>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'blue' }}>
                                        <BsCircle />
                                    </div>
                                    <div className='twelve'>

                                        <p>+2.1%</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>12.5%</h2>
                                    <p>Pending Tasks</p>
                                    <span>Across all hires</span>
                                </div>

                            </div>
                        </div>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'red' }}>
                                        <HiArrowTrendingUp />
                                    </div>
                                    <div className='twelve'>

                                        <p>+0.3</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>4.2/5</h2>
                                    <p>Satisfaction Score</p>
                                    <span>New hire feedback</span>
                                </div>

                            </div>
                        </div>
                        <div className='employee-card1'>
                            <div className='flex-one'>
                                <div className='flex1'>
                                    <div className='i-c-o-n' style={{ color: 'red' }}>
                                        <CgDanger />
                                    </div>
                                    <div className='twelve'>

                                        <p>+1</p>
                                    </div>
                                </div><br />
                                <div className='flex-number'>
                                    <h2>3</h2>
                                    <p>Overdue Items</p>
                                    <span>Need attention</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-line_'></div>
            <div className='board-bg'>
                <div className='board-on_'>
                    <div>
                        <h3>Onboarding Pipeline</h3>
                        <span className='track'>Track new hire progress through onboarding stages</span>
                    </div><br />
                    <div className='track-cards'>
                        <div className='t-card1'>
                            <div className='pre-board'>
                                <div>
                                    <span>Pre-boarding</span>
                                </div>
                                <div className='one'>
                                    <p>1</p>
                                </div>

                            </div><br />
                            <div className='maria' style={{ display: 'flex', width: '85%', margin: 'auto', justifyContent: 'space-between' }}>
                                <div className='mg'>MG</div>
                                <div className='m-g'>
                                    <p>Maria Goretti</p>
                                </div>
                            </div>
                        </div>
                        <div className='t-card1'>
                            <div className='pre-board'>
                                <div>
                                    <span>First Day</span>
                                </div>
                                <div className='one'>
                                    <p>2</p>
                                </div>
                            </div><br />
                            <div className='maria' style={{ display: 'flex', width: '85%', margin: 'auto', justifyContent: 'space-between', marginBottom: '9px' }}>
                                <div className='mg'>MG</div>
                                <div className='m-g'>
                                    <p>Maria Goretti</p>
                                </div>
                            </div>
                            <div className='maria' style={{ display: 'flex', width: '85%', margin: 'auto', justifyContent: 'space-between' }}>
                                <div className='mg'>MS</div>
                                <div className='m-g'>
                                    <p>Mary Slessor</p>
                                </div>
                            </div>
                        </div>
                        <div className='t-card1'>
                            <div className='pre-board'>
                                <div>
                                    <span>First Week</span>
                                </div>
                                <div className='one'>
                                    <p>1</p>
                                </div>
                            </div><br />
                            <div className='maria' style={{ display: 'flex', width: '85%', margin: 'auto', justifyContent: 'space-between' }}>
                                <div className='mg'>MS</div>
                                <div className='m-g'>
                                    <p>Mary Slessor</p>
                                </div>
                            </div>
                        </div>
                        <div className='t-card1'>
                            <div className='pre-board'>
                                <div>
                                    <span>First Month</span>
                                </div>
                                <div className='one'>
                                    <p>1</p>
                                </div>
                            </div><br />
                            <div className='maria' style={{ display: 'flex', width: '85%', margin: 'auto', justifyContent: 'space-between' }}>
                                <div className='mg'>MS</div>
                                <div className='m-g'>
                                    <p>Mary Slessor</p>
                                </div>
                            </div>
                        </div>
                        <div className='t-card1'>
                            <div className='pre-board'>
                                <div>
                                    <span>Completed</span>
                                </div>
                                <div className='one'>
                                    <p>1</p>
                                </div>
                            </div><br />
                            <div className='maria' style={{ display: 'flex', width: '85%', margin: 'auto', justifyContent: 'space-between' }}>
                                <div className='mg'>MS</div>
                                <div className='m-g'>
                                    <p>Mary Slessor</p>
                                </div>
                            </div>
                        </div>

                    </div><br />
                    <div className='big_tcards'>
                        <div className='big-tcards1'>
                            <div className='can_flex'>
                                <div className='can-flex-container'>
                                    <div className='cn--flex'>
                                        <div className='can-image'>
                                            <img src={image} alt='' />
                                        </div>
                                        <div className='can_text'>
                                            <h4>Sarah Johnson</h4>
                                            <p>Senior Frontend Developer</p>
                                        </div>
                                    </div><br />
                                    <div className='can-width'>
                                        <div className='priority'>
                                            <div className='hp'>
                                                <p>High priority</p>
                                            </div>
                                            <div className='on-track'>
                                                <div className='t-icon' style={{ marginTop: '2px', color: 'blue' }}>
                                                    <IoMdTime />
                                                </div>
                                                <div>
                                                    <span>On-track</span>
                                                </div>
                                            </div>
                                        </div><br />
                                        <div className='flex___can11'>
                                            <div className='cn_icon'>
                                                <IoLocation />
                                            </div>
                                            <div>
                                                <p>Maitama, Abuja</p>
                                            </div>
                                        </div>
                                        <div className='flex___can22'>
                                            <div className='cn_icon'>
                                                <LuBriefcase />
                                            </div>
                                            <div>
                                                <p>Engineering</p>
                                            </div>
                                        </div>

                                        <div className='flex___can44'>
                                            <div className='cn_icon'>
                                                <IoMdTime />
                                            </div>
                                            <div>
                                                <p>Starts in 3 days</p>
                                            </div>
                                        </div>
                                        <div className='flex___can55'>
                                            <div className='cn_icon'>
                                                <IoPersonOutline />
                                            </div>
                                            <div>
                                                <p>Manager</p>
                                            </div>
                                        </div><br /><br />

                                    </div>
                                    <div className='flex___can'>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <RxEnvelopeClosed />
                                                </div>
                                                <p>Email</p>
                                            </div>
                                        </div>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <BsTelephone />
                                                </div>
                                                <p>Call</p>
                                            </div>
                                        </div>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <BsListTask />
                                                </div>
                                                <p>Tasks</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                                <div>
                                    <BsThreeDots />
                                </div>

                            </div>
                        </div>
                        <div className='big-tcards1'>
                            <div className='can_flex'>
                                <div className='can-flex-container'>
                                    <div className='cn--flex'>
                                        <div className='can-image'>
                                            <img src={image} alt='' />
                                        </div>
                                        <div className='can_text'>
                                            <h4>Sarah Johnson</h4>
                                            <p>Senior Frontend Developer</p>
                                        </div>
                                    </div><br />
                                    <div className='can-width'>
                                        <div className='priority2'>
                                            <div className='hp' style={{ backgroundColor: 'yellow', width: '50%', borderRadius: '4px' }}>
                                                <p>Medium priority</p>
                                            </div>
                                            <div className='on-track'>
                                                <div className='t-icon' style={{ marginTop: '2px', color: 'blue' }}>
                                                    <IoMdTime />
                                                </div>
                                                <div>
                                                    <span>In progress</span>
                                                </div>
                                            </div>
                                        </div><br />
                                        <div className='flex___can11'>
                                            <div className='cn_icon'>
                                                <IoLocation />
                                            </div>
                                            <div>
                                                <p>Maitama, Abuja</p>
                                            </div>
                                        </div>
                                        <div className='flex___can22'>
                                            <div className='cn_icon'>
                                                <LuBriefcase />
                                            </div>
                                            <div>
                                                <p>Engineering</p>
                                            </div>
                                        </div>

                                        <div className='flex___can44'>
                                            <div className='cn_icon'>
                                                <IoMdTime />
                                            </div>
                                            <div>
                                                <p>Starts in 3 days</p>
                                            </div>
                                        </div>
                                        <div className='flex___can55'>
                                            <div className='cn_icon'>
                                                <IoPersonOutline />
                                            </div>
                                            <div>
                                                <p>Manager</p>
                                            </div>
                                        </div><br /><br />

                                    </div>
                                    <div className='flex___can'>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <RxEnvelopeClosed />
                                                </div>
                                                <p>Email</p>
                                            </div>
                                        </div>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <BsTelephone />
                                                </div>
                                                <p>Call</p>
                                            </div>
                                        </div>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <BsListTask />
                                                </div>
                                                <p>Tasks</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                                <div>
                                    <BsThreeDots />
                                </div>

                            </div>
                        </div>
                        <div className='big-tcards1'>
                            <div className='can_flex'>
                                <div className='can-flex-container'>
                                    <div className='cn--flex'>
                                        <div className='can-image'>
                                            <img src={image} alt='' />
                                        </div>
                                        <div className='can_text'>
                                            <h4>Sarah Johnson</h4>
                                            <p>Senior Frontend Developer</p>
                                        </div>
                                    </div><br />
                                    <div className='can-width'>
                                        <div className='priority3'>
                                            <div className='hp' style={{ backgroundColor: '#ccc', color: 'black', borderRadius: '4px' }}>
                                                <p>Low priority</p>
                                            </div>
                                            <div className='on-track'>
                                                <div className='t-icon' style={{ marginTop: '2px', color: 'green' }}>
                                                    <IoMdCheckmarkCircleOutline />
                                                </div>
                                                <div>
                                                    <span>Completed</span>
                                                </div>
                                            </div>
                                        </div><br />
                                        <div className='flex___can11'>
                                            <div className='cn_icon'>
                                                <IoLocation />
                                            </div>
                                            <div>
                                                <p>Maitama, Abuja</p>
                                            </div>
                                        </div>
                                        <div className='flex___can22'>
                                            <div className='cn_icon'>
                                                <LuBriefcase />
                                            </div>
                                            <div>
                                                <p>Engineering</p>
                                            </div>
                                        </div>

                                        <div className='flex___can44'>
                                            <div className='cn_icon'>
                                                <IoMdTime />
                                            </div>
                                            <div>
                                                <p>Starts in 3 days</p>
                                            </div>
                                        </div>
                                        <div className='flex___can55'>
                                            <div className='cn_icon'>
                                                <IoPersonOutline />
                                            </div>
                                            <div>
                                                <p>Manager</p>
                                            </div>
                                        </div><br /><br />

                                    </div>
                                    <div className='flex___can'>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <RxEnvelopeClosed />
                                                </div>
                                                <p>Email</p>
                                            </div>
                                        </div>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <BsTelephone />
                                                </div>
                                                <p>Call</p>
                                            </div>
                                        </div>
                                        <div className='f-box'>
                                            <div className='f-1'>
                                                <div className='f-icon'>
                                                    <BsListTask />
                                                </div>
                                                <p>Tasks</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                                <div>
                                    <BsThreeDots />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Onboardingdetails