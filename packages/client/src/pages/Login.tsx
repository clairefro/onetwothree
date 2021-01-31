import React, { FC } from 'react';
import { LoginForm } from '../components/forms/LoginForm';

export const Login: FC = () => {
  return (
    <div>
      <div className="max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};
