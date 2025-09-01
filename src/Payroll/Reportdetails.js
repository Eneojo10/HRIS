import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCalendar } from 'react-icons/io5';
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";

function Reportdetails() {
  return (
    <div>
      <div className='pay_boxes_flex'>
        <div className='pay_bigbox'><br />
          <div className='pay-roll-runs' style={{ width: '93%', margin: 'auto' }}>
            <h2>Generated Reports</h2>
          </div>
          <br />
          <div className='pay_bigbox1'><br />
            <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
              <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='j-24' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Monthly Payroll Summary</h3>
                    <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>Complete payroll summary for January 2024</span>
                  </div>

                </div>
                <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                   <div className='pay-ready'>
                    <p>Ready</p>
                  </div>
                  <div className='pay-download'>
                    <p>Download</p>
                  </div>
                </div>

              </div><br />
              <div className='etd' style={{ display: 'flex', width: '85%', justifyContent: 'space-between' }}>
                <div className='etd-1'>
                  <h4>Type</h4>
                  <p>1,247</p>
                </div>
                <div className='etd-1'>
                  <h4>Period</h4>
                  <p>January 2024</p>
                </div>
                <div className='etd-1'>
                  <h4>Generated</h4>
                  <p>2024-01-31</p>
                </div>
                <div className='etd-1'>
                  <h4>Size</h4>
                  <p>2.4 MB</p>
                </div>
              </div><br />


            </div>


          </div>
          <div className='pay_bigbox1'><br />
            <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
              <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='j-24' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Tax Withholding Report</h3>
                    <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>Federal and state tax withholdings breakdown</span>
                  </div>

                </div>
                <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                   <div className='pay-ready'>
                    <p>Ready</p>
                  </div>
                   <div className='pay-download'>
                    <p>Download</p>
                  </div>
                </div>

              </div><br />
              <div className='etd' style={{ display: 'flex', width: '85%', justifyContent: 'space-between' }}>
                <div className='etd-1'>
                  <h4>Type</h4>
                  <p>1,247</p>
                </div>
                <div className='etd-1'>
                  <h4>Period</h4>
                  <p>January 2024</p>
                </div>
                <div className='etd-1'>
                  <h4>Generated</h4>
                  <p>2024-01-31</p>
                </div>
                <div className='etd-1'>
                  <h4>Size</h4>
                  <p>2.4 MB</p>
                </div>
              </div><br />


            </div>


          </div>
          <div className='pay_bigbox1'><br />
            <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
              <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='j-24' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Department Cost Analysis</h3>
                    <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>Payroll costs by department and cost center</span>
                  </div>

                </div>
                <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                  <div className='pay-ready'>
                    <p>Ready</p>
                  </div>
                   <div className='pay-download'>
                    <p>Download</p>
                  </div>
                </div>

              </div><br />
              <div className='etd' style={{ display: 'flex', width: '85%', justifyContent: 'space-between' }}>
                <div className='etd-1'>
                  <h4>Type</h4>
                  <p>1,247</p>
                </div>
                <div className='etd-1'>
                  <h4>Period</h4>
                  <p>January 2024</p>
                </div>
                <div className='etd-1'>
                  <h4>Generated</h4>
                  <p>2024-01-31</p>
                </div>
                <div className='etd-1'>
                  <h4>Size</h4>
                  <p>2.4 MB</p>
                </div>
              </div><br />


            </div>


          </div>



        </div>
        <div className='pay_smallbox'>
          <div className='payroll-small'>
            <div className='generate-border'>
              <div className='g-one' style={{ width: '90%', margin: 'auto', marginTop: '13px' }}>
                <div className='data-validation' style={{ display: 'flex', gap: '10px' }}>
                  <div className='val__icon_'>
                    <FaArrowTrendUp />
                  </div>
                  <div className='payroll_reg'>
                    <h4>Current Payroll Status</h4>
                    <p>Real-time payroll processing status

                    </p>
                  </div>
                </div>
              </div>
            </div><br />
            <div>
              <button className='gen-rate-btn'>Generate</button>
            </div><br />
            <div className='generate-border'>
              <div className='g-one' style={{ width: '90%', margin: 'auto', marginTop: '13px' }}>
                <div className='data-validation' style={{ display: 'flex', gap: '10px' }}>
                  <div className='val__icon_'>
                    <BiSolidReport />
                  </div>
                  <div className='payroll_reg'>
                    <h4>Employee Pay Stubs</h4>
                    <p>Individual employee pay statements</p>
                  </div>
                </div>
              </div>
            </div><br />
            <div>
              <button className='gen-rate-btn'>Generate</button>
            </div><br />
            <div className='generate-border'>
              <div className='g-one' style={{ width: '90%', margin: 'auto', marginTop: '13px' }}>
                <div className='data-validation' style={{ display: 'flex', gap: '10px' }}>
                <div className='val__icon_'>
                  <IoCalendar />
                </div>
                <div className='payroll_reg'>
                  <h4>Payroll Register</h4>
                  <p>Detailed payroll register for current period</p>
                </div>
              </div>
              </div>
            </div><br />
            <div>
              <button className='gen-rate-btn'>Generate</button>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Reportdetails