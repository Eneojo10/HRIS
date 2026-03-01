import React from 'react'
import { IoMdTime } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { WiTime3 } from "react-icons/wi";
import { BiError } from "react-icons/bi";
import DepartmentCoverage from './DepartmentCoverage';
import ScheduleEfficiencyTrends from './ScheduleEfficiencyTrends';
import WeeklyOvertimeAnalysis from './WeeklyOvertimeAnalysis';

function Sanalytics() {
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
      <br />

      <div className='hay-flex'>
        <div className='hay-one-border'>
          <div className='hob'>
            <h3>Schedule Efficiency Trends</h3>
          </div>
          <ScheduleEfficiencyTrends />
        </div>
        <div className='hay-one-border'>
          <div className='hob'>
            <h3>Department Coverage</h3>
          </div>
          <DepartmentCoverage />
        </div>
      </div>
      <br />
      <div className='hay-two'>
        <div className='hob'>
          <h3>Shift Distribution & Costs</h3><br />
          <div className='hob-header-border'>
            <div className='hob-header'>
              <div>
                <h3>Morning Shift</h3>
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
                <h3>Afternoon Shift</h3>
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
            <div className='labor-progress-bar'style={{width:'95%',margin:'auto'}}>
              <div className='labor-progress-fill' style={{ width: '68.4%' }}></div>
            </div>
          </div>
          <div className='hob-header-border'>
            <div className='hob-header'>
              <div>
                <h3>Night Shift</h3>
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
                <h3>Weekend Shift</h3>
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
        </div>

      </div>
      <br />
      <div className='hay-two'>
        <div className='hob'>
          <h3>Weekly Overtime Analysis</h3>
        </div>
        <WeeklyOvertimeAnalysis />
      </div>

    </div>
  )
}

export default Sanalytics