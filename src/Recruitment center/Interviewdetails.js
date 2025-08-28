import React, { useState } from 'react'
import Today from './Today';
import Tomorrow from './Tomorrow';
import Week from './Week';
import All from './All';
import { IoPeopleOutline } from "react-icons/io5";

function Interviewdetails() {
  const [activeTab, setActiveTab] = useState('Today');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

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
        </div>

        <div className='job-line'></div>
        <div className='job-background-color'>
          <div className='job-details_'><br />
            <h2>Interview Scheduler</h2>
            <p>Manage and schedule candidate interviews</p><br />
            <div className='interview-days'>
              <div onClick={() => handleTabClick('Today')} style={tabStyle('Today')} className='i-one'>
                <p>Today</p>
              </div>
              <div onClick={() => handleTabClick('Tomorrow')} style={tabStyle('Tomorrow')} className='ione'>
                <p>Tomorrow</p>
              </div>
              <div onClick={() => handleTabClick('Week')} style={tabStyle('Week')} className='ione'>
                <p>This Week</p>
              </div>
              <div onClick={() => handleTabClick('All')} style={tabStyle('All')} className='ione'>
                <p>All Interviews</p>
              </div>
            </div><br />

            <div className='performance-content'>
              {activeTab === 'Today' && <Today />}
              {activeTab === 'Tomorrow' && <Tomorrow />}
              {activeTab === 'Week' && <Week />}
              {activeTab === 'All' && <All />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interviewdetails;
