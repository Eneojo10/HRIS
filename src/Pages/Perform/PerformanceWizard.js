import React, { useState } from 'react';
import PerformOne from './PerformOne';
import GoalsKPIs from './GoalsKPIs';
import Core from './Core';
import Performsettings from './Performsettings';

function PerformanceWizard({ onClose }) {
    const [activeStep, setActiveStep] = useState('Performance');
    const [formData, setFormData] = useState({});

    const handlePerformanceNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setActiveStep('Goals');
    };

    const handleGoalsNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setActiveStep('Core');
    };

    const handleCoreNext = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setActiveStep('Settings');
    };

    const handleGoalsBack = () => {
        setActiveStep('Performance');
    };

    const handleCoreBack = () => {
        setActiveStep('Goals');
    };

    const handleSettingsBack = () => {
        setActiveStep('Core');
    };

    return (
        <div>
            {/* Tab Navigation */}
            <div className='modal-bg'>
                <div className='p-flex'>
                    <div 
                        onClick={() => setActiveStep('Performance')}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: activeStep === 'Performance' ? 'white' : 'transparent',
                            padding: '3px 20px'
                        }}
                        className='person-one'
                    >
                        <h4>Performance</h4>
                    </div>
                    <div 
                        onClick={() => setActiveStep('Goals')}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: activeStep === 'Goals' ? 'white' : 'transparent',
                            padding: '3px 20px'
                        }}
                        className='person-one'
                    >
                        <h4>Goals & KPIs</h4>
                    </div>
                    <div 
                        onClick={() => setActiveStep('Core')}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: activeStep === 'Core' ? 'white' : 'transparent',
                            padding: '3px 20px'
                        }}
                        className='person-one'
                    >
                        <h4>Core</h4>
                    </div>
                    <div 
                        onClick={() => setActiveStep('Settings')}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: activeStep === 'Settings' ? 'white' : 'transparent',
                            padding: '3px 20px'
                        }}
                        className='person-one'
                    >
                        <h4>Settings</h4>
                    </div>
                </div>
            </div>

            {/* Step Content */}
            <div className='performance-content'>
                {activeStep === 'Performance' && (
                    <PerformOne 
                        data={formData} 
                        onNext={handlePerformanceNext} 
                        onClose={onClose} 
                    />
                )}
                {activeStep === 'Goals' && (
                    <GoalsKPIs 
                        data={formData} 
                        onNext={handleGoalsNext} 
                        onBack={handleGoalsBack}
                        onClose={onClose} 
                    />
                )}
                {activeStep === 'Core' && (
                    <Core 
                        data={formData} 
                        onNext={handleCoreNext} 
                        onBack={handleCoreBack}
                        onClose={onClose} 
                    />
                )}
                {activeStep === 'Settings' && (
                    <Performsettings 
                        data={formData} 
                        onBack={handleSettingsBack}
                        onClose={onClose} 
                    />
                )}
            </div>
        </div>
    );
}

export default PerformanceWizard;