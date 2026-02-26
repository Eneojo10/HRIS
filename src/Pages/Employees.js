import React, { useState, useEffect } from 'react'
import Dashboard from '../Menu/Dashboard'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import img1 from '../Images/user2.jpg'
import { GoPersonAdd } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { PiExport } from "react-icons/pi";
import { CiImport } from "react-icons/ci";
import EmployeeWizard from './EmployeeWizard';
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { LuAward } from "react-icons/lu";
import axios from 'axios';
import { BASE_URL, getAuthHeaders } from './Utils/globals';
import { employeeService } from './Utils/employeeService';

function Employees() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [firstBatch, setFirstBatch] = useState([]);
    const [remainingBatch, setRemainingBatch] = useState([]);
    const [total, setTotal] = useState(0);
    const [allemployees, setAllEmployees] = useState([]);
    const [department, setDepartment] = useState([])
    const [totaldept, setTotaldept] = useState(0)
    const [contextMenu, setContextMenu] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleEllipsisClick = (e, employee) => {
        e.stopPropagation();
        setSelectedEmployee(employee);
        const rect = e.currentTarget.getBoundingClientRect();
        let x = rect.left - 160;
        let y = rect.top;
        
        if (x < 0) {
            x = rect.right + 10;
        }
        if (y + 120 > window.innerHeight) {
            y = window.innerHeight - 130;
        }
        
        setContextMenu({ x, y });
    };

    const handleViewDetails = () => {
        console.log('View details for:', selectedEmployee);
        setContextMenu(null);
    };

    const handleEdit = () => {
        console.log('Edit employee:', selectedEmployee);
        setContextMenu(null);
    };

    const handleDelete = () => {
        console.log('Delete employee:', selectedEmployee);
        setContextMenu(null);
    };

    const closeContextMenu = () => {
        setContextMenu(null);
    };

    useEffect(() => {
        const fetchAllEmployeeData = async () => {
            try {
                const headers = getAuthHeaders();
                const [splitData, allEmployees, totalData, deptRes] = await Promise.all([
                    employeeService.getEmployeesSplit(),
                    employeeService.getAllEmployees(),
                    employeeService.getTotalEmployees(),
                    axios.get(`${BASE_URL}/dept`, { headers })
                ]);

                setFirstBatch(splitData.firstBatch || []);
                setRemainingBatch(splitData.remainingBatch || []);
                setTotal(totalData.totalEmployees || 0);
                setAllEmployees(allEmployees || []);
                setDepartment(deptRes.data || []);
                setTotaldept(deptRes.data?.length || 0);
            } catch (error) {
                console.error('Error fetching employee data:', error);
                if (error.response?.status === 401) {
                    console.log('Please login to access employee data');
                }
            }
        };

        fetchAllEmployeeData();
    }, []);

   
    return (
        <div onClick={closeContextMenu}>
            {contextMenu && (
                <div className='context-menu' style={{ top: contextMenu.y, left: contextMenu.x }}>
                    <button onClick={handleViewDetails}><AiOutlineEye /> View Details</button>
                    <button onClick={handleEdit}><AiOutlineEdit /> Edit</button>
                    <button onClick={handleDelete} className='delete-btn'><AiOutlineDelete /> Delete</button>
                </div>
            )}
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
                                        <div><h3>Add New Employee</h3></div>
                                    </div>
                                    <button className='x-btn' onClick={handleCloseModal}>✖</button>
                                </div>
                                <br />
                                <EmployeeWizard />
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
                                                        <td>{employee.dept_id?.name || employee.dept_id?.dept || 'N/A'}</td>
                                                        <td>{employee.email || employee.phone}</td>
                                                        <td>{employee.location_id?.name || employee.city || 'N/A'}</td>
                                                        <td>{employee.date}</td>
                                                        <td>Active</td>
                                                        <td>Excellent</td>
                                                        <td>${employee.annual_salary}</td>
                                                        <td>2025-07-24</td>
                                                        <td><button className='ellipsis-btn' onClick={(e) => handleEllipsisClick(e, employee)}><HiOutlineDotsHorizontal /></button></td>
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