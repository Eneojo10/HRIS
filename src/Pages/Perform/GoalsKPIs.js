import React from 'react'
import { HiMiniPlusSmall } from "react-icons/hi2";

function GoalsKPIs() {
  return (
    <div>
      <div className='scrollable'>
        <div className='perosnal'>
          <div className='personal-details'>
            <div className="per-sonal-flex">
              <div className="pee-icon-naira" style={{ fontSize: '21px', marginTop: '5px' }}>
                {/* <FcGraduationCap /> */}
              </div>
              <div>
                <h3>Performance Goals & KPIs</h3>
              </div>
            </div>
            <br />
            <div className='skills_flex' style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <div className='per-input' style={{ width: '95%' }}>
                {/* <label>Skill</label> */}
                <input type='text' placeholder='Add a performance goal...'></input>
              </div>
              <div>
                <button className='skill-button'><HiMiniPlusSmall /></button>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='goals-above'style={{textAlign:'center'}}>
              <p>No goals added yet. Add some performance goals above.</p>
            </div>


          </div>
          <br/>

        </div>

      </div>
    </div>
  )
}

export default GoalsKPIs