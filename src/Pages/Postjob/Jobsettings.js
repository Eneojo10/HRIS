import React,{useState, useEffect} from 'react'
import { IoMdTime } from "react-icons/io";
import axios from 'axios';
import { BASE_URL } from '../Utils/globals';

function Jobsettings() {
    const [hiringManager, setHiringManager] = useState([]);
   

    useEffect(() => {
        axios.get(`${BASE_URL}/managers`)
            .then(res => setHiringManager(res.data?.data || res.data || []))
            .catch(() => setHiringManager([]));

        
    }, []);

    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '5px' }}>
                                <IoMdTime />
                            </div>
                            <div>
                                <h3>Job Settings</h3>

                            </div>
                        </div>
                        <br />
                        <div className='person-input-fields'>
                            <div className='per-input'>
                                <label>Hiring Manager</label>
                                <select>
                                    <option>Select hiring manager</option>
                                    {hiringManager.map((manager) => (
                                        <option key={manager._id} value={manager._id}>{manager.manager_name}</option>
                                    ))}

                                </select>
                            </div>
                            <div className='per-input'>
                                <label>Location</label>
                                <input type='number' placeholder='1'></input>
                            </div>


                        </div>
                        <div className='person-input-fields'>
                            <div className='per--input'>
                                <label>Application Deadline </label>
                                <input type='text' placeholder='e.g. Senior Software Engineer'></input>
                            </div>
                        </div>
                        <div className='checked_' style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <h4>
                                    Published job immediately</h4>
                            </div>
                        </div>
                        <br/>

                    </div>

                </div><br />
                <div className='d-line'></div><br />
                <div className='modal-job-btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <button className='job-cancel'>Cancel</button>
                    </div>
                    <div className='jay-jay' style={{ gap: '10px', display: 'flex' }}>
                        <div>
                            <button className='job-previous'>Previous</button>
                        </div>
                        <div>
                            <button className='job-next'>Post Job</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Jobsettings