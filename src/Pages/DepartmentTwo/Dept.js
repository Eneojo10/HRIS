import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL, getAuthHeaders } from '../Utils/globals'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dept() {
    const [formData, setFormData] = useState({
        department_name: '',
        department_code: '',
        Description: '',
        cost_center: '',
        head_count: '',
        budget: '',
        primaryLocation_id: '',
        department_manager_id: '',
        ParentDepartment_id: ''
    });
    const [department, setDepartment] = useState([]);
    const [departmentManagers, setDepartmentManagers] = useState([]);
    const [parentDepartments, setParentDepartments] = useState([]);
    const [primaryLocations, setPrimaryLocations] = useState([]);

    useEffect(() => {
        const fetchDepartmentManagers = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/department-manager`, { headers });
                setDepartmentManagers(response.data);
            } catch (error) {
                console.error("Error fetching department managers:", error);
            }
        };

        fetchDepartmentManagers();
    }, []);

    useEffect(() => {
        const fetchParentDepartments = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/parent-department`, { headers });
                setParentDepartments(response.data);
            } catch (error) {
                console.error("Error fetching parent departments:", error);
            }
        };

        fetchParentDepartments();
    }, []);

    useEffect(() => {
        const fetchPrimaryLocations = async () => {
            try {
                const headers = getAuthHeaders();
                const response = await axios.get(`${BASE_URL}/primary-location`, { headers });
                setPrimaryLocations(response.data);
            } catch (error) {
                console.error("Error fetching primary locations:", error);
            }
        };

        fetchPrimaryLocations();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.department_name) {
            toast.error('Department name is required');
            return;
        }

        try {
            const headers = getAuthHeaders();
            const response = await axios.post(`${BASE_URL}/department`, formData, { headers });
            console.log('Department created:', response.data);
            toast.success('Department created successfully');
            setFormData({
                department_name: '',
                department_code: '',
                Description: '',
                cost_center: '',
                head_count: '',
                budget: '',
                primaryLocation_id: '',
                department_manager_id: '',
                ParentDepartment_id: ''
            });
        } catch (error) {
            console.error('Error creating department:', error);
            toast.error(error.response?.data?.error || 'Failed to create department');
        }
    };

    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Basic Information</h3>
                                <p>Define the core details of the department</p>

                            </div>
                        </div>
                        <br />
                        <div className='dept_input-field'>
                            <div className='inputfield-dept-one'>
                                <label>Department Name <span style={{color: 'red'}}>*</span></label>
                                <input type='text' name='department_name' value={formData.department_name} onChange={handleChange} placeholder='e.g., Customer Success'></input>
                            </div>
                            <div className='inputfield-dept-one'>
                                <label>Department Code</label>
                                <input type='text' name='department_code' value={formData.department_code} onChange={handleChange} placeholder='e.g., CS'></input>
                            </div>

                        </div>
                        <div className='s-textarea' style={{ marginBottom: '15px' }}>
                            <label>Description</label><br />
                            <textarea name='Description' value={formData.Description} onChange={handleChange} placeholder='Describe the department purpose and responsibilities...'></textarea>
                        </div>
                        <div className='dept_input-field'>
                            <div className='per-input'>
                                <label>Department Manager</label>
                                <select name='department_manager_id' value={formData.department_manager_id} onChange={handleChange}>
                                    <option value=''>Select manager</option>
                                    {departmentManagers.map(manager => (
                                        <option key={manager._id} value={manager._id}>
                                            {manager.department_manager_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Parent Department</label>
                                <select name='ParentDepartment_id' value={formData.ParentDepartment_id} onChange={handleChange}>
                                    <option value=''>Select parent (optional)</option>
                                    {parentDepartments.map(parent => (
                                        <option key={parent._id} value={parent._id}>
                                            {parent.parent_department_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">

                            <div>
                                <h3>Operational Details</h3>
                                <p>Configure location, budget, and capacity</p>

                            </div>
                        </div>
                        <br />
                        <div className='dept_input-field'>
                            <div className='per-input'>
                                <label>Primary Location</label>
                                <select name='primaryLocation_id' value={formData.primaryLocation_id} onChange={handleChange}>
                                    <option value=''>Select location</option>
                                    {primaryLocations.map(location => (
                                        <option key={location._id} value={location._id}>
                                            {location.primary_location_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='inputfield-dept-one'>
                                <label>Cost Center</label>
                                <input type='text' name='cost_center' value={formData.cost_center} onChange={handleChange} placeholder='e.g., CC-001'></input>
                            </div>


                        </div>
                        <div className='dept_input-field'>
                            <div className='inputfield-dept-one'>
                                <label>Annual Budget (N)</label>
                                <input type='text' name='budget' value={formData.budget} onChange={handleChange} placeholder='e.g., 500000'></input>
                            </div>
                            <div className='inputfield-dept-one'>
                                <label>Target Headcount</label>
                                <input type='text' name='head_count' value={formData.head_count} onChange={handleChange} placeholder='e.g., 15'></input>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className='det_obj' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <div>
                                <h3>Department Objectives</h3>
                                <p>Set goals and targets for the department</p>
                            </div>
                        </div>
                        <div className='perosnal' style={{ borderLeft: '4px solid #3b82f6' }}>
                            <div className='personal-details' style={{ marginTop: '20px' }}>
                                <p>Objective 1</p><br />
                                <div className='person-input-fields'>
                                    <div className='per--input'>
                                        <label>Title </label>
                                        <input type='text' placeholder='e.g. Improve customer satisfaction'></input>
                                    </div>
                                </div>

                                <div className='s-textarea' style={{ marginBottom: '15px' }}>
                                    <label>Description</label><br />
                                    <textarea placeholder='Describe the objective in detail...'></textarea>
                                </div>
                                <div className='dept_input-field'>
                                    <div className='inputfield-dept-one'>
                                        <label>Target/KPI</label>
                                        <input type='text' placeholder='e.g., 95% satisfaction score'></input>
                                    </div>
                                    <div className='inputfield-dept-one'>
                                        <label>Target Date</label>
                                        <input type='text' placeholder='e.g., 15'></input>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>
                    <br/>

                </div>
                <div className='perosnal'>
                    <div className='personal-details' style={{ marginTop: '20px' }}>
                        <div>
                            <h3>Summary</h3>
                            <p>Review department configuration</p><br />

                            <div className='depman' style={{ width: '75%', justifyContent: 'space-between', display: 'flex' }}>
                                <div>
                                    <h4>Department</h4>
                                    <p>{formData.department_name || 'Not specified'} ({formData.department_code || 'No code'})</p>
                                    <h4>Location</h4>
                                    <p>{primaryLocations.find(l => l._id === formData.primaryLocation_id)?.primary_location_name || 'Not specified'}</p>
                                </div>
                                <div>
                                    <h4>Manager</h4>
                                    <p>{departmentManagers.find(m => m._id === formData.department_manager_id)?.department_manager_name || 'Not specified'}</p>
                                    <h4>Budget</h4>
                                    <p>{formData.budget || '0'}</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <br />
                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'flex-end' }}>

                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <div>
                            <button type='button' className='job-previous'>Cancel</button>
                        </div>
                        <div>
                            <button type='button' className='job-next' onClick={handleSubmit}>Create Department

                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <ToastContainer position="top-right" autoClose={3000} />

            </div>
        </div>
    )
}

export default Dept
