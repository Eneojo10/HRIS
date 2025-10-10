import React from 'react'
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineTrackChanges } from "react-icons/md";

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
        <div className='ts-big'>

        </div>
      </div>

    </div>
  )
}

export default Anadetails