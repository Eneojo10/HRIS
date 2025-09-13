import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Progrezz from "./Progrezz"

function Process({ onNext, onBack, step }) {
    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
                            <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#16a34a' }}>
                                <IoMdCheckmarkCircleOutline />
                            </div>
                            <div
                            ><h3>Payroll Processing Complete</h3></div>
                        </div>

                        <Progrezz step={step} />

                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
                            <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#16a34a' }}>
                                <IoMdCheckmarkCircleOutline />
                            </div>
                            <div
                            ><p>Validating employee data</p></div>
                        </div>
                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                            <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#16a34a' }}>
                                <IoMdCheckmarkCircleOutline />
                            </div>
                            <div
                            ><p>Calculating gross pay</p></div>
                        </div>
                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                            <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#16a34a' }}>
                                <IoMdCheckmarkCircleOutline />
                            </div>
                            <div
                            ><p>Processing deductions</p></div>
                        </div>
                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                            <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#16a34a' }}>
                                <IoMdCheckmarkCircleOutline />
                            </div>
                            <div
                            ><p>Generating pay stubs</p></div>
                        </div>
                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                            <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#16a34a' }}>
                                <IoMdCheckmarkCircleOutline />
                            </div>
                            <div
                            ><p>Preparing direct deposits</p></div>
                        </div>

                        <div className='process-bg'>
                            <div className='personal-details'>
                                <div className='modal-modal-add' style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
                                    <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#16a34a' }}>
                                        <IoMdCheckmarkCircleOutline />
                                    </div>
                                    <div className='com-pletely'
                                    ><h4>Payroll Processed completely!</h4>
                                    <p>All calculations completed and pay stubs generated.</p></div>
                                    
                                </div>

                            </div>

                        </div>
                        <br />

                    </div>

                </div>
                <br />
                <br />
                <br />
                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <button className='job-previous' onClick={onBack}>Previous</button>
                    </div>

                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <div>
                            <button className='job-previous'>Cancel</button>
                        </div>
                        <div>
                            <button className='job--next' onClick={onNext}>Process Payroll

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process