// client/src/components/form-field/FormFieldInput.jsx
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Activity } from 'react';

export default function FormFieldInput({
  label,
  errors,
  name,
  required = true,
  ...props
}) {
  return (
    <div>
      <Label className="mb-1" htmlFor={name}>
        <span>{label}</span>
        <Activity mode={required && label ? 'visible' : 'hidden'}>
          <span className="text-red-500">*</span>
        </Activity>
      </Label>
      <Input id={name} name={name} {...props} />
      <div className="min-h-6">
        <Activity mode={errors ? 'visible' : 'hidden'}>
          <small className="text-xs text-red-600">{errors}</small>
        </Activity>
      </div>
    </div>
  );
}
