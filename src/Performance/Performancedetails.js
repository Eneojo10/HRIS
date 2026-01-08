import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { FiAward } from "react-icons/fi";
import image from '../Images/user2.jpg'
import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineTrackChanges } from "react-icons/md";
import { color } from 'chart.js/helpers';

function Performancedetails() {

    // const styles ={
    //     cardf: {
    //         color:'red'
    //     }
    // }
    return (
        <div>
            <div className='performance-background'>
                <div className='goals-cards'>
                    <div className='g-cards1'>
                        <div className='flex-one' style={{ marginTop: '20px' }}>

                            <div className='flex-number'>
                                <p>Average <br />Performance</p>


                            </div>

                            <div className='flex1x'>
                                <div className='ue'>

                                    <h2>4.2</h2>
                                </div>
                                <div className='i-c-o-n' style={{ color: 'purple' }}>
                                    <FiAward />
                                </div>

                            </div>
                            <span className='from'>+0.3 from last month</span>

                        </div>
                        <br/>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one' style={{ marginTop: '20px' }}>

                            <div className='flex-number'>
                                <p>Reviews Completed</p>


                            </div>

                            <div className='flex1x'>
                                <div className='ue'>

                                    <h2>89%</h2>
                                </div>
                                <div className='i-c-o-n' style={{ color: 'blue' }}>
                                    <IoPeople />
                                </div>

                            </div>
                            <span className='from'>+12% from last month</span>

                        </div>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one' style={{ marginTop: '20px' }}>

                            <div className='flex-number'>
                                <p>Goals on Track</p>


                            </div>

                            <div className='flex1x'>
                                <div className='ue'>

                                    <h2>156</h2>
                                </div>
                                <div className='i-c-o-n' style={{ color: '#1c8443' }}>
                                    <MdOutlineTrackChanges />
                                </div>

                            </div>
                            <span className='fr-om'>-8 from last month</span>

                        </div>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one' style={{ marginTop: '20px' }}>

                            <div className='flex-number'>
                                <p>Average Review Time</p>


                            </div>

                            <div className='flex1x'>
                                <div className='ue'>

                                    <h2>12 days</h2>
                                </div>
                                <div className='i-c-o-n' style={{ color: '#ea580c' }}>
                                    <IoMdTime />
                                </div>

                            </div>
                            <span className='from'>-2 days from last<br/> month</span>

                        </div>

                    </div>
                    

                </div><br />
                <div className='per-for-mance'>
                    <div>
                        <h2>Performance Reviews</h2>
                        {/* <div style={styles.cardf}>
                            <h3>Hello there...</h3>

                        </div> */}
                    </div><br /><br />
                    <div className='pr1-card'>
                        <div className='p_flex'>
                            <div className='p-names'>
                                <div className='performance-image'>
                                    <img src={image} alt='user2' />
                                </div>
                                <div className='sj'>
                                    <h4>Sarah Johnson  <span className='in'>In progress</span></h4>
                                    <p>Senior Developer • Engineering</p>
                                    <div className='due' style={{ display: 'flex' }}>
                                        <div>
                                            <span className='inn'>Reviewer</span>
                                        </div>
                                        <div>
                                            <span className='inn'>Due: 2024-02-15</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p></p>
                                </div>

                            </div>
                            <div className='perfoman-ce-list'>
                                <div class="progress-container">
                                    <p>Progress</p>
                                    <div class="progress--bar">
                                        <div class="progress-fill" style={{ width: '60%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <p>Goals</p>
                                    <span>6/8</span>
                                </div>
                                <div>
                                    <p>Score</p>
                                    <span>4.2</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='pr1-card'>
                        <div className='p_flex'>
                            <div className='p-names'>
                                <div className='performance-image'>
                                    <img src={image} alt='user2' />
                                </div>
                                <div className='sj'>
                                    <h4>Sarah Johnson  <span className='in' style={{ backgroundColor: '#fee2e2', color: '#bd322f' }}>Overdue</span></h4>
                                    <p>Senior Developer • Engineering</p>
                                    <div className='due' style={{ display: 'flex' }}>
                                        <div>
                                            <span className='inn'>Reviewer</span>
                                        </div>
                                        <div>
                                            <span className='inn'>Due: 2024-02-15</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p></p>
                                </div>

                            </div>
                            <div className='perfoman-ce-list'>
                                <div class="progress-container">
                                    <p>Progress</p>
                                    <div class="progress--bar">
                                        <div class="progress-fill" style={{ width: '60%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <p>Goals</p>
                                    <span>6/8</span>
                                </div>
                                <div>
                                    <p>Score</p>
                                    <span>4.2</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='pr1-card'>
                        <div className='p_flex'>
                            <div className='p-names'>
                                <div className='performance-image'>
                                    <img src={image} alt='user2' />
                                </div>
                                <div className='sj'>
                                    <h4>Sarah Johnson  <span className='in' style={{ backgroundColor: '#f3f4f6', color: '#4f5561' }}>Scheduled</span></h4>
                                    <p>Senior Developer • Engineering</p>
                                    <div className='due' style={{ display: 'flex' }}>
                                        <div>
                                            <span className='inn'>Reviewer</span>
                                        </div>
                                        <div>
                                            <span className='inn'>Due: 2024-02-15</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p></p>
                                </div>

                            </div>
                            <div className='perfoman-ce-list'>
                                <div class="progress-container">
                                    <p>Progress</p>
                                    <div class="progress--bar">
                                        <div class="progress-fill" style={{ width: '60%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <p>Goals</p>
                                    <span>6/8</span>
                                </div>
                                <div>
                                    <p>Score</p>
                                    <span>4.2</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='pr1-card'>
                        <div className='p_flex'>
                            <div className='p-names'>
                                <div className='performance-image'>
                                    <img src={image} alt='user2' />
                                </div>
                                <div className='sj'>
                                    <h4>Sarah Johnson  <span className='in' style={{ backgroundColor: '#dcfce7', color: '#3b8a53' }}>Completed</span></h4>
                                    <p>Senior Developer • Engineering</p>
                                    <div className='due' style={{ display: 'flex' }}>
                                        <div>
                                            <span className='inn'>Reviewer</span>
                                        </div>
                                        <div>
                                            <span className='inn'>Due: 2024-02-15</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p></p>
                                </div>

                            </div>
                            <div className='perfoman-ce-list'>
                                <div class="progress-container">
                                    <p>Progress</p>
                                    <div class="progress--bar">
                                        <div class="progress-fill" style={{ width: '60%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <p>Goals</p>
                                    <span>6/8</span>
                                </div>
                                <div>
                                    <p>Score</p>
                                    <span>4.2</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Performancedetails