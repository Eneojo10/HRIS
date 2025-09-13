import React, { useState } from "react";
import Pay from "./Pay";
import Review from "./Review";
import Process from "./Process";   // ✅ add this
import Final from "./Final";
import Progrezz from "./Progrezz"; // ✅ progress bar

function PayrollNext() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {/* Progress bar: step is zero-based */}
      <Progrezz step={step - 1} />

      {/* Render steps */}
      {step === 1 && <Pay onNext={nextStep} />}
      {step === 2 && <Review onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <Process onNext={nextStep} onBack={prevStep} step={2} />}
      {step === 4 && <Final />}
    </div>
  );
}

export default PayrollNext;
