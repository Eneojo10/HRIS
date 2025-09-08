import React from 'react'
import { IoMdTime } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";

function Shiftdetails() {
  return (
    <div>
      <div className='shifts'>
        <div className='shift-one'>

        </div>
        <div className='shift-one'>

        </div>
        <div className='shift-one'>

        </div>
        <div className='shift-one'>

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
          <br/>
        </div>
        

      </div>
      <br/>
    </div>
  )
}

export default Shiftdetails;