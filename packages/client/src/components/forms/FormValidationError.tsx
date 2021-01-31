import React, { FC } from 'react';

export const FormValidationError: FC = ({ children }) => (
  <p className="text-red-500 font-semibold">{children}</p>
);
