import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { FiAward } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { SiClickhouse } from "react-icons/si";

function Banalytics() {
  return (
    <div>
      <div className='dept--cards'>
        <div className='dept-card010'>
          <div className='total-department'>
            <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <div>
                <h4>Avg Performance Score</h4>
                <p>12</p>
              </div>
              <div className='icon-dept' style={{ marginTop: '20px', color: '#2563eb', backgroundColor: '#eff6ff', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                <SiClickhouse />
              </div>
            </div>
            <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
              <div>
                <FaArrowTrendUp />
              </div>
              <div>
                <p>+2</p>
              </div>
            </div>
          </div>
        </div>
        <div className='dept-card010'>
          <div className='total-department'>
            <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <div>
                <h4>Employee Satisfaction</h4>
                <p>1,247</p>
              </div>
              <div className='icon-dept' style={{ marginTop: '20px', color: '#23a854', backgroundColor: '#f0fdf4', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                <FiAward />
              </div>
            </div>
            <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
              <div>
                <FaArrowTrendUp />
              </div>
              <div>
                <p>+8.2%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='dept-card010'>
          <div className='total-department'>
            <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <div>
                <h4>Avg Turnover Rate</h4>
                <p>₦550M</p>
              </div>
              <div className='icon-dept' style={{ marginTop: '20px', color: 'purple', backgroundColor: '#eee7f4', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                <IoPeople />
              </div>
            </div>
            <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
              <div>
                <FaArrowTrendUp />
              </div>
              <div>
                <p>+5.1%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='dept-card010'>
          <div className='total-department'>
            <div className='total_department-flex' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <div>
                <h4>Cost Efficiency</h4>
                <p>87.3%</p>
              </div>
              <div className='icon-dept' style={{ marginTop: '20px', color: '#ea580c', backgroundColor: '#fff7ed', width: '19%', height: '40px', textAlign: 'center', paddingTop: '9px', fontSize: '20px', borderRadius: '8px' }}>
                <TbCurrencyNaira />
              </div>
            </div>
            <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'red' }}>
              <div>
                <FaArrowTrendDown />
              </div>
              <div>
                <p>-2.1%</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <br />
      <div className='debt-analysis'>
        <div className='deptone' style={{ padding: '20px' }}>
          <h2>Department Performance Analysis</h2>
          <p>Comprehensive performance metrics across all departments</p>
          <div className='depsub-one'>
            <div className='dept-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <div className='threefourtu' style={{ display: 'flex', gap: '5px' }}>
                <div>
                  <h3>Engineering</h3>
                </div>
                <div className='the-employee' style={{ fontSize: '13px', marginTop: '3px' }}>
                  <p>342 employees</p>
                </div>
              </div>
              <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
                <div>
                  <FaArrowTrendDown />
                </div>
                <div>
                  <p>-2.1%</p>
                </div>
              </div>

            </div>
            <div className='pspt' style={{ display: 'flex', gap: '20px', width: '96%', margin: 'auto' }}>
              <div className='perf' style={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
                <div>
                  <p>Performance</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Satisfaction</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Productivity</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Turnover</p>
                </div>
                <span>94%</span>
              </div>

            </div>
            <div className='dept_progress' style={{ width: '96%', margin: 'auto', display: 'flex', gap: '26px' }}>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>

            </div>
            <br />

          </div>
          <div className='depsub-one'>
            <div className='dept-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <div className='threefourtu' style={{ display: 'flex', gap: '5px' }}>
                <div>
                  <h3>Sales</h3>
                </div>
                <div className='the-employee' style={{ fontSize: '13px', marginTop: '3px' }}>
                  <p>342 employees</p>
                </div>
              </div>
              <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
                <div>
                  <FaArrowTrendDown />
                </div>
                <div>
                  <p>-2.1%</p>
                </div>
              </div>

            </div>
            <div className='pspt' style={{ display: 'flex', gap: '20px', width: '96%', margin: 'auto' }}>
              <div className='perf' style={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
                <div>
                  <p>Performance</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Satisfaction</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Productivity</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Turnover</p>
                </div>
                <span>94%</span>
              </div>

            </div>
            <div className='dept_progress' style={{ width: '96%', margin: 'auto', display: 'flex', gap: '26px' }}>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>

            </div>
            <br />

          </div>

          <div className='depsub-one'>
            <div className='dept-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <div className='threefourtu' style={{ display: 'flex', gap: '5px' }}>
                <div>
                  <h3>Marketing</h3>
                </div>
                <div className='the-employee' style={{ fontSize: '13px', marginTop: '3px' }}>
                  <p>342 employees</p>
                </div>
              </div>
              <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
                <div>
                  <FaArrowTrendDown />
                </div>
                <div>
                  <p>-2.1%</p>
                </div>
              </div>

            </div>
            <div className='pspt' style={{ display: 'flex', gap: '20px', width: '96%', margin: 'auto' }}>
              <div className='perf' style={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
                <div>
                  <p>Performance</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Satisfaction</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Productivity</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Turnover</p>
                </div>
                <span>94%</span>
              </div>

            </div>
            <div className='dept_progress' style={{ width: '96%', margin: 'auto', display: 'flex', gap: '26px' }}>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>

            </div>
            <br />

          </div>
          <div className='depsub-one'>
            <div className='dept-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <div className='threefourtu' style={{ display: 'flex', gap: '5px' }}>
                <div>
                  <h3>HR</h3>
                </div>
                <div className='the-employee' style={{ fontSize: '13px', marginTop: '3px' }}>
                  <p>342 employees</p>
                </div>
              </div>
              <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
                <div>
                  <FaArrowTrendDown />
                </div>
                <div>
                  <p>-2.1%</p>
                </div>
              </div>

            </div>
            <div className='pspt' style={{ display: 'flex', gap: '20px', width: '96%', margin: 'auto' }}>
              <div className='perf' style={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
                <div>
                  <p>Performance</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Satisfaction</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Productivity</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Turnover</p>
                </div>
                <span>94%</span>
              </div>

            </div>
            <div className='dept_progress' style={{ width: '96%', margin: 'auto', display: 'flex', gap: '26px' }}>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>

            </div>
            <br />

          </div>
          <div className='depsub-one'>
            <div className='dept-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <div className='threefourtu' style={{ display: 'flex', gap: '5px' }}>
                <div>
                  <h3>Finance</h3>
                </div>
                <div className='the-employee' style={{ fontSize: '13px', marginTop: '3px' }}>
                  <p>342 employees</p>
                </div>
              </div>
              <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
                <div>
                  <FaArrowTrendDown />
                </div>
                <div>
                  <p>-2.1%</p>
                </div>
              </div>

            </div>
            <div className='pspt' style={{ display: 'flex', gap: '20px', width: '96%', margin: 'auto' }}>
              <div className='perf' style={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
                <div>
                  <p>Performance</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Satisfaction</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Productivity</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Turnover</p>
                </div>
                <span>94%</span>
              </div>

            </div>
            <div className='dept_progress' style={{ width: '96%', margin: 'auto', display: 'flex', gap: '26px' }}>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>

            </div>
            <br />

          </div>
          <div className='depsub-one'>
            <div className='dept-flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <div className='threefourtu' style={{ display: 'flex', gap: '5px' }}>
                <div>
                  <h3>Operations</h3>
                </div>
                <div className='the-employee' style={{ fontSize: '13px', marginTop: '3px' }}>
                  <p>342 employees</p>
                </div>
              </div>
              <div className='farrow' style={{ display: 'flex', gap: '4px', color: 'green' }}>
                <div>
                  <FaArrowTrendDown />
                </div>
                <div>
                  <p>-2.1%</p>
                </div>
              </div>

            </div>
            <div className='pspt' style={{ display: 'flex', gap: '20px', width: '96%', margin: 'auto' }}>
              <div className='perf' style={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
                <div>
                  <p>Performance</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Satisfaction</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Productivity</p>
                </div>
                <span>94%</span>
              </div>
              <div className='perf' style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Turnover</p>
                </div>
                <span>94%</span>
              </div>

            </div>
            <div className='dept_progress' style={{ width: '96%', margin: 'auto', display: 'flex', gap: '26px' }}>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress-fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>

            </div>
            <br />

          </div>
        </div>

      </div>
      <br />
      <div className='performance-distro'>
        <div className='distro-one'>
          <div className='dis-one' style={{ padding: '20px' }}>
            <h3>Performance Distribution</h3>
            <br />
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Engineering</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress--fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Sales</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress--fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Marketing</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress--fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>HR</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress--fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Finance</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress--fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo' style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Operations</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress--fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className='distro-one'>
          <div className='dis-one' style={{ padding: '20px' }}>
            <h3>Employee Satisfaction</h3>
            <br />
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Engineering</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress---fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Sales</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress---fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Marketing</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress---fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>HR</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress---fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo'style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Finance</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress---fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
            <div className='esmhfo' style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <p>Operations</p>
              </div>
              <div className="dept-progress-container">
                <div className="dept-progress-bar">
                  <div className="dept-progress---fill" style={{ width: '78%' }}></div> {/* adjust width dynamically */}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
      <br />

    </div>
  )
}

export default Banalytics