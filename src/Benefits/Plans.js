import React from 'react'
import { LiaEdit } from "react-icons/lia";
import { IoPeopleOutline } from "react-icons/io5";

function Plans() {
  return (
    <div>
      <div className='benefits-hol-der'>
        <div className='sub-ben'>
          <div className='subben'>
            <div>
              <h2>Benefit Plans</h2>
              <p>Manage and configure employee benefit plans</p>
            </div>
            <div className='right-benefit'>
              <div className='bene-input'>
                <input type='text' placeholder='Search plans...'></input>
              </div>
              <div className='planselect'>
                <div className="custom-select-wrapper">
                  {/* <label for="status-select">Status:</label> */}
                  <select id="status-select" class="custom-select">
                    <option value="">All Categories</option>
                    <option value="active">Health Insurance</option>
                    <option value="inactive">Dental Insurance</option>
                    <option value="pending">Vision Insurance</option>
                    <option value="pending">Life Insurance</option>
                    <option value="pending">Retirement</option>
                  </select>
                </div>
              </div>
              <div>
                <button className='ben-btn'>Add Plan</button>
              </div>
            </div>

          </div><br />
          <div className='benefit-under'>
            <div className='u-benefit'>
              <div className='u-ben-details'>
                <div>
                  <h3>Health Plus Premium</h3>
                  <p>BlueCross BlueShield</p>
                </div>
                <div className='u-right'>
                  <div>
                    <p>4.8</p>
                  </div>
                  <div>
                    <p>active</p>
                  </div>
                  <div>
                    <LiaEdit />
                  </div>
                </div>

              </div><br />
              <div className='pce'>
                <div className='main-plan'>
                  <h4>Plan Details</h4>
                  <div className='plan-one'>
                    <div>
                      <p>Category:</p>
                    </div>
                    <div>
                      <h4>Health Insurance</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Coverage:</p>
                    </div>
                    <div>
                      <h4>Medical, Prescription, Emergency</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Deductible:</p>
                    </div>
                    <div>
                      <h4>$1,000</h4>
                    </div>

                  </div>
                </div>
                <div className='main-plan'>
                  <div className='main--plan'>
                    <h4>Cost Breakdown</h4>
                    <div className='plan-two'>
                      <div>
                        <p>Employee:</p>
                      </div>
                      <div>
                        <h4>$185/month</h4>
                      </div>

                    </div>
                    <div className='plan-two'>
                      <div>
                        <p>Employer:</p>
                      </div>
                      <div>
                        <h4>$420/month</h4>
                      </div>

                    </div>
                  </div>
                  <div className='d-line'></div>
                  <div className='ben-total'>
                    <div>
                      <h3>Total:</h3>
                    </div>
                    <div>
                      <h3>$605/month</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Enrollment</h4>
                  <div className='plan-three'>
                    <div className='benicon'>
                      <IoPeopleOutline />
                    </div>
                    <div>
                      <h4>342</h4>
                    </div>
                    <div>
                      <p className='side-emp' style={{ color: '#7c848e' }}>employees</p>
                    </div>

                  </div>
                </div>

              </div>

            </div>


          </div>
          <div className='benefit-under'>
            <div className='u-benefit'>
              <div className='u-ben-details'>
                <div>
                  <h3>Health Basic</h3>
                  <p>Aetna</p>
                </div>
                <div className='u-right'>
                  <div>
                    <p>4.8</p>
                  </div>
                  <div>
                    <p>active</p>
                  </div>
                  <div>
                    <LiaEdit />
                  </div>
                </div>

              </div><br />
              <div className='pce'>
                <div className='main-plan'>
                  <h4>Plan Details</h4>
                  <div className='plan-one'>
                    <div>
                      <p>Category:</p>
                    </div>
                    <div>
                      <h4>Health Insurance</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Coverage:</p>
                    </div>
                    <div>
                      <h4>Medical, Prescription, Emergency</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Deductible:</p>
                    </div>
                    <div>
                      <h4>$1,000</h4>
                    </div>

                  </div>
                </div>
                <div className='main-plan'>
                  <div className='main--plan'>
                    <h4>Cost Breakdown</h4>
                    <div className='plan-two'>
                      <div>
                        <p>Employee:</p>
                      </div>
                      <div>
                        <h4>$185/month</h4>
                      </div>

                    </div>
                    <div className='plan-two'>
                      <div>
                        <p>Employer:</p>
                      </div>
                      <div>
                        <h4>$420/month</h4>
                      </div>

                    </div>
                  </div>
                  <div className='d-line'></div>
                  <div className='ben-total'>
                    <div>
                      <h3>Total:</h3>
                    </div>
                    <div>
                      <h3>$605/month</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Enrollment</h4>
                  <div className='plan-three'>
                    <div className='benicon'>
                      <IoPeopleOutline />
                    </div>
                    <div>
                      <h4>342</h4>
                    </div>
                    <div>
                      <p className='side-emp' style={{ color: '#7c848e' }}>employees</p>
                    </div>

                  </div>
                </div>

              </div>

            </div>


          </div>
          <div className='benefit-under'>
            <div className='u-benefit'>
              <div className='u-ben-details'>
                <div>
                  <h3>Dental Complete</h3>
                  <p>Delta Dental</p>
                </div>
                <div className='u-right'>
                  <div>
                    <p>4.8</p>
                  </div>
                  <div>
                    <p>active</p>
                  </div>
                  <div>
                    <LiaEdit />
                  </div>
                </div>

              </div><br />
              <div className='pce'>
                <div className='main-plan'>
                  <h4>Plan Details</h4>
                  <div className='plan-one'>
                    <div>
                      <p>Category:</p>
                    </div>
                    <div>
                      <h4>Health Insurance</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Coverage:</p>
                    </div>
                    <div>
                      <h4>Medical, Prescription, Emergency</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Deductible:</p>
                    </div>
                    <div>
                      <h4>$1,000</h4>
                    </div>

                  </div>
                </div>
                <div className='main-plan'>
                  <div className='main--plan'>
                    <h4>Cost Breakdown</h4>
                    <div className='plan-two'>
                      <div>
                        <p>Employee:</p>
                      </div>
                      <div>
                        <h4>$185/month</h4>
                      </div>

                    </div>
                    <div className='plan-two'>
                      <div>
                        <p>Employer:</p>
                      </div>
                      <div>
                        <h4>$420/month</h4>
                      </div>

                    </div>
                  </div>
                  <div className='d-line'></div>
                  <div className='ben-total'>
                    <div>
                      <h3>Total:</h3>
                    </div>
                    <div>
                      <h3>$605/month</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Enrollment</h4>
                  <div className='plan-three'>
                    <div className='benicon'>
                      <IoPeopleOutline />
                    </div>
                    <div>
                      <h4>342</h4>
                    </div>
                    <div>
                      <p className='side-emp' style={{ color: '#7c848e' }}>employees</p>
                    </div>

                  </div>
                </div>

              </div>

            </div>


          </div>
          <div className='benefit-under'>
            <div className='u-benefit'>
              <div className='u-ben-details'>
                <div>
                  <h3>Vision Standard</h3>
                  <p>VSP</p>
                </div>
                <div className='u-right'>
                  <div>
                    <p>4.8</p>
                  </div>
                  <div>
                    <p>active</p>
                  </div>
                  <div>
                    <LiaEdit />
                  </div>
                </div>

              </div><br />
              <div className='pce'>
                <div className='main-plan'>
                  <h4>Plan Details</h4>
                  <div className='plan-one'>
                    <div>
                      <p>Category:</p>
                    </div>
                    <div>
                      <h4>Health Insurance</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Coverage:</p>
                    </div>
                    <div>
                      <h4>Medical, Prescription, Emergency</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Deductible:</p>
                    </div>
                    <div>
                      <h4>$1,000</h4>
                    </div>

                  </div>
                </div>
                <div className='main-plan'>
                  <div className='main--plan'>
                    <h4>Cost Breakdown</h4>
                    <div className='plan-two'>
                      <div>
                        <p>Employee:</p>
                      </div>
                      <div>
                        <h4>$185/month</h4>
                      </div>

                    </div>
                    <div className='plan-two'>
                      <div>
                        <p>Employer:</p>
                      </div>
                      <div>
                        <h4>$420/month</h4>
                      </div>

                    </div>
                  </div>
                  <div className='d-line'></div>
                  <div className='ben-total'>
                    <div>
                      <h3>Total:</h3>
                    </div>
                    <div>
                      <h3>$605/month</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Enrollment</h4>
                  <div className='plan-three'>
                    <div className='benicon'>
                      <IoPeopleOutline />
                    </div>
                    <div>
                      <h4>342</h4>
                    </div>
                    <div>
                      <p className='side-emp' style={{ color: '#7c848e' }}>employees</p>
                    </div>

                  </div>
                </div>

              </div>

            </div>


          </div>
          <div className='benefit-under'>
            <div className='u-benefit'>
              <div className='u-ben-details'>
                <div>
                  <h3>Life Insurance Basic</h3>
                  <p>MetLife</p>
                </div>
                <div className='u-right'>
                  <div>
                    <p>4.8</p>
                  </div>
                  <div>
                    <p>active</p>
                  </div>
                  <div>
                    <LiaEdit />
                  </div>
                </div>

              </div><br />
              <div className='pce'>
                <div className='main-plan'>
                  <h4>Plan Details</h4>
                  <div className='plan-one'>
                    <div>
                      <p>Category:</p>
                    </div>
                    <div>
                      <h4>Health Insurance</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Coverage:</p>
                    </div>
                    <div>
                      <h4>Medical, Prescription, Emergency</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Deductible:</p>
                    </div>
                    <div>
                      <h4>$1,000</h4>
                    </div>

                  </div>
                </div>
               <div className='main-plan'>
                  <div className='main--plan'>
                    <h4>Cost Breakdown</h4>
                    <div className='plan-two'>
                      <div>
                        <p>Employee:</p>
                      </div>
                      <div>
                        <h4>$185/month</h4>
                      </div>

                    </div>
                    <div className='plan-two'>
                      <div>
                        <p>Employer:</p>
                      </div>
                      <div>
                        <h4>$420/month</h4>
                      </div>

                    </div>
                  </div>
                  <div className='d-line'></div>
                  <div className='ben-total'>
                    <div>
                      <h3>Total:</h3>
                    </div>
                    <div>
                      <h3>$605/month</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Enrollment</h4>
                  <div className='plan-three'>
                    <div className='benicon'>
                      <IoPeopleOutline />
                    </div>
                    <div>
                      <h4>342</h4>
                    </div>
                    <div>
                      <p className='side-emp' style={{ color: '#7c848e' }}>employees</p>
                    </div>

                  </div>
                </div>

              </div>

            </div>


          </div>
          <div className='benefit-under'>
            <div className='u-benefit'>
              <div className='u-ben-details'>
                <div>
                  <h3>Retirement 401(k)</h3>
                  <p>UBA</p>
                </div>
                <div className='u-right'>
                  <div>
                    <p>4.8</p>
                  </div>
                  <div>
                    <p>active</p>
                  </div>
                  <div>
                    <LiaEdit />
                  </div>
                </div>

              </div><br />
              <div className='pce'>
                <div className='main-plan'>
                  <h4>Plan Details</h4>
                  <div className='plan-one'>
                    <div>
                      <p>Category:</p>
                    </div>
                    <div>
                      <h4>Health Insurance</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Coverage:</p>
                    </div>
                    <div>
                      <h4>Medical, Prescription, Emergency</h4>
                    </div>

                  </div>
                  <div className='plan-one'>
                    <div>
                      <p>Deductible:</p>
                    </div>
                    <div>
                      <h4>$1,000</h4>
                    </div>

                  </div>
                </div>
                <div className='main-plan'>
                  <div className='main--plan'>
                    <h4>Cost Breakdown</h4>
                    <div className='plan-two'>
                      <div>
                        <p>Employee:</p>
                      </div>
                      <div>
                        <h4>$185/month</h4>
                      </div>

                    </div>
                    <div className='plan-two'>
                      <div>
                        <p>Employer:</p>
                      </div>
                      <div>
                        <h4>$420/month</h4>
                      </div>

                    </div>
                  </div>
                  <div className='d-line'></div>
                  <div className='ben-total'>
                    <div>
                      <h3>Total:</h3>
                    </div>
                    <div>
                      <h3>$605/month</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Enrollment</h4>
                  <div className='plan-three'>
                    <div className='benicon'>
                      <IoPeopleOutline />
                    </div>
                    <div>
                      <h4>342</h4>
                    </div>
                    <div>
                      <p className='side-emp' style={{ color: '#7c848e' }}>employees</p>
                    </div>

                  </div>
                </div>

              </div>

            </div>


          </div>
          <br />
        </div>

      </div>
    </div>
  )
}

export default Plans