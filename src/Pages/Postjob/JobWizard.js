import React, { useState } from 'react';
import Basic from './Basic';
import Details from './Details';
import Jobsettings from './Jobsettings';

function JobWizard({ onClose }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleClose = () => {
        setStep(1);
        setFormData({});
        if (onClose) onClose();
    };

    return (
        <>
            {step === 1 && <Basic data={formData} onNext={handleNext} onClose={handleClose} />}
            {step === 2 && <Details data={formData} onNext={handleNext} onBack={handleBack} onClose={handleClose} />}
            {step === 3 && <Jobsettings data={formData} onBack={handleBack} onClose={handleClose} />}
        </>
    );
}


export default JobWizard;
