import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { BiError } from "react-icons/bi";

function Budgets() {
  return (
    <div>
      <div className='bud-get-cost' style={{ display: 'flex', gap: '25px' }}>
        <div className='budget-cost'>
          <div className='dept-card010'>
            <div className='total-department'>
              <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <div>
                  <h4>Total Budget</h4>
                  <p>₦12,590,000</p>
                </div>
                <div className='icon-dept' style={{ marginTop: '20px', color: '#2563eb', backgroundColor: '#eff6ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                  <TbCurrencyNaira />
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className='budget-cost'>
          <div className='dept-card010'>
            <div className='total-department'>
              <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <div>
                  <h4>Total Spent</h4>
                  <p>₦12,590,000</p>
                </div>
                <div className='icon-dept' style={{ marginTop: '20px', color: '#dc2626', backgroundColor: '#fef2f2', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                  <FaArrowTrendUp />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='budget-cost'>
          <div className='dept-card010'>
            <div className='total-department'>
              <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <div>
                  <h4>Remaining</h4>
                  <p>₦12,590,000</p>
                </div>
                <div className='icon-dept' style={{ marginTop: '20px', color: '#16a34a', backgroundColor: '#f0fdf4', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                  <FaArrowTrendDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='budget-cost'>
          <div className='dept-card010'>
            <div className='total-department'>
              <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <div>
                  <h4>Utilization</h4>
                  <p>₦12,590,000</p>
                </div>
                <div className='icon-dept' style={{ marginTop: '20px', color: '#9333ea', backgroundColor: '#faf5ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                  <BiError />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='break-down'>
        <div className='main-breakdown'>
          <h2>Department Budget Breakdown</h2>
          <p>Detailed budget analysis for each department</p><br />

          <div className='breakdown-one'>
            <div className='breakdown_one'>
              <div className='brk' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <div className='on_track' style={{ display: 'flex', gap: '10px' }}>
                  <div>
                    <h3>Engineering</h3>
                  </div>
                  <div className='dept--warning'>
                    <p>on track</p>
                  </div>
                </div>
                <div>
                  <p>+12%</p>
                </div>
              </div>
              <div className='brkdown-list' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '27px' }}>
                <div>
                  <h4>Budget</h4>
                  <p>₦4,200,000</p>
                </div>
                <div>
                  <h4>Spent</h4>
                  <p>₦3,150,000</p>
                </div>
                <div>
                  <h4>Remaining</h4>
                  <p>₦1,050,000</p>
                </div>
                <div>
                  <h4>Employees</h4>
                  <p>342</p>
                </div>
                <div>
                  <h4>Cost/Employee</h4>
                  <p>₦9,211</p>
                </div>
              </div>
              <div className='bu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Budget Utilization</p>
                </div>
                <div>
                  <p>75%</p>
                </div>
              </div>

            </div>
            <br />

          </div>
          <br />
          <div className='breakdown-one'>
            <div className='breakdown_one'>
              <div className='brk' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <div className='on_track' style={{ display: 'flex', gap: '10px' }}>
                  <div>
                    <h3>Sales</h3>
                  </div>
                  <div className='dept-warning'>
                    <p>warning</p>
                  </div>
                </div>
                <div>
                  <p>+12%</p>
                </div>
              </div>
              <div className='brkdown-list' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '27px' }}>
                <div>
                  <h4>Budget</h4>
                  <p>₦4,200,000</p>
                </div>
                <div>
                  <h4>Spent</h4>
                  <p>₦3,150,000</p>
                </div>
                <div>
                  <h4>Remaining</h4>
                  <p>₦1,050,000</p>
                </div>
                <div>
                  <h4>Employees</h4>
                  <p>342</p>
                </div>
                <div>
                  <h4>Cost/Employee</h4>
                  <p>₦9,211</p>
                </div>
              </div>
              <div className='bu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Budget Utilization</p>
                </div>
                <div>
                  <p>75%</p>
                </div>
              </div>

            </div>
            <br />

          </div>
          <br />
          <div className='breakdown-one'>
            <div className='breakdown_one'>
              <div className='brk' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <div className='on_track' style={{ display: 'flex', gap: '10px' }}>
                  <div>
                    <h3>Marketing</h3>
                  </div>
                  <div className='dept--warning'>
                    <p>on track</p>
                  </div>
                </div>
                <div>
                  <p>+12%</p>
                </div>
              </div>
              <div className='brkdown-list' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '27px' }}>
                <div>
                  <h4>Budget</h4>
                  <p>₦4,200,000</p>
                </div>
                <div>
                  <h4>Spent</h4>
                  <p>₦3,150,000</p>
                </div>
                <div>
                  <h4>Remaining</h4>
                  <p>₦1,050,000</p>
                </div>
                <div>
                  <h4>Employees</h4>
                  <p>342</p>
                </div>
                <div>
                  <h4>Cost/Employee</h4>
                  <p>₦9,211</p>
                </div>
              </div>
              <div className='bu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Budget Utilization</p>
                </div>
                <div>
                  <p>75%</p>
                </div>
              </div>

            </div>
            <br />

          </div>
          <br />
          <div className='breakdown-one'>
            <div className='breakdown_one'>
              <div className='brk' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <div className='on_track' style={{ display: 'flex', gap: '10px' }}>
                  <div>
                    <h3>HR</h3>
                  </div>
                  <div className='dept---warning'>
                    <p>over budget</p>
                  </div>
                </div>
                <div>
                  <p>+12%</p>
                </div>
              </div>
              <div className='brkdown-list' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '27px' }}>
                <div>
                  <h4>Budget</h4>
                  <p>₦4,200,000</p>
                </div>
                <div>
                  <h4>Spent</h4>
                  <p>₦3,150,000</p>
                </div>
                <div>
                  <h4>Remaining</h4>
                  <p>₦1,050,000</p>
                </div>
                <div>
                  <h4>Employees</h4>
                  <p>342</p>
                </div>
                <div>
                  <h4>Cost/Employee</h4>
                  <p>₦9,211</p>
                </div>
              </div>
              <div className='bu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Budget Utilization</p>
                </div>
                <div>
                  <p>75%</p>
                </div>
              </div>

            </div>
            <br />

          </div>
          <br />

        </div>


      </div>
      <br />

    </div>
  )
}

export default Budgets