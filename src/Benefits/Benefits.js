import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import Benefitsdetails from './Benefitsdetails';
import Plans from './Plans';
import Reports from './Reports';
import Benanalytics from './Benanalytics';
import { CiSettings } from "react-icons/ci";
import { PiExport } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import Bplans from '../Pages/Benefitsplans/Bplans';
import Dependent from "../Pages/Benefitsplans/Dependent"
import Summ from '../Pages/Benefitsplans/Summ'

function Benefits() {

    const [activeTab, setActiveTab] = useState('Benefits')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTab, setModalTab] = useState('select');


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
                            <div className='dvr2'>
                                <div className='dvr2-flex'>
                                    <div className='impo-rt-icon'>
                                        <PiExport />
                                    </div>
                                    <span>Export</span>
                                </div>
                            </div>
                            <div className='flex-setting-holder'>
                                <div className='sett-ings-flex'>
                                    <div className='impo-rt-icon'>
                                        <CiSettings />
                                    </div>
                                    <span>Settings</span>
                                </div>
                            </div>
                            <div className='new-enroll'>
                                <div className='ne1' onClick={() => {
                                    setIsModalOpen(true);
                                    setModalTab('single');
                                    setIsModalOpen(true);
                                    setModalTab('Bplans');
                                }}>
                                    <div className='benplus'>
                                        <GoPlus />
                                    </div>
                                    <button className='addebtn'style={{marginTop:'-4px'}}>Enroll Benefits</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className='modal'>
                                <div className='modal-add' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='modal-modal-add' style={{ display: 'flex', gap: '10px' }}>
                                        <div className='modal-icon' style={{ fontSize: '21px', marginTop: '3px', color: '#5b8af0' }}>
                                            <CiHeart />

                                        </div>
                                        <div>
                                            <h3>Benefits Enrollment</h3>
                                        </div>

                                    </div>
                                    <button className='x-btn' onClick={() => setIsModalOpen(false)}>✖</button>

                                </div>

                                <br />

                                <div className='modal-bg'>
                                    <div className='p-flex'>
                                        <div
                                            onClick={() => setModalTab('Bplans')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Bplans' ? 'white' : 'transparent',
                                                padding: '3px 70px',
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Select Plans</h4>

                                        </div>
                                        <div
                                            onClick={() => setModalTab('Dependents')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Dependents' ? 'white' : 'transparent',
                                                padding: '3px 70px',
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Dependents</h4>

                                        </div>
                                        <div
                                            onClick={() => setModalTab('Summ')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Summ' ? 'white' : 'transparent',
                                                padding: '3px 70px',
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Summary</h4>

                                        </div>

                                    </div>

                                </div>

                                <form>
                                    <div className='performance-content'>
                                        {modalTab === 'Bplans' && <Bplans />}
                                        {modalTab === 'Dependents' && <Dependent />}
                                        {modalTab === 'Summ' && <Summ />}



                                    </div>

                                </form>

                            </div>

                        </div>
                    )}
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