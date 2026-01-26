import React, { useState } from 'react';
import Dashboard from '../Menu/Dashboard';
import Performancedetails from '../Performance/Performancedetails';
import Feedback from './Feedback';
import Performanceanalytics from './Performanceanalytics';
import Goals from './Goals';
import { BsPlus } from "react-icons/bs";
import { PiExport } from "react-icons/pi";
import PerformOne from '../Pages/Perform/PerformOne';
import GoalsKPIs from '../Pages/Perform/GoalsKPIs';
import Core from '../Pages/Perform/Core';
import Performsettings from '../Pages/Perform/Performsettings';

function Performance() {
    const [activeTab, setActiveTab] = useState('Performance');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTab, setModalTab] = useState('PerformOne');
    const [formData, setFormData] = useState({});

    const handlePerformOneNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setModalTab('GoalsKPIs');
    };

    const handleGoalsNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setModalTab('Core');
    };

    const handleCoreNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setModalTab('Performsettings');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalTab('PerformOne');
        setFormData({});
    };

    return (
        <div className='performance-container'>
            <div className='main1'>
                <Dashboard />
            </div>
            <div className='performance-navigations'>
                <div className='performance-header'>
                    <div className='performance-header-flex'>
                        <div>
                            <h2>Performance Management</h2>
                            <span className='performance-mgt'>
                                Manage employee performance, goals, and development
                            </span>
                        </div>
                        <div className='performance-right'>
                            <div className='exp-bg-bg'>
                                <div className='exp-exp'>
                                    <div className='exp-exp-icon'>
                                        <PiExport />
                                    </div>
                                    <div className='er-export'><h4>Export Report</h4></div>
                                </div>
                            </div>
                            <div className='cycle--flex'>
                                <div className='cycle-flex' onClick={() => setIsModalOpen(true)}>
                                    <div className='cycle-plus'>
                                        <BsPlus />
                                    </div>
                                    <div className='chfour'>
                                        <button className='addebtn'>New Review Cycle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className='modal-add' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3>Create Performance Review</h3>
                                    <button className='x-btn' onClick={handleCloseModal}>✖</button>
                                </div>
                                <br />

                                {/* Modal Tabs */}
                                <div className='modal-bg'>
                                    <div className='p-flex'>
                                        <div
                                            onClick={() => setModalTab('PerformOne')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'PerformOne' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Basic Info</h4>
                                        </div>
                                        <div
                                            onClick={() => setModalTab('GoalsKPIs')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'GoalsKPIs' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Goals & KPIs</h4>
                                        </div>
                                        <div
                                            onClick={() => setModalTab('Core')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Core' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Competencies</h4>
                                        </div>
                                        <div
                                            onClick={() => setModalTab('Performsettings')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Performsettings' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Settings</h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <form>
                                    <div className='performance-content'>
                                        {modalTab === 'PerformOne' && <PerformOne data={formData} onNext={handlePerformOneNext} onClose={handleCloseModal} />}
                                        {modalTab === 'GoalsKPIs' && <GoalsKPIs data={formData} onNext={handleGoalsNext} onClose={handleCloseModal} />}
                                        {modalTab === 'Core' && <Core data={formData} onNext={handleCoreNext} onClose={handleCloseModal} />}
                                        {modalTab === 'Performsettings' && <Performsettings data={formData} onClose={handleCloseModal} />}
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Main Page Tabs */}
                    <div className='goal'>
                        <div>
                            <h4
                                onClick={() => setActiveTab('Performance')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Performance' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >
                                Performance Reviews
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => setActiveTab('Goals')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Goals' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >
                                Goal Tracking
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => setActiveTab('Feedback')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Feedback' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >
                                Feedback Center
                            </h4>
                        </div>
                        <div>
                            <h4
                                onClick={() => setActiveTab('Analytics')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Analytics' ? '#f5f5faff' : 'transparent',
                                    padding: '7px 35px',
                                    borderRadius: '6px',
                                    transition: 'background-color 0.3s ease',
                                    marginTop: '-6px'
                                }}
                            >
                                Analytics
                            </h4>
                        </div>
                    </div>

                    <div className='d-line_'></div>
                </div>

                {/* Main Content Switch */}
                <div className='performance-content'>
                    {activeTab === 'Performance' && <Performancedetails />}
                    {activeTab === 'Feedback' && <Feedback />}
                    {activeTab === 'Analytics' && <Performanceanalytics />}
                    {activeTab === 'Goals' && <Goals />}
                </div>
            </div>
        </div>
    );
}

export default Performance;
