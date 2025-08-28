import React from 'react'
import image from '../Images/user2.jpg'
import { BsThreeDots } from "react-icons/bs";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { CgDanger } from "react-icons/cg";
import { GoPersonAdd } from "react-icons/go";
import { IoLocation } from 'react-icons/io5';
import { PiToolboxLight } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { LuBriefcase } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";


function Recruitmentdetails() {
    return (
        <div>
            <div className='recritment_bg'>
                <div className='recruitment-card-list'>
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
                                    <p>Active Candidate</p>
                                    <span>In pipeline</span>
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
                                    <p>Open Positions</p>
                                    <span>Active hiring</span>
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
                                    <p>Interviews Today</p>
                                    <span>Scheduled</span>
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
                                    <p>Avg. Time to hire</p>
                                    <span>This quarter</span>
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
                                    <p>Offer Acceptance</p>
                                    <span>Success rate </span>
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
                                    <p>Pipeline Conversion</p>
                                    <span>Application to hire </span>
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
                                    <p>Quality Score</p>
                                    <span>Hire quality</span>
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
                                    <p>Urgent Positions</p>
                                    <span>Need attention</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-line_'></div>
            <div className='bg-recruitment'>
                <div className='pipeline-header'>
                    <div className='pipeline-header-left'>
                        <h2>Recruitment Pipeline</h2><br />
                        <div className='pipeboxcard-flex'>
                            <div className='pipeboxcard'>
                                <div className='pipe-1'>
                                    <h4>45</h4>

                                </div>
                                <div className='pipe-paragraph'>
                                    <p>Applied</p>
                                    <span className='span-can'>Candidates</span>
                                </div>
                            </div>
                            <div className='pipeboxcard'>
                                <div className='pipe-2'>
                                    <h4>28</h4>

                                </div>
                                <div className='pipe-paragraph'>
                                    <p>Screening</p>
                                    <span className='span-can'>Candidates</span>
                                </div>
                            </div>
                            <div className='pipeboxcard'>
                                <div className='pipe-3'>
                                    <h4>18</h4>

                                </div>
                                <div className='pipe-paragraph'>
                                    <p>Interview</p>
                                    <span className='span-can'>Candidates</span>
                                </div>
                            </div>
                            <div className='pipeboxcard'>
                                <div className='pipe-4'>
                                    <h4>18</h4>

                                </div>
                                <div className='pipe-paragraph'>
                                    <p>Technical</p>
                                    <span className='span-can'>Candidates</span>
                                </div>
                            </div>

                            <div className='pipeboxcard'>
                                <div className='pipe-5'>
                                    <h4>8</h4>

                                </div>
                                <div className='pipe-paragraph'>
                                    <p>Final Round</p>
                                    <span className='span-can'>Candidates</span>
                                </div>
                            </div>
                            <div className='pipeboxcard'>
                                <div className='pipe-6'>
                                    <h4>8</h4>

                                </div>
                                <div className='pipe-paragraph'>
                                    <p>Offer</p>
                                    <span className='span-can'>Candidates</span>
                                </div>
                            </div>
                        </div>
                        <div className='pipeline-progress'>
                            <div>
                                <span>Pipeline Progress</span>
                            </div>
                            <div>
                                <span>12.5% conversion rate</span>
                            </div>
                        </div>
                        <div className="progress-barr">
                            <div className="progress-fill"></div>
                        </div>
                        <br />
                    </div>
                </div>
                <div>
                    <div className='candidates-header'>
                        <h3>All Candidates</h3>
                        <div className='candidates-header-right'>
                            <div className='can1'>
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
                                        </div>
                                        <div className='can-width'>
                                            <div className='flex___can1'>
                                                <div className='cn_icon'>
                                                    <IoLocation />
                                                </div>
                                                <div>
                                                    <p>Maitama, Abuja</p>
                                                </div>
                                            </div>
                                            <div className='flex___can2'>
                                                <div className='cn_icon'>
                                                    <LuBriefcase />
                                                </div>
                                                <div>
                                                    <p>5 years experience</p>
                                                </div>
                                            </div>
                                            <div className='flex___can3'>
                                                <div className='cn_icon'>
                                                    <PiGraduationCapDuotone />
                                                </div>
                                                <div>
                                                    <p>BSc Computer Science</p>
                                                </div>
                                            </div>
                                            <div className='flex___can4'>
                                                <div className='cn_icon'>
                                                    <IoMdTime />
                                                </div>
                                                <div>
                                                    <p>Applied 2024-01-15</p>
                                                </div>
                                            </div>
                                            <div className='flex___can5'>
                                                <div className='cn_icon'>
                                                    <FaRegStarHalfStroke />
                                                </div>
                                                <div>
                                                    <p>4.5 rating</p>
                                                </div>
                                            </div><br /><br />

                                        </div>
                                        <div className='flex___can'>
                                            <div className='f1'>
                                                <p>React</p>
                                            </div>
                                            <div className='f2'>
                                                <p>Typescript</p>
                                            </div>
                                            <div className='f3'>
                                                <p>Nodejs</p>
                                            </div>

                                        </div>
                                    </div>



                                    <div>
                                        <BsThreeDots />
                                    </div>

                                </div>
                                <div className='can_line'>
                                    <div className='d-line'></div>

                                    <div className='can-bottom-icon'>
                                        <div className='int'>
                                            <p>Interview</p>
                                        </div>
                                        <div className='envelope-tel'>
                                            <div className='v-con'>
                                                <RxEnvelopeClosed />
                                            </div>
                                            <div className='v-con'>
                                                <BsTelephone />
                                            </div>
                                            <div className='v-bg'>
                                                <h4>View</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                            </div>
                            <div className='can1'>
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
                                        </div>
                                        <div className='can-width'>
                                            <div className='flex___can1'>
                                                <div className='cn_icon'>
                                                    <IoLocation />
                                                </div>
                                                <div>
                                                    <p>Maitama, Abuja</p>
                                                </div>
                                            </div>
                                            <div className='flex___can2'>
                                                <div className='cn_icon'>
                                                    <LuBriefcase />
                                                </div>
                                                <div>
                                                    <p>5 years experience</p>
                                                </div>
                                            </div>
                                            <div className='flex___can3'>
                                                <div className='cn_icon'>
                                                    <PiGraduationCapDuotone />
                                                </div>
                                                <div>
                                                    <p>BSc Computer Science</p>
                                                </div>
                                            </div>
                                            <div className='flex___can4'>
                                                <div className='cn_icon'>
                                                    <IoMdTime />
                                                </div>
                                                <div>
                                                    <p>Applied 2024-01-15</p>
                                                </div>
                                            </div>
                                            <div className='flex___can5'>
                                                <div className='cn_icon'>
                                                    <FaRegStarHalfStroke />
                                                </div>
                                                <div>
                                                    <p>4.5 rating</p>
                                                </div>
                                            </div><br /><br />

                                        </div>
                                        <div className='flex___can'>
                                            <div className='f1'>
                                                <p>React</p>
                                            </div>
                                            <div className='f2'>
                                                <p>Typescript</p>
                                            </div>
                                            <div className='f3'>
                                                <p>Nodejs</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <BsThreeDots />
                                    </div>


                                </div>
                                <div className='can_line'>
                                    <div className='d-line'></div>

                                    <div className='can-bottom-icon'>
                                        <div className='int2'>
                                            <p>Final Round</p>
                                        </div>
                                        <div className='envelope-tel'>
                                            <div className='v-con'>
                                                <RxEnvelopeClosed />
                                            </div>
                                            <div className='v-con'>
                                                <BsTelephone />
                                            </div>
                                            <div className='v-bg'>
                                                <h4>View</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                            </div>
                            <div className='can1'>
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
                                        </div>
                                        <div className='can-width'>
                                            <div className='flex___can1'>
                                                <div className='cn_icon'>
                                                    <IoLocation />
                                                </div>
                                                <div>
                                                    <p>Maitama, Abuja</p>
                                                </div>
                                            </div>
                                            <div className='flex___can2'>
                                                <div className='cn_icon'>
                                                    <LuBriefcase />
                                                </div>
                                                <div>
                                                    <p>5 years experience</p>
                                                </div>
                                            </div>
                                            <div className='flex___can3'>
                                                <div className='cn_icon'>
                                                    <PiGraduationCapDuotone />
                                                </div>
                                                <div>
                                                    <p>BSc Computer Science</p>
                                                </div>
                                            </div>
                                            <div className='flex___can4'>
                                                <div className='cn_icon'>
                                                    <IoMdTime />
                                                </div>
                                                <div>
                                                    <p>Applied 2024-01-15</p>
                                                </div>
                                            </div>
                                            <div className='flex___can5'>
                                                <div className='cn_icon'>
                                                    <FaRegStarHalfStroke />
                                                </div>
                                                <div>
                                                    <p>4.5 rating</p>
                                                </div>
                                            </div><br /><br />

                                        </div>
                                        <div className='flex___can'>
                                            <div className='f1'>
                                                <p>React</p>
                                            </div>
                                            <div className='f2'>
                                                <p>Typescript</p>
                                            </div>
                                            <div className='f3'>
                                                <p>Nodejs</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <BsThreeDots />
                                    </div>

                                </div>
                                <div className='can_line'>
                                    <div className='d-line'></div>

                                    <div className='can-bottom-icon'>
                                        <div className='int3'>
                                            <p>Technical</p>
                                        </div>
                                        <div className='envelope-tel'>
                                            <div className='v-con'>
                                                <RxEnvelopeClosed />
                                            </div>
                                            <div className='v-con'>
                                                <BsTelephone />
                                            </div>
                                            <div className='v-bg'>
                                                <h4>View</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                            </div>
                            <div className='can1'>
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
                                        </div>
                                        <div className='can-width'>
                                            <div className='flex___can1'>
                                                <div className='cn_icon'>
                                                    <IoLocation />
                                                </div>
                                                <div>
                                                    <p>Maitama, Abuja</p>
                                                </div>
                                            </div>
                                            <div className='flex___can2'>
                                                <div className='cn_icon'>
                                                    <LuBriefcase />
                                                </div>
                                                <div>
                                                    <p>5 years experience</p>
                                                </div>
                                            </div>
                                            <div className='flex___can3'>
                                                <div className='cn_icon'>
                                                    <PiGraduationCapDuotone />
                                                </div>
                                                <div>
                                                    <p>BSc Computer Science</p>
                                                </div>
                                            </div>
                                            <div className='flex___can4'>
                                                <div className='cn_icon'>
                                                    <IoMdTime />
                                                </div>
                                                <div>
                                                    <p>Applied 2024-01-15</p>
                                                </div>
                                            </div>
                                            <div className='flex___can5'>
                                                <div className='cn_icon'>
                                                    < FaRegStarHalfStroke />
                                                </div>
                                                <div>
                                                    <p>4.5 rating</p>
                                                </div>
                                            </div><br /><br />

                                        </div>
                                        <div className='flex___can'>
                                            <div className='f1'>
                                                <p>React</p>
                                            </div>
                                            <div className='f2'>
                                                <p>Typescript</p>
                                            </div>
                                            <div className='f3'>
                                                <p>Nodejs</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <BsThreeDots />
                                    </div>

                                </div>
                                <div className='can_line'>
                                    <div className='d-line'></div>

                                    <div className='can-bottom-icon'>
                                        <div className='int4'>
                                            <p>Screening </p>
                                        </div>
                                        <div className='envelope-tel'>
                                            <div className='v-con'>
                                                <RxEnvelopeClosed />
                                            </div>
                                            <div className='v-con'>
                                                <BsTelephone />
                                            </div>
                                            <div className='v-bg'>
                                                <h4>View</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recruitmentdetails