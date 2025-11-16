// client/src/components/form-field/FormFieldButton.jsx
import { Activity } from 'react';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

export default function FormFieldButton({
  loading,
  disabled,
  children,
  ...props
}) {
  return (
    <Button disabled={loading || disabled} className="w-full" {...props}>
      <Activity mode={loading ? 'visible' : 'hidden'}>
        <span className="flex items-center justify-center">
          <Spinner className="mr-2" />
          {children}...
        </span>
      </Activity>
      <Activity mode={loading ? 'hidden' : 'visible'}>{children}</Activity>
    </Button>
  );
}
