import React, { useState } from 'react'
import { RxCopy } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";

function Bulk() {
    const [shifts, setShifts] = useState([{ id: 1 }]);

    // Add a new blank shift
    const handleAddShift = () => {
        setShifts([...shifts, { id: shifts.length + 1 }]);
    };

    // Copy a shift
    const handleCopyShift = (index) => {
        const newShift = { ...shifts[index], id: shifts.length + 1 };
        setShifts([...shifts, newShift]);
    };

    // Delete a shift
    const handleDeleteShift = (index) => {
        const updated = shifts.filter((_, i) => i !== index);
        setShifts(updated);
    };

    return (
        <div>
            <div className='scrollable'>
                <div className='perosnal'>
                    <div className='personal-details'>
                        <div className='bulk--button' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <div>
                                <h4>Bulk Scheduling</h4>
                                <p>Create multiple shifts at once</p>
                            </div>
                            <button className='shi-ft-btn'type='button' onClick={handleAddShift}>Add Shift</button>
                        </div>

                        <br />

                        {/* Render shifts dynamically */}
                        {shifts.map((shift, index) => (
                            <div key={shift.id} className='perosnal' style={{ borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
                                <div className='personal-details' style={{ marginTop: '20px' }}>
                                    <div className='bulk-delete' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <p>Shift {index + 1}</p>
                                        </div>
                                        <div className='bulks----icons' style={{ display: 'flex', gap: '10px' }}>
                                            <div className='bulkone-icon' onClick={() => handleCopyShift(index)} style={{ cursor: 'pointer' }}>
                                                <RxCopy />
                                            </div>
                                            <div className='bulkone-icon' onClick={() => handleDeleteShift(index)} style={{ cursor: 'pointer' }}>
                                                <AiOutlineDelete />
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    {/* Example input fields */}
                                    <div className='person-input-fields' style={{ width: '55%' }}>
                                        <div className='per-input'>
                                            <label>Start Time</label>
                                            <select>
                                                <option>Select employee</option>
                                            </select>
                                        </div>
                                        <div className='per-input'>
                                            <label>Date</label>
                                            <input placeholder='mm/dd/yyyy' />
                                        </div>
                                    </div>

                                    <div className='bulk-grid'>
                                        <div className='bulk-input'>
                                            <label>Start Time</label>
                                            <input placeholder='mm/dd/yyyy' />
                                        </div>
                                        <div className='bulk-input'>
                                            <label>End Time</label>
                                            <input placeholder='mm/dd/yyyy' />
                                        </div>
                                        <div className='bulk-input'>
                                            <label>Position</label>
                                            <select>
                                                <option>Select</option>
                                                <option>Team Lead</option>
                                            </select>
                                        </div>
                                        <div className='bulk-input'>
                                            <label>Location</label>
                                            <select>
                                                <option>Select</option>
                                                <option>Sales Floor</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        ))}

                        <div className='t-shifts' style={{ textAlign: 'center' }}>
                            <h4>Total Shifts: {shifts.length}</h4>
                            <p>Total Hours: 0.0</p>
                        </div>

                        <br /><br />
                    </div>
                    
                </div>
                <br/><br/>

                <div className='jay-jay' style={{ gap: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    <div>
                        <button className='job-previous'>Cancel</button>
                    </div>
                    <div>
                        <button className='job-next'>Create Schedule</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bulk;
