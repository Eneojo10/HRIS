import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import image from '../Images/user2.jpg'

function Taskdetails() {
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
            <div className='tsk-categories'>
              <h4>All Categories</h4>
            </div>
            <div className='documentation-border'>
              <div className='documentation'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4>Documentation</h4>
                </div>
              </div>
            </div>
            <div className='equipment-border'>
              <div className='equipment-task'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4>Equipment Setup</h4>
                </div>
              </div>
            </div>
            <div className='training-border'>
              <div className='tsk-training'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4>Training</h4>
                </div>
              </div>
            </div>
            <div className='meeting-border'>
              <div className='tsk-meetings'>
                <div>
                  <IoDocumentTextOutline />
                </div>
                <div>
                  <h4>Meetings</h4>
                </div>
              </div>
            </div>
            <div className='access-border'>
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
            <div className='tsk---categories'>
              <h4>All Status</h4>
            </div>
            <div className='tsk----categories'>
              <h4>Pending</h4>
            </div>
            <div className='tsk--categories'>
              <h4>In Progress</h4>
            </div>
            <div className='tsk--categories'>
              <h4>Completed</h4>
            </div>
            <div className='tsk----categories'>
              <h4>Overdue</h4>
            </div>

          </div>
          <div className='tsk-form'>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk'style={{display:'flex',justifyContent:'space-between'}}>
                  <div>
                    <h3>Complete I-9 Form</h3>
                    <p>Verify employment eligibility documentation with HR</p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br/>
                <div className='ff-tsk'style={{marginBottom:'25px'}}>
                  <div>
                    <p>Documentation</p>
                  </div>
                  <div>
                    <p>high priority</p>
                  </div>
                  <div>
                    <p>Pending</p>
                  </div>
                </div>
                <div className='tsk-tsk'>
                  <div className='tsk-image'>
                    <img src={image} alt=''/>
                  </div>
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='tsk-form-one'>

            </div>
            <div className='tsk-form-one'>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Taskdetails
