import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import image from '../Images/user2.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoCircle } from "react-icons/go";
import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FiAward } from "react-icons/fi";

function Goals() {
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
            <br />

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
              <span className='from'>-2 days from last<br /> month</span>

            </div>

          </div>


        </div><br />

        <br />
        <div className='per-for-mance'>
          <div className='gt'>
            <h2>Goal Tracking</h2>
          </div>
          <br /><br />

          <div className='goals-table'>
            <div className='goals-table1' style={{ display: 'flex', justifyContent: 'space-between' }}>

              {/* Left Section */}
              <div className='gttext' style={{ width: '55%' }}>
                <div className='goals-table1-header' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='gt-text-1'>
                    <h3>Increase team productivity by 25%</h3>
                  </div>
                  <div className='gt-text-3'>
                    <p>On Track</p>
                  </div>
                  <div className='gt-text-2'>
                    <p>High</p>
                  </div>
                </div>

                <p>Implement new workflow processes and tools to boost team efficiency</p>

                {/* Performance header */}
                <div className='gt-performce' style={{ display: 'flex', width: '55%', justifyContent: 'space-between' }}>
                  <div>
                    <p>2024-01-01 - 2024-03-31</p>
                  </div>
                  <div className='performance-p'>
                    <p>Performance</p>
                  </div>
                </div>

                {/* Progress Bar */}

              </div>

              {/* Right Section */}
              <div className='gt-userimg'>
                <div className='gt-img'>
                  <img src={image} alt='img' className='goal-image' />
                </div>
                <div className='gt-username' style={{ marginTop: '9px' }}>
                  <h4>Sarah Johnson</h4>
                </div>
              </div>

            </div>
            <div className='goal-progress' style={{ width: '95%', margin: 'auto', marginTop: '20px' }}>
              <h4 style={{ marginBottom: '8px' }}>Progress</h4>

              <div style={{ position: 'relative', width: '100%' }}>
                <div className="goal" style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '90%',   // <-- this should match the text value
                    height: '100%',
                    backgroundColor: 'black',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>

              
                <span style={{
                  position: 'absolute',
                  top: '-20px',       
                  left: '90%',        
                  transform: 'translateX(-50%)',
                  fontWeight: 'bold'
                }}>
                  90%
                </span>
              </div>
            </div>

            <div className='milestones' style={{ marginTop: '20px', width: '95%', margin: 'auto' }}>
              <h4>Milestones</h4>
              <div className='milestone-items' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '55%' }}>
                <div>
                  <div></div>
                  <div>
                    <p><span className='gt-mark' style={{ color: 'green' }}><IoMdCheckmarkCircleOutline /></span>Research Tools</p> <br />
                    <p><span><GoCircle /></span>Train team</p>
                  </div>
                </div>
                <div>
                  <p><span className='gt-mark' style={{ color: 'green', paddingTop: '10px' }}><IoMdCheckmarkCircleOutline /></span>Implement workflow</p><br />
                  <p><span><GoCircle /></span>Measure results</p>
                </div>

              </div>
            </div>
            <br />
          </div>
          <div className='goals-table'>
            <div className='goals-table1' style={{ display: 'flex', justifyContent: 'space-between' }}>

              {/* Left Section */}
              <div className='gttext' style={{ width: '55%' }}>
                <div className='goals-table1-header' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='gt-text-1'>
                    <h3>Launch new product feature
                    </h3>
                  </div>
                  <div className='gt-text-3'>
                    <p>On Track</p>
                  </div>
                  <div className='gt-text-2'>
                    <p>High</p>
                  </div>
                </div>

                <p>Design and implement user dashboard redesign</p>

                {/* Performance header */}
                <div className='gt-performce' style={{ display: 'flex', width: '55%', justifyContent: 'space-between' }}>
                  <div>
                    <p>2024-01-01 - 2024-03-31</p>
                  </div>
                  <div className='performance-p'>
                    <p>Project</p>
                  </div>
                </div>

                {/* Progress Bar */}

              </div>

              {/* Right Section */}
              <div className='gt-userimg'>
                <div className='gt-img'>
                  <img src={image} alt='img' className='goal-image' />
                </div>
                <div className='gt-username' style={{ marginTop: '9px' }}>
                  <h4>Sarah Johnson</h4>
                </div>
              </div>

            </div>
            <div className='goal-progress' style={{ width: '95%', margin: 'auto', marginTop: '20px' }}>
              <h4 style={{ marginBottom: '8px' }}>Progress</h4>

              <div style={{ position: 'relative', width: '100%' }}>
                <div className="goal" style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '90%',
                    height: '100%',
                    backgroundColor: 'black',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>

                {/* Label at the extreme end */}
                <span style={{
                  position: 'absolute',
                  top: '-20px',       // places it above the bar
                  left: '90%',        // aligns with the end of the fill
                  transform: 'translateX(-50%)', // centers over the end
                  fontWeight: 'bold'
                }}>
                  90%
                </span>
              </div>
            </div>

            <div className='milestones' style={{ marginTop: '20px', width: '95%', margin: 'auto' }}>
              <h4>Milestones</h4>
              <div className='milestone-items' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '55%' }}>
                <div>
                  <div></div>
                  <div>
                    <p><span className='gt-mark' style={{ color: 'green' }}><IoMdCheckmarkCircleOutline /></span>Research Tools</p> <br />
                    <p><span><GoCircle /></span>Train team</p>
                  </div>
                </div>
                <div>
                  <p><span className='gt-mark' style={{ color: 'green', paddingTop: '10px' }}><IoMdCheckmarkCircleOutline /></span>Implement workflow</p><br />
                  <p><span><GoCircle /></span>Measure results</p>
                </div>

              </div>
            </div>
            <br />
          </div>
          <div className='goals-table'>
            <div className='goals-table1' style={{ display: 'flex', justifyContent: 'space-between' }}>

              {/* Left Section */}
              <div className='gttext' style={{ width: '55%' }}>
                <div className='goals-table1-header' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='gt-text-1'>
                    <h3>Complete advanced certification</h3>
                  </div>
                  <div className='gt-text-3'>
                    <p>On Track</p>
                  </div>
                  <div className='gt-text-2'>
                    <p>High</p>
                  </div>
                </div>

                <p>Obtain AWS Solutions Architect Professional certification</p>

                {/* Performance header */}
                <div className='gt-performce' style={{ display: 'flex', width: '55%', justifyContent: 'space-between' }}>
                  <div>
                    <p>2024-01-01 - 2024-03-31</p>
                  </div>
                  <div className='performance-p'>
                    <p>Development</p>
                  </div>
                </div>

                {/* Progress Bar */}

              </div>

              {/* Right Section */}
              <div className='gt-userimg'>
                <div className='gt-img'>
                  <img src={image} alt='img' className='goal-image' />
                </div>
                <div className='gt-username' style={{ marginTop: '9px' }}>
                  <h4>Sarah Johnson</h4>
                </div>
              </div>

            </div>
            <div className='goal-progress' style={{ width: '95%', margin: 'auto', marginTop: '20px' }}>
              <h4 style={{ marginBottom: '8px' }}>Progress</h4>

              <div style={{ position: 'relative', width: '100%' }}>
                <div className="goal" style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '90%',   // <-- this should match the text value
                    height: '100%',
                    backgroundColor: 'black',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>

                {/* Label at the extreme end */}
                <span style={{
                  position: 'absolute',
                  top: '-20px',       // places it above the bar
                  left: '90%',        // aligns with the end of the fill
                  transform: 'translateX(-50%)', // centers over the end
                  fontWeight: 'bold'
                }}>
                  90%
                </span>
              </div>
            </div>

            <div className='milestones' style={{ marginTop: '20px', width: '95%', margin: 'auto' }}>
              <h4>Milestones</h4>
              <div className='milestone-items' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '55%' }}>
                <div>
                  <div></div>
                  <div>
                    <p><span className='gt-mark' style={{ color: 'green' }}><IoMdCheckmarkCircleOutline /></span>Research Tools</p> <br />
                    <p><span><GoCircle /></span>Train team</p>
                  </div>
                </div>
                <div>
                  <p><span className='gt-mark' style={{ color: 'green', paddingTop: '10px' }}><IoMdCheckmarkCircleOutline /></span>Implement workflow</p><br />
                  <p><span><GoCircle /></span>Measure results</p>
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

export default Goals
