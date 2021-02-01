import React, { FC } from 'react';

interface Props extends React.TableHTMLAttributes<HTMLTableRowElement> {}

export const TR: FC<Props> = ({ children, ...rest }) => {
  const classes = 'p-2 border-b border-white';

  return (
    <tr {...rest} className={classes}>
      {children}
    </tr>
  );
};
