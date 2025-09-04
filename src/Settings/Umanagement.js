import React from 'react'
import image from '../Images/user2.jpg'
import { RxDotsHorizontal } from "react-icons/rx";

function Umanagement() {
  return (
    <div>
        <div className='u-mgt'>
            <div className='u_boxes-flex'>
                <div className='u-boxes'>
                    <div className='mgt-numbers'>
                        <h2>246</h2>
                        <p>Total Users</p>
                    </div>
                    
                </div>
                <div className='u-boxes'>
                    <div className='mgt-numbers'>
                        <h2>12</h2>
                        <p>Admins</p>
                    </div>
                    
                </div>
                <div className='u-boxes'>
                    <div className='mgt-numbers'>
                        <h2>45</h2>
                        <p>Managers</p>
                    </div>
                    
                </div>
                <div className='u-boxes'>
                    <div className='mgt-numbers'>
                        <h2>22</h2>
                        <p>Pending Invites</p>
                    </div>
                    
                </div>
            </div>
            <div className='management_bigborder'>
                <div className='mgt-mgt'>
                    <div className='flex-mgt-top'>
                        <div>
                            <h2>User Management</h2>
                        </div>
                        <button className='mgt-adduser'>Add User</button>
                    </div><br/>
                    <div className='mgtinput'>
                        <input type='text'placeholder='Search users...'></input>
                    </div>
                    <div className='hr-mgt'>
                        <div className='mgt-content'>
                            <div className='mgt-profile'>
                                <div className='mi'style={{display:'flex',gap:'20px'}}>
                                    <div className='management-images'>
                                        <img src={image} alt=''/>
                                    </div>
                                    <div>
                                        <h4>Sarah Johnson</h4>
                                        <p>sarah.johnson@company.com</p>
                                        <span>HR</span>
                                    </div>
                                </div>
                                <div className='right_side-mgt'style={{display:'flex',width:'70%',justifyContent:'space-between'}}>
                                    <div>
                                        <p>Admin</p>
                                    </div>
                                    <div>
                                        <p>Active</p>
                                    </div>
                                    <div>
                                        <p>Last login: 2 hours ago</p>
                                    </div>
                                    <div className='mgt-dots'>
                                        <RxDotsHorizontal/>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='hr-mgt'>
                        <div className='mgt-content'>
                            <div className='mgt-profile'>
                                <div className='mi'style={{display:'flex',gap:'20px'}}>
                                    <div className='management-images'>
                                        <img src={image} alt=''/>
                                    </div>
                                    <div>
                                        <h4>Michael Chen</h4>
                                        <p>michael.chen@company.com</p>
                                        <span>Finance</span>
                                    </div>
                                </div>
                                <div className='right_side-mgt'style={{display:'flex',width:'70%',justifyContent:'space-between'}}>
                                    <div>
                                        <p>Manager</p>
                                    </div>
                                    <div>
                                        <p>Active</p>
                                    </div>
                                    <div>
                                        <p>Last login: 2 hours ago</p>
                                    </div>
                                    <div className='mgt-dots'>
                                        <RxDotsHorizontal/>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='hr-mgt'>
                        <div className='mgt-content'>
                            <div className='mgt-profile'>
                                <div className='mi'style={{display:'flex',gap:'20px'}}>
                                    <div className='management-images'>
                                        <img src={image} alt=''/>
                                    </div>
                                    <div>
                                        <h4>Michael Chen</h4>
                                        <p>michael.chen@company.com</p>
                                        <span>Marketing</span>
                                    </div>
                                </div>
                                <div className='right_side-mgt'style={{display:'flex',width:'70%',justifyContent:'space-between'}}>
                                    <div>
                                        <p>HR Specialist</p>
                                    </div>
                                    <div>
                                        <p>Active</p>
                                    </div>
                                    <div>
                                        <p>Last login: 2 hours ago</p>
                                    </div>
                                    <div className='mgt-dots'>
                                        <RxDotsHorizontal/>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='hr-mgt'>
                        <div className='mgt-content'>
                            <div className='mgt-profile'>
                                <div className='mi'style={{display:'flex',gap:'20px'}}>
                                    <div className='management-images'>
                                        <img src={image} alt=''/>
                                    </div>
                                    <div>
                                        <h4>Michael Chen</h4>
                                        <p>michael.chen@company.com</p>
                                        <span>Engineering</span>
                                    </div>
                                </div>
                                <div className='right_side-mgt'style={{display:'flex',width:'70%',justifyContent:'space-between'}}>
                                    <div>
                                        <p>Employee</p>
                                    </div>
                                    <div>
                                        <p>Active</p>
                                    </div>
                                    <div>
                                        <p>Last login: 2 hours ago</p>
                                    </div>
                                    <div className='mgt-dots'>
                                        <RxDotsHorizontal/>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    

                </div>

            </div>

        </div>
    </div>
  )
}

export default Umanagement