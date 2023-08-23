import useFunnel from '@/hooks/useFunnel';
import StepModel from '@/pages/train/StepModel';
import StepDataset from '@/pages/train/StepDataset';
import StepParameter from '@/pages/train/StepParameter';

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
    </Funnel>
  );
}
