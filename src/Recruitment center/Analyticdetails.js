import React, { useState } from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import HiringTrends from '../Pages/Hiringtrends';
import { TbCurrencyNaira } from "react-icons/tb";
import { SiConvertio } from "react-icons/si";

function Analyticdetails() {
  const [activeTab, setActiveTab] = useState('Today');

  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  // };

  const tabStyle = (tabName) => ({
    cursor: 'pointer',
    backgroundColor: activeTab === tabName ? 'black' : 'transparent',
    color: activeTab === tabName ? 'white' : 'black',
    padding: '3px 35px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  });

  return (
    <div>
      <div>
        <div className='j-job'>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline'>
                  <IoPeopleOutline />
                </div>
                <h4>156</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Active Candidates</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>In pipeline</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: '#43b66d' }}>
                  <BsFillPersonPlusFill />
                </div>
                <h4>15</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Open Positions</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Actively hiring</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: '#9333ea' }}>
                  <SlCalender />
                </div>
                <h4>156</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Interviews Today</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Scheduled</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: '#ea5a0f' }}>
                  <MdAccessTime />
                </div>
                <h4>156</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Avg. Time to Hire</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>This quarter</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: 'green' }}>
                  <IoMdCheckmarkCircleOutline />
                </div>
                <h4>156</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Offer Acceptance</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Success rate</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline'>
                  <IoPeopleOutline />
                </div>
                <h4>156</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Pipeline Conversion</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Application to hire</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline'>
                  <IoPeopleOutline />
                </div>
                <h4>156</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Quality Score</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Hire quality</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline'>
                  <IoPeopleOutline />
                </div>
                <h4>156</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Urgent Positions</p>
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Need attention</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
        </div>

        <div className='job-line'></div>
        <div className='job-background-color'>
          <div className='job-details_'><br />
            <h2>Recruitment Analytics</h2>
            <p>Track hiring performance and optimize your recruitment process</p><br />


            <div className='an-holder'>
              <div className='ana-one'>
                <div className='analy__tics' style={{ width: '93%', margin: 'auto', marginTop: '30px' }}>
                  <div>
                    <p>Total Applications</p>
                    <div className='pple' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <h2>1,240</h2>
                      </div>
                      <div className='oo' style={{ fontSize: '26px', color: '#2563eb', width: '13%', backgroundColor: '#eff6ff', height: '50px', textAlign: 'center', paddingTop: '10px', borderRadius: '8px' }}>
                        <IoPeopleOutline />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className='ana-one'>
                <div className='analy__tics' style={{ width: '93%', margin: 'auto', marginTop: '30px' }}>
                  <div>
                    <p>Avg. Time to Hire</p>
                    <div className='pple' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <h2>1,240</h2>
                      </div>
                      <div className='oo' style={{ fontSize: '26px', color: '#ea580c', width: '13%', backgroundColor: '#fff7ed', height: '50px', textAlign: 'center', paddingTop: '10px', borderRadius: '8px' }}>
                        <MdAccessTime />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className='ana-one'>
                <div className='analy__tics' style={{ width: '93%', margin: 'auto', marginTop: '30px' }}>
                  <div>
                    <p>Conversion Rate</p>
                    <div className='pple' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <h2>1,240</h2>
                      </div>
                      <div className='oo' style={{ fontSize: '25px', color: '#9333ea', backgroundColor: '#faf5ff', width: '13%', height: '50px', textAlign: 'center', paddingTop: '10px', borderRadius: '8px' }}>
                        <SiConvertio />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className='ana-one'>
                <div className='analy__tics' style={{ width: '93%', margin: 'auto', marginTop: '30px' }}>
                  <div>
                    <p>Cost per Hire</p>
                    <div className='pple' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <h2>1,240</h2>
                      </div>
                      <div className='oo' style={{ fontSize: '25px', color: 'green', backgroundColor: '#f0fdf4', width: '13%', height: '50px', textAlign: 'center', paddingTop: '10px', borderRadius: '8px' }}>
                        <TbCurrencyNaira />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div><br />
            <div className='hiring_trend'>
              {/*  */}
            </div>
            <div className='hiring_trendio'>
              <div className='pie-chart'>
                <HiringTrends />
              </div>
            </div>
            <div className='hiring_trend'>
              <div className='h-t'>
                <h2>Source Effectiveness</h2><br />
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Glassdoor</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '33%', justifyContent: 'space-between' }}>
                        <div><p>120 applications</p></div>
                        <div className='fifteen'><p>
                          15 hires</p></div>
                        <div className='con-ver'><p>12.5% conversion</p></div>
                      </div>

                    </div>
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}

                        ></div>

                      </div>

                    </div>
                  </div>

                </div>
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>LinkedIn</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '33%', justifyContent: 'space-between' }}>
                        <div><p>120 applications</p></div>
                        <div className='fifteen'><p>
                          15 hires</p></div>
                        <div className='con-ver'><p>12.5% conversion</p></div>
                      </div>
                    </div>
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Indeed</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '33%', justifyContent: 'space-between' }}>
                        <div><p>120 applications</p></div>
                        <div className='fifteen'><p>
                          15 hires</p></div>
                        <div className='con-ver'><p>12.5% conversion</p></div>
                      </div>
                    </div>
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Company Website</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '33%', justifyContent: 'space-between' }}>
                        <div><p>120 applications</p></div>
                        <div className='fifteen'><p>
                          15 hires</p></div>
                        <div className='con-ver'><p>12.5% conversion</p></div>
                      </div>
                    </div>
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Referrals</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '33%', justifyContent: 'space-between' }}>
                        <div><p>120 applications</p></div>
                        <div className='fifteen'><p>
                          15 hires</p></div>
                        <div className='con-ver'><p>12.5% conversion</p></div>
                      </div>
                    </div>
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>
            <div className='hiring_trend'>
              <div className='h-t'>
                <h2>Time to Hire by Position</h2><br />
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Software Engineer</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '23%', justifyContent: 'space-between' }}>
                        <div className='fifteen_'><p>35 days</p></div>
                        <div>
                          <p>(target: 30 days)</p>
                        </div>
                        <div><p>icon</p></div>
                      </div>
                    </div>
                    {/* Progress bar section */}
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Product Manager</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '23%', justifyContent: 'space-between' }}>
                        <div className='fifteen_'><p>35 days</p></div>
                        <div>
                          <p>(target: 30 days)</p>
                        </div>
                        <div><p>icon</p></div>
                      </div>
                    </div>
                    {/* Progress bar section */}
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Sales rep</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '23%', justifyContent: 'space-between' }}>
                        <div className='fifteen_'><p>35 days</p></div>
                        <div>
                          <p>(target: 30 days)</p>
                        </div>
                        <div><p>icon</p></div>
                      </div>
                    </div>
                    {/* Progress bar section */}
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Designer</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '23%', justifyContent: 'space-between' }}>
                        <div clfifteen_><p>35 days</p></div>
                        <div>
                          <p>(target: 30 days)</p>
                        </div>
                        <div><p>icon</p></div>
                      </div>
                    </div>
                    {/* Progress bar section */}
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='linkedIn'>
                  <div className='link-ed'>
                    <div className='l--flex' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h4>Data Scientist</h4>
                      <div className='analytics-conversion' style={{ display: 'flex', width: '23%', justifyContent: 'space-between' }}>
                        <div className='fifteen_'><p>35 days</p></div>
                        <div>
                          <p>(target: 30 days)</p>
                        </div>
                        <div><p>icon</p></div>
                      </div>
                    </div>
                    {/* Progress bar section */}
                    <div className="glassdoor">
                      <div className="glassdoor-bar" style={{ width: '85%', background: '#e0e0e0', borderRadius: '8px', height: '13px', marginTop: '15px' }}>
                        <div
                          className="glassdoor-fill"
                          style={{
                            width: `${(30 / 35) * 100}%`,
                            background: 'black',
                            height: '100%',
                            borderRadius: '8px'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyticdetails