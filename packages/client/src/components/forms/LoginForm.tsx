import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../blocks/Button';
import { Form } from '../blocks/Form';
import { Input } from '../blocks/Input';
import { useContext } from '../../context/AppContext';
import type { LoginInput } from '../../daos/userDao';

export const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm();
  const { setUser, userDao, notify } = useContext();

  const onSubmit = async (input: LoginInput) => {
    try {
      const user = await userDao.login(input);
      setUser(user);
      notify.success(`Welcome back, ${user.username}!`);
    } catch {
      // purpousfully ambiguous error
      notify.error('Uh oh, something went wrong :(');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={'Username'}
        name="username"
        required
        ref={register({ required: true })}
      />

      <Input
        label={'Password'}
        name="password"
        type="password"
        required
        ref={register({ required: true })}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};
