import React, { useState } from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import AllDepartment from '../Others/AllDepartment';
import Engineering from '../Others/Engineering';
import Product from '../Others/Product';
import Sales from '../Others/Sales'
import Design from '../Others/Design';
import Marketing from '../Others/Marketing';
import Executive from '../Others/Executive';
import { BiImport } from "react-icons/bi";
import { PiExport } from "react-icons/pi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { CgDanger } from "react-icons/cg";



function Templatesdetails() {

  const [activeTab, setActiveTab] = useState('Departments')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  };

  const cards = [
    { title: "Active Onboarding", subtitle: "New hires in process", icon: <IoPeopleOutline />, color: 'blue' },
    { title: "Completed This Month", subtitle: "Successfully onboarded", icon: <BsFillPersonCheckFill />, color: 'green' },
    { title: "Starting This week", subtitle: "New arrivals", icon: <SlCalender />, color: 'purple' },
    { title: "Avg. Completion Time", subtitle: "Time to complete", icon: <IoMdTime />, color: 'orange' },
    { title: "Task Completion Rate", subtitle: "Overall completion", icon: <IoMdCheckmarkCircleOutline />, color: 'green' },
    { title: "Pending Tasks", subtitle: "Across all hires", icon: <BsCircle />, color: 'blue' },
    { title: "Satisfaction Score", subtitle: "New hire feedback", icon: <FiAward />, color: 'red' },
    { title: "Overdue Items", subtitle: "Need attention", icon: <CgDanger />, color: 'red' },
  ];

  return (
    <div>
      <div className='performance-background'>
        <div className='employee-cards'>
          <div className='employee-cards--flex'>

            {cards.map((card, i) => (
              <div className='employee-card1' key={i}>
                <div className='flex-one'>
                  <div className='flex1'>
                    <div className='i-c-o-n' style={{ color: card.color, fontSize: '25px' }}>
                      {card.icon}
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
          <div className='template-flex'>
            <div>
              <h2>Onboarding Templates</h2>
              <p>Manage and customize onboarding templates for different roles</p>
            </div>
            <div className='ie-flex'>
              <div className='onboard-import'>
                <div className='import-onboard'>
                  <div>
                    <BiImport />
                  </div>
                  <div>
                    <h4>Import</h4>
                  </div>
                </div>
              </div>
              <div className='onboard-export'>
                <div className='export-onboard'>
                  <div>
                    <PiExport />
                  </div>
                  <div>
                    <h4>Export All</h4>
                  </div>
                </div>
              </div>
              <button className='ctbtn'>Create Template</button>
            </div>
          </div><br />
          <div className='templates-input'>
            <input type="text" placeholder='Search templates by name or description...'></input>
          </div><br />
          <div className='all_depart-ment'>
            <div onClick={() => handleTabClick('Departments')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Departments' ? 'black' : 'transparent',
                color: activeTab === 'Departments' ? 'white' : 'black',
              }}
              className='line-one'>
              <h4>All Departments</h4>
            </div>
            <div onClick={() => handleTabClick('Engineering')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Engineering' ? 'black' : 'transparent',
                color: activeTab === 'Engineering' ? 'white' : 'black',
              }}
              className='line-two'>
              <h4>Engineering</h4>
            </div>
            <div onClick={() => handleTabClick('Product')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Product' ? 'black' : 'transparent',
                color: activeTab === 'Product' ? 'white' : 'black',
              }}
              className='line-two'>
              <h4>Product</h4>
            </div>
            <div onClick={() => handleTabClick('Sales')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Sales' ? 'black' : 'transparent',
                color: activeTab === 'Sales' ? 'white' : 'black',
              }}
              className='line-two'>
              <h4>Sales</h4>
            </div>
            <div onClick={() => handleTabClick('Design')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Design' ? 'black' : 'transparent',
                color: activeTab === 'Design' ? 'white' : 'black',
              }}
              className='line-two'>
              <h4>Design</h4>
            </div>
            <div onClick={() => handleTabClick('Marketing')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Marketing' ? 'black' : 'transparent',
                color: activeTab === 'Marketing' ? 'white' : 'black',
              }}
              className='line-two'>
              <h4>Marketing</h4>
            </div>
            <div className='line-two'>
              <h4>Analytics</h4>
            </div>
            <div className='line-two'>
              <h4>All Departments</h4>
            </div>
            <div onClick={() => handleTabClick('Executive')}
              style={{
                cursor: 'pointer',
                backgroundColor: activeTab === 'Executive' ? 'black' : 'transparent',
                color: activeTab === 'Executive' ? 'white' : 'black',
              }}
              className='line-two'>
              <h4>Executive</h4>
            </div>
          </div>
          <br />
          <div className='performance-content'>
            {activeTab === 'Departments' && <AllDepartment />}
            {activeTab === 'Engineering' && <Engineering />}
            {activeTab === 'Product' && <Product />}
            {activeTab === 'Sales' && <Sales />}
            {activeTab === 'Design' && <Design />}
            {activeTab === 'Marketing' && <Marketing />}
            {activeTab === 'Executive' && <Executive />}

          </div>


        </div>


      </div>

    </div>
  )
}

export default Templatesdetails