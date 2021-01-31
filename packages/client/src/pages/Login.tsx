import React, { FC, useEffect } from 'react';
import { LoginForm } from '../components/forms/LoginForm';
import { apiCall } from '../utils/apiCall';

export const Login: FC = () => {
  useEffect(() => {
    const getUsers = async () => {
      const users = await apiCall.get('/users');
      console.log({ users });
    };
    getUsers();
  }, []);
  return (
    <div>
      <div className="max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};
