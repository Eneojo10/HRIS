import React, { useState } from 'react'
import image from '../Images/user2.jpg'
import PayrollDetails from './PayrollDetails'

function Employeedetails() {

  const [selectedEmployee, setSelectedEmployee] = useState(null);


  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  // }


  return (
    <div>
      <div className='em-payroll'>
        <div className='em-payroll-input'>
          <input type='text' placeholder='Search employees...'></input>
        </div><br />
        <div className='py' style={{ display: 'flex', gap: '20px' }}>
          <div className='pay_big-box'><br />
            <div className='pay-roll-runs' style={{ width: '93%', margin: 'auto' }}>
              <h2>Employee Payroll (5)</h2>
            </div>
            <br />
            <div className='pay_bigbox1'><br />
              <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
                <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='j-24' style={{ display: 'flex', width: '47%', justifyContent: 'space-between' }}>
                    <div className='pay-image'>
                      <img src={image} alt='' />
                    </div>
                    <div>
                      <h3>Sarah Johnson</h3>
                      <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>Senior Developer • Engineering</span>
                    </div>

                  </div>
                  <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                    <div className='pay-process'>
                      <p>Processing</p>
                    </div>
                    <div className='pay-view'>
                      <p onClick={() => setSelectedEmployee('Sarah Johnson')}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedEmployee === 'Sarah Johnson' ? '#f9fafb' : 'transparent',
                        }}
                      >View</p>
                    </div>
                  </div>

                </div><br />
                <div className='etd' style={{ display: 'flex', width: '85%', justifyContent: 'space-between' }}>
                  <div className='etd-1'>
                    <h4>Gross Pay</h4>
                    <p>$7,916.67</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Deductions</h4>
                    <p className='deductions' style={{ color: '#e14444' }}>-$1,583.33</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Net Pay</h4>
                    <p className='net-pay' style={{ color: '#29ab59' }}>$2,847,500</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Pay Date</h4>
                    <p>2024-01-31</p>
                  </div>
                </div><br />
                <br />

              </div>


            </div>
            <div className='pay_bigbox1'><br />
              <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
                <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='j-24' style={{ width: '47%', display: 'flex', justifyContent: 'space-between' }}>
                    <div className='pay-image'>
                      <img src={image} alt='' />
                    </div>
                    <div>
                      <h3>
                        Michael Chen</h3>
                      <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>Marketing Manager • Marketing</span>
                    </div>

                  </div>
                  <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                    <div className='pay-process'>
                      <p>Processed</p>
                    </div>
                    <div className='pay-view'>
                      <p onClick={() => setSelectedEmployee('Michael Chen')}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedEmployee === 'Michael Chen' ? '#f9fafb' : 'transparent',
                        }}>View</p>
                    </div>
                  </div>

                </div><br />
                <div className='etd' style={{ display: 'flex', width: '85%', justifyContent: 'space-between' }}>
                  <div className='etd-1'>
                    <h4>Gross Pay</h4>
                    <p>$7,916.67</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Deductions</h4>
                    <p className='deductions' style={{ color: '#e14444' }}>-$1,583.33</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Net Pay</h4>
                    <p className='net-pay' style={{ color: '#29ab59' }}>$2,847,500</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Pay Date</h4>
                    <p>2024-01-31</p>
                  </div>
                </div><br />
                <br />

              </div>


            </div>
            <div className='pay_bigbox1'><br />
              <div className='payroll_' style={{ width: '92%', margin: 'auto' }}>
                <div className='pay_roll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className='j-24' style={{ width: '47%', display: 'flex', justifyContent: 'space-between' }}>
                    <div className='pay-image'>
                      <img src={image} alt='' />
                    </div>
                    <div>
                      <h3>
                        Michael Carrick</h3>
                      <span className='pr-24' style={{ color: '#71717a', fontSize: '15px' }}>Marketing Manager • Marketing</span>
                    </div>

                  </div>
                  <div className='pv' style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                    <div className='pay-process'>
                      <p>Processed</p>
                    </div>
                    <div className='pay-view'>
                      <p onClick={() => setSelectedEmployee('Michael Chen')}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedEmployee === 'Michael Carrick' ? '#f9fafb' : 'transparent',
                        }}>View</p>
                    </div>
                  </div>

                </div><br />
                <div className='etd' style={{ display: 'flex', width: '85%', justifyContent: 'space-between' }}>
                  <div className='etd-1'>
                    <h4>Gross Pay</h4>
                    <p>$7,916.67</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Deductions</h4>
                    <p className='deductions' style={{ color: '#e14444' }}>-$1,583.33</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Net Pay</h4>
                    <p className='net-pay' style={{ color: '#29ab59' }}>$2,847,500</p>
                  </div>
                  <div className='etd-1'>
                    <h4>Pay Date</h4>
                    <p>2024-01-31</p>
                  </div>
                </div><br />
                <br />

              </div>


            </div>



          </div>
          <div className='py-size' style={{ width: '30%' }}>
            {selectedEmployee && <PayrollDetails employee={selectedEmployee} />}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Employeedetails