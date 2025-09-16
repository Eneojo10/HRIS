import React from 'react'
// import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { HiPlusSm } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { CiCircleAlert } from "react-icons/ci";
import { WiTime3 } from "react-icons/wi";
import { BsPersonCheckFill } from "react-icons/bs";

function Employeedetailz() {
  return (
    <div>
      <div className='shifts'>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Total Employees</p>

              <h2>156</h2>
              <span className='yes' style={{ fontSize: '12px' }}>Active employees</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: '#2563eb' }}>
              <BsPeople />
            </div>
          </div>


        </div>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Scheduled</p>

              <h2>156</h2>
              <span className='yes' style={{ fontSize: '12px' }}>94.9% coverage</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: '#1ca64f' }}>
              <BsPersonCheckFill />
            </div>
          </div>


        </div>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Currently Working</p>

              <h2>42</h2>
              <span className='yes' style={{ fontSize: '12px' }}>On current shift</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: 'purple' }}>
              <WiTime3 />
            </div>
          </div>


        </div>
        <div className='shift-one'>
          <div className='stop-watch' style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Unassigned </p>

              <h2>9</h2>
              <span className='yes' style={{ fontSize: '12px' }}>Need assignment</span>
            </div>
            <div className='stp-watch' style={{ fontSize: '21px', color: 'red' }}>
              <CiCircleAlert />
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