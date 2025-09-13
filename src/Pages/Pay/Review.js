import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

function Review({ onNext, onBack }) {
    return (
        <div>
            <div className="scrollable">
                <div className="perosnal">
                    <div className="personal-details" style={{ marginTop: '20px' }}>
                        <div className='modal-modal-add' style={{ display: 'flex', gap: '5px' }}>
                            <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px', color: '#5b8af0' }}>
                                <TbCurrencyNaira />
                            </div>
                            <div
                            ><h3>Payroll Summary</h3></div>
                        </div>
                        <br />
                        <div className="amount-pay" style={{ display: 'flex', justifyContent: 'space-between', width: '85%', margin: 'auto' }}>
                            <div className="amt-one">
                                <h2>156</h2>
                                <p>Employees</p>
                            </div>
                            <div className="amt-two">
                                <h2>₦742,800</h2>
                                <p>Gross Pay</p>
                            </div>
                            <div className="amt-three">
                                <h2>₦148,560</h2>
                                <p>Deductions</p>
                            </div>
                            <div className="amt-fr">
                                <h2>₦594,240</h2>
                                <p>Net Pay</p>
                            </div>
                        </div>
                        <div className="perosnal">
                            <div className="personal-details" style={{ marginTop: '20px' }}>
                                <h3>Employee Details (Sample)</h3>
                                <p>Review individual employee calculations</p>

                            </div>
                            <div className="personal-details">
                                <div className="perosnal">
                                    <div className="personal-details" style={{ marginTop: '20px' }}>
                                        <div className="js" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                            <div>
                                                <h4>John Smith</h4>
                                                <p>Engineering</p>
                                            </div>
                                            <div className="amt-figure">
                                                <p>₦4,470</p>
                                            </div>
                                        </div>
                                        <div className="bobd" style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                                            <div>
                                                <p>Base: ₦4,500</p>
                                            </div>
                                            <div>
                                                <p>Overtime: ₦0</p>
                                            </div>
                                            <div>
                                                <p>Bonus: ₦0</p>
                                            </div>
                                            <div>
                                                <p>Deductions: ₦850</p>
                                            </div>
                                        </div>

                                    </div>
                                    <br />

                                </div>
                                <div className="perosnal">
                                    <div className="personal-details" style={{ marginTop: '20px' }}>
                                        <div className="js" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                            <div>
                                                <h4>John Smith</h4>
                                                <p>Engineering</p>
                                            </div>
                                            <div className="amt-figure">
                                                <p>₦4,470</p>
                                            </div>
                                        </div>
                                        <div className="bobd" style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                                            <div>
                                                <p>Base: ₦4,500</p>
                                            </div>
                                            <div>
                                                <p>Overtime: ₦0</p>
                                            </div>
                                            <div>
                                                <p>Bonus: ₦0</p>
                                            </div>
                                            <div>
                                                <p>Deductions: ₦850</p>
                                            </div>
                                        </div>

                                    </div>
                                    <br />

                                </div>
                                <div className="perosnal">
                                    <div className="personal-details" style={{ marginTop: '20px' }}>
                                        <div className="js" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                            <div>
                                                <h4>John Smith</h4>
                                                <p>Engineering</p>
                                            </div>
                                            <div className="amt-figure">
                                                <p>₦4,470</p>
                                            </div>
                                        </div>
                                        <div className="bobd" style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                                            <div>
                                                <p>Base: ₦4,500</p>
                                            </div>
                                            <div>
                                                <p>Overtime: ₦0</p>
                                            </div>
                                            <div>
                                                <p>Bonus: ₦0</p>
                                            </div>
                                            <div>
                                                <p>Deductions: ₦850</p>
                                            </div>
                                        </div>


                                    </div>
                                    <br />

                                </div>
                                <br />



                            </div>
                            

                        </div>
                        <br/>



                    </div>

                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
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
                            <button className='job-next' onClick={onNext}>Next

                            </button>
                        </div>
                    </div>
                </div>


            </div>




        </div>
    );
}

export default Review;
