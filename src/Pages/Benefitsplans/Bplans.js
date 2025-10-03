import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoIosCheckmark } from "react-icons/io";

function Bplans() {
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
                                {plan.items.map((item, idx) => (
                                    <div className="health-one" key={idx}>
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
                                ))}
                            </div>
                            <br />
                        </div>
                    </div>
                ))}
            </div>
            <br/>
            <div className="bb-buttons">
                <button className="benefit-cancel">Cancel</button>
                <button className="benefits-sub">Submit Enrollment</button>
            </div>
        </div>
    );
}

export default Bplans;
