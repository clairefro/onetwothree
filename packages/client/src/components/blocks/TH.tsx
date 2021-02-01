import React, { FC } from 'react';

interface Props extends React.TableHTMLAttributes<HTMLTableHeaderCellElement> {}

export const TH: FC<Props> = ({ children, ...rest }) => {
  const classes = 'p-2 text-left';

  return (
    <th {...rest} className={classes}>
      {children}
    </th>
  );
};
