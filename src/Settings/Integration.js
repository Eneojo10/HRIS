import React from 'react'
import { HiOutlineRefresh } from "react-icons/hi";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiSlackFill } from "react-icons/ri";
import { SiQuickbooks } from "react-icons/si";
import { BsEnvelopeAt } from "react-icons/bs";
import { LiaJira } from "react-icons/lia";
import { FaSalesforce } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

function Integration() {
    return (
        <div>
            <div className='inte-gration'>
                <div className='integration-one'>
                    <div className='api'>
                        <h2>6</h2>
                        <p> Total Integrations</p>
                    </div>

                </div>
                <div className='integration-one'>
                    <div className='api'>
                        <h2 className='gree-n' style={{ color: '#16a34a' }}>4</h2>
                        <p> Connected</p>
                    </div>

                </div>
                <div className='integration-one'>
                    <div className='api'>
                        <h2 className='red-color' style={{ color: '#dc2626' }}>1</h2>
                        <p> Errors</p>
                    </div>

                </div>
                <div className='integration-one'>
                    <div className='api'>
                        <h2>1.2k</h2>
                        <p>API Calls Today</p>
                    </div>

                </div>
                <br />

            </div>
            <div className='api_configuration'>
                <div className='a-p-i'>
                    <h2>API Configuration</h2><br />
                    <div className='api_input'>
                        <h4>API Key</h4>
                        <div className='re-fresh'>
                            <div className='input_api'>
                                <input type='password' value='***********'></input>
                            </div>
                            <button className='refresh-btn'><HiOutlineRefresh /></button>
                        </div>

                    </div>
                    <div className='api_input'>
                        <h4>Webhook URL</h4>
                        <div className='re-fresh'>
                            <div className='input_apii'>
                                <input type='text' value='https://api.company.com/webhooks/hris'></input>
                            </div>
                            {/* <button className='refresh-btn'><HiOutlineRefresh /></button>    */}
                        </div>

                    </div>
                    <div>
                        <h4>Rate Limiting</h4>
                        <p>Enable API rate limiting</p><br />
                        <div className='windows'>
                            <div className='window-one'>
                                <h4>Request per window</h4>
                                <input value='1000'></input>
                            </div>
                            <div className='window-one'>
                                <h4>
                                    1000
                                    Window (seconds)</h4>
                                <input value='30'></input>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='available-integration'>
                        <div className='avail'>
                            <h2>Available Integrations</h2><br />
                            <div className='avail-boxes'>
                                <div className='avail-one'>
                                    <div className='m-team'>
                                        <div className='m--teams'>
                                            <div className='mteams'>
                                                <div className='team-mlogo' style={{ fontSize: '26px' }}>
                                                    <PiMicrosoftTeamsLogo />
                                                </div>
                                                <div>
                                                    <h4>Microsoft Teams</h4>
                                                    <p>Video conferencing and<br /> collaboration</p>
                                                    <div className='stb' style={{ marginTop: '3px' }}>
                                                        <h4>Last sync: 5 minutes ago</h4><br />


                                                    </div>
                                                </div>

                                            </div>
                                            <div className='connect-int'>
                                                <div className='t-m-logo'>
                                                    <div className='t-logo' style={{ marginTop: '3px', color: '#166534' }}>
                                                        <IoMdCheckmarkCircleOutline />
                                                    </div>
                                                    <div>
                                                        <p>connected</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub-teams'>
                                            <div className='cal-sync'>
                                                <p>Calendar sync</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Meeting rooms</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>User presence</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className='avail-one'>
                                    <div className='m-team'>
                                        <div className='m--teams'>
                                            <div className='mteams'>
                                                <div className='team-mlogo' style={{ fontSize: '26px' }}>
                                                    <RiSlackFill />
                                                </div>
                                                <div>
                                                    <h4>Slack</h4>
                                                    <p>Video conferencing and<br /> collaboration</p>
                                                    <div className='stb' style={{ marginTop: '3px' }}>
                                                        <h4>Last sync: 5 minutes ago</h4><br />

                                                    </div>
                                                </div>

                                            </div>
                                            <div className='connect-int'>
                                                <div className='t-m-logo'>
                                                    <div className='t-logo' style={{ marginTop: '3px', color: '#166534' }}>
                                                        <IoMdCheckmarkCircleOutline />
                                                    </div>
                                                    <div>
                                                        <p>connected</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub-teams'>
                                            <div className='cal-sync'>
                                                <p>Notifications</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>User sync</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Channel mapping</p>
                                            </div>

                                        </div>


                                    </div>

                                </div>
                                <div className='avail-one'>
                                    <div className='m-team'>
                                        <div className='m--teams'>
                                            <div className='mteams'>
                                                <div className='team-mlogo' style={{ fontSize: '26px' }}>
                                                    <SiQuickbooks />
                                                </div>
                                                <div>
                                                    <h4>QuickBooks</h4>
                                                    <p>Video conferencing and<br /> collaboration</p>
                                                    <div className='stb' style={{ marginTop: '3px' }}>
                                                        <h4>Last sync: 5 minutes ago</h4><br />

                                                    </div>
                                                </div>

                                            </div>
                                            <div className='connect--int'>
                                                <div className='t-m-lo-go'>
                                                    <div className='t-logo' style={{ marginTop: '3px', color: '#3e4652' }}>
                                                        <MdOutlineCancel />
                                                    </div>
                                                    <div>
                                                        <p>disconnected</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub-teams'>
                                            <div className='cal-sync'>
                                                <p>Payroll sync</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Expense tracking</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Tax reporting</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className='avail-one'>
                                    <div className='m-team'>
                                        <div className='m--teams'>
                                            <div className='mteams'>
                                                <div className='team-mlogo' style={{ fontSize: '26px' }}>
                                                    <BsEnvelopeAt />
                                                </div>
                                                <div>
                                                    <h4>Google Workspace</h4>
                                                    <p>Video conferencing and<br /> collaboration</p>
                                                    <div className='stb' style={{ marginTop: '3px' }}>
                                                        <h4>Last sync: 5 minutes ago</h4><br />

                                                    </div>
                                                </div>

                                            </div>
                                            <div className='connect-int'>
                                                <div className='t-m-logo'>
                                                    <div className='t-logo' style={{ marginTop: '3px', color: '#166534' }}>
                                                        <IoMdCheckmarkCircleOutline />
                                                    </div>
                                                    <div>
                                                        <p>connected</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub-teams'>
                                            <div className='cal-sync'>
                                                <p>Email sync</p>
                                            </div>
                                            <div className='cal--sync'>
                                                <p>Calender integration</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Drive access</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className='avail-one'>
                                    <div className='m-team'>
                                        <div className='m--teams'>
                                            <div className='mteams'>
                                                <div className='team-mlogo' style={{ fontSize: '26px' }}>
                                                    <LiaJira />
                                                </div>
                                                <div>
                                                    <h4>Jira</h4>
                                                    <p>Video conferencing and<br /> collaboration</p>
                                                    <div className='stb' style={{ marginTop: '3px' }}>
                                                        <h4>Last sync: 5 minutes ago</h4><br />

                                                    </div>
                                                </div>

                                            </div>
                                            <div className='connect-int'>
                                                <div className='t-m-logo'>
                                                    <div className='t-logo' style={{ marginTop: '3px', color: '#166534' }}>
                                                        <IoMdCheckmarkCircleOutline />
                                                    </div>
                                                    <div>
                                                        <p>connected</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub-teams'>
                                            <div className='cal-sync'>
                                                <p>Project sync</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Issue tracking</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Time logging</p>
                                            </div>

                                        </div>

                                    </div>


                                </div>
                                <div className='avail-one'>
                                    <div className='m-team'>
                                        <div className='m--teams'>
                                            <div className='mteams'>
                                                <div className='team-mlogo' style={{ fontSize: '26px' }}>
                                                    <FaSalesforce />
                                                </div>
                                                <div>
                                                    <h4>Salesforce</h4>
                                                    <p>Video conferencing and<br /> collaboration</p>
                                                    <div className='stb' style={{ marginTop: '3px' }}>
                                                        <h4>Last sync: 5 minutes ago</h4><br />

                                                    </div>
                                                </div>

                                            </div>
                                            <div className='connect---int'>
                                                <div className='t-m-logo'>
                                                    <div className='t-logo' style={{ marginTop: '3px', color: '#9c1b1b' }}>
                                                        <MdOutlineCancel />
                                                    </div>
                                                    <div>
                                                        <p>error</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub-teams'>
                                            <div className='cal-sync'>
                                                <p>Calendar sync</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>Meeting rooms</p>
                                            </div>
                                            <div className='cal-sync'>
                                                <p>User presence</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <br />


                            </div>


                        </div>


                    </div>
                    <div className='webhook_events'>
                        <div className='webhooksevents'>
                            <h2>Webhook Events</h2><br />
                            <div>
                                <p>Event Types</p>
                                <div className='event_types'>
                                    <textarea placeholder="Employee.created
employee.updated
employee.deleted
payroll.processed"></textarea>

                                </div>
                            </div><br />
                            <div className='web-s'>
                                <p>Webhook Secret</p>
                                <input placeholder="Enter webhook secret for verification"></input>
                            </div>

                        </div>
                        <br />

                    </div>
                    <br />
                    <div className='text-hook'>
                        <button className='testhook-btn'>Test Webhook</button>
                        <button className='testhookbtn'>Save Integration Settings</button>
                    </div>
                    <br />

                </div>

            </div>
            <br />
        </div>
    )
}

export default Integration