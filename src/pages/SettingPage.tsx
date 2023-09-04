import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSetting } from '@/api/rest';
import Button from '@/components/Button';
import MainTemplate from '@/components/MainTemplate';
import SwitchWithLabel from '@/components/SwitchWithLabel';
import TextWithLabel from '@/components/TextWithLabel';
import { QUERY_KEYS } from '@/constants';
import { Setting } from '@/types';

export default function SettingPage() {
  const [formData, setFormData] = useState<Setting>({
    model_path: '',
    result_path: '',
    is_gpu: false,
  });

  const { data: setting } = useQuery({
    queryKey: [QUERY_KEYS.SETTING],
    queryFn: getSetting,
  });

  useEffect(() => {
    if (!setting) return;
    setFormData(setting);
  }, [setting]);

  return (
    <MainTemplate
      title="Environment Settings"
      description={`You can change these values at any time.`}
    >
      <form>
        <div className="flex flex-col gap-4">
          <TextWithLabel label="Model save path" value={formData.model_path} />
          <SwitchWithLabel
            id="run_on_gpu"
            label="Run on GPU"
            checked={formData.is_gpu}
            className="font-semibold"
            onCheckedChange={(checked: boolean) =>
              setFormData((prev) => ({
                ...prev,
                is_gpu: checked,
              }))
            }
          />
        </div>
        <div className="py-6 text-center">
          <Button type="submit">Change Settings</Button>
        </div>
      </form>
    </MainTemplate>
  );
}
