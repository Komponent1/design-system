import { Stepper } from '../lib/stepper/stepper';

export default function App() {
  return (
    <div
      style={{
        padding: 32,
        maxWidth: 800,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
      }}
    >
      {/* 기본 stepper */}
      <section>
        <h2>Default Stepper</h2>
        <Stepper stepNumber={4} />
      </section>

      {/* bottomLabel stepper */}
      <section>
        <h2>Bottom Label Stepper</h2>
        <Stepper
          stepNumber={4}
          variant='bottomLabel'
          labels={['Step One', 'Step Two', 'Step Three', 'Step Four']}
        />
      </section>

      {/* sideLabel stepper */}
      <section>
        <h2>Side Label Stepper</h2>
        <Stepper stepNumber={3} variant='sideLabel' labels={['First', 'Second', 'Third']} />
      </section>

      {/* currentStep + onStepClick */}
      <section>
        <h2>Stepper with currentStep & onStepClick</h2>
        <Stepper
          stepNumber={5}
          currentStep={2}
          onStepClick={(idx) => alert(`Step ${idx + 1} clicked!`)}
          labels={['A', 'B', 'C', 'D', 'E']}
        />
      </section>

      {/* 다양한 size */}
      <section>
        <h2>Stepper Size: sm</h2>
        <Stepper stepNumber={3} size='sm' labels={['Small 1', 'Small 2', 'Small 3']} />
        <h2>Stepper Size: md</h2>
        <Stepper stepNumber={3} size='md' labels={['Medium 1', 'Medium 2', 'Medium 3']} />
        <h2>Stepper Size: lg</h2>
        <Stepper stepNumber={3} size='lg' labels={['Large 1', 'Large 2', 'Large 3']} />
      </section>
    </div>
  );
}
