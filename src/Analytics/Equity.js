import React, { useState } from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import PayrollTrends from './PayrollTrends';
import Distribution from './Distribution';

function Equity() {

    const [activeTab, setActiveTab] = useState('Equity');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    };

    return (
        <div>
            <div className='compensation-holder'>
                <div className='compensation--holder'>
                    <div className='compenflex'>
                        <div className='com-naira'>
                            <TbCurrencyNaira />
                        </div>
                        <div>
                            <h2>Compensation Analytics</h2>
                            <p>Payroll trends and salary distribution analysis</p>
                        </div>
                    </div>
                    <br />
                    <div className='eq-holder'>
                        <div className='equity-bg'>
                            <div className='e__flex'>
                                <div onClick={() => handleTabClick('Equity')}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: activeTab === 'Equity' ? 'white' : 'transparent',
                                    padding: '5px 35px',
                                    width:'35%',
                                    textAlign:'center',
                                }}>
                                    <h4>Payroll Trends</h4>
                                </div>
                                <div onClick={() => handleTabClick('Distribution')}
                                style={{
                                    cursor:'pointer',
                                    backgroundColor: activeTab === 'Distribution' ? 'white' : 'transparent',
                                    padding: '5px 35px',
                                    width:'35%',
                                    textAlign:'center',
                                }}
                                    >
                                    <h4>Salary Distribution</h4>
                                </div>
                            </div>

                        </div>

                        
                        <div className='performance-content'>
                            {activeTab === 'Equity' && <PayrollTrends />}
                            {activeTab === 'Distribution' && <Distribution />}

                        </div>
                    </div>
                    <br />
                </div>

            </div>
        </div>
    )
}

export default Equity