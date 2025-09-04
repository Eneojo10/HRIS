import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

function Security() {
    return (
        <div>
            <div className='security-flex'>
                <div className='sec-boxes'>
                    <div className='secure-one' style={{ padding: '15px', display: 'flex', gap: '10px' }}>
                        <div className='secure-icon' style={{ color: 'green', fontSize: '21px', marginTop: '12px' }}>
                            <MdOutlineSecurity />
                        </div>
                        <div>
                            <h2>Secure</h2>
                            <p>Security Status</p>
                        </div>
                    </div>

                </div>
                <div className='sec-boxes'>
                    <div className='twofourseven' style={{ padding: '15px' }}>
                        <h2>247</h2>
                        <p>Active Sessions</p>
                    </div>

                </div>
                <div className='sec-boxes'>
                    <div className='alerts' style={{ padding: '15px' }}>
                        <h2>12</h2>
                        <p>Security Alerts</p>
                    </div>

                </div>
            </div>
            <div className='big-secure-border'>
                <div className='authentication'>
                    <h2>Authentication & Access</h2><br />
                    <div className='sec-toggle' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h4>Two-Factor Authentication</h4>
                            <p>Require 2FA for all users</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div><br />
                    <div className='securities-input'>
                        <div className='secone-input'>
                            <h4>Password Expiry (days)</h4>
                            <input value='90'></input>
                        </div>
                        <div className='secone-input'>
                            <h4>Session Timeout (minutes)</h4>
                            <input value='30'></input>
                        </div>
                    </div>
                    <div className='max-login' style={{ marginTop: '25px' }}>
                        <h4>Max Login Attempts</h4>
                        <select>
                            <option>3 attempts</option>
                            <option>5 attempts</option>
                            <option>10 attempts</option>
                        </select>
                    </div>
                    <br />


                </div>


            </div>
            <div className='data-protection'>
                <div className='data-p'>
                    <h2>Data Protection</h2><br />
                    <div className='ip-white' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                        <div>
                            <h4>IP Whitelisting</h4>
                            <p>Restrict access to approved IP addresses</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className='ip-white' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                        <div>
                            <h4>Audit Logging</h4>
                            <p>Log all user activities and system changes</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className='ip-white' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h4>Data Encryption</h4>
                            <p>Encrypt sensitive data at rest and in transit</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <br />

                </div>


            </div>
            <div className='security-event'>
                <div className='sec-event'>
                    <h2>Recent Security Events</h2><br />
                    <div className='error_border'>
                        <div className='recent_flex'>
                            <div className='error-login'>
                                <div className='error--icon'>
                                    <BiError />
                                </div>
                                <div>
                                    <h4>Failed login attempt</h4>
                                    <p>User: unknown@external.com | IP: 192.168.1.100</p>
                                </div>
                            </div>
                            <div className='error-date'>
                                <div className='high-error'>
                                    <h4>high</h4>
                                </div>
                                <div>
                                    <p>2024-01-15 14:30:22</p>
                                </div>
                            </div>
                           
                        </div>
                         <br/>
                    </div>
                    <div className='error_border'>
                        <div className='recent_flex'>
                            <div className='error-login'>
                                <div className='error--icon'style={{color:'#ecbb22'}}>
                                    <IoMdTime />
                                </div>
                                <div>
                                    <h4>Password changed</h4>
                                    <p>User: sarah.johnson@company.com | IP: 10.0.0.45</p>
                                </div>
                            </div>
                            <div className='error-date'>
                                <div className='medium-error'>
                                    <h4>medium</h4>
                                </div>
                                <div>
                                    <p>2024-01-15 14:30:22</p>
                                </div>
                            </div>
                           
                        </div>
                         <br/>
                    </div>
                    <div className='error_border'>
                        <div className='recent_flex'>
                            <div className='error-login'>
                                <div className='error--icon'style={{color:'#ecbb22'}}>
                                    <IoMdTime />
                                </div>
                                <div>
                                    <h4>User role modified</h4>
                                    <p>User: admin@company.com | IP: 10.0.0.12</p>
                                </div>
                            </div>
                            <div className='error-date'>
                                <div className='medium-error'>
                                    <h4>medium</h4>
                                </div>
                                <div>
                                    <p>2024-01-15 14:30:22</p>
                                </div>
                            </div>
                           
                        </div>
                         <br/>
                    </div>
                    <div className='error_border'>
                        <div className='recent_flex'>
                            <div className='error-login'>
                                <div className='error--icon'style={{color:'green'}}>
                                    <IoMdCheckmarkCircleOutline />
                                </div>
                                <div>
                                    <h4>Successful login</h4>
                                    <p>User: michael.chen@company.com | IP: 10.0.0.78</p>
                                </div>
                            </div>
                            <div className='error-date'>
                                <div className='low-error'>
                                    <h4>low</h4>
                                </div>
                                <div>
                                    <p>2024-01-15 14:30:22</p>
                                </div>
                            </div>
                           
                        </div>
                         <br/>
                    </div>

                </div>

            </div><br/>
            <div className='sss'>
                <button className='sss-btn'>Export Security Report</button>
                <button className='sss_btn'>Save Security Settings</button>
            </div>
            <br/>
        </div>
    )
}

export default Security