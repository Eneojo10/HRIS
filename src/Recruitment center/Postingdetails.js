import React from 'react'
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiJfrogpipelines } from "react-icons/si";

function Postingdetails() {
    return (
        <div>
            <div className='j-job'>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'>
                                <IoPeopleOutline/>
                            </div>
                            <h4>156</h4>
                            <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Active Candidates</p>
                            <span className='in-pipeline'style={{fontSize:'13px'}}>In pipeline</span>
                        </div>
                        <div className='twel-eve'>
                            <p>+12</p>
                        </div>

                    </div>
                </div>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'style={{color:'green'}}>
                                <BsFillPersonPlusFill/>
                            </div>
                            <h4>12</h4>
                            <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Open Positions<br/> Actively hiring</p>
                            {/* <span className='in-pipeline'style={{fontSize:'13px'}}>In pipeline</span> */}
                        </div>
                        <div className='twel-eve'>
                            <p>+3</p>
                        </div>

                    </div>
                </div>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'style={{color:'purple'}}>
                                <SlCalender/>
                            </div>
                            <h4>8</h4>
                            <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Interviews Today<br/>Scheduled</p>
                            {/* <span className='in-pipeline'style={{fontSize:'13px'}}>In pipeline</span> */}
                        </div>
                        <div className='twel-eve'>
                            <p>0</p>
                        </div>

                    </div>
                </div>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'style={{color:'#ea580c'}}>
                                <IoMdTime/>
                            </div>
                            <h4>28 days</h4>
                            <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Avg. Time to Hire<br/>This quarter</p>
                            {/* <span className='in-pipeline'style={{fontSize:'13px'}}>In pipeline</span> */}
                        </div>
                        <div className='twel-eve'>
                            <p>-3 days</p>
                        </div>

                    </div>
                </div>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'style={{color:'green'}}>
                                <FiCheckCircle/>
                            </div>
                            <h4>85.7%</h4>
                            <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Offer Acceptance</p>
                            <span className='in-pipeline'style={{fontSize:'13px'}}>Success rate</span>
                        </div>
                        <div className='twel-eve'>
                            <p>+12</p>
                        </div>

                    </div>
                </div>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'style={{color:'#5249e6'}}>
                                <SiJfrogpipelines/>
                            </div>
                            <h4>12.5%</h4>
                            {/* <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Pipeline <br/>Conversion<br/>Application to hire</p> */}
                            <span className='in-pipeline'style={{fontSize:'13px'}}>Pipeline <br/>Conversion<br/>Application to hire</span>
                        </div>
                        <div className='twel-eve'>
                            <p>+12</p>
                        </div>

                    </div>
                </div>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'style={{color:'orange'}}>
                                <FaArrowTrendUp/>
                            </div>
                            <h4>4.2/5</h4>
                            {/* <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Active Candidates</p> */}
                            <span className='in-pipeline'style={{fontSize:'13px'}}>Quality Score<br/>Hire quality</span>
                        </div>
                        <div className='twel-eve'>
                            <p>+0.3</p>
                        </div>

                    </div>
                </div>
                <div className='j-job-one'>
                    <div className='job-posting-container'>
                        <div>
                            <div className='outline'style={{color:'red'}}>
                                <MdOutlineErrorOutline/>
                            </div>
                            <h4>3</h4>
                            {/* <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Urge Candidates</p> */}
                            <span className='in-pipeline'style={{fontSize:'13px'}}>Urgent Positions<br/>Need attention</span>
                        </div>
                        <div className='twel-eve'>
                            <p>+1</p>
                        </div>

                    </div>
                </div>
                

            </div>
            <div className='job-line'></div>
            <div className='job-background-color'>
                <div className='job-details_'><br />
                    <h2>Job Postings</h2>
                    <p>Manage your open positions and job requirements</p><br />
                    <div className='pos-tings'>
                        <div className='posting-one'>
                            <div className='job-containers'>
                                <div className='jb-cont'>
                                    <div>
                                        <h3>Senior Frontend Developer</h3>
                                        <p className='e'>Engineering</p>
                                        <div className='jb_flex'>
                                            <div>
                                                <SlLocationPin />
                                            </div>
                                            <div>
                                                <p>San Francisco, CA</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <TbCurrencyNaira />
                                            </div>
                                            <div>
                                                <p>&#8358;120,000 - &#8358;150,000</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <IoTimeOutline />
                                            </div>
                                            <div>
                                                <p>Posted 2024-01-15
                                                </p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <BsPeople />
                                            </div>
                                            <div>
                                                <p>45 applications
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-p'style={{marginTop:'4px'}}>
                                        <p>high priority</p>
                                    </div>
                                    <div>
                                        <PiDotsThreeOutlineFill />
                                    </div>

                                </div><br />
                                <div className='d-line'></div>
                                <p>We're looking for a senior frontend developer to join our growing team...</p>
                                <span className='ky' style={{ fontWeight: '600', fontSize: '13px' }}>Key Requirements:</span><br/><br/>
                                <div className='five'>
                                    <div className='fi-ve'>
                                        <p>5+ years React experience</p>
                                    </div>
                                    <div className='fi-ve'>
                                        <p>TypeScript proficiency</p>
                                    </div>
                                    <div className='fi-vee'>
                                        <p>+1 more</p>
                                    </div>
                                </div><br/>
                                <div className='d-line'></div><br/>
                                <div className='avc'>
                                    <div className='active-g'>
                                        <p>active</p>
                                    </div>
                                    <div className='vc'style={{display:'flex',width:'40%',justifyContent:'space-between'}}>
                                        <div className='can_view'>
                                            <p>View</p>
                                        </div>
                                        <div className='can-di-date'>
                                            <p>Candidates</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='posting-one'>
                            <div className='job-containers'>
                                <div className='jb-cont'>
                                    <div>
                                        <h3>Senior Frontend Developer</h3>
                                        <p className='e'>Engineering</p>
                                        <div className='jb_flex'>
                                            <div>
                                                <SlLocationPin />
                                            </div>
                                            <div>
                                                <p>San Francisco, CA</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <TbCurrencyNaira />
                                            </div>
                                            <div>
                                                <p>&#8358;120,000 - &#8358;150,000</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <IoTimeOutline />
                                            </div>
                                            <div>
                                                <p>Posted 2024-01-15
                                                </p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <BsPeople />
                                            </div>
                                            <div>
                                                <p>45 applications
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-p'style={{marginTop:'4px'}}>
                                        <p>high priority</p>
                                    </div>
                                    <div>
                                        <PiDotsThreeOutlineFill />
                                    </div>

                                </div><br />
                                <div className='d-line'></div>
                                <p>We're looking for a senior frontend developer to join our growing team...</p>
                                <span className='ky' style={{ fontWeight: '600', fontSize: '13px' }}>Key Requirements:</span><br/><br/>
                                <div className='five'>
                                    <div className='fi-ve'>
                                        <p>5+ years React experience</p>
                                    </div>
                                    <div className='fi-ve'>
                                        <p>TypeScript proficiency</p>
                                    </div>
                                    <div className='fi-vee'>
                                        <p>+1 more</p>
                                    </div>
                                </div><br/>
                                <div className='d-line'></div><br/>
                                <div className='avc'>
                                    <div className='active-g'>
                                        <p>active</p>
                                    </div>
                                    <div className='vc'style={{display:'flex',width:'40%',justifyContent:'space-between'}}>
                                        <div className='can_view'>
                                            <p>View</p>
                                        </div>
                                        <div className='can-di-date'>
                                            <p>Candidates</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='posting-one'>
                            <div className='job-containers'>
                                <div className='jb-cont'>
                                    <div>
                                        <h3>Senior Frontend Developer</h3>
                                        <p className='e'>Engineering</p>
                                        <div className='jb_flex'>
                                            <div>
                                                <SlLocationPin />
                                            </div>
                                            <div>
                                                <p>San Francisco, CA</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <TbCurrencyNaira />
                                            </div>
                                            <div>
                                                <p>&#8358;120,000 - &#8358;150,000</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <IoTimeOutline />
                                            </div>
                                            <div>
                                                <p>Posted 2024-01-15
                                                </p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <BsPeople />
                                            </div>
                                            <div>
                                                <p>45 applications
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-p'style={{marginTop:'4px'}}>
                                        <p>high priority</p>
                                    </div>
                                    <div>
                                        <PiDotsThreeOutlineFill />
                                    </div>

                                </div><br />
                                <div className='d-line'></div>
                                <p>We're looking for a senior frontend developer to join our growing team...</p>
                                <span className='ky' style={{ fontWeight: '600', fontSize: '13px' }}>Key Requirements:</span><br/><br/>
                                <div className='five'>
                                    <div className='fi-ve'>
                                        <p>5+ years React experience</p>
                                    </div>
                                    <div className='fi-ve'>
                                        <p>TypeScript proficiency</p>
                                    </div>
                                    <div className='fi-vee'>
                                        <p>+1 more</p>
                                    </div>
                                </div><br/>
                                <div className='d-line'></div><br/>
                                <div className='avc'>
                                    <div className='active-g'>
                                        <p>active</p>
                                    </div>
                                    <div className='vc'style={{display:'flex',width:'40%',justifyContent:'space-between'}}>
                                        <div className='can_view'>
                                            <p>View</p>
                                        </div>
                                        <div className='can-di-date'>
                                            <p>Candidates</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='posting-one'>
                            <div className='job-containers'>
                                <div className='jb-cont'>
                                    <div>
                                        <h3>Senior Frontend Developer</h3>
                                        <p className='e'>Engineering</p>
                                        <div className='jb_flex'>
                                            <div>
                                                <SlLocationPin />
                                            </div>
                                            <div>
                                                <p>San Francisco, CA</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <TbCurrencyNaira />
                                            </div>
                                            <div>
                                                <p>&#8358;120,000 - &#8358;150,000</p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <IoTimeOutline />
                                            </div>
                                            <div>
                                                <p>Posted 2024-01-15
                                                </p>
                                            </div>
                                        </div>
                                        <div className='jb_flex'>
                                            <div>
                                                <BsPeople />
                                            </div>
                                            <div>
                                                <p>45 applications
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-p'style={{marginTop:'4px'}}>
                                        <p>high priority</p>
                                    </div>
                                    <div>
                                        <PiDotsThreeOutlineFill />
                                    </div>

                                </div><br />
                                <div className='d-line'></div>
                                <p>We're looking for a senior frontend developer to join our growing team...</p>
                                <span className='ky' style={{ fontWeight: '600', fontSize: '13px' }}>Key Requirements:</span><br/><br/>
                                <div className='five'>
                                    <div className='fi-ve'>
                                        <p>5+ years React experience</p>
                                    </div>
                                    <div className='fi-ve'>
                                        <p>TypeScript proficiency</p>
                                    </div>
                                    <div className='fi-vee'>
                                        <p>+1 more</p>
                                    </div>
                                </div><br/>
                                <div className='d-line'></div><br/>
                                <div className='avc'>
                                    <div className='active-g'>
                                        <p>active</p>
                                    </div>
                                    <div className='vc'style={{display:'flex',width:'40%',justifyContent:'space-between'}}>
                                        <div className='can_view'>
                                            <p>View</p>
                                        </div>
                                        <div className='can-di-date'>
                                            <p>Candidates</p>
                                        </div>
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

export default Postingdetails