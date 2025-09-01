import React from 'react'

function PayrollDetails() {
  return (
    <div>
        <div className='payroll-de-tails'>
            <div className='employee-pay-gross'style={{width:'90%',margin:'auto',marginTop:'20px'}}>
                <h3>Payroll Details</h3>
                <div>
                    <div>

                    </div>
                    <div>
                        <h4>Sarah Johnson</h4>
                        <p>EMP-001</p>
                    </div>
                </div><br/>
                <div className='bs'style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
                    <div>
                        <p>Base Salary</p>
                    </div>
                    <div>
                        <p>$95,000</p>
                    </div>
                </div>
                <div className='bs'style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
                    <div>
                        <p>Gross Pay</p>
                    </div>
                    <div>
                        <p>$7,916.67</p>
                    </div>
                </div>
                <div className='bs'style={{display:'flex',justifyContent:'space-between',marginBottom:'7px'}}>
                    <div>
                        <p >Total Deductions</p>
                    </div>
                    <div>
                        <p className='td'style={{color:'#dc2626'}}>-$1,583.33</p>
                    </div>
                </div><br/><br/>
                <div className='d-line'></div>
                <div className='bs'style={{display:'flex',justifyContent:'space-between',marginBottom:'15px'}}>
                    <div>
                        <p>Net Pay</p>
                    </div>
                    <div className='netpay'>
                        <p>$6,333.34</p>
                    </div>
                </div>
                <button className='edit-pay'>Edit Payroll</button>
                <button className='download-paystub'>Download Paystub</button>

            </div>

        </div>
    </div>
  )
}

export default PayrollDetails