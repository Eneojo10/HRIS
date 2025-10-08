import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { TiEyeOutline } from "react-icons/ti";
import { FcCancel } from "react-icons/fc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";


function Sheetdetails() {
  return (
    <div>
      <div className='ts-main'>
        <div className='ts-flex'>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet'style={{padding:'10px'}}>
              <div className='ts--flex'style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                  <p>Total Timesheets</p>
                  <h4>156</h4>
                  <span className='payperiod'>This pay period</span>
                </div>
                <div>
                  <BsFileEarmarkSpreadsheet/>
                </div>
              </div>

            </div>

          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet'style={{padding:'10px'}}>
              <div className='ts--flex'style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                  <p>Pending Approval</p>
                  <h4>23</h4>
                  <span className='payperiod'>Awaiting review</span>
                </div>
                <div className='bluetime'style={{color:'#2563eb'}}>
                  <IoMdTime/>
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet'style={{padding:'10px'}}>
              <div className='ts--flex'style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                  <p>Approved</p>
                  <h4>128</h4>
                  <span className='payperiod'>Ready for payroll</span>
                </div>
                <div className='greencheck'>
                  <IoMdCheckmarkCircleOutline/>
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet'style={{padding:'10px'}}>
              <div className='ts--flex'style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                  <p>Total Hours</p>
                  <h4>6,240</h4>
                  <span className='payperiod'>This pay period</span>
                </div>
                <div className='purpletime'style={{color:'#9333ea'}}>
                  <IoMdTime/>
                </div>
              </div>

            </div>
          </div>

        </div><br />
        <div className='ts-big'>
          <div className='sheet' style={{ width: '95%', margin: 'auto' }}>
            <div className='timesheet' style={{ display: 'flex', marginTop: '20px', gap: '15px' }}>
              <div className='person' style={{ fontSize: '21px' }}>
                <LuFileSpreadsheet />
              </div>
              <div>
                <h3>Timesheet Management</h3>
              </div>
            </div>
            <table class="bottom-border-table">
              <thead>
                <tr className='cl' style={{ color: '#71717a', fontWeight: '200' }}>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Period</th>
                  <th>Total Hours</th>
                  <th>Regular</th>
                  <th>Overtime</th>
                  <th>Status</th>
                  <th>Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John <br />Smith</td>
                  <td>Engineering</td>
                  <td>Jan<br /> 22-<br />28,<br /> 2024</td>
                  <td>42.5h</td>
                  <td>40.0h</td>
                  <td className='rd' style={{ color: '#ea580c' }}>2.5h</td>
                  <td>Submitted</td>
                  <td>2024-01-29</td>
                  <td>
                    <div className='times_ico-n' style={{ display: 'flex', fontSize: '18px', marginTop: '39px', gap: '7px' }}>
                      <div className='one-icon'>
                        <TiEyeOutline />
                      </div>
                      <div className='one-icon' style={{ color: 'green' }}>
                        <IoMdCheckmarkCircleOutline />
                      </div>
                      <div className='one-icon'>
                        <FcCancel />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>John <br />Smith</td>
                  <td>Marketing</td>
                  <td>Jan<br /> 22-<br />28,<br /> 2024</td>
                  <td>42.5h</td>
                  <td>40.0h</td>
                  <td className='rd' style={{ color: '#ea580c' }}>2.5h</td>
                  <td>Submitted</td>
                  <td>2024-01-29</td>
                  <td>
                    <div className='times_ico-n' style={{ display: 'flex', fontSize: '18px', marginTop: '39px', gap: '7px' }}>
                      <div className='one-icon'>
                        <TiEyeOutline />
                      </div>
                      <div className='one-icon' style={{ color: 'green' }}>
                        <IoMdCheckmarkCircleOutline />
                      </div>
                      <div className='one-icon'>
                        <FcCancel />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>John <br />Smith</td>
                  <td>Sales</td>
                  <td>Jan<br /> 22-<br />28,<br /> 2024</td>
                  <td>42.5h</td>
                  <td>40.0h</td>
                  <td className='rd' style={{ color: '#ea580c' }}>2.5h</td>
                  <td>Submitted</td>
                  <td>2024-01-29</td>
                  <td>
                    <div className='times_ico-n' style={{ display: 'flex', fontSize: '18px', marginTop: '39px', gap: '7px' }}>
                      <div className='one-icon'>
                        <TiEyeOutline />
                      </div>
                      <div className='one-icon' style={{ color: 'green' }}>
                        <IoMdCheckmarkCircleOutline />
                      </div>
                      <div className='one-icon'>
                        <FcCancel />
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Sheetdetails;