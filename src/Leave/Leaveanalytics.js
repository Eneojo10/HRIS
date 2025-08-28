import React from 'react'
import { IoMdTime } from "react-icons/io";
import { GoStop } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiCellSignalFullThin } from "react-icons/pi";

function Leaveanalytics() {
  return (
    <div>
      <div className='leave-cards'>
        <div className='leave-card1'>
          <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div className='leave-pending'>
              <h4>Total Requests</h4>
              <span><h2>299</h2></span>
              <p>+12% from last period</p>
            </div>
            <div className='red' style={{ fontSize: '21px' }}>
              <PiCellSignalFullThin />
            </div>
          </div><br />

        </div>
        <div className='leave-card1'>
          <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div className='leave-pending'>
              <h4>Approval Rate</h4>
              <span><h2>92.3%</h2></span>
              <p>+2.1% from last period</p>
            </div>
            <div className='red' style={{ fontSize: '21px' }}>
              <FaArrowTrendUp />
            </div>
          </div><br />

        </div>
        <div className='leave-card1'>
          <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div className='leave-pending'>
              <h4>Avg. Processing</h4>
              <span><h2>1.2 days</h2></span>
              <p>-0.3 days improved</p>
            </div>
            <div className='red' style={{ fontSize: '21px' }}>
              <IoMdTime />
            </div>
          </div><br />

        </div>
        <div className='leave-card1'>
          <div className='leavecard-details' style={{ width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div className='leave-pending'>
              <h4>Peak Season</h4>
              <span><h2>April</h2></span>
              <p>61 requests submitted</p>
            </div>
            <div className='red' style={{ fontSize: '21px' }}>
              <GoStop />
            </div>
          </div><br />

        </div>


      </div><br />
      <div className='bal-ance' style={{ display: 'flex', gap: '20px' }}>
        <div className='bal1'>
          <div className='balan-ce' style={{ width: '90%', margin: 'auto', marginTop: '10px' }}><br />
            <h4>Leave by Department</h4><br />
            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Engineering</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`, // ~17.78%
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
            </div>

            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Marketing</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`,
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
            </div>
            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Sales</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`,
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
            </div>
            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>HR</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`,
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
            </div>
            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Finance</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`,
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
            </div>


          </div><br />

        </div>
        <div className='bal1'>
          <div className='balan-ce' style={{ width: '90%', margin: 'auto', marginTop: '10px' }}><br />
            <h4>Leave Types Distribution</h4><br />
            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Annual Leave</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(35 / 45) * 100}%`, // ~17.78%
                  height: '100%',
                  backgroundColor: '#3b82f6'
                }}></div>
              </div>
            </div>

            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Sick Leave</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`,
                  height: '100%',
                  backgroundColor: '#ef4444'
                }}></div>
              </div>
            </div>
            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Personal Leave</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`,
                  height: '100%',
                  backgroundColor: '#a855f7'
                }}></div>
              </div>
            </div>
            <div className='bal-engr' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='neering'>
                  <h4>Maternity/Paternity</h4>
                </div>
                <div>
                  <p>8/45</p>
                </div>
              </div>
              <div className='market-progress' style={{
                marginTop: '6px',
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(8 / 45) * 100}%`,
                  height: '100%',
                  backgroundColor: '#22c55e'
                }}></div>
              </div>
            </div>



          </div><br />


        </div>
      </div><br />
      <div className='request-trends'>
        <div className='rt'><br />
          <h4>Monthly Request Trends</h4><br />
          <div className='mnth'>
            <div className='mnth-flex' style={{ display: 'flex', gap: '30px' }}>
              <div className='j' style={{ width: '15%', textAlign: 'center' }}>
                <h4>Jan</h4>
                <div className='jan-col'></div>
                <div className='jj-col'></div>
                <p>45</p><br />

              </div>
              <div className='j' style={{ width: '15%', textAlign: 'center' }}>
                <h4>Feb</h4>
                <div className='feb-col'></div>
                <div className='febb-col'></div>
                <p>62</p><br />

              </div>
              <div className='j' style={{ width: '15%', textAlign: 'center' }}>
                <h4>Mar</h4>
                <div className='mar-col'></div>
                <div className='marr-col'></div>
                <p>38</p><br />

              </div>
              <div className='j' style={{ width: '15%', textAlign: 'center' }}>
                <h4>Apr</h4>
                <div className='apr-col'></div>
                <div className='aprr-col'></div>
                <p>61</p><br />

              </div>
              <div className='j' style={{ width: '15%', textAlign: 'center' }}>
                <h4>May</h4>
                <div className='may-col'></div>
                <div className='mayy-col'></div>
                <p>48</p><br />

              </div>
              <div className='j' style={{ width: '15%', textAlign: 'center' }}>
                <h4>Jun</h4>
                <div className='jun-col'></div>
                <div className='junn-col'></div>
                <p>55</p><br />

              </div>


            </div>
            {/* <div className='color-decision' style={{ width: '0%', margin: 'auto', display: 'flex', gap: '20px' }}>
              <div className='ved' style={{ display: 'flex', gap: '5px' }}>

                <div className='lkj'style={{display:'flex'}}>
                  <div className='approve--color'>

                  </div>
                  <h4>Approved</h4>
                </div>
              </div>
              <div className='ved' style={{ display: 'flex', gap: '5px' }}>
                <div className='rejected--color'>

                </div>
                <div>
                  <h4>Rejected</h4>
                </div>
              </div>
            </div><br /> */}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Leaveanalytics