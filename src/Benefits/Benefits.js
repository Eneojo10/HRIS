import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import Benefitsdetails from './Benefitsdetails';
import Plans from './Plans';
import Reports from './Reports';
import Benanalytics from './Benanalytics';

function Benefits() {

    const [activeTab, setActiveTab] = useState('Benefits')


    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    };

    return (
        <div>
            <div className='benefits_container'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='benefits-continer_'>
                    <div className='benefits_navigation'>
                        <div className='bm_'>
                            <h2>Benefits Management</h2>
                            <span>Manage employee benefits, enrollment, and plans</span>
                        </div>
                        <div className='benefits_navlist-'>
                            <div>
                                <h4>Export</h4>
                            </div>
                            <div>
                                <h4>Settings</h4>
                            </div>
                            <div className='new-enroll'>
                                <div className='ne1'>
                                    <div className='benplus'>
                                        <GoPlus />
                                    </div>
                                    <h4>New Enrollment</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-line_'></div>
                    <div className='benefit-background'>
                        <div className='b-holder'>
                            <div className='b-flex'>
                                <div className='benefits_cards'></div>
                                <div className='benefits_cards'></div>
                                <div className='benefits_cards'></div>
                                <div className='benefits_cards'></div>
                            </div><br />

                            <div className='benefits-bg'>
                                <div className='benefits-bgflex'>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Benefits')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Benefits' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Benefits Enrollment</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Plans')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Plans' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Benefits Plans</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Reports')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Reports' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Benefits Reports</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Analytics')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Analytics' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Benefits Analytics</h4>
                                    </div>
                                </div>

                            </div><br />
                            <div className='performance-content'>
                                {activeTab === 'Benefits' && <Benefitsdetails />}
                                {activeTab === 'Plans' && <Plans />}
                                {activeTab === 'Reports' && <Reports />}
                                {activeTab === 'Analytics' && <Benanalytics />}
                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Benefits