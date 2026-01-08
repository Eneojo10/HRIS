import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import { PiExport } from "react-icons/pi";
import Scheduledetails from './Scheduledetails';
import Shiftdetails from './Shiftdetails';
import Employeedetailz from './Employeedetailz';
import Sanalytics from './Sanalytics';
import Shift from '../Pages/Schedules/Shift';
import Recurring from '../Pages/Schedules/Recurring';
import Bulk from '../Pages/Schedules/Bulk';
import { BsPeople } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiError } from "react-icons/bi";
import { BsPersonCheckFill } from "react-icons/bs";
import { WiTime3 } from "react-icons/wi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Schedules() {

    const [activeTab, setActiveTab] = useState('Calender')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalTab, setModalTab] = useState('Shift')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div>
            <div className='schedule-container'>
                <div className='main1'>
                    <Dashboard />

                </div>
                <div className='analytics-flex-side'>
                    <div className='schedule-subcon'>
                        <div className='leave-flex'>
                            <div className='schedule_mgt'>
                                <h2>Management</h2>
                                <span>Manage employee schedules, shifts, and workforce planning</span>
                            </div>
                            <div className='ec' style={{ marginTop: '20px' }}>
                                <div className='schedule_export'>
                                    <div className='schedule_exp-flex'>
                                        <div className='ec--icon'>
                                            <PiExport />
                                        </div>
                                        <h4>Export</h4>
                                    </div>
                                </div>
                                <div className='ec-bg'style={{height:'40px'}}>
                                    <div className='ec_flex' onClick={() => {
                                        setIsModalOpen(true);
                                        setActiveTab('Schedule')
                                    }}>
                                        <div className='ec--icon'style={{marginTop:'3px'}}>
                                            <GoPlus />
                                        </div>
                                        <button className='addebtn'>Create Schedule</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className='modal-add' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3>Create Performance Review</h3>
                                    <button className='x-btn' onClick={() => setIsModalOpen(false)}>✖</button>
                                </div>
                                <br />

                                {/* Modal Tabs */}
                                <div className='modal-bg'>
                                    <div className='p-flex'>
                                        <div
                                            onClick={() => setModalTab('Shift')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Shift' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Single Shift</h4>
                                        </div>
                                        <div
                                            onClick={() => setModalTab('Recurring')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Recurring' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Recurring Shift</h4>
                                        </div>
                                        <div
                                            onClick={() => setModalTab('Bulk')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: modalTab === 'Bulk' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'
                                        >
                                            <h4>Bulk Scheduling</h4>
                                        </div>

                                    </div>


                                </div>

                                {/* Modal Content */}
                                <form>
                                    <div className='performance-content'>
                                        {modalTab === 'Shift' && <Shift />}
                                        {modalTab === 'Recurring' && <Recurring />}
                                        {modalTab === 'Bulk' && <Bulk />}


                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    <div className='d-line_'></div>
                    <div className='sch-du-le'>
                        <div className='leave_cards_'>
                            <div className='sheet-cards'>
                                <div className='schdule-card1'>
                                    <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <p>Total Employees</p>

                                            <h2>24</h2>
                                            <span className='yes' style={{ fontSize: '12px' }}>All scheduled this week</span>
                                        </div>
                                        <div className='stp-watch' style={{ fontSize: '21px', color: 'blue' }}>
                                            <BsPeople />
                                        </div>
                                    </div>
                                    

                                </div>
                                <div className='schdule-card1'>
                                    <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <p>Active Shifts</p>

                                            <h2>24</h2>
                                            <span className='yes' style={{ fontSize: '12px' }}>Currently running</span>
                                        </div>
                                        <div className='stp-watch' style={{ fontSize: '21px', color: '#16a34a' }}>
                                            <WiTime3 />
                                        </div>
                                    </div>
                                    <div className='arr-ow' style={{ display: 'flex', justifyContent: 'flex-end', width: '80%', margin: 'auto', marginBottom: '6px' }}>
                                        <div className='arrtwo'>
                                            <FaArrowTrendUp />
                                        </div>
                                    </div>

                                </div>
                                <div className='schdule-card1'>
                                    <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <p>Coverage Rate</p>

                                            <h2>92.8%</h2>
                                            <span className='yes' style={{ fontSize: '12px' }}>+2.1% from last<br/> week</span>
                                        </div>
                                        <div className='stp-watch' style={{ fontSize: '21px', color: '#16a34a' }}>
                                            <IoMdCheckmarkCircleOutline />
                                        </div>
                                    </div>
                                    <div className='arr-ow' style={{ display: 'flex', justifyContent: 'flex-end', width: '80%', margin: 'auto', marginBottom: '6px' }}>
                                        <div className='arrtwo'>
                                            <FaArrowTrendUp />
                                        </div>
                                    </div>

                                </div>
                                <div className='schdule-card1'>
                                    <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <p>Open Shifts</p>

                                            <h2>9</h2>
                                            <span className='yes' style={{ fontSize: '12px' }}>Need coverage</span>
                                        </div>
                                        <div className='stp-watch' style={{ fontSize: '21px', color: 'red' }}>
                                            <BiError />
                                        </div>
                                    </div>
                                    

                                </div>
                                <div className='schdule-card1'>
                                    <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <p>Overtime Hours</p>

                                            <h2>9</h2>
                                            <span className='yes' style={{ fontSize: '12px' }}>This week</span>
                                        </div>
                                        <div className='stp-watch' style={{ fontSize: '21px', color: 'purple' }}>
                                            <FaArrowTrendUp />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='schdule-card1'>
                                    <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <p>On Schedule</p>

                                            <h2>148/156</h2>
                                            <span className='yes' style={{ fontSize: '12px' }}>94.9%<br/> attendance</span>
                                        </div>
                                        <div className='stp-watch' style={{ fontSize: '21px', color: '#16a34a' }}>
                                            <BsPersonCheckFill />
                                        </div>
                                    </div>
                                    <div className='arr-ow' style={{ display: 'flex', justifyContent: 'flex-end', width: '80%', margin: 'auto', marginBottom: '6px' }}>
                                        <div className='arrtwo'>
                                            <FaArrowTrendUp />
                                        </div>
                                    </div>

                                </div>
                                
                            </div>

                        </div><br />
                        <div className='schedule_details'>
                            <div className='schedule-bg'>
                                <div className='schdule_flex_'>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Calender')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Calender' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Schedule Calender</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Shift')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Shift' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Shift Management</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Schedule')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Schedule' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Employee Schedule</h4>
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
                                        >Analytics</h4>
                                    </div>
                                </div>

                            </div>
                            <div className='performance-content'>
                                {activeTab === 'Calender' && <Scheduledetails />}
                                {activeTab === 'Shift' && <Shiftdetails />}
                                {activeTab === 'Schedule' && <Employeedetailz />}
                                {activeTab === 'Analytics' && <Sanalytics />}
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Schedules