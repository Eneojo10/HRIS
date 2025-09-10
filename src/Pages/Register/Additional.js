import React from 'react'
import { FcGraduationCap } from "react-icons/fc";
import { HiMiniPlusSmall } from "react-icons/hi2";

function Additional() {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-naira" style={{ fontSize: '21px', marginTop: '5px' }}>
                                <FcGraduationCap />
                            </div>
                            <div>
                                <h3>Skills & Qualifications</h3>
                            </div>
                        </div>
                        <br />
                        <div className='skills_flex' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div className='per-input' style={{ width: '95%' }}>
                                <label>Skill</label>
                                <input type='text' placeholder='Add a skill'></input>
                            </div>
                            <div className='button-job'style={{marginTop:'22px'}}>
                                <button className='skill-button'><HiMiniPlusSmall /></button>
                            </div>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Education</label><br />
                            <textarea placeholder='Education background, degrees, institution...'></textarea>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Certifications</label><br />
                            <textarea placeholder='Professional certifications, licenses...'></textarea>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Previous Experience</label><br />
                            <textarea placeholder='Relevant work, experience...'></textarea>
                        </div>
                        <div className='s-textarea' style={{ marginBottom: '10px' }}>
                            <label>Additional Notes</label><br />
                            <textarea placeholder='Any addtional information...'></textarea>
                        </div>

                    </div>

                </div><br /><br />
                <div className='d-line'></div><br />
                <div className='employee-option-btn'>
                    <button className='cancel-btn'>Cancel</button>
                    <button className='cancel-btnn'>Add Employee</button>
                </div>

            </div>
        </div>
    )
}

export default Additional