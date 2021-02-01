import React, { Dispatch, FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../blocks/Button';
import { Form } from '../blocks/Form';
import { Input } from '../blocks/Input';
import { useContext } from '../../context/AppContext';
import { SpeechInput } from '../blocks/SpeechInput';

interface UserAnswer {
  userAnswer: string;
}

interface Props {
  setUserAnswer: Dispatch<SetStateAction<string>>;
  lang: Languages;
}

export const UserAnswer: FC<Props> = ({ setUserAnswer, lang }) => {
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
      {/* <SpeechInput name="userAnz" label="userAnz" lang={lang} /> */}
      <Button type="submit">Go!</Button>
    </Form>
  );
};
