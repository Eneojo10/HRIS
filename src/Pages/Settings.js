import React from 'react'
import Dashboard from '../Menu/Dashboard'
import { GoPlus } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { PiExportThin } from "react-icons/pi";

function Settings() {
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

                    </div><br/><br/>
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

                        </div><br/><br/><br/>
                        <div className='settings-big-border'>
                            
                        </div>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Settings