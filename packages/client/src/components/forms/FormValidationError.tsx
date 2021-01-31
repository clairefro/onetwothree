import React, { FC } from 'react';

// interface Props {
//   msg?: string;
//   reveal: boolean;
//   children
// }

export const FormValidationError: FC = ({ children }) => (
  <p className="text-red-500 font-semibold">{children}</p>
);
