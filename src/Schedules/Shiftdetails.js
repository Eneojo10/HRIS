import React from 'react'
import { IoMdTime } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { WiTime3 } from "react-icons/wi";
import { BiError } from "react-icons/bi";

function Shiftdetails() {
  return (
    <div>
      <div className='shifts'>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Total Shifts</p>

              <h2>24</h2>
              <span className='yes' style={{ fontSize: '12px' }}>Active shifts</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: '#2563eb' }}>
              <WiTime3 />
            </div>
          </div>

        </div>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Total Capacity</p>

              <h2>24</h2>
              <span className='yes' style={{ fontSize: '12px' }}>Employee positions</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: '#4fb976' }}>
              <BsPeople />
            </div>
          </div>

        </div>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Currently Filled</p>

              <h2>24</h2>
              <span className='yes' style={{ fontSize: '12px' }}>85% utilization</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: 'purple' }}>
              <BsPeople />
            </div>
          </div>

        </div>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Open Positions</p>

              <h2>24</h2>
              <span className='yes' style={{ fontSize: '12px' }}>Need coverage</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: 'red' }}>
              <BiError />
            </div>
          </div>

        </div>
        
      </div>
      <br />
      <div className='shift-templates'>
        <div className='tsf'>
          <div className='temp-shift-flex'>
            <div className='teem'>
              <div className='teem-icon'>
                <IoMdTime />
              </div>
              <div>
                <h3>Shift Templates</h3>
              </div>
            </div>
            <div className='te-em-bg'>
              <div className='te-em'>
                <div className='teem--icon'>
                  <HiPlusSm />
                </div>
                <div>
                  <h4>Create Shift</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Table beneath */}
          <table className="shift">
            <thead>
              <tr>
                <th>Shift Name</th>
                <th>Time</th>
                <th>Department</th>
                <th>Location</th>
                <th>Staffing</th>
                <th>Days</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Morning<br /> Production</td>
                <td>08:00 <br /> - <br /> 12:00</td>
                <td>Production</td>
                <td>Factory <br /> Floor A</td>
                <td>12/15</td>
                <td></td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Morning<br /> Production</td>
                <td>08:00 <br /> - <br /> 12:00</td>
                <td>Production</td>
                <td>Factory <br /> Floor A</td>
                <td>12/15</td>
                <td></td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Morning<br /> Production</td>
                <td>08:00 <br /> - <br /> 12:00</td>
                <td>Security</td>
                <td>Main <br /> Building </td>
                <td>12/15</td>
                <td></td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Morning<br /> Production</td>
                <td>08:00 <br /> - <br /> 12:00</td>
                <td>Maintenance</td>
                <td>All <br /> Areas </td>
                <td>12/15</td>
                <td></td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Morning<br /> Production</td>
                <td>08:00 <br /> - <br /> 12:00</td>
                <td>Administration</td>
                <td>Office <br /> Building</td>
                <td>12/15</td>
                <td></td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>


      </div>
      <br />
    </div>
  )
}

export default Shiftdetails;