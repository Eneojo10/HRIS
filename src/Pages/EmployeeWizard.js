import React, { useState } from 'react';
import Personal from './Register/Personal';
import Employment from './Register/Employment';
import Contact from './Register/Contact';
import Compensation from './Register/Compensation';
import Additional from './Register/Additional';
import { BASE_URL } from './Utils/globals';
import axios from 'axios';

function EmployeeWizard() {
    const [step, setStep] = useState(1);
    const [employeeData, setEmployeeData] = useState({});

    const handleNext = (data) => {
        setEmployeeData(prev => ({ ...prev, ...data }));
        setStep(prev => prev + 1);
    };

    const handleClose = () => {
        setStep(1);
        setEmployeeData({});
    };

    const handleFinalSubmit = async (data) => {
        const finalData = { ...employeeData, ...data };
        console.log("FINAL DATA:", finalData);

        try {
            await axios.post(`${BASE_URL}/employee`, finalData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {step === 1 && <Personal onNext={handleNext} onClose={handleClose} />}
            {step === 2 && <Employment onNext={handleNext} onClose={handleClose} />}
            {step === 3 && <Contact onNext={handleNext} onClose={handleClose} />}
            {step === 4 && <Compensation onNext={handleNext} onClose={handleClose} />}
            {step === 5 && <Additional onSubmit={handleFinalSubmit} onClose={handleClose} />}
        </>
    );
}


export default EmployeeWizard;
