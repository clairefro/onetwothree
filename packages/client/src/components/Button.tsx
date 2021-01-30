import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
