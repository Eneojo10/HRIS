import React from 'react'
import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineTrackChanges } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiAward } from "react-icons/fi";
import { BiError } from "react-icons/bi";

function Analytics() {
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

        <div className='per-for-mancen'>
          <div className='gt' style={{ width: '95%', margin: 'auto' }}>
            <h2>Performance Analytics</h2>
          </div>

          <div className='goals-cards'>
            <div className='g-cards1'>
              <div className='flex-one' style={{ marginTop: '20px' }}>

                <div className='flex-number'>
                  <p>Average Performance</p>


                </div>

                <div className='flex1x'>
                  <div className='ue'>

                    <h2>4.2</h2>
                  </div>
                  <div className='i-c-o-n' style={{ color: 'purple' }}>
                    <FiAward />
                  </div>

                </div>
                <span className='from'>+0.3 from last quarter</span>

              </div>


            </div>
            <div className='g-cards1'>
              <div className='flex-one' style={{ marginTop: '20px' }}>

                <div className='flex-number'>
                  <p>Goal Completion</p>


                </div>

                <div className='flex1x'>
                  <div className='ue'>

                    <h2>89%</h2>
                  </div>
                  <div className='i-c-o-n' style={{ color: 'green' }}>
                    <MdOutlineTrackChanges />
                  </div>

                </div>
                <span className='from'>+12% from last quarter</span>

              </div>

            </div>
            <div className='g-cards1'>
              <div className='flex-one' style={{ marginTop: '20px' }}>

                <div className='flex-number'>
                  <p>Reviews Completed</p>


                </div>

                <div className='flex1x'>
                  <div className='ue'>

                    <h2>94%</h2>
                  </div>
                  <div className='i-c-o-n' style={{ color: '#2563eb' }}>
                    <IoMdCheckmarkCircleOutline />
                  </div>

                </div>
                <span className='from'>On Schedule</span>

              </div>

            </div>
            <div className='g-cards1'>
              <div className='flex-one' style={{ marginTop: '20px' }}>

                <div className='flex-number'>
                  <p>At Risk Goals</p>


                </div>

                <div className='flex1x'>
                  <div className='ue'>

                    <h2>7</h2>
                  </div>
                  <div className='i-c-o-n' style={{ color: '#ea580c' }}>
                    <BiError />
                  </div>

                </div>
                <span className='fr-om'>-Need attention<br /> month</span>

              </div>

            </div>


          </div><br />
          <div className='performance-analytics-grid'>
            <div className='pagrid'>
              <div className='pagrid-one'>
                <h3>Performance Trends</h3>

              </div>

            </div>
            <div className='pagrid'>
              <div className='pagrid-one'>
                <h3>Goal Completion Status</h3>

              </div>

            </div>
            <div className='pagrid'>
              <div className='pagrid-one'>
                <h3>Department Performance</h3>

              </div>

            </div>
            <div className='pagrid'>
              <div className='pagrid-one'>
                <h3>Review Status Overview</h3>

              </div>

            </div>

          </div>
          <br/>
        </div>

      </div>

    </div>
  )
}

export default Analytics