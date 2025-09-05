import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
// import image from '../Images/user2.jpg'
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import image from '../Images/user2.jpg'
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";

function Templatesdetails() {
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
        <div className='templates-container'>
          <div>
            <div>
              <h2>Onboarding Templates</h2>
              <p>Manage and customize onboarding templates for different roles</p>
            </div>
            <div>
              <div>
                <h4>Import</h4>
              </div>
            </div>
          </div><br />
          <div className='templates-input'>
            <input type="text" placeholder='Search templates by name or description...'></input>
          </div><br />
          <div className='all_depart-ment'>
            <div>
              <h4>All Departments</h4>
            </div>
            <div>
              <h4>Engineering</h4>
            </div>
            <div>
              <h4>Product</h4>
            </div>
            <div>
              <h4>Sales</h4>
            </div>
            <div>
              <h4>Design</h4>
            </div>
            <div>
              <h4>Marketing</h4>
            </div>
            <div>
              <h4>Analytics</h4>
            </div>
            <div>
              <h4>All Departments</h4>
            </div>
            <div>
              <h4>Executive</h4>
            </div>
          </div>
          <br />
          <div className='template-form'>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Software Engineer Onboarding</h3>
                    <p>Complete onboarding template for engineering roles including technical setup and team integration</p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  {/* <div className='tsk-image'>
                    <img src={image} alt='' />
                  </div> */}
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Product Manager Onboarding</h3>
                    <p>Comprehensive template for product management roles with stakeholder meetings and product deep-dives</p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  {/* <div className='tsk-image'>
                    <img src={image} alt='' />
                  </div> */}
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Sales Representative Onboarding</h3>
                    <p>Sales-focused template with CRM training, product knowledge, and territory assignment


                    </p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  {/* <div className='tsk-image'>
                    <img src={image} alt='' />
                  </div> */}
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>UX Designer Onboarding</h3>
                    <p>Design-focused template with design system introduction and creative tool setup</p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  {/* <div className='tsk-image'>
                    <img src={image} alt='' />
                  </div> */}
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Marketing Specialist Onboarding</h3>
                    <p>Marketing-focused template with brand guidelines, campaign tools, and content strategy</p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  {/* <div className='tsk-image'>
                    <img src={image} alt='' />
                  </div> */}
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Data Scientist Onboarding</h3>
                    <p>Analytics-focused template with data access, tools setup, and methodology training</p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  {/* <div className='tsk-image'>
                    <img src={image} alt='' />
                  </div> */}
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Remote Employee Onboarding</h3>
                    <p>Specialized template for remote workers with virtual setup and communication protocols


                    </p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  {/* <div className='tsk-image'>
                    <img src={image} alt='' />
                  </div> */}
                  <div>
                    <h4>Alex Thompson</h4>
                    <p>Engineering</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>
            <div className='tsk-form-one'>
              <div className='f-orm'>
                <div className='f-tsk' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3>Executive Onboarding</h3>
                    <p>Leadership-focused template with strategic briefings and stakeholder introductions</p>
                  </div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div><br />
                <div className='ff-tsk' style={{ marginBottom: '25px' }}>
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
                  <div className='tsk-imag'>
                    <p>Executive</p>
                  </div>
                  <div>
                    <p>executive</p>
                    
                  </div>
                  <div>
                    <p>leadership</p>
                    
                  </div>
                  <div>
                    <p>+1</p>
                  </div>
                </div>
                <br />
                <div className='tsk-date-time'>
                  <div className='date-tsk'>
                    <div>
                      <SlCalender />
                    </div>
                    <div>
                      <p>Due: 1/30/2024</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Est: time: 15 min</p>
                    </div>
                  </div>
                  <div className='date-tsk'>
                    <div>
                      <IoMdTime />
                    </div>
                    <div>
                      <p>Stage: pre boarding</p>
                    </div>
                  </div>

                </div>
                <div className='tsk_bg'>
                  <div className='verify' style={{ padding: '15px' }}>
                    <p>Requires valid ID and work authorization documents</p>
                  </div>

                </div>
                <div className='tsk-list-butons'>
                  <div>
                    <button className='tsk-complete'>Complete</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Edit</button>
                  </div>
                  <div>
                    <button className='tsk-complete'>Details</button>
                  </div>
                </div>
                <br />
              </div>
              <br /><br />

            </div>


          </div>

        </div>

      </div>

    </div>
  )
}

export default Templatesdetails