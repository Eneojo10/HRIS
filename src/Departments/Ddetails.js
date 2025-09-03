import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import image from '../Images/user2.jpg'
import { IoPeopleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

function Ddetails() {
    return (
        <div>
            <div className='dcs-flex'>
                <div className='dcs'>
                    <div className='dcs-box-container'>
                        <div className='dcs_flex' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div>
                                <div className='dept-title'style={{backgroundColor:'#dbeafe',width:'40%',textAlign:'center',height:'28px',borderRadius:'16px',paddingTop:'2px'}}><p>Engineering</p></div><br />
                                <h3>Engineering</h3>
                                <p className='dcs-para'>Software development and technical operations</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                        <div className='dcs-image-holder' style={{ display: 'flex', gap: '10px' }}>
                            <div className='dcs-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p className='dcs-para'>Department Manager</p>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <IoPeopleOutline />
                                </div>
                                <div>
                                    <p>342 employees</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <CiLocationOn />
                                </div>
                                <div>
                                    <p>Maitama, Abuja</p>
                                </div>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '29%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Est. 2018</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>

                                <div>
                                    <p>$4.2M
                                        budget</p>
                                </div>
                            </div>
                        </div>
                        <div className='dept-perfor_mance'>
                            <p>Performance</p>
                            <div className='dept'>
                                <div className='dept-fill' style={{ width: '70%' }}></div> {/* example: 70% performance */}
                            </div>
                        </div>
                        <div className='db-btn'style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                            <div className='dbutton'>
                                <button className='dept_butoon'>View</button>
                            </div>
                            <div className='dbutton'>
                                <button className='dept_butoon'>Edit</button>
                            </div>
                           
                        </div>


                    </div>
                </div>
                <div className='dcs'>
                    <div className='dcs-box-container'>
                        <div className='dcs_flex' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div>
                                <div className='dept-title'style={{backgroundColor:'#dcfce7',color:'#337b4e',width:'25%',textAlign:'center',height:'28px',borderRadius:'16px',paddingTop:'2px'}}><p>Sales</p></div><br />
                                <h3>Sales</h3>
                                <p className='dcs-para'>Software development and technical operations</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                        <div className='dcs-image-holder' style={{ display: 'flex', gap: '10px' }}>
                            <div className='dcs-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p className='dcs-para'>Department Manager</p>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <IoPeopleOutline />
                                </div>
                                <div>
                                    <p>342 employees</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <CiLocationOn />
                                </div>
                                <div>
                                    <p>Maitama, Abuja</p>
                                </div>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '29%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Est. 2018</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>

                                <div>
                                    <p>$4.2M
                                        budget</p>
                                </div>
                            </div>
                        </div>
                        <div className='dept-perfor_mance'>
                            <p>Performance</p>
                            <div className='dept'>
                                <div className='dept-fill' style={{ width: '70%' }}></div> {/* example: 70% performance */}
                            </div>
                        </div>
                        <div className='db-btn'style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                            <div className='dbutton'>
                                <button className='dept_butoon'>View</button>
                            </div>
                            <div className='dbutton'>
                                <button className='dept_butoon'>Edit</button>
                            </div>
                           
                        </div>


                    </div>
                </div>
                <div className='dcs'>
                    <div className='dcs-box-container'>
                        <div className='dcs_flex' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div>
                                <div className='dept-title'style={{backgroundColor:'#f3e8ff',color:'#7e3cb4',width:'37%',textAlign:'center',height:'28px',borderRadius:'16px',paddingTop:'2px'}}><p>Marketing</p></div><br />
                                <h3>Marketing</h3>
                                <p className='dcs-para'>Software development and technical operations</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                        <div className='dcs-image-holder' style={{ display: 'flex', gap: '10px' }}>
                            <div className='dcs-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p className='dcs-para'>Department Manager</p>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <IoPeopleOutline />
                                </div>
                                <div>
                                    <p>342 employees</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <CiLocationOn />
                                </div>
                                <div>
                                    <p>Maitama, Abuja</p>
                                </div>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '29%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Est. 2018</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>

                                <div>
                                    <p>$4.2M
                                        budget</p>
                                </div>
                            </div>
                        </div>
                        <div className='dept-perfor_mance'>
                            <p>Performance</p>
                            <div className='dept'>
                                <div className='dept-fill' style={{ width: '70%' }}></div> {/* example: 70% performance */}
                            </div>
                        </div>
                        <div className='db-btn'style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                            <div className='dbutton'>
                                <button className='dept_butoon'>View</button>
                            </div>
                            <div className='dbutton'>
                                <button className='dept_butoon'>Edit</button>
                            </div>
                           
                        </div>


                    </div>
                </div>
                <div className='dcs'>
                    <div className='dcs-box-container'>
                        <div className='dcs_flex' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div>
                                <div className='dept-title'style={{backgroundColor:'#ffedd5',color:'#9a3412',width:'56%',textAlign:'center',height:'28px',borderRadius:'16px',paddingTop:'2px'}}><p>Human Resources</p></div><br />
                                <h3>Human Resources</h3>
                                <p className='dcs-para'>Software development and technical operations</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                        <div className='dcs-image-holder' style={{ display: 'flex', gap: '10px' }}>
                            <div className='dcs-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p className='dcs-para'>Department Manager</p>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <IoPeopleOutline />
                                </div>
                                <div>
                                    <p>342 employees</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <CiLocationOn />
                                </div>
                                <div>
                                    <p>Maitama, Abuja</p>
                                </div>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '29%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Est. 2018</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>

                                <div>
                                    <p>$4.2M
                                        budget</p>
                                </div>
                            </div>
                        </div>
                        <div className='dept-perfor_mance'>
                            <p>Performance</p>
                            <div className='dept'>
                                <div className='dept-fill' style={{ width: '70%' }}></div> {/* example: 70% performance */}
                            </div>
                        </div>
                        <div className='db-btn'style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                            <div className='dbutton'>
                                <button className='dept_butoon'>View</button>
                            </div>
                            <div className='dbutton'>
                                <button className='dept_butoon'>Edit</button>
                            </div>
                           
                        </div>


                    </div>
                </div>
                <div className='dcs'>
                    <div className='dcs-box-container'>
                        <div className='dcs_flex' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div>
                                <div className='dept-title'style={{backgroundColor:'#fef9c3',color:'#854d0e',width:'30%',textAlign:'center',height:'28px',borderRadius:'16px',paddingTop:'2px'}}><p>Finance</p></div><br />
                                <h3>Finance</h3>
                                <p className='dcs-para'>Software development and technical operations</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                        <div className='dcs-image-holder' style={{ display: 'flex', gap: '10px' }}>
                            <div className='dcs-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p className='dcs-para'>Department Manager</p>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <IoPeopleOutline />
                                </div>
                                <div>
                                    <p>342 employees</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <CiLocationOn />
                                </div>
                                <div>
                                    <p>Maitama, Abuja</p>
                                </div>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '29%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Est. 2018</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>

                                <div>
                                    <p>$4.2M
                                        budget</p>
                                </div>
                            </div>
                        </div>
                        <div className='dept-perfor_mance'>
                            <p>Performance</p>
                            <div className='dept'>
                                <div className='dept-fill' style={{ width: '70%' }}></div> {/* example: 70% performance */}
                            </div>
                        </div>
                        <div className='db-btn'style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                            <div className='dbutton'>
                                <button className='dept_butoon'>View</button>
                            </div>
                            <div className='dbutton'>
                                <button className='dept_butoon'>Edit</button>
                            </div>
                           
                        </div>


                    </div>
                    <br/>
                </div>
                <div className='dcs'>
                    <div className='dcs-box-container'>
                        <div className='dcs_flex' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div>
                                <div className='dept-title'style={{backgroundColor:'#e0e7ff',color:'#4039a8',width:'37%',textAlign:'center',height:'28px',borderRadius:'16px',paddingTop:'2px'}}><p>Operations</p></div><br />
                                <h3>Operations</h3>
                                <p className='dcs-para'>Software development and technical operations</p>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                        <div className='dcs-image-holder' style={{ display: 'flex', gap: '10px' }}>
                            <div className='dcs-image'>
                                <img src={image} alt='' />
                            </div>
                            <div>
                                <h4>Sarah Johnson</h4>
                                <p className='dcs-para'>Department Manager</p>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <IoPeopleOutline />
                                </div>
                                <div>
                                    <p>342 employees</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <CiLocationOn />
                                </div>
                                <div>
                                    <p>Maitama, Abuja</p>
                                </div>
                            </div>
                        </div>
                        <div className='three-four-two' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='threefourtwo' style={{ display: 'flex', width: '29%', justifyContent: 'space-between', marginTop: '10px' }}>
                                <div className='tft'>

                                    <SlCalender />
                                </div>
                                <div>
                                    <p>Est. 2018</p>
                                </div>
                            </div>
                            <div className='threefourtwo' style={{ display: 'flex', width: '43%', justifyContent: 'space-between', marginTop: '10px' }}>

                                <div>
                                    <p>$4.2M
                                        budget</p>
                                </div>
                            </div>
                        </div>
                        <div className='dept-perfor_mance'>
                            <p>Performance</p>
                            <div className='dept'>
                                <div className='dept-fill' style={{ width: '70%' }}></div> {/* example: 70% performance */}
                            </div>
                        </div>
                        <div className='db-btn'style={{display:'flex',gap:'10px',marginTop:'20px'}}>
                            <div className='dbutton'>
                                <button className='dept_butoon'>View</button>
                            </div>
                            <div className='dbutton'>
                                <button className='dept_butoon'>Edit</button>
                            </div>
                           
                        </div>


                    </div>
                </div>
                <br/>
                
            </div>

        </div>
    )
}

export default Ddetails