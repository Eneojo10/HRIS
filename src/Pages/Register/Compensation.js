import React, { useState, useEffect } from 'react';
import { TbCurrencyNaira } from "react-icons/tb";
import axios from 'axios';
import { BASE_URL } from '../Utils/globals';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Compensation({ data = {}, onNext, onClose }) {
    const [options, setOptions] = useState({
        currency: [],
        frequency: [],
        benefits: []
    });

    const [formData, setFormData] = useState({
        annual_salary: data.annual_salary || "",
        currency_id: data.currency_id || "",
        frequency_id: data.frequency_id || "",
        benefits_id: data.benefits_id || "",
    });

    // Combined fetch for better performance and readability
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [currRes, freqRes, benRes] = await Promise.all([
                    axios.get(`${BASE_URL}/currency`),
                    axios.get(`${BASE_URL}/frequency`),
                    axios.get(`${BASE_URL}/benefit`)
                ]);

                setOptions({
                    currency: Array.isArray(currRes.data) ? currRes.data : currRes.data.data || [],
                    frequency: Array.isArray(freqRes.data) ? freqRes.data : freqRes.data.data || [],
                    benefits: Array.isArray(benRes.data) ? benRes.data : benRes.data.data || [],
                });
            } catch (err) {
                console.error("Data fetch failed", err);
                toast.error("Failed to load form options");
            }
        };
        fetchAllData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        const { annual_salary, currency_id, frequency_id, benefits_id } = formData;
        if (!annual_salary || !currency_id || !frequency_id || !benefits_id) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (typeof onNext === "function") {
            onNext(formData);
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />

            <div className='scrollable'>
                <div className='personal'>
                    <div className='personal-details'>
                        <div className="per-sonal-flex">
                            <div className="pee-icon-naira" style={{ fontSize: '21px', marginTop: '5px' }}>
                                <TbCurrencyNaira />
                            </div>
                            <div>
                                <h3>Compensation & Benefits</h3>
                            </div>
                        </div>
                        <br />

                        <div className='person-input-fields'>
                            <div className='per-input' style={{ width: '65%' }}>
                                <label>Annual Salary</label>
                                <input
                                    type='number'
                                    placeholder='0'
                                    name='annual_salary'
                                    value={formData.annual_salary}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='per-input' style={{ width: '35%' }}>
                                <label>Currency</label>
                                <select name='currency_id' value={formData.currency_id} onChange={handleChange}>
                                    <option value="">Select currency</option>
                                    {options.currency.map((cur) => (
                                        <option key={cur.id} value={cur.id}>{cur.currency}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="person-input-fields">
                            <div className="per-input">
                                <label>Pay Frequency</label>
                                <select name='frequency_id' value={formData.frequency_id} onChange={handleChange}>
                                    <option value="">Select frequency</option>
                                    {options.frequency.map((freq) => (
                                        <option key={freq.id} value={freq.id}>{freq.frequency}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="per-input">
                                <label>Benefits Package</label>
                                <select name='benefits_id' value={formData.benefits_id} onChange={handleChange}>
                                    <option value="">Select package</option>
                                    {options.benefits.map((ben) => (
                                        <option key={ben.id} value={ben.id}>{ben.benefit}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='employee-option-btn'>
                            {/* Fixed the onClick here */}
                            <button className='cancel-btn' type='button' onClick={onClose}>Cancel</button>
                            <button className='cancel-btnn' type='button' onClick={handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Compensation;