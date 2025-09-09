import React from 'react'
import { HiMiniPlusSmall } from "react-icons/hi2";

function Details() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Job Details</h3>

                            </div>
                        </div>
                        <br />
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Job Description</label><br />
                            <textarea placeholder='Describe the role and what the candidates will be doing...'></textarea>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Key Responsibilities</label><br />
                            <textarea placeholder='List the main responsibilities and duties...'></textarea>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Requirements</label><br />
                            <textarea placeholder='List the required qualifications...'></textarea>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Benefits & Perks</label><br />
                            <textarea placeholder='Describe the benefits packages & perks...'></textarea>
                        </div>
                        <div className='skills_flex' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div className='per-input' style={{ width: '95%' }}>
                                <label>Required Skill</label>
                                <input type='text' placeholder='Add a required skill...'></input>
                            </div>
                            <div>
                                <button className='skill-button'><HiMiniPlusSmall /></button>
                            </div>
                        </div>


                    </div>


                </div><br />
                <div className='d-line'></div><br />

                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <button className='job-cancel'>Cancel</button>
                    </div>
                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <div>
                            <button className='job-previous'>Previous</button>
                        </div>
                        <div>
                            <button className='job-next'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details