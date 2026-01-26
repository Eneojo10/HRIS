import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoIosCheckmark } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bplans({ data = {}, onNext, onClose }) {
    const [formData, setFormData] = useState({
        selectedPlans: data.selectedPlans || []
    });

    const handlePlanSelect = (planId) => {
        setFormData(prev => ({
            ...prev,
            selectedPlans: prev.selectedPlans.includes(planId)
                ? prev.selectedPlans.filter(id => id !== planId)
                : [...prev.selectedPlans, planId]
        }));
    };

    const isPlanSelected = (planId) => {
        return formData.selectedPlans.includes(planId);
    };

    const handleNext = (e) => {
        e.preventDefault();
        
        // Validation
        if (formData.selectedPlans.length === 0) {
            toast.error("Please select at least one benefit plan");
            return;
        }
        
        if (typeof onNext === 'function') {
            onNext(formData);
        }
    };
    const plans = [
        {
            title: "Health Insurance",
            icon: <CiHeart />,
            items: [
                {
                    name: "Basic Health Plan",
                    details: "Deductible: ₦2000 • Coverage: 80% after deductible",
                    price: "₦250/month",
                    features: ["Primary Care", "Emergency Care", "Prescription Drugs"],
                },
                {
                    name: "Premium Health Plan",
                    details: "Deductible: ₦500 • Coverage: 90% after deductible",
                    price: "₦250/month",
                    features: ["Primary Care","Emergency Care","Prescription Drugs","Specialist Care","Mental Health"],
                },
            ],
        },
        {
            title: "Dental Insurance",
            icon: <IoEyeOutline />,
            items: [
                {
                    name: "Basic Dental Plan",
                    details: "Deductible: ₦2000 • Coverage: 80% after deductible",
                    price: "₦250/month",
                    features: ["Cleanings", "X-rays", "Fillings"],
                },
                {
                    name: "Premium Dental Plan",
                    details: "Deductible: ₦500 • Coverage: 90% after deductible",
                    price: "₦250/month",
                    features: ["Cleanings", "Fillings", "X-rays","Crowns","Orthodontics"],
                },
            ],
        },
        {
            title: "Vision Insurance",
            icon: <IoEyeOutline />,
            items: [
                {
                    name: "Standard Vision Insurance",
                    details: "Deductible: ₦2000 • Coverage: 80% after deductible",
                    price: "₦250/month",
                    features: ["Eye Exams", "Glasses Allowances", "Contact Lens Allowance"],
                },
            ],
        },
        {
            title: "Life Insurance",
            icon: <AiOutlineSecurityScan />,
            items: [
                {
                    name: "Basic Life Insurance",
                    details: "Deductible: $0 • Coverage: 1x Annual Salary",
                    price: "₦250/month",
                    features: ["Accidental Death", "Basic Life Coverage"],
                },
                {
                    name: "Supplemental Life Insurance",
                    details: "Deductible: ₦500 • Coverage: 90% after deductible",
                    price: "₦250/month",
                    features: ["Accidental Death", "Basic Life Coverage", "Additional Coverage Options"],
                },
            ],
        },
    ];

    return (
        <div>
            <div className="scrollable">
                {plans.map((plan, index) => (
                    <div className="perosnal" key={index}>
                        <div className="personal-details">
                            {/* Header with icon */}
                            <div className="heart" style={{ display: "flex", gap: "7px", marginTop: "20px" }}>
                                <div className="hrt-icon" style={{ fontSize: "21px", color: "#5b8af0" }}>
                                    {plan.icon}
                                </div>
                                <h3>{plan.title}</h3>
                            </div>
                            <br />

                            {/* Plan items */}
                            <div className="health-border">
                                {plan.items.map((item, idx) => {
                                    const planId = `${plan.title}-${item.name}`;
                                    const isSelected = isPlanSelected(planId);
                                    return (
                                    <div 
                                        className="health-one" 
                                        key={idx}
                                        onClick={() => handlePlanSelect(planId)}
                                        style={{
                                            cursor: 'pointer',
                                            border: isSelected ? '2px solid #5b8af0' : '1px solid #e5e7eb',
                                            backgroundColor: isSelected ? '#f0f9ff' : 'white'
                                        }}
                                    >
                                        <div className="personal-details">
                                            <div
                                                className="health-plan"
                                                style={{ width: "93%", margin: "auto", marginTop: "15px" }}
                                            >
                                                <div
                                                    className="plan-health"
                                                    style={{ display: "flex", justifyContent: "space-between" }}
                                                >
                                                    <div className="hlth">
                                                        <h4>{item.name}</h4>
                                                        <p>{item.details}</p>
                                                    </div>
                                                    <div className="hlth-price">
                                                        <p>{item.price}</p>
                                                        {isSelected && <span style={{color: '#5b8af0', fontWeight: 'bold'}}>✓ Selected</span>}
                                                    </div>
                                                </div>

                                                {/* Dynamic Features */}
                                                {item.features.map((feature, fIdx) => (
                                                    <div
                                                        className="mark-plans"
                                                        style={{ display: "flex", gap: "7px", marginTop: fIdx === 0 ? "10px" : "2px" }}
                                                        key={fIdx}
                                                    >
                                                        <div className="hrt-icon" style={{ fontSize: "21px", color: "#29ab59" }}>
                                                            <IoIosCheckmark />
                                                        </div>
                                                        <div>
                                                            <p>{feature}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                            <br />
                        </div>
                    </div>
                ))}
            </div>
            <br/>
            <div className="bb-buttons">
                <button type='button' className="benefit-cancel" onClick={onClose}>Cancel</button>
                <button type='button' className="benefits-sub" onClick={handleNext}>Next</button>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default Bplans;
