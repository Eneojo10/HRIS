import React, { useState } from 'react';
import Personal from './Register/Personal';
import Employment from './Register/Employment';
import Contact from './Register/Contact';
import Compensation from './Register/Compensation';
import Additional from './Register/Additional';
import { employeeService } from './Utils/employeeService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmployeeWizard() {
    const [step, setStep] = useState(1);
    const [employeeData, setEmployeeData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleNext = (data) => {
        setEmployeeData(prev => ({ ...prev, ...data }));
        setStep(prev => prev + 1);
    };

    const handlePrevious = () => {
        setStep(prev => prev - 1);
    };

    const handleClose = () => {
        setStep(1);
        setEmployeeData({});
    };

    const handleFinalSubmit = async (data) => {
        const finalData = { ...employeeData, ...data };
        
        // Map field names to match backend expectations
        const mappedData = {
            firstname: finalData.firstname,
            lastname: finalData.lastname,
            email: finalData.email,
            phone: finalData.phone,
            gender_id: finalData.gender_id,
            address: finalData.address,
            city: finalData.city,
            state: finalData.state,
            zip_code: finalData.zip_code,
            dob: finalData.dob,
            job_title: finalData.job_title,
            date: finalData.date,
            contact_name: finalData.contact_name,
            phone_no: finalData.phone_no,
            annual_salary: finalData.annual_salary,
            skill: finalData.skill,
            education: finalData.education,
            certifications: finalData.certifications,
            experience: finalData.experience,
            notes: finalData.notes,
            type_id: finalData.type_id,
            location_id: finalData.location_id,
            package_id: finalData.package_id,
            dept_id: finalData.dept_id,
            reports_id: finalData.reports_id,
            work_id: finalData.work_id,
            frequency_id: finalData.frequency_id,
            currecny_id: finalData.currecny_id,
            country_id: finalData.country_id,
            relationship_id: finalData.relationship_id,
            Schedules_id: finalData.Schedules_id,
        };

        console.log("FINAL MAPPED DATA:", mappedData);
        setLoading(true);

        try {
            await employeeService.createEmployee(mappedData);
            toast.success('Employee created successfully!');
            setTimeout(() => {
                handleClose();
                window.location.reload();
            }, 2000);
        } catch (err) {
            console.error('Error creating employee:', err);
            if (err.response?.status === 401) {
                toast.error('Authentication required. Please login.');
            } else {
                toast.error('Error creating employee. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            {step === 1 && <Personal data={employeeData} onNext={handleNext} onClose={handleClose} />}
            {step === 2 && <Employment data={employeeData} onNext={handleNext} onPrevious={handlePrevious} onClose={handleClose} />}
            {step === 3 && <Contact data={employeeData} onNext={handleNext} onPrevious={handlePrevious} onClose={handleClose} />}
            {step === 4 && <Compensation data={employeeData} onNext={handleNext} onPrevious={handlePrevious} onClose={handleClose} />}
            {step === 5 && <Additional data={employeeData} onSubmit={handleFinalSubmit} onPrevious={handlePrevious} onClose={handleClose} loading={loading} />}
        </>
    );
}

export default EmployeeWizard;