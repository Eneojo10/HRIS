import React from 'react'
import { SiClickhouse } from "react-icons/si";
import { BiHeart } from 'react-icons/bi';
import { RxTimer } from "react-icons/rx";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

function Benanalytics() {
  return (
    <div>
      <div className='ts-big'>
        <div className='aone--head' style={{ padding: '20px' }}>
          <h2>Benefits Analytics</h2>
          <p>Comprehensive analysis of benefit enrollment and utilization</p><br />
          <div className='b-flex'>
            <div className='benefits_cards'>
              <div className='total-department'>
                <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                  <div>
                    <h4>Total Enrollment</h4>
                    <p>89.9%</p>
                  </div>
                  <div className='icon-dept' style={{ marginTop: '20px', color: '#9ca3af', backgroundColor: '#eff6ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                    <IoPeopleOutline />
                  </div>
                </div>
              </div>
            </div>
            <div className='benefits_cards'>
              <div className='total-department'>
                <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                  <div>
                    <h4>Monthly Cost</h4>
                    <p>₦405M</p>
                  </div>
                  <div className='icon--dept' style={{ marginTop: '20px', color: '#9ca3af', backgroundColor: '#eff6ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                    <TbCurrencyNaira />
                  </div>
                </div>
              </div>
            </div>
            <div className='benefits_cards'>
              <div className='total-department'>
                <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                  <div>
                    <h4>Plan Utilization</h4>
                    <p>94.2%</p>
                  </div>
                  <div className='icon-dept' style={{ marginTop: '20px', color: '#9ca3af', backgroundColor: '#eff6ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                    <RxTimer />
                  </div>
                </div>
              </div>
            </div>
            <div className='benefits_cards'>
              <div className='total-department'>
                <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                  <div>
                    <h4>Satisfaction Score</h4>
                    <p>45/7</p>
                    
                  </div>
                  <div className='icon-dept' style={{ marginTop: '20px', color: '#9ca3af', backgroundColor: '#eff6ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                    <SiClickhouse />
                  </div>
                </div>
              </div>
            </div>
          </div><br />
          <div className='aOne-holder'>
            <div className='aone'>
              <div className='aone--head' style={{ padding: '20px' }}>
                <h2>Plan Enrollment Analysis</h2>
              </div>
            </div>
            <div className='aone'>
              <div className='aone--head' style={{ padding: '20px' }}>
                <h2>Department Enrollment</h2>

              </div>
            </div>

          </div><br />
          <div className='task-completions-holder'>
            <div className='aone--head' style={{ padding: '20px' }}>
              <h2>Utilization Metrics</h2>
            </div>
            <div className='metrics-cards'>
              <div className='metrics_card'>
                <h3>1247</h3>
                <p>Health Claims</p>
                <div className='metrics-flex'style={{display:'flex',width:'60%',margin:'auto',color:'green'}}>
                  <div>
                    <FaArrowTrendUp/>
                  </div>
                  <div>
                    <p>+4.9%</p>
                  </div>
                </div>
                <span className='vs'>vs previous period</span>
              </div>
              <div className='metrics_card'>
                <h3>892</h3>
                <p>Dental Visits</p>
                <div className='metrics-flex'style={{display:'flex',width:'60%',margin:'auto',color:'green'}}>
                  <div>
                    <FaArrowTrendUp/>
                  </div>
                  <div>
                    <p>+4.9%</p>
                  </div>
                </div>
                  <span className='vs'>vs previous period</span>
              </div>
              <div className='metrics_card'>
                <h3>234</h3>
                <p>Vision Exams</p>
                <div className='metrics-flex'style={{display:'flex',width:'60%',margin:'auto',color:'green'}}>
                  <div>
                    <FaArrowTrendUp/>
                  </div>
                  <div>
                    <p>+4.9%</p>
                  </div>
                </div>
                  <span className='vs'>vs previous period</span>
              </div>
              <div className='metrics_card'>
                <h3>567</h3>
                <p>Preventive Care</p>
                <div className='metrics-flex'style={{display:'flex',width:'60%',margin:'auto',color:'green'}}>
                  <div>
                    <FaArrowTrendUp/>
                  </div>
                  <div>
                    <p>+4.9%</p>
                  </div>
                </div>
                  <span className='vs'>vs previous period</span>
              </div>

            </div>
            <br/>

          </div><br />

        </div>

      </div>

    </div>
  )
}

export default Benanalytics