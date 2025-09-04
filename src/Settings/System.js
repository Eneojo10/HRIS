import React from 'react'

function System() {
    return (
        <div>
            <div className='system_set-border'>
                <div className='company-info'>
                    <h2>Company Information</h2><br />
                    <div className='com-info'>
                        <div className='com-input'>
                            <h4>Company Name</h4>
                            <input type="text" value="Acme Corporation" readonly />


                        </div>
                        <div className='com-input'>
                            <h4>Timezone</h4>
                            <select>
                                <option>
                                    Eastern Time (UTC-5)
                                </option>
                                <option>Pacific Time (UTC-8)</option>
                                <option>Mountain Time (UTC-7)</option>
                                <option>Central Time (UTC-6)</option>
                                <option>Eastern Time (UTC-5)</option>
                            </select>
                        </div>
                    </div><br />
                    <div className='compnay-info-two'>
                        <div className='cominfo-two'>
                            <h4>Date Format</h4>
                            <select>
                                <option>
                                    MM/DD/YYYY
                                </option>
                                <option>DD/MM/YYY</option>
                                <option>YYYY-MM-DD</option>
                            </select>
                        </div>
                        <div className='cominfo-two'>
                            <h4>Currency</h4>
                            <select>
                                <option>
                                    USD
                                </option>
                                <option>EUR</option>
                                <option>GBP</option>
                                <option>CAD</option>
                            </select>
                        </div>
                        <div className='cominfo-two'>
                            <h4>Language</h4>
                            <select>
                                <option>
                                    English
                                </option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </div>

                    </div>

                </div>
                <br />

            </div>

            <div className='system_set-border'>
                <div className='preference'>
                    <h2>System Preferences</h2><br />
                    <div className='toggle' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4>Email Notifications</h4>
                            <p>Send system notifications via email</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className='toggle' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4>Automatic Backup</h4>
                            <p>Enable daily automatic backups</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className='toggle' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4>Maintenance Mode</h4>
                            <p>Enable maintenance mode for system updates</p>
                        </div>
                        <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>


                </div>

            </div>
            <div className='system_set-border'>
                <div className='email-config'>
                    <h2>Email Configuration</h2><br />
                    <div className='email-config-flex'>
                        <div className='smtp-server'>
                            <h4>SMTP Server</h4>
                            <input placeholder='smtp.gmail.com'></input>
                        </div>
                        <div className='smtp-server'>
                            <h4>SMTP Port</h4>
                            <input placeholder='587'></input>
                        </div>
                    </div>

                </div>
                <div className='email-config'>

                    <div className='email-config-flex'>
                        <div className='smtp-server'>
                            <h4>Username</h4>
                            <input placeholder='your-email@company.com'></input>
                        </div>
                        <div className='smtp-server'>
                            <h4>Password</h4>
                            <input type='password' placeholder='********'></input>
                        </div>
                    </div>
                    <div className='company-sig'>
                        <h4>Email Signature</h4>
                        <textarea placeholder="Best regards
HR Team
Acme Coporation"></textarea>

                    </div>
                    <div className='settings-defaults'>
                        <button className='defaultz'>Reset to Defaults</button>
                       <button className='save-changes'>Save Changes</button>
                    </div>


                </div><br />
                


            </div>
            <br/>
        </div>
    )
}

export default System