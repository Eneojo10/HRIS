import React from 'react'
import image from '../Images/user2.jpg'
import { GoComment } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";

function Leavedetails() {
    return (
        <div>
            <div className='leave-tags'>
                <div>
                    <h3>Leave Request</h3>
                </div>
                <div className='leave_tags'>
                    <div className="custom-select-wrapper">
                        {/* <label for="status-select">Status:</label> */}
                        <select id="status-select" class="custom-select">
                            <option value="">All Status</option>
                            <option value="active">Pending</option>
                            <option value="inactive">Approved</option>
                            <option value="pending">Rejected</option>
                        </select>
                    </div>
                    <div className="custom-select-wrapper">
                        {/* <label for="status-select">Status:</label> */}
                        <select id="status-select" class="custom-select">
                            <option value="">All Types</option>
                            <option value="active">Annual Leave</option>
                            <option value="inactive">Sick Leave</option>
                            <option value="pending">Personal Leave</option>
                        </select>
                    </div>


                </div>

            </div>
            <br />
            <div className='leave-comments_box'>
                <div className='l--flex' style={{ display: 'flex', width: '95%', margin: 'auto', justifyContent: 'space-between',marginTop:'20px' }}>

                    <div className='leave_image'style={{display:'flex',gap:'15px'}}>
                        <div className='lp'>
                            <img src={image} alt='' />
                        </div>
                        <div className='johnson'>
                            <h3>Sarah Johnson</h3>
                            <p>Senior Developer • Engineering</p>
                            <div className='days-holder'style={{display:'flex',gap:'10px',marginBottom:'6px'}}>
                                <div className='cdate'style={{display:'flex',gap:'5px'}}>
                                    <div>
                                        <SlCalender/>
                                    </div>
                                    <div>
                                        <p>2024-02-15 - 2024-02-19</p>
                                    </div>
                                </div>
                                <div className='days'style={{display:'flex',gap:'5px'}}>
                                    <div>
                                        <IoTimeOutline/>
                                    </div>
                                    <div>
                                        <p>5 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className='annual-leave'style={{display:'flex',gap:'17px',marginBottom:'7px'}}>
                                <div className='A'style={{backgroundColor:'#dbeafe',height:'20px',width:'35%',textAlign:'center',borderRadius:'16px',color:'#1e40af'}}>
                                    <p>Annual Leave</p>
                                </div>
                                <div className='p'style={{border:'1px solid #ec7223',height:'20px',width:'25%',borderRadius:'16px',textAlign:'center'}}>
                                    <p>Pending</p>
                                </div>
                            </div>
                            <h4><span className='reason'>Reason:</span> Family vacation</h4>
                            <p>Applied on 2024-01-28 • Manager: John Smith</p>
                        </div>
                    </div>
                    <div className='cra'style={{display:'flex',width:'90%',gap:'10px'}}>
                        <div className='reject'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <GoComment/> 
                                </div>
                                <h4>Comment</h4>
                            </div>
                        </div>
                        <div className='reject-two'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between',color:'red'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <FcCancel/> 
                                </div>
                                <h4>Reject</h4>
                            </div>
                        </div>
                        
                        <div className='approve'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <IoCheckmark/> 
                                </div>
                                <h4>Approve</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className='leave-comments_box'>
                <div className='l--flex' style={{ display: 'flex', width: '95%', margin: 'auto', justifyContent: 'space-between',marginTop:'20px' }}>

                    <div className='leave_image'style={{display:'flex',gap:'15px'}}>
                        <div className='lp'>
                            <img src={image} alt='' />
                        </div>
                        <div className='johnson'>
                            <h3>Sarah Johnson</h3>
                            <p>Senior Developer • Engineering</p>
                            <div className='days-holder'style={{display:'flex',gap:'10px',marginBottom:'6px'}}>
                                <div className='cdate'style={{display:'flex',gap:'5px'}}>
                                    <div>
                                        <SlCalender/>
                                    </div>
                                    <div>
                                        <p>2024-02-15 - 2024-02-19</p>
                                    </div>
                                </div>
                                <div className='days'style={{display:'flex',gap:'5px'}}>
                                    <div>
                                        <IoTimeOutline/>
                                    </div>
                                    <div>
                                        <p>5 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className='annual-leave'style={{display:'flex',gap:'17px',marginBottom:'7px'}}>
                                <div className='A'style={{backgroundColor:'#dbeafe',height:'20px',width:'35%',textAlign:'center',borderRadius:'16px',color:'#1e40af'}}>
                                    <p>Annual Leave</p>
                                </div>
                                <div className='p'style={{border:'1px solid #ec7223',height:'20px',width:'25%',borderRadius:'16px',textAlign:'center'}}>
                                    <p>Pending</p>
                                </div>
                            </div>
                            <h4><span className='reason'>Reason:</span> Family vacation</h4>
                            <p>Applied on 2024-01-28 • Manager: John Smith</p>
                        </div>
                    </div>
                    <div className='cra'style={{display:'flex',width:'90%',gap:'10px'}}>
                        <div className='reject'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <GoComment/> 
                                </div>
                                <h4>Comment</h4>
                            </div>
                        </div>
                        <div className='reject-two'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between',color:'red'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <FcCancel/> 
                                </div>
                                <h4>Reject</h4>
                            </div>
                        </div>
                        
                        <div className='approve'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <IoCheckmark/> 
                                </div>
                                <h4>Approve</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className='leave-comments_box'>
                <div className='l--flex' style={{ display: 'flex', width: '95%', margin: 'auto', justifyContent: 'space-between',marginTop:'20px' }}>

                    <div className='leave_image'style={{display:'flex',gap:'15px'}}>
                        <div className='lp'>
                            <img src={image} alt='' />
                        </div>
                        <div className='johnson'>
                            <h3>Sarah Johnson</h3>
                            <p>Senior Developer • Engineering</p>
                            <div className='days-holder'style={{display:'flex',gap:'10px',marginBottom:'6px'}}>
                                <div className='cdate'style={{display:'flex',gap:'5px'}}>
                                    <div>
                                        <SlCalender/>
                                    </div>
                                    <div>
                                        <p>2024-02-15 - 2024-02-19</p>
                                    </div>
                                </div>
                                <div className='days'style={{display:'flex',gap:'5px'}}>
                                    <div>
                                        <IoTimeOutline/>
                                    </div>
                                    <div>
                                        <p>5 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className='annual-leave'style={{display:'flex',gap:'17px',marginBottom:'7px'}}>
                                <div className='A'style={{backgroundColor:'#dbeafe',height:'20px',width:'35%',textAlign:'center',borderRadius:'16px',color:'#1e40af'}}>
                                    <p>Annual Leave</p>
                                </div>
                                <div className='p'style={{border:'1px solid #ec7223',height:'20px',width:'25%',borderRadius:'16px',textAlign:'center'}}>
                                    <p>Pending</p>
                                </div>
                            </div>
                            <h4><span className='reason'>Reason:</span> Family vacation</h4>
                            <p>Applied on 2024-01-28 • Manager: John Smith</p>
                        </div>
                    </div>
                    <div className='cra'style={{display:'flex',width:'90%',gap:'10px'}}>
                        <div className='reject'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <GoComment/> 
                                </div>
                                <h4>Comment</h4>
                            </div>
                        </div>
                        <div className='reject-two'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between',color:'red'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <FcCancel/> 
                                </div>
                                <h4>Reject</h4>
                            </div>
                        </div>
                        
                        <div className='approve'>
                            <div className='comm'style={{display:'flex',width:'82%',margin:'auto',justifyContent:'space-between'}}>
                                <div className='comment-icon'style={{marginTop:'10px'}}>
                                   <IoCheckmark/> 
                                </div>
                                <h4>Approve</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            
            
            
            
            

        </div>
    )
}

export default Leavedetails