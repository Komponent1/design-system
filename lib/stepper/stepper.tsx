import React, { useMemo } from 'react';
import { StepperIcon } from './stepperIcon';
import type { StepperVariants } from './stepper.type';
import {
  stepperBottomLabelIconLineWrapperStyle,
  stepperBottomLabelStyle,
  stepperBottomLabelWrapperStyle,
  stepperContainerStyle,
  stepperLabelSizesStyle,
  StepperLineStyle,
} from './stepper.style';

export type StepperProps = {
  stepNumber: number;
  variant?: StepperVariants;
  size?: 'sm' | 'md' | 'lg';
  labels?: string[];
  customIcon?: React.ReactNode[];
  currentStep?: number;
  onStepClick?: (stepIndex: number) => void;
};

export const Stepper: React.FC<StepperProps> = ({
  stepNumber,
  variant = 'default',
  size = 'md',
  labels,
  currentStep,
  onStepClick,
}) => {
  const steps = Array.from({ length: stepNumber }, (_, i) => i + 1);
  const variantCheck = useMemo(() => {
    if (variant === 'default' && labels) return 'bottomLabel';
    return variant;
  }, [variant, labels]);

  if (variantCheck === 'bottomLabel') {
    return (
      <div>
        <div style={stepperContainerStyle}>
          {steps.map((step, index) => (
            <div key={`stepper_${index}`} style={stepperBottomLabelWrapperStyle}>
              <div style={stepperBottomLabelIconLineWrapperStyle}>
                <StepperIcon
                  variant={variantCheck}
                  size={size}
                  isCompleted={currentStep !== undefined && index <= currentStep}
                  onClick={() => onStepClick && onStepClick(index)}
                >
                  {step}
                </StepperIcon>
                {index < steps.length - 1 && <div style={StepperLineStyle} />}
              </div>
              <div
                key={labels ? `stepper_label_${labels[index]}` : `stepper_no_label_${index}`}
                style={{
                  ...stepperBottomLabelStyle,
                  ...stepperLabelSizesStyle[size],
                }}
              >
                {labels && labels[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={stepperContainerStyle}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <StepperIcon
            variant={variantCheck}
            size={size}
            isCompleted={currentStep !== undefined && index <= currentStep}
            onClick={() => onStepClick && onStepClick(index)}
            label={labels ? labels[index] : undefined}
          >
            {step}
          </StepperIcon>
          {index < steps.length - 1 && <div style={StepperLineStyle} />}
        </React.Fragment>
      ))}
    </div>
  );
};
