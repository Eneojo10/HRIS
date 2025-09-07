import React, { useState } from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import Categories from './Categories';
import Documentation from './Documentation';
import Equipment from './Equipment';
import Training from './Training';
import Meetings from './Meetings';
import SystemAccess from './SystemAccess';
import Status from './Status';
import Pending from './Pending';
import Progress from './Progress';
import Complete from './Complete';
import Overdue from './Overdue';

function Taskdetails() {
  const [activeTab, setActiveTab] = useState('Categories')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  };

  const cards = [
    { title: "Active Onboarding", subtitle: "New hires in process" },
    { title: "Completed This Month", subtitle: "Successfully onboarded" },
    { title: "Starting This week", subtitle: "New arrivals" },
    { title: "Avg. Completion Time", subtitle: "Time to complete" },
    { title: "Task Completion Rate", subtitle: "Overall completion" },
    { title: "Pending Tasks", subtitle: "Across all hires" },
    { title: "Satisfaction Score", subtitle: "New hire feedback" },
    { title: "Overdue Items", subtitle: "Need attention" }
  ];

  return (
    <div>
      <div className='performance-background'>
        <div className='employee-cards'>
          <div className='employee-cards--flex'>

            {[
              { title: "Active Onboarding", subtitle: "New hires in process" },
              { title: "Completed This Month", subtitle: "Successfully onboarded" },
              { title: "Starting This week", subtitle: "New arrivals" },
              { title: "Avg. Completion Time", subtitle: "Time to complete" },
              { title: "Task Completion Rate", subtitle: "Overall completion" },
              { title: "Pending Tasks", subtitle: "Across all hires" },
              { title: "Satisfaction Score", subtitle: "New hire feedback" },
              { title: "Overdue Items", subtitle: "Need attention" },
            ].map((card, i) => (
              <div className='employee-card1' key={i}>
                <div className='flex-one'>
                  <div className='flex1'>
                    <div className='i-c-o-n' style={{ color: 'blue' }}>
                      <IoPeopleOutline />
                    </div>
                    <div className='twelve'>
                      <p>+12%</p>
                    </div>
                  </div><br />
                  <div className='flex-number'>
                    <h2>156</h2>
                    <p>{card.title}</p>
                    <span>{card.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
        <div className='d-line'></div>
        <div className='task_mgt-container'>
          <div className='T-mgt' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h2>Task Management</h2>
              <p>Track and manage onboarding tasks across all new hires</p>
            </div>
            <div className='task_mgt-buttons' style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
              <div><button className='bulk-btn'>Bulk Actions</button></div>
              <div> <button className='bulk-btnn'>Advanced Filters</button></div>
              <div><button className='bulk--btn'>Add Task</button></div>

            </div>
          </div>
          <div className='task-input'>
            <input placeholder='Search tasks, asignees, or description'></input>
          </div>
          <div className='task-overflow' style={{ marginBottom: '20px' }}>
            <div className='task-card-one'>
              <div className='task'>
                <h2>8</h2>
                <p>Total Tasks</p>
              </div>

            </div>
            <div className='task-card-one'>
              <div className='tsk-completed' style={{ padding: '20px', textAlign: 'center' }}>
                <h2>3</h2>
                <p>Completed</p>
              </div>

            </div>
            <div className='task-card-one'>
              <div className='tsk-progress' style={{ padding: '20px', textAlign: 'center' }}>
                <h2>1</h2>
                <p>In progress</p>
              </div>

            </div>
            <div className='task-card-one'>
              <div className='tsk-pending' style={{ padding: '20px', textAlign: 'center' }}>
                <h2>2</h2>
                <p>Pending</p>
              </div>

            </div>
            <div className='task-card-one'>
              <div className='tsk-overdue' style={{ textAlign: 'center', padding: '20px' }}>
                <h2>2</h2>
                <p>Overdue</p>
              </div>

            </div>

          </div>
          <div className='task-options'>
            <div onClick={() => handleTabClick('Categories')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Categories' ? 'black' : 'transparent',
                color: activeTab === 'Categories' ? 'white' : 'black',
              }}
              className='tsk-categories'>
              <h4

              >All Categories</h4>
            </div>
            <div onClick={() => handleTabClick('Documentation')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Documentation' ? 'black' : 'transparent',
                color: activeTab === 'Documentation' ? 'white' : 'black',
              }}
              className='documentation-border'>
              <div className='documentation'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4

                  >Documentation</h4>
                </div>
              </div>
            </div>
            <div onClick={() => handleTabClick('Equipment')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Equipment' ? 'black' : 'transparent',
                color: activeTab === 'Equipment' ? 'white' : 'black',
              }}
              className='equipment-border'>
              <div className='equipment-task'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4

                  >Equipment Setup</h4>
                </div>
              </div>
            </div>
            <div onClick={() => handleTabClick('Training')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Training' ? 'black' : 'transparent',
                color: activeTab === 'Training' ? 'white' : 'black',
              }}
              className='training-border'>
              <div className='tsk-training'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4

                  >Training</h4>
                </div>
              </div>
            </div>
            <div onClick={() => handleTabClick('Meetings')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Meetings' ? 'black' : 'transparent',
                color: activeTab === 'Meetings' ? 'white' : 'black',

              }}
              className='meeting-border'>
              <div className='tsk-meetings'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4

                  >Meetings</h4>
                </div>
              </div>
            </div>
            <div onClick={() => handleTabClick('System')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'System' ? 'black' : 'transparent',
                color: activeTab === 'System' ? 'white' : 'black',
              }}
              className='access-border'>
              <div className='tsk-access'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4>System Access</h4>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='sub-options'>
            <div onClick={() => handleTabClick('Status')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Status' ? 'black' : 'transparent',
                color: activeTab === 'Status' ? 'white' : 'black',
              }}
              className='tsk---categories'>
              <h4>All Status</h4>
            </div>
            <div onClick={() => handleTabClick('Pending')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Pending' ? 'black' : 'transparent',
                color: activeTab === 'Pending' ? 'white' : 'black',
              }}
              className='tsk----categories'>
              <h4>Pending</h4>
            </div>
            <div onClick={() => handleTabClick('Progress')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Progress' ? 'black' : 'transparent',
                color: activeTab === 'Progress' ? 'white' : 'black',
              }}
              className='tsk--categories'>
              <h4>In Progress</h4>
            </div>
            <div onClick={() => handleTabClick('Complete')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Complete' ? 'black' : 'transparent',
                color: activeTab === 'Complete' ? 'white' : 'black',
              }}
              className='tsk--categories'>
              <h4>Completed</h4>
            </div>
            <div onClick={() => handleTabClick('Overdue')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Overdue' ? 'black' : 'transparent',
                color: activeTab === 'Overdue' ? 'white' : 'black',
              }}
              className='tsk----categories'>
              <h4>Overdue</h4>
            </div>

          </div>
          <div className='performance-content'>
            {activeTab === 'Categories' && <Categories />}
            {activeTab === 'Documentation' && <Documentation />}
            {activeTab === 'Equipment' && <Equipment />}
            {activeTab === 'Training' && <Training />}
            {activeTab === 'Meetings' && <Meetings />}
            {activeTab === 'System' && <SystemAccess />}
            {activeTab === 'Status' && <Status />}
            {activeTab === 'Pending' && <Pending />}
            {activeTab === 'Progress' && <Progress />}
            {activeTab === 'Complete' && <Complete />}
            {activeTab === 'Overdue' && <Overdue />}

          </div>


        </div>

      </div>
    </div>
  )
}

export default Taskdetails
