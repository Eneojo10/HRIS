import React from 'react'
import image from '../Images/user2.jpg'

function Balance() {
  return (
    <div>
      <h3>Leave Balances</h3><br /><br />
      <div className='leave-balance-border'>
        <div className='lb' style={{ width: '95%', margin: 'auto', marginTop: '30px' }}>
          <div className='lb-flex'>
            <div className='balances-image'>
              <img src={image} alt='' />
            </div>
            <div className='s_j'>
              <h3>Sarah Johnson</h3>
              <p className='se' style={{ marginBottom: '8px' }}>Senior Developer • Engineering</p>

              <div className='id' style={{ display: 'flex', gap: '20px' }}>
                <div className='i_d' style={{ color: '#979899ff' }}>
                  <p>ID: EMP001</p>
                </div>
                <div className='carry'>
                  <p>3 carry-over days</p>
                </div>
                <div className='expiring' style={{ color: '#ea653b' }}>
                  <p>5 days expiring</p>
                </div>
              </div>
            </div>
          </div>
          <div className='a--days' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Annual Leave</h4>
                <p>17/25 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(5 / 25) * 100}%`, // 68% fill
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 8 days</p>
            </div>
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Personal Leave</h4>
                <p>4/5 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(1 / 25) * 100}%`, // 68% fill
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 1 day</p>
            </div>
            
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Sick Leave</h4>
                <p className='used-days'>8/10 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(2 / 25) * 100}%`, // 68% fill
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 2 days</p>
            </div>

           
          </div>

        </div><br/>

      </div><br/>
      <div className='leave-balance-border'>
        <div className='lb' style={{ width: '95%', margin: 'auto', marginTop: '30px' }}>
          <div className='lb-flex'>
            <div className='balances-image'>
              <img src={image} alt='' />
            </div>
            <div className='s_j'>
              <h3>Sarah Johnson</h3>
              <p className='se' style={{ marginBottom: '8px' }}>Senior Developer • Engineering</p>

              <div className='id' style={{ display: 'flex', gap: '20px' }}>
                <div className='i_d' style={{ color: '#979899ff' }}>
                  <p>ID: EMP001</p>
                </div>
                <div className='carry'>
                  <p>3 carry-over days</p>
                </div>
                <div className='expiring' style={{ color: '#ea653b' }}>
                  <p>5 days expiring</p>
                </div>
              </div>
            </div>
          </div>
          <div className='a--days' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Annual Leave</h4>
                <p>17/25 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(5 / 25) * 100}%`, 
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 8 days</p>
            </div>
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Personal Leave</h4>
                <p>4/5 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(1 / 25) * 100}%`, 
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 1 day</p>
            </div>
            
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Sick Leave</h4>
                <p className='used-days'>8/10 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(2 / 25) * 100}%`, 
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 2 days</p>
            </div>

           
          </div>

        </div><br/>

      </div><br/>
      <div className='leave-balance-border'>
        <div className='lb' style={{ width: '95%', margin: 'auto', marginTop: '30px' }}>
          <div className='lb-flex'>
            <div className='balances-image'>
              <img src={image} alt='' />
            </div>
            <div className='s_j'>
              <h3>Sarah Johnson</h3>
              <p className='se' style={{ marginBottom: '8px' }}>Senior Developer • Engineering</p>

              <div className='id' style={{ display: 'flex', gap: '20px' }}>
                <div className='i_d' style={{ color: '#979899ff' }}>
                  <p>ID: EMP001</p>
                </div>
                <div className='carry'>
                  <p>3 carry-over days</p>
                </div>
                <div className='expiring' style={{ color: '#ea653b' }}>
                  <p>5 days expiring</p>
                </div>
              </div>
            </div>
          </div>
          <div className='a--days' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Annual Leave</h4>
                <p>17/25 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(5 / 25) * 100}%`, // 68% fill
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 8 days</p>
            </div>
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Personal Leave</h4>
                <p>4/5 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(1 / 25) * 100}%`, // 68% fill
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 1 day</p>
            </div>
            
            <div className='a-days' style={{ display: 'flex', width: '32%', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>Sick Leave</h4>
                <p className='used-days'>8/10 days</p>
              </div>

              <div className="days-progress" style={{
                marginTop: '6px',
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom:'3px'
              }}>
                <div style={{
                  width: `${(2 / 25) * 100}%`, // 68% fill
                  height: '100%',
                  backgroundColor: '#18181b'
                }}></div>
              </div>
              <p className='used-days'>Used: 2 days</p>
            </div>

           
          </div>

        </div><br/>

      </div><br/>

    </div>
  )
}

export default Balance