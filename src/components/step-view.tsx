import Step from '../models/step';

interface StepViewProps {
  step: Step;
}

function StepView({ step }: StepViewProps) {
  return (
    <div className="border w-4 h-10 cursor-pointer" onClick={step.toggle}></div>
  );
}

export default StepView;
