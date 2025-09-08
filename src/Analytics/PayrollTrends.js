import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";

function PayrollTrends() {
  return (
    <div>
      <div className='pay_trends'>
        <div className='tr-one'>
          <div className='tp-pay' style={{ padding: '25px', color: '#15803d' }}>
            <p>Total Payroll</p>
            <div className='nine' style={{ display: 'flex' }}>
              <div className='nine-icon'>
                <TbCurrencyNaira />
              </div>
              <div>
                <h2>9.1M</h2>

              </div>

            </div>
            <p>+7.1% vs last month</p>
          </div>
        </div>
        <div className='tr-two'>
          <div className='tp-pay' style={{ padding: '25px', color: '#3f4ed8' }}>
            <p>Benefits</p>
            <div className='nine' style={{ display: 'flex' }}>
              <div className='nine-icon'>
                <TbCurrencyNaira />
              </div>
              <div>
                <h2>1.35M</h2>

              </div>

            </div>
            <p>+2.3% vs last month</p>
          </div>
        </div>
        <div className='tr-three'>
          <div className='tr-two'>
            <div className='tp-pay' style={{ padding: '25px', color: '#c2410c' }}>
              <p>Overtime</p>
              <div className='nine' style={{ display: 'flex' }}>
                <div className='nine-icon'>
                  <TbCurrencyNaira />
                </div>
                <div>
                  <h2>550K</h2>

                </div>

              </div>
              <p>+14.6% vs last month</p>
            </div>
          </div>
        </div>
        <div className='tr-four'>
          <div className='tr-three'>
            <div className='tr-two'>
              <div className='tp-pay' style={{ padding: '25px', color: '#7e22d1' }}>
                <p>Bonuses</p>
                <div className='nine' style={{ display: 'flex' }}>
                  <div className='nine-icon'>
                    <TbCurrencyNaira />
                  </div>
                  <div>
                    <h2>1.2M</h2>

                  </div>

                </div>
                <p>+41.2% vs last month</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PayrollTrends