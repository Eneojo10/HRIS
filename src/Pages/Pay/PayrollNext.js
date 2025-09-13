import React, { useState } from "react";
import Pay from "./Pay";
import Review from "./Review";
import Progrezz from "./Progrezz" // ✅ progress bar

function PayrollNext() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {/* Step indicator */}
      <Progrezz step={step - 1} />

      {/* Render the correct step */}
      {step === 1 && <Pay onNext={nextStep} />}
      {step === 2 && <Review onBack={prevStep} />}
    </div>
  );
}

export default PayrollNext;
