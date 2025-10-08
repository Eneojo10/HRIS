import React, { useState } from 'react'
import Today from './Today';
import Tomorrow from './Tomorrow';
import Week from './Week';
import All from './All';
import { IoPeopleOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
// import { IoMdTime } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiJfrogpipelines } from "react-icons/si";
import { BsFillPersonPlusFill } from "react-icons/bs";

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
                <div className='outline' style={{ color: 'green' }}>
                  <BsFillPersonPlusFill />
                </div>
                <h4>12</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Open Positions<br /> Actively hiring</p>
                {/* <span className='in-pipeline'style={{fontSize:'13px'}}>In pipeline</span> */}
              </div>
              <div className='twel-eve'>
                <p>+3</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: 'purple' }}>
                  <SlCalender />
                </div>
                <h4>8</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Interviews Today<br />Scheduled</p>
                {/* <span className='in-pipeline'style={{fontSize:'13px'}}>In pipeline</span> */}
              </div>
              <div className='twel-eve'>
                <p>0</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: '#ea580c' }}>
                  <IoMdTime />
                </div>
                <h4>28 days</h4>
                <p className='a--c' style={{ fontSize: '14px', fontWeight: '500' }}>Avg. Time to Hire<br />This quarter</p>
                {/* <span className='in-pipeline'style={{fontSize:'13px'}}>In pipeline</span> */}
              </div>
              <div className='twel-eve'>
                <p>-3 days</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: 'green' }}>
                  <FiCheckCircle />
                </div>
                <h4>85.7%</h4>
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
                <div className='outline' style={{ color: '#5249e6' }}>
                  <SiJfrogpipelines />
                </div>
                <h4>12.5%</h4>
                {/* <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Pipeline <br/>Conversion<br/>Application to hire</p> */}
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Pipeline <br />Conversion<br />Application to hire</span>
              </div>
              <div className='twel-eve'>
                <p>+12</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: 'orange' }}>
                  <FaArrowTrendUp />
                </div>
                <h4>4.2/5</h4>
                {/* <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Active Candidates</p> */}
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Quality Score<br />Hire quality</span>
              </div>
              <div className='twel-eve'>
                <p>+0.3</p>
              </div>

            </div>
          </div>
          <div className='j-job-one'>
            <div className='job-posting-container'>
              <div>
                <div className='outline' style={{ color: 'red' }}>
                  <MdOutlineErrorOutline />
                </div>
                <h4>3</h4>
                {/* <p className='a--c'style={{fontSize:'14px',fontWeight:'500'}}>Urge Candidates</p> */}
                <span className='in-pipeline' style={{ fontSize: '13px' }}>Urgent Positions<br />Need attention</span>
              </div>
              <div className='twel-eve'>
                <p>+1</p>
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
