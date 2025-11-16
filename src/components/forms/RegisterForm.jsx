import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/auth.schema';
import FormFieldInput from '../form-field/FormFieldInput';
import FormFieldButton from '../form-field/FormFieldButton';
import { authService } from '@/services/auth.service';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export default function RegisterForm({ setActiveTab }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'all',
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await authService.register(data);
      toast.success('Register Successful');
      setActiveTab('login');
      // await new Promise((resolve) => setTimeout(resolve, 10000));
    } catch (error) {
      if (error instanceof AxiosError && error.response.status === 409) {
        const errMessage = error.response.data.message;
        if (errMessage.includes('email')) {
          toast.error(errMessage);
          return setError('email', { message: errMessage });
        } else {
          toast.error(errMessage);
          return setError('phoneNumber', {
            message: errMessage,
          });
        }
      }
      console.log(error);
      toast.error('Register fails');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-w-90">
      <div className="flex gap-5">
        <FormFieldInput
          label="First Name"
          required={false}
          errors={errors?.firstName?.message}
          {...register('firstName')}
        />
        <FormFieldInput
          label="Last Name"
          required={false}
          errors={errors?.lastName?.message}
          {...register('lastName')}
        />
      </div>
      <FormFieldInput
        label="Email Address"
        authComplete="email"
        errors={errors?.email?.message}
        {...register('email')}
      />
      <FormFieldInput
        label="Phone Number"
        authComplete="phonenumber"
        errors={errors?.phoneNumber?.message}
        {...register('phoneNumber')}
      />
      <FormFieldInput
        label="Password"
        authComplete="password"
        type="password"
        errors={errors?.password?.message}
        {...register('password')}
      />
      <FormFieldInput
        label="Confirm Password"
        authComplete="confirmPassword"
        type="password"
        errors={errors?.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <FormFieldButton disabled={!isDirty} loading={isSubmitting}>
        Register
      </FormFieldButton>
    </form>
  );
}
