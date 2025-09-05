import React from 'react'

function Budgets() {
  return (
    <div>
      <div className='bud-get-cost' style={{ display: 'flex', gap: '25px' }}>
        <div className='budget-cost'>
          <div className='b-c'>
            <h4>Total Budget</h4>
            <p>$12,590,000</p>
          </div>
        </div>
        <div className='budget-cost'></div>
        <div className='budget-cost'></div>
        <div className='budget-cost'></div>
      </div>
      <div className='break-down'>
        <div className='main-breakdown'>
          <h2>Department Budget Breakdown</h2>
          <p>Detailed budget analysis for each department</p><br />

          <div className='breakdown-one'>
            <div className='breakdown_one'>
              <div className='brk' style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'25px'}}>
                <div className='on_track' style={{ display: 'flex', gap: '10px' }}>
                  <div>
                    <h3>Engineering</h3>
                  </div>
                  <div>
                    <p>on track</p>
                  </div>
                </div>
                <div>
                  <p>+12%</p>
                </div>
              </div>
              <div className='brkdown-list'style={{display:'flex',justifyContent:'space-between',marginBottom:'27px'}}>
                <div>
                  <h4>Budget</h4>
                  <p>$4,200,000</p>
                </div>
                <div>
                  <h4>Spent</h4>
                  <p>$3,150,000</p>
                </div>
                <div>
                  <h4>Remaining</h4>
                  <p>$1,050,000</p>
                </div>
                <div>
                  <h4>Employees</h4>
                  <p>342</p>
                </div>
                <div>
                  <h4>Cost/Employee</h4>
                  <p>$9,211</p>
                </div>
              </div>
              <div className='bu'style={{display:'flex',justifyContent:'space-between'}}>
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
          <br/>

        </div>
        

      </div>
      <br/>

    </div>
  )
}

export default Budgets