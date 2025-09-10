import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import { PiExport } from "react-icons/pi";
import Leavedetails from './Leavedetails';
import Calender from './Calender';
import Balance from './Balance';
import Leaveanalytics from './Leaveanalytics';
import { IoMdTime } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdPeopleOutline } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import Request from '../Pages/Request/Request';

function Leave() {

    const [activeTab, setActiveTab] = useState('Request')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div>
            <div className='leave-container'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='leave--container'>
                    <div className='leave_con'>
                        <div className='leave-con-flex'>
                            <div className='l-mgt'>
                                <h2>Leave Management</h2>
                            </div>
                            <div className='ll--flex'>
                                <div className='l-export'>
                                    <div className='l-flex'>
                                        <div className='ec--icon'>
                                            <PiExport />
                                        </div>
                                        <h4>Export</h4>
                                    </div>
                                </div>
                                <div className='leave-bgg'>
                                    <div className='leave-bg-flex' onClick={() => setIsModalOpen(true)}>
                                        <div className='leave--nav-icon'>
                                            <GoPlus />
                                        </div>
                                        <button className='addebtn'>Request Leave</button>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div><br />

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className='modal-add' style={{ display: 'flex', gap: '5px' }}>
                                    {/* <div className='modal-icon' style={{ fontSize: '21px' }}>
                                        <GoPersonAdd />
                                    </div> */}
                                    <div
                                    ><h3>Request Leave</h3></div>
                                    {/* <button onClick={() => setIsModalOpen(false)}>✖</button> */}
                                </div>
                                <br />
                                

                                <form>
                                    <div className='performance-content'>
                                        {activeTab === 'Request' && <Request />}
                                        

                                    </div>

                                </form>
                            </div>
                        </div>
                    )}
                    <div className='d-line_'></div>
                    <div className='leave_background-color'>
                        <div className='leave_cards'>
                            <div className='leave-cards'>
                                <div className='leave-card1'>
                                    <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                        <div className='leave-pending'>
                                            <h4>Pending Requests</h4>
                                            <span><h2>23</h2></span>
                                            <p>+3 from yesterday</p>
                                        </div>
                                        <div className='red' style={{ color: 'red', fontSize: '21px' }}>
                                            <IoMdTime />
                                        </div>
                                    </div><br />

                                </div>
                                <div className='leave-card1'>
                                    <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                        <div className='leave-pending'>
                                            <h4>Approved Today</h4>
                                            <span><h2>12</h2></span>
                                            <p>+2 from yesterday</p>
                                        </div>
                                        <div className='red' style={{ color: 'green', fontSize: '21px' }}>
                                            <IoMdCheckmarkCircleOutline />
                                        </div>
                                    </div><br />

                                </div>
                                <div className='leave-card1'>
                                    <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                        <div className='leave-pending'>
                                            <h4>On Leave Today</h4>
                                            <span><h2>45</h2></span>
                                            <p>8% of workforce</p>
                                        </div>
                                        <div className='red' style={{ color: 'blue', fontSize: '21px' }}>
                                            <MdPeopleOutline />
                                        </div>
                                    </div><br />

                                </div>
                                <div className='leave-card1'>
                                    <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                        <div className='leave-pending'>
                                            <h4>Avg. Processing Time</h4>
                                            <span><h2>2.3 days</h2></span>
                                            <p>-0.3 days improved</p>
                                        </div>
                                        <div className='red' style={{ color: 'purple', fontSize: '21px' }}>
                                            <FaArrowTrendUp />
                                        </div>
                                    </div><br />

                                </div>


                            </div><br /><br />
                            <div className='leave-bg'>
                                <div className='leave_card_text'>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Request')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Request' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Leave Requests</h4>
                                    </div>
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
                                        >Leave Calender</h4>
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Balance')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Balance' ? 'white' : 'transparent',
                                                padding: '7px 35px',
                                                borderRadius: '6px',
                                                transition: 'background-color 0.3s ease',
                                                marginTop: '-6px'
                                            }}
                                        >Leave Balances</h4>
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
                                        >Leave Analytics</h4>
                                    </div>

                                </div>
                            </div>
                            <br />

                            <div className='performance-content'>
                                {activeTab === 'Request' && <Leavedetails />}
                                {activeTab === 'Calender' && <Calender />}
                                {activeTab === 'Balance' && <Balance />}
                                {activeTab === 'Analytics' && <Leaveanalytics />}


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leave