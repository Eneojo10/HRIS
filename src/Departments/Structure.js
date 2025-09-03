import React from 'react'

function Structure() {
  return (
    <div>
      <div className='org-structure'>
        <div className='org-one'>
          <h3>Organization Structure</h3>
          <p>Visual representation of your company's organizational hierarchy</p>

        </div>


      </div>
      <div className='orgone'>
        <div className='org_one'>
          <div className='mp1'style={{textAlign:'center',marginTop:'20px'}}>
            <h2>12</h2>
            <p>Total Departments</p>
          </div>

        </div>
        <div className='org_one'>
          <div className='mp2'style={{textAlign:'center',marginTop:'20px'}}>
            <h2>4</h2>
            <p>Hierarchy Levels</p>
          </div>

        </div>
        <div className='org_one'>
          <div className='mp'style={{textAlign:'center',marginTop:'20px'}}>
            <h2>24</h2>
            <p>Management Positions</p>
          </div>

        </div>
      </div>
      <br/>

    </div>
  )
}

export default Structure