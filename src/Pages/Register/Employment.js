import React, { useState } from "react";
import { LuBriefcase } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Employment() {
    const [startDate, setStartDate] = useState(null);

    return (
        <div>
            <div className="scrollable">
                <div className="perosnal">
                    <div className="personal-details ">
                        <div className="per-sonal-flex">
                            <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '4px' }}>
                                <LuBriefcase />
                            </div>
                            <div>
                                <h3>Employment Details</h3>
                            </div>
                        </div>
                        <br />

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Employee ID</label>
                                <input type="text" placeholder="Auto-generated if empty" />
                            </div>
                            <div className="per-input">
                                <label>Start Date*</label><br/>
                                <div className="datepicker">
                                    <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    placeholderText="mm/dd/yyyy"
                                    dateFormat="MM/dd/yyyy"
                                    className="custom-date-input"
                                />
                                </div>
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Job Title*</label>
                                <input type="text" placeholder="e.g., Software Engineer" />
                            </div>
                            <div className="per-input">
                                <label>Department *</label>
                                <select>
                                    <option>Select department</option>
                                    <option>Marketing</option>
                                    <option>Sales</option>
                                </select>
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Reports To</label>
                                <select>
                                    <option>Select manager</option>
                                    <option>Alex Thompson</option>
                                    <option>Sarah Johnson</option>
                                </select>
                            </div>
                            <div className="per-input">
                                <label>Employment Type*</label>
                                <select>
                                    <option>Select Type</option>
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Intern</option>
                                    <option>Contract</option>
                                    <option>Consultant</option>
                                </select>
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Work Location</label>
                                <select>
                                    <option>Select location</option>
                                    <option>Office</option>
                                    <option>Remote</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                            <div className="per-input">
                                <label>Work Schedule </label>
                                <select>
                                    <option>Select schedule</option>
                                    <option>9:00 AM - 5:00 PM</option>
                                    <option>10:00 AM - 6:00 PM</option>
                                    <option>8:00 AM - 4:00 PM</option>
                                    <option>Shift Based</option>
                                </select>
                            </div>
                        </div>

                        {/* <div className="employee-option-btn">
                            <button className="cancel-btn">Cancel</button>
                            <button className="cancel-btnn">Add Employee</button>
                        </div> */}
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Employment;
