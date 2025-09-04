import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";

function Security() {
    return (
        <div>
            <div className='security-flex'>
                <div className='sec-boxes'>
                    <div className='secure-one'style={{padding:'15px',display:'flex',gap:'10px'}}>
                        <div className='secure-icon'style={{color:'green',fontSize:'21px',marginTop:'12px'}}>
                            <MdOutlineSecurity/>
                        </div>
                        <div>
                            <h2>Secure</h2>
                            <p>Security Status</p>
                        </div>
                    </div>

                </div>
                <div className='sec-boxes'>
                    <div className='twofourseven'style={{padding:'15px'}}>
                        <h2>247</h2>
                        <p>Active Sessions</p>
                    </div>

                </div>
                <div className='sec-boxes'>
                    <div className='alerts'style={{padding:'15px'}}>
                        <h2>12</h2>
                        <p>Security Alerts</p>
                    </div>

                </div>
            </div>
            <div className='big-secure-border'>
                <div className='authentication'>
                    <h2>Authentication & Access</h2><br/>
                    <div>
                        <div>
                            <h4>Two-Factor Authentication</h4>
                            <p>Require 2FA for all users</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Security