import React from 'react'
// import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { HiPlusSm } from "react-icons/hi";

function Employeedetailz() {
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
                <SlCalender />
              </div>
              <div>
                <h3>Employee Schedules</h3>
              </div>
            </div>
            <div className='tems'>
              <div className='tem-input'>
                <input type='text' placeholder='Search employees...'></input>
              </div>
              <div className='select-tem'>
                <select>
                  <option><h4>All Departments</h4></option>
                  <option>Production</option>
                  <option>Administration</option>
                  <option>Security</option>
                  <option>Maintenance</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table beneath */}
          <table className="shift">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Current Shift</th>
                <th>Shift Time</th>
                <th>Weekly<br /> Hours</th>
                <th>Status</th>
                <th>Next Shift</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className='j' style={{ fontWeight: '500' }}>John Smith</span> <br /> Machine <br />Operator</td>
                <td>Production</td>
                <td>Production</td>
                <td>06:00 - <br /> 14:00</td>
                <td>40h</td>
                <td></td>
                <td>Tomorrow<br /> 06:00</td>
                <td>Active</td>
              </tr>
              <tr>
                <td><span className='j' style={{ fontWeight: '500' }}>John Smith</span> <br /> Machine <br />Operator</td>
                <td>Administration</td>
                <td>Production</td>
                <td>06:00 - <br /> 14:00</td>
                <td>40h</td>
                <td></td>
                <td>Tomorrow<br /> 06:00</td>
                <td>Active</td>
              </tr>
              <tr>
                <td><span className='j' style={{ fontWeight: '500' }}>John Smith</span> <br /> Machine <br />Operator</td>
                <td>Security</td>
                <td>Night Security</td>
                <td>06:00 - <br /> 14:00</td>
                <td>40h</td>
                <td></td>
                <td>Tomorrow<br /> 06:00</td>
                <td>Active</td>
              </tr>
              <tr>
                <td><span className='j' style={{ fontWeight: '500' }}>Emily Brown</span> <br /> Machine <br />Operator</td>
                <td>Production</td>
                <td>Maintenance</td>
                <td>06:00 - <br /> 14:00</td>
                <td>40h</td>
                <td></td>
                <td>Tomorrow<br /> 06:00</td>
                <td>Active</td>
              </tr>
              <tr>
                <td><span className='j' style={{ fontWeight: '500' }}>David Wilson</span> <br /> Technician</td>
                <td>Maintenance</td>
                <td>Administration</td>
                <td>06:00 - <br /> 14:00</td>
                <td>40h</td>
                <td></td>
                <td>Tomorrow<br /> 06:00</td>
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

export default Employeedetailz