import React from "react";

function PayrollProgress({ step }) {
    const steps = [];
    const progressPercent = ((step - 1) / (steps.length - 1)) * 100;

    return (
        <div className="payroll-progress-container">
            <div className="progress-header">
                {steps.map((label, index) => (
                    <span
                        key={label}
                        className={`progress-label ${step === index + 1 ? "active" : ""}`}
                    >
                        {label}
                    </span>
                ))}
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progressPercent}%` }}
                ></div>
            </div>
        </div>
    );
}

export default PayrollProgress;
