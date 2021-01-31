import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../blocks/Button';
import { Form } from '../blocks/Form';
import { Input } from '../blocks/Input';
import { ErrorMessage } from '@hookform/error-message';
import { FormValidationError } from './FormValidationError';

export const LoginForm: FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={'Username'}
        name="username"
        ref={register({ required: true })}
      />

      <Input
        label={'Password'}
        name="password"
        type="password"
        ref={register({ required: true })}
      />
      <ErrorMessage errors={errors} name="username" />
      {Object.keys(errors).map((fieldName) => (
        <ErrorMessage
          errors={errors}
          name={fieldName as string}
          as="div"
          key={fieldName}
        />
      ))}
      <Button type="submit">Login</Button>
    </Form>
  );
};

{
  /* <FormValidationError
  reveal={!!errors?.password}
  msg={errors?.password?.message || 'need password'}
/> */
}
