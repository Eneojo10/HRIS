import React from 'react'
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineTrackChanges } from "react-icons/md";
import ProductivityHoursTrends from './ProductivityHoursTrends';

function Anadetails() {
  return (
    <div>
      <div className='ts-main'>
        <div className='ts-flex'>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Avg.Productivity</p>
                  <h2>89%</h2>
                  <span className='payperiod'>+3% from last month</span>
                </div>
                <div className='bluetime' style={{ color: 'green' }}>
                  <MdOutlineTrackChanges />
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Total Hours</p>
                  <h2>6,450</h2>
                  <span className='payperiod'>This month</span>
                </div>
                <div className='bluetime' style={{ color: 'blue' }}>
                  <IoMdTime />
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Overtime Cost</p>
                  <h2>&#8358;50M</h2>
                  <span className='payperiod'>270 overtime hours</span>
                </div>
                <div className='bluetime' style={{ color: '#ea580c' }}>
                  <TbCurrencyNaira />
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Utilization Rate</p>
                  <h2>84.5%</h2>
                  <span className='payperiod'>Billable hours ratio</span>
                </div>
                <div className='bluetime' style={{ color: 'green' }}>
                  <GiNetworkBars />
                </div>
              </div>

            </div>
          </div>

        </div><br />
        <div className='aOne-holder'>
          <div className='aone'>
            <div className='aone--head' style={{ padding: '20px' }}>
              <h3>Productivity & Hours Trends</h3>
            </div>
            <ProductivityHoursTrends />
          </div>
          <div className='aone'>
            <div className='aone--head' style={{ padding: '20px' }}>
              <h3>Hours by Department</h3><br />
              <div>
                <div className='engine-one'>
                  <div className='engine--color-flex'>
                    <div className='engine-color'>

                    </div>
                    <div>
                      <h4>Engineering</h4>
                    </div>
                  </div>
                  <div>
                    <p>2840h  45%</p>
                  </div>
                </div>
                <div className='engine-one'>
                  <div className='engine--color-flex'>
                    <div className='engine-color-one'>

                    </div>
                    <div>
                      <h4>Sales</h4>
                    </div>
                  </div>
                  <div>
                    <p>1420h  45%</p>
                  </div>
                </div>
                <div className='engine-one'>
                  <div className='engine--color-flex'>
                    <div className='engine-color-two'>

                    </div>
                    <div>
                      <h4>Marketing</h4>
                    </div>
                  </div>
                  <div>
                    <p>240h  45%</p>
                  </div>
                </div>
                <div className='engine-one'>
                  <div className='engine--color-flex'>
                    <div className='engine-color-three'>

                    </div>
                    <div>
                      <h4>Design</h4>
                    </div>
                  </div>
                  <div>
                    <p>240h  45%</p>
                  </div>
                </div>
                <div className='engine-one'>
                  <div className='engine--color-flex'>
                    <div className='engine-color-four'>

                    </div>
                    <div>
                      <h4>HR</h4>
                    </div>
                  </div>
                  <div>
                    <p>240h 45%</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div><br />
        <div className='hay-two'>
          <div className='hob'>
            <h3>Project Time Analysis</h3><br />
            <div className='hob-header-border'>
              <div className='hob-header'>
                <div>
                  <h3>Website Redesign</h3>
                </div>
                <div>
                  <p>52 employees</p>
                </div>

              </div>
              <div className='labor--cost'>
                <div>
                  <p>Total Hours</p>
                  <span className='labor-span'>192hrs</span>
                </div>
                <div>
                  <p>Labor Cost</p>
                  <span className='labor-span'>192hrs</span>
                </div>
                <div>
                  <p>Cost Per Hour</p>
                  <span className='labor-span'>192hrs</span>
                </div>

              </div>
              <div className='labor-progress-bar' style={{ width: '95%', margin: 'auto' }}>
                <div className='labor-progress-fill' style={{ width: '68.4%' }}></div>
              </div>
            </div>
            <div className='hob-header-border'>
              <div className='hob-header'>
                <div>
                  <h3>Mobile App</h3>
                </div>
                <div>
                  <p>52 employees</p>
                </div>

              </div>
              <div className='labor--cost'>
                <div>
                  <p>Total Hours</p>
                  <span className='labor-span'>192hrs</span>
                </div>
                <div>
                  <p>Labor Cost</p>
                  <span className='labor-span'>192hrs</span>
                </div>
                <div>
                  <p>Cost Per Hour</p>
                  <span className='labor-span'>192hrs</span>
                </div>

              </div>
              <div className='labor-progress-bar' style={{ width: '95%', margin: 'auto' }}>
                <div className='labor-progress-fill' style={{ width: '68.4%' }}></div>
              </div>
            </div>
            <div className='hob-header-border'>
              <div className='hob-header'>
                <div>
                  <h3>Database Migration</h3>
                </div>
                <div>
                  <p>52 employees</p>
                </div>


              </div>
              <div className='labor--cost'>
                <div>
                  <p>Total Hours</p>
                  <span className='labor-span'>192hrs</span>
                </div>
                <div>
                  <p>Labor Cost</p>
                  <span className='labor-span'>192hrs</span>
                </div>
                <div>
                  <p>Cost Per Hour</p>
                  <span className='labor-span'>192hrs</span>
                </div>

              </div>
              <div className='labor-progress-bar' style={{ width: '95%', margin: 'auto' }}>
                <div className='labor-progress-fill' style={{ width: '68.4%' }}></div>
              </div>

            </div>
            <div className='hob-header-border'>
              <div className='hob-header'>
                <div>
                  <h3>Marketing Campaign</h3>
                </div>
                <div>
                  <p>52 employees</p>
                </div>

              </div>
              <div className='labor--cost'>
                <div>
                  <p>Hours Logged:</p>
                  <span className='labor-span'>192hrs</span>
                </div>
                <div>
                  <p>Budget:</p>
                  <span className='labor-span'>N500K</span>
                </div>
                <div>
                  <p>Cost Per Hour</p>
                  <span className='labor-span'>N100K</span>
                </div>

              </div>
              <div className='labor-progress-bar' style={{ width: '95%', margin: 'auto' }}>
                <div className='labor-progress-fill' style={{ width: '68.4%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Anadetails