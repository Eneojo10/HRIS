import React, { useState, useEffect } from "react";
import { LuBriefcase } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../Utils/globals";

function Employment({ data = {}, onNext, onClose }) {
    const [dept, setDept] = useState([]);
    const [types, setTypes] = useState([]);
    const [report, setReport] = useState([]);
    const [work, setWork] = useState([]);
    const [time, setTime] = useState([]);

    const [formData, setFormData] = useState({
        report_id: data.report_id || "",
        job_title: data.job_title || "",
        dept_id: data.dept_id || "",
        type_id: data.type_id || "",
        work_id: data.work_id || "",
        schedules_id: data.schedules_id || "",
        date: data.date || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const requiredFields = [
            "job_title",
            "dept_id",
            "type_id",
            "work_id",
            "schedules_id",
            "date",
        ];

        const missing = requiredFields.some(
            (field) => !formData[field]
        );

        if (missing) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (typeof onNext === "function") {
            onNext(formData);
        } else {
            console.warn("onNext is not provided");
        }
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/dept`)
            .then(res => setDept(res.data?.data || res.data || []))
            .catch(() => setDept([]));

        axios.get(`${BASE_URL}/type`)
            .then(res => setTypes(res.data?.data || res.data || []))
            .catch(() => setTypes([]));

        axios.get(`${BASE_URL}/report`)
            .then(res => setReport(res.data?.data || res.data || []))
            .catch(() => setReport([]));

        axios.get(`${BASE_URL}/work`)
            .then(res => setWork(res.data?.data || res.data || []))
            .catch(() => setWork([]));

        axios.get(`${BASE_URL}/schedules`)
            .then(res => setTime(res.data?.data || res.data || []))
            .catch(() => setTime([]));
    }, []);

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="scrollable">
                <div className="personal-details">
                    <div className="per-sonal-flex"> <div className="pee-icon-gift" style={{ fontSize: '21px', marginTop: '4px' }}> <LuBriefcase /> </div> <div> <h3>Employment Details</h3> </div> </div> <br />
                    <div className="person-input-fields">
                        <div className="per-input">
                            <label>Employee ID</label>
                            <input
                                type="text"
                                name="employee_id"
                                value={formData.employee_id}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                    </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Start Date *</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="per-input">
                                <label>Job Title *</label>
                                <input
                                    type="text"
                                    name="job_title"
                                    placeholder="e.g. Software Engineer"
                                    value={formData.job_title}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Department *</label>
                                <select name="dept_id" value={formData.dept_id} onChange={handleChange}>
                                    <option value="" disabled>Select department</option>
                                    {dept.map(d => (
                                        <option key={d._id} value={d._id}>{d.dept}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="per-input">
                                <label>Reports To</label>
                                <select name="report_id" value={formData.report_id} onChange={handleChange}>
                                    <option value="">Select manager</option>
                                    {report.map(r => (
                                        <option key={r._id} value={r._id}>{r.report}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Employment Type *</label>
                                <select name="type_id" value={formData.type_id} onChange={handleChange}>
                                    <option value="" disabled>Select type</option>
                                    {types.map(t => (
                                        <option key={t._id} value={t._id}>{t.type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="per-input">
                                <label>Work Location *</label>
                                <select name="work_id" value={formData.work_id} onChange={handleChange}>
                                    <option value="" disabled>Select location</option>
                                    {work.map(w => (
                                        <option key={w._id} value={w._id}>{w.work_Schedules}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Work Schedule *</label>
                                <select name="schedules_id" value={formData.schedules_id} onChange={handleChange}>
                                    <option value="" disabled>Select schedule</option>
                                    {time.map(t => (
                                        <option key={t._id} value={t._id}>{t.schedule_time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="employee-option-btn">
                            <button type="button" className="cancel-btn" onClick={onClose}>
                                Cancel
                            </button>
                            <button type="button" className="cancel-btnn" onClick={handleSubmit}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            );
}

            export default Employment;
