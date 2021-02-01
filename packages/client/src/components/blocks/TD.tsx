import React, { FC } from 'react';

interface Props extends React.TableHTMLAttributes<HTMLTableDataCellElement> {}

export const TD: FC<Props> = ({ children, className, ...rest }) => {
  const classes = `p-2 ${className ? className : ''}`;

  return (
    <td {...rest} className={classes}>
      {children}
    </td>
  );
};
