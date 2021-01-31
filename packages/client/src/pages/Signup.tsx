import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useContext } from '../context/AppContext';

export const Signup: FC = () => {
  const { user } = useContext();

  if (!!user) {
    return <Redirect to="/" />;
  }
  return <p>This is singup</p>;
};
