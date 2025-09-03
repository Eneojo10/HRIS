import React from 'react'
import { BiSolidReport } from "react-icons/bi";

function Reports() {
  return (
    <div>
      <div className='benefitreport'>
        <div className='benreport-one'>
          <div className='ben-report'>
            <div className='br'>
              <div>
                <h2>Benefits Reports</h2>
                <p>Generate and download benefit reports</p>

              </div>
              <div className='benefitinput'>
                <input type='text' placeholder='Search reports...'></input>
              </div>
              <div className='benefitreportselect'>
                <select>
                  <option>All Types</option>
                  <option>Summary</option>
                  <option>Enrollment</option>
                  <option>Analysis</option>
                  <option>Utilization</option>
                  <option>Tax</option>
                  <option>Survey</option>
                </select>
              </div>
            </div><br />
            <div className='survey-border'>
              <div className='srv'>
                <div className='sur-flex'>
                  <div className='sur-one'>
                    <div className='solidreport'>
                      <BiSolidReport />
                    </div>
                    <div>
                      <h4>Monthly Benefits Summary</h4>
                      <p>Comprehensive overview of all benefit enrollments and costs</p>
                      <p>2024-01-10
                        •
                        3.2 MB
                        •
                        PDF</p>
                    </div>

                  </div>
                  <div className='rd'>
                    <div>
                      <p>Ready</p>
                    </div>
                    <div>
                      <button className='benefit_download'>Download</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

            </div>
            <div className='survey-border'>
              <div className='srv'>
                <div className='sur-flex'>
                  <div className='sur-one'>
                    <div className='solidreport'>
                      <BiSolidReport />
                    </div>
                    <div>
                      <h4>Health Insurance Enrollment Report</h4>
                      <p>Detailed breakdown of health insurance plan selections</p>
                      <p>2024-01-10
                        •
                        3.2 MB
                        •
                        PDF</p>
                    </div>

                  </div>
                  <div className='rd'>
                    <div>
                      <p>Ready</p>
                    </div>
                    <div>
                      <button className='benefit_download'>Download</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

            </div>
            <div className='survey-border'>
              <div className='srv'>
                <div className='sur-flex'>
                  <div className='sur-one'>
                    <div className='solidreport'>
                      <BiSolidReport />
                    </div>
                    <div>
                      <h4>Benefits Cost Analysis Q1 2024</h4>
                      <p>Quarterly analysis of benefit costs and trends</p>
                      <p>2024-01-10
                        •
                        3.2 MB
                        •
                        PDF</p>
                    </div>

                  </div>
                  <div className='rd'>
                    <div>
                      <p>Ready</p>
                    </div>
                    <div>
                      <button className='benefit_download'>Download</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

            </div>
            <div className='survey-border'>
              <div className='srv'>
                <div className='sur-flex'>
                  <div className='sur-one'>
                    <div className='solidreport'>
                      <BiSolidReport />
                    </div>
                    <div>
                      <h4>Dental Plan Utilization Report</h4>
                      <p>Analysis of dental benefit usage and claims</p>
                      <p>2024-01-10
                        •
                        3.2 MB
                        •
                        PDF</p>
                    </div>

                  </div>
                  <div className='rd'>
                    <div>
                      <p>Ready</p>
                    </div>
                    <div>
                      <button className='benefit_download'>Download</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

            </div>
            <div className='survey-border'>
              <div className='srv'>
                <div className='sur-flex'>
                  <div className='sur-one'>
                    <div className='solidreport'>
                      <BiSolidReport />
                    </div>
                    <div>
                      <h4>Employee Benefits Survey Results</h4>
                      <p>Employee satisfaction and feedback on benefit offerings</p>
                      <p>2024-01-10
                        •
                        3.2 MB
                        •
                        PDF</p>
                    </div>

                  </div>
                  <div className='rd'>
                    <div>
                      <p>Ready</p>
                    </div>
                    <div>
                      <button className='benefit_download'>Download</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

            </div>
            <div className='survey-border'>
              <div className='srv'>
                <div className='sur-flex'>
                  <div className='sur-one'>
                    <div className='solidreport'>
                      <BiSolidReport />
                    </div>
                    <div>
                      <h4>Benefits Tax Report 2023</h4>
                      <p>Annual tax implications and reporting for benefits</p>
                      <p>2024-01-10
                        •
                        3.2 MB
                        •
                        PDF</p>
                    </div>

                  </div>
                  <div className='rd'>
                    <div>
                      <p>Ready</p>
                    </div>
                    <div>
                      <button className='benefit_download'>Download</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

            </div>


          </div>
          <div className='ben-inside-border'>
            <div className='fits-report'>
              <h3>Quick Reports</h3>
              <div className='reports_wan'>
                <div className='ces'>
                  <h4>Current Enrollment Summary</h4>
                </div>

              </div>
              <div className='reports_wan'>
                <div className='ces'>
                  <h4>Monthly Cost Report</h4>
                </div>

              </div>
              <div className='reports_wan'>
                <div className='ces'>
                  <h4>Plan Comparison Analysis</h4>
                </div>

              </div>
              <div className='reports_wan'>
                <div className='ces'>
                  <h4>Employee Eligibility Report</h4>
                </div>

              </div>
              <div className='reports_wan'>
                <div className='ces'>
                  <h4>Benefits Utilization Overview</h4>
                </div>

              </div>
              

            </div>
            <br />

          </div>


        </div>
        <br />

      </div>

    </div>
  )
}

export default Reports