import Label from '@/components/Label';
import Switch from '@/components/Switch';

interface Props {
  id: string;
  label: string;
  info?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function SwitchWithLabel({
  id,
  label,
  info,
  checked,
  onCheckedChange,
}: Props) {
  return (
    <div className="flex gap-3">
      <Label id={id} label={label} info={info} isSide className="text-base" />
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}
