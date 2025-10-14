import React from 'react'
import { HiMiniPlusSmall } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";

function Core() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-naira" style={{ fontSize: '21px', marginTop: '5px' }}>
                                {/* <FcGraduationCap /> */}
                            </div>
                            <div>
                                <h3>Core Competencies</h3>
                            </div>
                        </div>
                        <br />
                        <div className='skills_flex' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div className='per-input' style={{ width: '95%' }}>
                                {/* <label>Skill</label> */}
                                <input type='text' placeholder='Add a compentency to evaluate...'></input>
                            </div>
                            <div>
                                <button className='skill-button'><HiMiniPlusSmall /></button>
                            </div>
                        </div>
                        <br />

                        <div className='rating-scale'>
                            <div className='pp-mance'>
                                <p>Suggested Competencies</p><br />
                                <div className='performance-option'>
                                    <div className='comm-bord'>
                                        <div className='comm-plus'>
                                            <div className='plus-comm-icon'>
                                                <HiMiniPlusSmall />
                                            </div>
                                            <div>
                                                <p>Communication</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comm--bord'>
                                        <div className='comm-plus'>
                                            <div className='plus-comm-icon'>
                                                <HiMiniPlusSmall />
                                            </div>
                                            <div>
                                                <p>Leadership</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='performance-option'>
                                    <div className='comm-bord'>
                                        <div className='comm-plus'>
                                            <div className='plus-comm-icon'>
                                                <HiMiniPlusSmall />
                                            </div>
                                            <div>
                                                <p>Problem Solving</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comm--bord'>
                                        <div className='comm-plus'>
                                            <div className='plus-comm-icon'>
                                                <HiMiniPlusSmall />
                                            </div>
                                            <div>
                                                <p>Teamwork</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='performance-option'>

                                    <div className='comm--bord'>
                                        <div className='comm-plus'>
                                            <div className='plus-comm-icon'>
                                                <HiMiniPlusSmall />
                                            </div>
                                            <div>
                                                <p>Innovation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Rating Scale</p>
                                <div className='stah'style={{display:'flex',gap:'3px',marginTop:'5px'}}>
                                    <div className='cstar'style={{marginTop:'1px',color:'#facc15'}}>
                                        <IoMdStar/>
                                    </div>
                                    <div>
                                        <p>5 - Exceptional</p>
                                    </div>
                                </div>
                                <div className='stah'style={{display:'flex',gap:'3px',marginTop:'5px'}}>
                                    <div className='cstar'style={{marginTop:'1px',color:'#facc15'}}>
                                        <IoMdStar/>
                                    </div>
                                    <div>
                                        <p>4 - Exceeds Expectations</p>
                                    </div>
                                </div>
                                <div className='stah'style={{display:'flex',gap:'3px',marginTop:'5px'}}>
                                    <div className='cstar'style={{marginTop:'1px',color:'#facc15'}}>
                                        <IoMdStar/>
                                    </div>
                                    <div>
                                        <p>3 - Meet Expectations</p>
                                    </div>
                                </div>
                                <div className='stah'style={{display:'flex',gap:'3px',marginTop:'5px'}}>
                                    <div className='cstar'style={{marginTop:'1px'}}>
                                        <CiStar/>
                                    </div>
                                    <div>
                                        <p>2 - Below Expectations</p>
                                    </div>
                                </div>
                                <div className='stah'style={{display:'flex',gap:'3px',marginTop:'5px'}}>
                                    <div className='cstar'style={{marginTop:'1px'}}>
                                        <CiStar/>
                                    </div>
                                    <div>
                                        <p>1 - Needs Improvement</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />

                </div>
                <br />
                <div className='d-line'></div><br />
                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'flex-end' }}>

                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <div>
                            <button className='job-previous'>Cancel</button>
                        </div>
                        <div>
                            <button className='job-next'>Create Performance Review</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Core