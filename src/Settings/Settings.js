import React, { useState } from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { PiExportThin } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuLockKeyhole } from "react-icons/lu";
import { PiLinkSimpleBold } from "react-icons/pi";
import System from './System';
import Umanagement from './Umanagement';
import Security from './Security';
import Integration from './Integration';

function Settings() {

    const [activeTab, setActiveTab] = useState('System')

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div>
            <div className='settings-container'>
                <div className='main1'>
                    <Dashboard />
                </div>

                <div className='settings-details'>
                    <div className='subSettingd-container'>
                        <div className='settings-flex'>
                            <div className='settings-nav'>
                                <h2>System Settings</h2>
                                <span>Manage system configuration and administrative controls</span>
                            </div>
                            <div className='settings__nav'>
                                <div className='set-tings-input'>
                                    <input type='text' placeholder='Search settings'></input>
                                </div>
                                <div className='set1'>
                                    <div className='set1-nav'>
                                        <div className=''>
                                            <PiExportThin />

                                        </div>
                                        <span>Export Config</span>

                                    </div>

                                </div>
                                <div className='set2'>
                                    <div className='set2-nav'>
                                        <div className='set3-icon'>
                                            <CiSettings />
                                        </div>
                                        <span>Backup</span>
                                    </div>
                                </div>
                                <div className='set3'>
                                    <div className='set3-nav'>
                                        <div className='set3-icon'>
                                            <GoPlus />
                                        </div>
                                        <h4>Add User</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div><br /><br />
                    <div className='d-line_'></div>

                    <div className='setting-cards'>
                        <div className='settings-cards-flex'>
                            <div className='set-card1'>

                            </div>
                            <div className='set-card1'>

                            </div>
                            <div className='set-card1'>

                            </div>
                            <div className='set-card1'>

                            </div>

                        </div><br /><br /><br />
                        <div className='settings-big-border'>
                            <div className='setting_lists'>
                                <div className='st-one' style={{ display: 'flex', width: '15%', justifyContent: 'space-between' }}>
                                    <div className='st-one-icon' style={{ fontSize: '19px' }}>
                                        <TbSettings />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('System')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "System" ? 'blue' : '#6b7280',
                                                // padding: '7px 35px',
                                                // borderRadius: '6px',
                                                transition: 'color 0.3s ease',
                                                // marginTop: '-6px'
                                            }}
                                        >System Settings</h4>
                                    </div>
                                </div>
                                <div className='st-one' style={{ display: 'flex', width: '17%', justifyContent: 'space-between' }}>
                                    <div className='st-one-icon' style={{ fontSize: '19px' }}>
                                        <HiOutlineUsers />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Management')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "Management" ? 'blue' : '#6b7280',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >User Management</h4>
                                    </div>
                                </div>
                                <div className='st-one' style={{ display: 'flex', width: '9%', justifyContent: 'space-between' }}>
                                    <div className='st-one-icon' style={{ fontSize: '17px' }}>
                                        <LuLockKeyhole />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Security')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "Security" ? 'blue' : '#6b7280',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >Security</h4>
                                    </div>
                                </div>
                                <div className='st-one' style={{ display: 'flex', width: '11%', justifyContent: 'space-between' }}>
                                    <div>
                                        <PiLinkSimpleBold />
                                    </div>
                                    <div>
                                        <h4 onClick={() => handleTabClick('Integration')}
                                            style={{
                                                cursor: 'pointer',
                                                color: activeTab === "Integration" ? 'blue' : '#6b7280',
                                                transition: 'color 0.3s ease',
                                                // textDecoration: activeTab === "Integration" ? 'underline' : 'none'
                                                // textDecoration:'underline'
                                            }}
                                        >Integration</h4>
                                    </div>

                                </div>

                            </div>
                            <div className='d-line'></div>
                            <div className='setting-system'>
                                <div className='performance-content'>
                                    {activeTab === 'System' && <System />}
                                    {activeTab === 'Management' && <Umanagement />}
                                    {activeTab === 'Security' && <Security />}
                                    {activeTab === 'Integration' && <Integration />}

                                </div>

                            </div>

                        </div>
                        <br />


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Settings