import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { BsListTask } from 'react-icons/bs';
import { IoPeopleOutline } from "react-icons/io5";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { BiError } from "react-icons/bi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";


function Analyticdetails() {
  return (
    <div>
      <div className='onboard-background'>
        <div className='employee-cards'>
          <div className='employee-cards--flex'>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'blue' }}>
                    <IoPeopleOutline />
                  </div>
                  <div className='twelve'>

                    <p>+12</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>156</h2>
                  <p>Active Onboarding</p>
                  <span>New hires in process</span>
                </div>

              </div>
            </div>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'green' }}>
                    < BsFillPersonCheckFill />
                  </div>
                  <div className='twelve'>

                    <p>+3</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>12</h2>
                  <p>Completed This Month</p>
                  <span>Successfully onboarded</span>
                </div>

              </div>
            </div>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'purple' }}>
                    <SlCalender />
                  </div>
                  <div className='twelve'>

                    <p>0</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>8</h2>
                  <p>Starting This week</p>
                  <span>New arrivals</span>
                </div>

              </div>
            </div>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'orange' }}>
                    <IoMdTime />
                  </div>
                  <div className='twelve'>

                    <p>-3 days</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>28 days</h2>
                  <p>Avg. Completion Time</p>
                  <span>Time to complete</span>
                </div>

              </div>
            </div>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'green' }}>
                    <IoMdCheckmarkCircleOutline />
                  </div>
                  <div className='twelve'>

                    <p>+5.2%</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>87.5%</h2>
                  <p>Task Completion Rate</p>
                  <span>Overall completion</span>
                </div>

              </div>
            </div>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'blue' }}>
                    <BsCircle />
                  </div>
                  <div className='twelve'>

                    <p>+2.1%</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>12.5%</h2>
                  <p>Pending Tasks</p>
                  <span>Across all hires</span>
                </div>

              </div>
            </div>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'red' }}>
                    <FiAward />
                  </div>
                  <div className='twelve'>

                    <p>+0.3</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>4.2/5</h2>
                  <p>Satisfaction Score</p>
                  <span>New hire feedback</span>
                </div>

              </div>
            </div>
            <div className='employee-card1'>
              <div className='flex-one'>
                <div className='flex1'>
                  <div className='i-c-o-n' style={{ color: 'red' }}>
                    <CgDanger />
                  </div>
                  <div className='twelve'>

                    <p>+1</p>
                  </div>
                </div><br />
                <div className='flex-number'>
                  <h2>3</h2>
                  <p>Overdue Items</p>
                  <span>Need attention</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-line_'></div>
      <div className='board-on_'>
        <div>
          <h3>Onboarding Analytics</h3>
          <span className='track'>Track new hire progress through onboarding stages</span>
        </div>
        <div className='goals--cards'>
          <div className='g-cards1'>
            <div className='flex-one' style={{ marginTop: '20px' }}>

              <div className='flex-number'>
                <p>Completion Rate</p>


              </div>

              <div className='flex1x'>
                <div className='ue'>

                  <h2>85.7%</h2>
                </div>
                <div className='i-c-o-n' style={{ color: 'green' }}>
                  <IoMdCheckmarkCircleOutline />
                </div>

              </div>
              {/* <span className='from'>+0.3 from last month</span> */}

            </div>
            <br />

          </div>
          <div className='g-cards1'>
            <div className='flex-one' style={{ marginTop: '20px' }}>

              <div className='flex-number'>
                <p>Avg. Time to Complete</p>


              </div>

              <div className='flex1x'>
                <div className='ue'>

                  <h2>12 days</h2>
                </div>
                <div className='i-c-o-n' style={{ color: 'blue' }}>
                  <IoMdTime />
                </div>

              </div>
              {/* <span className='from'>+12% from last month</span> */}

            </div>

          </div>
          <div className='g-cards1'>
            <div className='flex-one' style={{ marginTop: '20px' }}>

              <div className='flex-number'>
                <p>Satisfaction Score</p>


              </div>

              <div className='flex1x'>
                <div className='ue'>

                  <h2>4.6/5</h2>
                </div>
                <div className='i-c-o-n' style={{ color: '#ca8a04' }}>
                  <FaRegStar />
                </div>

              </div>
              {/* <span className='fr-om'>-8 from last month</span> */}

            </div>

          </div>
          <div className='g-cards1'>
            <div className='flex-one' style={{ marginTop: '20px' }}>

              <div className='flex-number'>
                <p>At-Risk Hires</p>


              </div>

              <div className='flex1x'>
                <div className='ue'>

                  <h2>12 </h2>
                </div>
                <div className='i-c-o-n' style={{ color: '#ea580c' }}>
                  <BiError />
                </div>

              </div>
              {/* <span className='from'>-2 days from last<br /> month</span> */}

            </div>

          </div>


        </div><br />

      </div>

    </div>
  )
}

export default Analyticdetails