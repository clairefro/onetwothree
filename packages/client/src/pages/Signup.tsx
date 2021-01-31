import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { H1 } from '../components/blocks/H1';
import { SignupForm } from '../components/forms/SignupForm';
import { useContext } from '../context/AppContext';

export const Signup: FC = () => {
  const { user } = useContext();

  if (!!user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="max-w-sm mx-auto">
      <H1>Signup</H1>
      <SignupForm />
    </div>
  );
};
