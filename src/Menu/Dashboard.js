import React from 'react'
import img1 from '../Images/hr-logo-removebg-preview.png'
import { RxDashboard } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { CiTimer } from "react-icons/ci";
import { CgPerformance } from "react-icons/cg";
import { LiaClipboardListSolid } from "react-icons/lia";
import { GoPeople } from "react-icons/go";
import { BsPersonPlus } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";
import { FiDollarSign } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";
import { PiMedalLight } from "react-icons/pi";
import { SiClickhouse } from "react-icons/si";
import { TbCurrencyNaira } from "react-icons/tb";

function Dashboard() {
    return (
        <div className=''>
            <div className='mm'>
                <div className='hr-logo'>
                    <img src={img1} alt="HRIS Logo" className='logo' />
                    <div className='d1'>
                        <h4>HRIS Dashboard</h4>
                        <p>Human Resources</p>
                    </div>
                </div>
                <div className='list-container'>
                    <div className='d-line'></div>
                    <div className='D-list'>
                        <div className='overview'>
                            <h5>Overview</h5>
                        </div>
                        <a href='/mainboard' className='a-line'>
                            <div className='list-item'>
                                <div className='icons'>
                                    <RxDashboard />
                                </div>
                                <div className='icons_'>
                                    <span>Dashboard</span>
                                </div>
                            </div
                            ></a>
                        <a href='/analytics' className='a-line'>
                            <div className='list-item2'>
                                <div className='icons'>
                                    <SiSimpleanalytics />
                                </div>
                                <div className='icons_'>
                                    <span>Analytics</span>
                                </div>
                            </div>
                        </a>
                        <br />
                        <div className='mgt'>
                            <h4>Employee Management</h4>
                        </div>
                        <a href='/employees' className='a-line'>
                            <div className='list-item3'>
                                <div className='icons'>
                                    <GoPeople />
                                </div>
                                <div className='icons_'>
                                    <span>All Employees</span>
                                </div>
                            </div></a>
                        <a href='/recruitment' className='a-line'>
                            <div className='list-item4'>
                                <div className='icons'>
                                    <BsPersonPlus />
                                </div>
                                <div className='icons_'>
                                    <span>Recruitment</span>
                                </div>
                            </div></a>
                        <a href='/onboarding' className='a-line'>
                            <div className='list-item4'>
                                <div className='icons'>
                                    <LiaClipboardListSolid />
                                </div>
                                <div className='icons_'>
                                    <span>Onboarding</span>
                                </div>
                            </div></a>

                        <a href='/performance' className='a-line'>
                            <div className='list-item5'>
                                <div className='icons'>
                                    <CgPerformance />
                                </div>
                                <div className='icons_'>
                                    <span>Performance</span>
                                </div>
                            </div>
                        </a><br />
                        <div className='mgt'>
                            <h4>Time & Attendance</h4>
                        </div>
                        <a href='/tracking' className='a-line'>
                            <div className='list-item6'>
                                <div className='icons'>
                                    <CiTimer />
                                </div>
                                <div className='icons_'>
                                    <span>Time Tracking</span>
                                </div>
                            </div></a>
                        <a href='/management' className='a-line'>
                            <div className='list-item7'>
                                <div className='icons'>
                                    <GrSchedules />
                                </div>
                                <div className='icons_'>
                                    <span>Leave Management</span>
                                </div>
                            </div></a>
                        <a href='/schedules' className='a-line'>
                            <div className='list-item8'>
                                <div className='icons'>
                                    <GrSchedules />
                                </div>
                                <div className='icons_'>
                                    <span>Schedules</span>
                                </div>
                            </div></a>
                        <br />
                        <div className='mgt'>
                            <h4>Payroll & Benefits</h4>
                        </div>
                        <a href='/payroll' className='a-line'>
                            <div className='list-item9'>
                                <div className='icons'>
                                    <TbCurrencyNaira />
                                </div>
                                <div className='icons_'>
                                    <span>Payroll</span>
                                </div>
                            </div></a>
                        <a href='/benefits' className='a-line'>
                            <div className='list-item10'>
                                <div className='icons'>
                                    <PiMedalLight />
                                </div>
                                <div className='icons_'>
                                    <span>Benefits</span>
                                </div>
                            </div>
                        </a><br />
                        <div className='mgt'>
                            <h4>Organization</h4>
                        </div>
                        <a href='/departments' className='a-line'>
                            <div className='list-item011'>
                                <div className='icons'>
                                    <SiClickhouse />
                                </div>
                                <div className='icons_'>
                                    <span>Departments</span>
                                </div>
                            </div></a>
                        <a href='/settings' className='a-line'>
                            <div className='list-item012'>
                                <div className='icons'>
                                    <VscSettingsGear />
                                </div>
                                <div className='icons_'>
                                    <span>Settings</span>
                                </div>
                            </div></a>

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='d-line'>
                        
                    </div>
                    <div className='admn-container'style={{width:'93%',margin:'auto'}}>
                        <div className='admin-flex'style={{display:'flex',gap:'10px'}}>
                            <div className='admin-img'>

                            </div>
                            <div className='ad-user'>
                                <h4>Admin User</h4>
                                <p>admin@company.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard