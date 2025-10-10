import React from 'react'
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { LuRectangleVertical } from "react-icons/lu";
import { BsPersonXFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { BsFillPersonXFill } from "react-icons/bs";
import { LuSmartphone } from "react-icons/lu";


function Attendancedetails() {
  return (
    <div>
      <div className='ts-main'>
        <div className='ts-flex'>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Present Today</p>
                  <h2>142</h2>
                  <span className='payperiod'>91% attendance rate</span>
                </div>
                <div className='bluetime' style={{ color: 'green' }}>
                  <BsFillPersonCheckFill />
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Late Arrivals</p>
                  <h2>8</h2>
                  <span className='payperiod'>5% of present employees</span>
                </div>
                <div className='bluetime' style={{ color: '#ca8a04' }}>
                  <IoMdTime />
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Absent Today</p>
                  <h2>14</h2>
                  <span className='payperiod'>9% absent rate</span>
                </div>
                <div className='bluetime' style={{ color: '#dc2626' }}>
                  <BsFillPersonXFill />
                </div>
              </div>

            </div>
          </div>
          <div className='ts-card' style={{ border: '1px solid #ccc', height: '120px', width: '100%', borderRadius: '4px' }}>
            <div className='tee-sheet' style={{ padding: '10px' }}>
              <div className='ts--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Remote Workers</p>
                  <h2>28</h2>
                  <span className='payperiod'>18% working remotely</span>
                </div>
                <div className='bluetime' style={{ color: '#2563eb' }}>
                  <LuSmartphone />
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className='ts-big'>

        </div>
        <div className='ts-big'>
          <div className='ts--tab'><br />
            <div className='t-attendance' style={{ display: 'flex', gap: '10px' }}>
              <div className='todays_icon' style={{ fontSize: '21px', marginTop: '5px' }}>
                <HiOutlineCalendarDateRange />
              </div>
              <div>
                <h2>Today's Attendance</h2>
              </div>
            </div>
            <br />
            <table className="bottom-border-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Method</th>
                  <th>Actions</th>
                </tr><br />
              </thead>
              <tbody>
                <tr>
                  <td>John Smith</td>
                  <td>Engineering</td>
                  <td>08:45 AM</td>
                  <td>05:30 PM</td>
                  <td>
                    <div className='pss'>
                      <div className='pre-sent-status' style={{ display: 'flex', justifyContent: 'space-between', width: '82%', margin: 'auto', paddingTop: '4px' }}>
                        <div className='bsfill'>
                          <BsFillPersonCheckFill />
                        </div>
                        <div className='p-resent'>
                          <p>Present</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='pss-office'>
                      <div className='pre-sent-status' style={{ display: 'flex', gap: '5px', margin: 'auto', paddingTop: '4px' }}>
                        <div className='bsfill-off' style={{ fontSize: '13px', marginTop: '3px' }}>
                          <SlLocationPin />
                        </div>
                        <div className='p-resent-off'>
                          <p>Office</p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>Card Swipe</td>
                  <td><button className='btn_btn'>
                    View Details
                  </button></td>
                </tr><br />
                <tr>
                  <td>John Smith</td>
                  <td>Engineering</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <div className='pss_'>
                      <div className='pre-sent-status' style={{ display: 'flex', justifyContent: 'space-between', width: '78%', margin: 'auto', paddingTop: '4px' }}>
                        <div className='bsperson'>
                          <BsPersonXFill />
                        </div>
                        <div className='p--resent'>
                          <p>Absent</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='pss-office'>
                      <div className='pre-sent-status' style={{ display: 'flex', gap: '5px', margin: 'auto', paddingTop: '4px' }}>
                        <div className='bsfill-off' style={{ fontSize: '13px', marginTop: '3px' }}>
                          <LuRectangleVertical />
                        </div>
                        <div className='p-resent-off'>
                          <p>Remote</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Biometric</td>
                  <td><button className='btn_btn'>
                    View Details
                  </button></td>
                </tr><br />
                <tr>
                  <td>John Smith</td>
                  <td>Engineering</td>
                  <td>08:45 AM</td>
                  <td>-</td>
                  <td>
                    <div className='pss-late'>
                      <div className='pre-sent-status' style={{ display: 'flex', gap: '5px', width: '78%', margin: 'auto', paddingTop: '4px' }}>
                        <div className='iomdtime'>
                          <IoMdTime />
                        </div>
                        <div className='p-resent-late'>
                          <p>Late</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='pss-office'>
                      <div className='pre-sent-status' style={{ display: 'flex', gap: '5px', margin: 'auto', paddingTop: '4px' }}>
                        <div className='bsfill-off' style={{ fontSize: '13px', marginTop: '3px' }}>
                          <SlLocationPin />
                        </div>
                        <div className='p-resent-off'>
                          <p>-</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Mobile App</td>
                  <td><button className='btn_btn'>
                    View Details
                  </button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Attendancedetails