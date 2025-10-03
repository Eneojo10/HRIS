import React from 'react'

function Summ() {
    return (
        <div>
            <div className='perosnal'>
                <div className='personal-details'style={{marginTop:'20px'}}>
                    <h3>Enrollment Summary</h3>
                    <p>Review your benefits selection before submitting</p>
                    <br />
                    <h4>Selected Plans</h4>
                    <br />
                    <div className='d-line'></div>
                    <br />
                    <div className='pre-month'>
                        <div>
                            <h4>Total Monthly Premium</h4>
                        </div>
                        <div>
                            <h4>₦0.00</h4>
                        </div>
                    </div>
                    <br />  
                    <div className='pre-check' style={{ display: 'flex', gap: '10px' }}>
                        <div className='pre-input'>
                            <input type='checkbox'></input>
                        </div>
                        <p>I acknowledge that I have reviewed and agree to the terms and conditions of the selected benefit plans</p>
                    </div>
                    <br />
                    <br />


                </div>

            </div>
            <br />
            <div className="bb-buttons">
                <button className="benefit-cancel">Cancel</button>
                <button className="benefits-sub">Submit Enrollment</button>
            </div>
        </div>
    )
}

export default Summ