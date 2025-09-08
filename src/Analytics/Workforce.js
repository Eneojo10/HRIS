import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
import { GiPlainCircle } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";

function Workforce() {
  return (
    <div>
      <div className='workforce-holder' style={{ width: '95%', margin: 'auto' }}>
        <div>
          <h2>Workforce Analytics</h2>
          <p>Employee demographics, distribution, and growth patterns</p>
        </div>
        <div className='workfoce-cards'>
          <div className='w-card-one'>

          </div>
          <div className='w-card-one'>

          </div>
          <div className='w-card-one'>

          </div>
          <div className='w-card-one'>

          </div>

        </div>

        <div className='demographic-cards'>
          <div className='demo'>
            <div className='age-demo'>
              <div className='age-icon'>
                <IoPeopleOutline />
              </div>
              <div>
                <h2>Age Demographics</h2>
              </div>
            </div><br />
            <div className='bullet' style={{ width: '92%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div className='age-range' style={{
                display: 'flex', gap: '5px', width: '15%', margin: 'auto'

              }}>
                <div className='plaincircle'>
                  <GiPlainCircle />
                </div>
                <div>
                  <p>18-25</p>
                </div>
              </div>
              <div>
                <h4>156</h4>
                <p>12.5%</p>
              </div>

            </div>
            <div className='bullet' style={{ width: '92%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div className='age-range' style={{
                display: 'flex', gap: '5px', width: '15%', margin: 'auto'

              }}>
                <div className='plaincircle-one'>
                  <GiPlainCircle />
                </div>
                <div>
                  <p>18-25</p>
                </div>
              </div>
              <div>
                <h4>156</h4>
                <p>12.5%</p>
              </div>

            </div>
            <div className='bullet' style={{ width: '92%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div className='age-range' style={{
                display: 'flex', gap: '5px', width: '15%', margin: 'auto'

              }}>
                <div className='plaincircle-two'>
                  <GiPlainCircle />
                </div>
                <div>
                  <p>18-25</p>
                </div>
              </div>
              <div>
                <h4>156</h4>
                <p>12.5%</p>
              </div>

            </div>
            <div className='bullet' style={{ width: '92%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div className='age-range' style={{
                display: 'flex', gap: '5px', width: '15%', margin: 'auto'

              }}>
                <div className='plaincircle-three'>
                  <GiPlainCircle />
                </div>
                <div>
                  <p>18-25</p>
                </div>
              </div>
              <div>
                <h4>156</h4>
                <p>12.5%</p>
              </div>

            </div>
            <div className='bullet' style={{ width: '92%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
              <div className='age-range' style={{
                display: 'flex', gap: '5px', width: '15%', margin: 'auto'

              }}>
                <div className='plaincircle-four'>
                  <GiPlainCircle />
                </div>
                <div>
                  <p>18-25</p>
                </div>
              </div>
              <div>
                <h4>156</h4>
                <p>12.5%</p>
              </div>

            </div>
            <br/>

          </div>
          <div className='demo'>
            <div className='age-demographic'>
              <div className='demo-icon'>
                <FcDepartment />
              </div>
              <div>
                <h2>Department Distribution</h2>
              </div>
            </div>

          </div>

        </div>
        <br />
        <div className='geographic-distro'>
          <div className='geo-flex'>
            <div className='geo-icon'>
              <SlLocationPin />
            </div>
            <div>
              <h3>Geographic Distribution</h3>
            </div>
          </div>
          <div className='geo-grid'>
            <div className='geo-cards'>
              <div className='geos'>
                <h2>308</h2>
                <p>Abuja, FCT</p>
                <span>36.6%</span>
              </div>

            </div>
            <div className='geo-cards'>
              <div className='geos'>
                <h2>308</h2>
                <p>Abuja, FCT</p>
                <span>36.6%</span>
              </div>

            </div>
            <div className='geo-cards'>
              <div className='geos'>
                <h2>308</h2>
                <p>Abuja, FCT</p>
                <span>36.6%</span>
              </div>

            </div>
            <div className='geo-cards'>
              <div className='geos'>
                <h2>308</h2>
                <p>Abuja, FCT</p>
                <span>36.6%</span>
              </div>

            </div>
            <div className='geo-cards'>
              <div className='geos'>
                <h2>308</h2>
                <p>Abuja, FCT</p>
                <span>36.6%</span>
                
              </div>
              <br/>
            </div>

          </div>
          <br/>

        </div>
        <br/>
      </div>

    </div>
  )
}

export default Workforce