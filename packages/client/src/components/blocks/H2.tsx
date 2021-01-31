import React, { FC } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLHeadingElement> {}

export const H2: FC<Props> = ({ children, ...rest }) => {
  const classes = 'text-xl mb-2';

  return (
    <h2 {...rest} className={classes}>
      {children}
    </h2>
  );
};
