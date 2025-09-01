import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { GoStop } from "react-icons/go";

function Paydetails() {
    return (
        <div>
            <div className='pay_boxes_flex'>
                <div className='pay_bigbox'><br />
                    <div className='pay-roll-runs' style={{ width: '93%', margin: 'auto' }}>
                        <h2>Payroll Runs</h2>
                    </div>
                    <br />
                    <div className='pay_bigbox1'><br />
                        <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
                            <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='j-24' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3>January 2024</h3>
                                        <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>PR-2024-01</span>
                                    </div>
                                    <div className='monthly_'>
                                        <p>Monthly</p>
                                    </div>
                                </div>
                                <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                                    <div className='pay-process'>
                                        <p>Processing</p>
                                    </div>
                                    <div className='pay-view'>
                                        <p>View</p>
                                    </div>
                                </div>

                            </div><br />
                            <div className='etd' style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                                <div className='etd-1'>
                                    <h4>Employees</h4>
                                    <p>1,247</p>
                                </div>
                                <div className='etd-1'>
                                    <h4>Total Amount</h4>
                                    <p>$2,847,500</p>
                                </div>
                                <div className='etd-1'>
                                    <h4>Due Date</h4>
                                    <p>2024-01-31</p>
                                </div>
                            </div><br />
                            <div className='payrollprogress'>
                                <p>Progress</p>
                                <div className="payroll">
                                    <div className="payroll-fill" style={{ width: '60%' }}></div>
                                </div>
                            </div><br />

                        </div>


                    </div>
                    <div className='pay_bigbox1'><br />
                        <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
                            <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='j-24' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3>Q4 2023 Bonus</h3>
                                        <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>PR-2024-01</span>
                                    </div>
                                    <div className='monthly__'>
                                        <p>Monthly</p>
                                    </div>
                                </div>
                                <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                                    <div className='pay-process'>
                                        <p>Pending</p>
                                    </div>
                                    <div className='pay-view'>
                                        <p>View</p>
                                    </div>
                                </div>

                            </div><br />
                            <div className='etd' style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                                <div className='etd-1'>
                                    <h4>Employees</h4>
                                    <p>1,247</p>
                                </div>
                                <div className='etd-1'>
                                    <h4>Total Amount</h4>
                                    <p>$2,847,500</p>
                                </div>
                                <div className='etd-1'>
                                    <h4>Due Date</h4>
                                    <p>2024-01-31</p>
                                </div>
                            </div><br />
                            <div className='payrollprogress'>
                                <p>Progress</p>
                                <div className="payroll">
                                    <div className="payroll-fill" style={{ width: '60%' }}></div>
                                </div>
                            </div><br />

                        </div>


                    </div>
                    <div className='pay_bigbox1'><br />
                        <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
                            <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='j-24' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3>November 2023</h3>
                                        <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>PR-2024-01</span>
                                    </div>
                                    <div className='monthly__'>
                                        <p>Monthly</p>
                                    </div>
                                </div>
                                <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                                    <div className='pay-process'>
                                        <p>Completed</p>
                                    </div>
                                    <div className='pay-view'>
                                        <p>View</p>
                                    </div>
                                </div>

                            </div><br />
                            <div className='etd' style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                                <div className='etd-1'>
                                    <h4>Employees</h4>
                                    <p>1,247</p>
                                </div>
                                <div className='etd-1'>
                                    <h4>Total Amount</h4>
                                    <p>$2,847,500</p>
                                </div>
                                <div className='etd-1'>
                                    <h4>Due Date</h4>
                                    <p>2024-01-31</p>
                                </div>
                            </div><br />
                            <div className='payrollprogress'>
                                <p>Progress</p>
                                <div className="payroll">
                                    <div className="payroll-fill" style={{ width: '60%' }}></div>
                                </div>
                            </div><br />

                        </div>


                    </div>


                </div>
                <div className='pay_smallbox'>
                    <div className='payroll-small'>
                        <div className='pay_steps'>
                            <h2>Current Processing Steps</h2><br/>
                            <div className='data-validation'style={{display:'flex',gap:'10px'}}>
                                <div className='val-icon'>
                                    <IoMdCheckmarkCircleOutline />
                                </div>
                                <div>
                                    <h4>Data Validation</h4>
                                    <p>Est. 2 min</p>
                                </div>
                            </div>
                            <div className='data-validation'style={{display:'flex',gap:'10px'}}>
                                <div className='val-icon'>
                                    <IoMdCheckmarkCircleOutline />
                                </div>
                                <div>
                                    <h4>Salary Calculations</h4>
                                    <p>Est. 2 min</p>
                                </div>
                            </div>
                            <div className='data-validation'style={{display:'flex',gap:'10px'}}>
                                <div className='val__icon'>
                                    <IoMdTime />
                                </div>
                                <div>
                                    <h4>Tax Calculations</h4>
                                    <p>Est. 2 min</p>
                                </div>
                            </div>
                            <div className='data-validation'style={{display:'flex',gap:'10px'}}>
                                <div className='val_icon'>
                                    <GoStop />
                                </div>
                                <div>
                                    <h4>Deductions Processing</h4>
                                    <p>Est. 2 min</p>
                                </div>
                            </div>
                            <div className='data-validation'style={{display:'flex',gap:'10px'}}>
                                <div className='val_icon'>
                                    <GoStop />
                                </div>
                                <div>
                                    <h4>Final Review</h4>
                                    <p>Est. 2 min</p>
                                </div>
                            </div>
                            <div className='data-validation'style={{display:'flex',gap:'10px'}}>
                                <div className='val_icon'>
                                    <GoStop />
                                </div>
                                <div>
                                    <h4>Payment Generation</h4>
                                    <p>Est. 2 min</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Paydetails