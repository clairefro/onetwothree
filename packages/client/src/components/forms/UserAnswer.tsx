import React, { Dispatch, FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../blocks/Button';
import { Form } from '../blocks/Form';
import { Input } from '../blocks/Input';
import { useContext } from '../../context/AppContext';

interface UserAnswer {
  userAnswer: string;
}

interface Props {
  setUserAnswer: Dispatch<SetStateAction<string>>;
}

export const UserAnswer: FC<Props> = ({ setUserAnswer }) => {
  const { register, handleSubmit, reset } = useForm();
  const { userDao, notify } = useContext();

  const onSubmit = async ({ userAnswer }: UserAnswer) => {
    console.log('answer submitted');
    console.log({ userAnswer });
    setUserAnswer(userAnswer.trim());
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={'Your answer'}
        hideLabel
        name="userAnswer"
        required
        ref={register({ required: true })}
      />

      <Button type="submit">Go!</Button>
    </Form>
  );
};
