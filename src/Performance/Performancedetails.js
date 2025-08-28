import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import image from '../Images/user2.jpg'

function Performancedetails() {
    return (
        <div>
            <div className='performance-background'>
                <div className='goals-cards'>
                    <div className='g-cards1'>
                        <div className='flex-one'>
                            <div className='flex1'>
                                <div className='i-c-o-n' style={{ color: 'blue' }}>
                                    <IoPeopleOutline />
                                </div>
                                <div className='twelve'>

                                    <p>+12%</p>
                                </div>
                            </div><br />
                            <div className='flex-number'>
                                <h2>156</h2>
                                <p>Active Reviews</p>
                                <span>In progress this cycle</span>
                            </div>

                        </div>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one'>
                            <div className='flex1'>
                                <div className='i-c-o-n' style={{ color: 'blue' }}>
                                    <IoPeopleOutline />
                                </div>
                                <div className='twelve'>

                                    <p>+12%</p>
                                </div>
                            </div><br />
                            <div className='flex-number'>
                                <h2>156</h2>
                                <p>Goals Completed</p>
                                <span>This quarter</span>
                            </div>

                        </div>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one'>
                            <div className='flex1'>
                                <div className='i-c-o-n' style={{ color: 'blue' }}>
                                    <IoPeopleOutline />
                                </div>
                                <div className='twelve'>

                                    <p>+12%</p>
                                </div>
                            </div><br />
                            <div className='flex-number'>
                                <h2>156</h2>
                                <p>Avg Performance Score</p>
                                <span>Out of 5.0</span>
                            </div>

                        </div>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one'>
                            <div className='flex1'>
                                <div className='i-c-o-n' style={{ color: 'blue' }}>
                                    <IoPeopleOutline />
                                </div>
                                <div className='twelve'>

                                    <p>+12%</p>
                                </div>
                            </div><br />
                            <div className='flex-number'>
                                <h2>156</h2>
                                <p>Overdue Reviews</p>
                                <span>Need attention</span>
                            </div>

                        </div>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one'>
                            <div className='flex1'>
                                <div className='i-c-o-n' style={{ color: 'blue' }}>
                                    <IoPeopleOutline />
                                </div>
                                <div className='twelve'>

                                    <p>+12%</p>
                                </div>
                            </div><br />
                            <div className='flex-number'>
                                <h2>156</h2>
                                <p>Feedback Requests</p>
                                <span>Pending responses</span>
                            </div>

                        </div>

                    </div>
                    <div className='g-cards1'>
                        <div className='flex-one'>
                            <div className='flex1'>
                                <div className='i-c-o-n' style={{ color: 'blue' }}>
                                    <IoPeopleOutline />
                                </div>
                                <div className='twelve'>

                                    <p>+12%</p>
                                </div>
                            </div><br />
                            <div className='flex-number'>
                                <h2>156</h2>
                                <p>Review Completion</p>
                                <span>This cycle</span>
                            </div>

                        </div>

                    </div>
                </div><br />
                <div className='per-for-mance'>
                    <div>
                        <h2>Performance Reviews</h2>
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