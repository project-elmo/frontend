import useFunnel from '@/hooks/useFunnel';
import StepModel from '@/pages/training/StepModel';
import StepDataset from '@/pages/training/StepDataset';
import StepParameter from '@/pages/training/StepParameter';
import StepTraining from '@/pages/training/StepTraining';
import StepDone from '@/pages/training/StepDone';

export default function TrainingPage() {
  const [Funnel, setStep] = useFunnel([
    'model',
    'dataset',
    'parameter',
    'training',
    'done',
  ] as const);

  return (
    <Funnel>
      <Funnel.Step name="model">
        <StepModel onNext={() => setStep('dataset')} />
      </Funnel.Step>
      <Funnel.Step name="dataset">
        <StepDataset onNext={() => setStep('parameter')} />
      </Funnel.Step>
      <Funnel.Step name="parameter">
        <StepParameter onNext={() => setStep('training')} />
      </Funnel.Step>
      <Funnel.Step name="training">
        <StepTraining onNext={() => setStep('done')} />
      </Funnel.Step>
      <Funnel.Step name="done">
        <StepDone />
      </Funnel.Step>
    </Funnel>
  );
}