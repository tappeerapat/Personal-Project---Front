// client/src/components/forms/LoginForm.jsx

import FormFieldInput from '../form-field/FormFieldInput';
import FormFieldButton from '../form-field/FormFieldButton';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/auth.schema';
import { authService } from '@/services/auth.service';
import { toast } from 'sonner';

const initialState = {
  credential: 'user1@gmail.co',
  password: '12345',
};

export default function LoginForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: initialState,
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await authService.login(data);
      toast.success('Login Successful');
      onClose();
      //   await new Promise((resolve) => setTimeout(resolve, 10000));
    } catch (error) {
      toast.error('Login fail!');
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-1 min-w-80"
    >
      <FormFieldInput
        required
        label="Email Address or Phone Number"
        autoComplete="email"
        errors={errors?.credential?.message}
        {...register('credential')}
      />

      <FormFieldInput
        required
        label="Password"
        type="password"
        errors={errors?.password?.message}
        autoComplete="current-password"
        {...register('password')}
      />
      <FormFieldButton disabled={!isDirty} loading={isSubmitting}>
        Login
      </FormFieldButton>
    </form>
  );
}
