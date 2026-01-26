import React, { useState, useEffect } from 'react'
import Dashboard from '../Menu/Dashboard'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import img1 from '../Images/user2.jpg'
import { GoPersonAdd } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { PiExport } from "react-icons/pi";
import { CiImport } from "react-icons/ci";
import Personal from './Register/Personal';
import Employment from './Register/Employment';
import Contact from './Register/Contact';
import Compensation from './Register/Compensation';
import Additional from './Register/Additional';
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { LuAward } from "react-icons/lu";
import axios from 'axios';
import { BASE_URL } from './Utils/globals';

function Employees() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Personal');
    const [firstBatch, setFirstBatch] = useState([]);
    const [remainingBatch, setRemainingBatch] = useState([]);
    const [total, setTotal] = useState(0);
    const [allemployees, setAllEmployees] = useState([]);
    const [department, setDepartment] = useState([])
    const [totaldept, setTotaldept] = useState(0)

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender_id: "",
        city: "",
        state: "",
        zip_code: "",
        dob: "",
        job_title: "",
        date: "",
        contact_name: "",
        phone_no: "",
        annual_salary: "",
        skill: "",
        education: "",
        certifications: "",
        experience: "",
        notes: "",
        type_id: "",
        location_id: "",
        package_id: "",
        dept_id: "",
        reports_id: "",
        work_id: "",
        frequency_id: "",
        currency_id: "",
        country_id: "",
        relationship_id: "",
    })

    // const [message, setMessage] = useState("");

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await axios.post(`${BASE_URL}/employee`, formData, {
    //             headers: { "Content-Type": "application/json" },
    //         });
    //         setMessage("Employee created successfully!");
    //         console.log(res.data);
    //         // Reset form if needed
    //         setFormData({
    //             firstname: "",
    //             lastname: "",
    //             email: "",
    //             phone: "",
    //             gender_id: "",
    //             city: "",
    //             state: "",
    //             zip_code: "",
    //             dob: "",
    //             job_title: "",
    //             date: "",
    //             contact_name: "",
    //             phone_no: "",
    //             annual_salary: "",
    //             skill: "",
    //             education: "",
    //             certifications: "",
    //             experience: "",
    //             notes: "",
    //             type_id: "",
    //             location_id: "",
    //             package_id: "",
    //             dept_id: "",
    //             reports_id: "",
    //             work_id: "",
    //             frequency_id: "",
    //             currecny_id: "",
    //             country_id: "",
    //             relationship_id: "",
    //         });
    //     } catch (error) {
    //         setMessage("Error creating employee. Please try again.");
    //         console.error(error);
    //     }
    // };


    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    };

    const handlePersonalNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setActiveTab('Employment');
    };

    const handleEmploymentNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setActiveTab('Contact');
    };

    const handleContactNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setActiveTab('Compensation');
    };

    const handleCompensationNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setActiveTab('Additional');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        const fetchAllEmployeeData = async () => {
            try {
                const [splitRes, allRes, deptRes] = await Promise.all([
                    axios.get(`${BASE_URL}/employee/split`),
                    axios.get(`${BASE_URL}/employees`),
                    axios.get(`${BASE_URL}/dept`)
                ]);

                setFirstBatch(splitRes.data.firstBatch);
                setRemainingBatch(splitRes.data.remainingBatch);
                setTotal(splitRes.data.totalEmployees);
                setAllEmployees(allRes.data);
                setDepartment(deptRes.data);
                setTotaldept(deptRes.data.length);
                console.log('Department data:', deptRes.data);
                console.log('Total departments:', deptRes.data.length);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };

        fetchAllEmployeeData();
    }, []);

   
    return (
        <div>
            <div className='employees-container'>
                <div className='main1'>
                    <Dashboard />
                </div>
                <div className='employees-nav'>
                    <div className='employee-navigation'>
                        <div className='all__employees'>
                            <div>
                                <h2>All Employees</h2>
                                <span>Manage your workforce and employee <br />information</span>
                            </div>
                            <div className='bulk-list'>
                                <div className='b_email'>
                                    <div className='email_flex'>
                                        <div className='outlineemail'><AiOutlineMail /></div>
                                        <span>Bulk Email</span>
                                    </div>
                                </div>
                                <div className='b_email'>
                                    <div className='email_flex'>
                                        <div className='outlineemail'><PiExport /></div>
                                        <span>Export</span>
                                    </div>
                                </div>
                                <div className='b_email'>
                                    <div className='email_flex'>
                                        <div className='outlineemail'><CiImport /></div>
                                        <span> Import</span>
                                    </div>
                                </div>

                                <div className='add-people-bg' >
                                    <div className='add-people' onClick={() => setIsModalOpen(true)}>
                                        <div className='add_people_icon'><GoPersonAdd /></div>
                                        <button className='addebtn'>Add Employee</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className='modal-add' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='modal-modal-add' style={{ display: 'flex', gap: '5px' }}>
                                        <div className='modal-icon' style={{ fontSize: '21px', marginTop: '1px' }}>
                                            <GoPersonAdd />
                                        </div>
                                        <div
                                        ><h3>Add New Employee</h3></div>
                                    </div>
                                    <button className='x-btn' onClick={() => setIsModalOpen(false)}>✖</button>

                                </div>

                                <br />
                                <div className='modal-bg'>
                                    <div className='p-flex'>
                                        <div onClick={() => handleTabClick('Personal')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Personal' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'>
                                            <h4>Personal</h4>
                                        </div>
                                        <div onClick={() => handleTabClick('Employment')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Employment' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'>
                                            <h4>Employment</h4>
                                        </div>
                                        <div onClick={() => handleTabClick('Contact')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Contact' ? 'white' : 'transparent',
                                                padding: '2px 25px'
                                            }}
                                            className='person-one'>
                                            <h4>Contact</h4>
                                        </div>
                                        <div onClick={() => handleTabClick('Compensation')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Compensation' ? 'white' : 'transparent',
                                                padding: '2px 20px'
                                            }}
                                            className='person-one'>
                                            <h4>Compensation</h4>
                                        </div>
                                        <div onClick={() => handleTabClick('Additional')}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: activeTab === 'Additional' ? 'white' : 'transparent',
                                                padding: '3px 20px'
                                            }}
                                            className='person-one'>
                                            <h4>Additional</h4>
                                        </div>

                                    </div>

                                </div>

                                <form>
                                    <div className='performance-content'>
                                        {activeTab === 'Personal' && <Personal data={formData} onNext={handlePersonalNext} onClose={handleCloseModal} />}
                                        {activeTab === 'Employment' && <Employment data={formData} onNext={handleEmploymentNext} onClose={handleCloseModal} />}
                                        {activeTab === 'Contact' && <Contact data={formData} onNext={handleContactNext} onClose={handleCloseModal} />}
                                        {activeTab === 'Compensation' && <Compensation data={formData} onNext={handleCompensationNext} onClose={handleCloseModal} />}
                                        {activeTab === 'Additional' && <Additional data={formData} onClose={handleCloseModal} />}

                                    </div>

                                </form>
                            </div>
                        </div>
                    )}

                    <div className='d-line_'></div>
                    <div className='emp-bg'>
                        <div className='employee-cards'>
                            <div className='employee-cards--flex'>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <GoPersonAdd />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+{remainingBatch.length}</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>{total}</h2>
                                            <p>Total Employees</p>
                                            <span>Active worforce</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <BsFillPersonCheckFill />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>1,240</h2>
                                            <p>Present Today</p>
                                            <span>Attendance rate</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <BsFillPersonXFill />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>43</h2>
                                            <p>On Leave</p>
                                            <span>Various leave types</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <IoMdTime />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>387</h2>
                                            <p>Remote Workers</p>
                                            <span>Working remotely</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <HiOutlineBuildingOffice />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>{totaldept || 0}</h2>
                                            <p>Department</p>
                                            <span>Active department</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <IoLocationOutline />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>8</h2>
                                            <p>Locations</p>
                                            <span>Office locations</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <LiaGiftSolid />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>28</h2>
                                            <p>New Hires (30d)</p>
                                            <span>Recent additions</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='employee-card1'>
                                    <div className='flex-one'>
                                        <div className='flex1'>
                                            <div>
                                                <LuAward />
                                            </div>
                                            <div>
                                                <div></div>
                                                <p>+12</p>
                                            </div>
                                        </div><br />
                                        <div className='flex-number'>
                                            <h2>156</h2>
                                            <p>Top Performers</p>
                                            <span>High performers</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='empolyee-directory'>
                                <div className='directory-header'>
                                    <div className=']'>
                                        <h3>Employee Directory</h3>
                                        <span className='numbers'>Showing 6 of 1,247 employees</span>
                                    </div>
                                    <div className='empolyee-directory'>
                                        <table class="directory-table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <input type="checkbox" name="subscribe" value="yes" />
                                                    </th>
                                                    <th>Employee</th>
                                                    <th>Department</th>
                                                    <th>Contact</th>
                                                    <th>Location</th>
                                                    <th>Join Date</th>
                                                    <th>Status</th>
                                                    <th>Performance</th>
                                                    <th>Salary</th>
                                                    <th>Last Active</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {allemployees.map((employee, index) => (
                                                    <tr key={employee.id || index}>
                                                        <td>
                                                            <input type="checkbox" name="subscribe" value="yes" />
                                                        </td>
                                                        <td>
                                                            <div className='image1'>
                                                                <div className='employee-image01'>
                                                                    <img src={img1} alt={`${employee.firstname} ${employee.lastname}`} />
                                                                </div>
                                                                <span className='employee-name'>{employee.firstname} {employee.lastname}</span>
                                                            </div>
                                                        </td>
                                                        <td>{employee.dept_id?.dept || 'N/A'}</td>
                                                        <td>{employee.phone}</td>
                                                        <td>{employee.city}</td>
                                                        <td>{employee.date}</td>
                                                        <td>Active</td>
                                                        <td>Excellent</td>
                                                        <td>${employee.annual_salary}</td>
                                                        <td>2025-07-24</td>
                                                        <td><HiOutlineDotsHorizontal /></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Employees