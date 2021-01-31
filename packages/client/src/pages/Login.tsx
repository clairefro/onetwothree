import React, { FC, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { H1 } from '../components/blocks/H1';
import { LoginForm } from '../components/forms/LoginForm';
import { useContext } from '../context/AppContext';
import { apiCall } from '../utils/apiCall';

export const Login: FC = () => {
  useEffect(() => {
    const getUsers = async () => {
      const users = await apiCall.get('/users');
      console.log({ users });
    };
    getUsers();
  }, []);

  const { user } = useContext();

  if (!!user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="max-w-sm mx-auto">
        <H1>Login</H1>
        <LoginForm />
      </div>
    </div>
  );
};
