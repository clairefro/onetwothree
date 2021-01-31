import React, { FC } from 'react';

interface Props {
  value: number;
}

export const CurrentNumber: FC<Props> = ({ value }) => {
  const numberClasses = 'text-5xl font-semibold';
  return (
    <div className="my-4 flex p-4 justify-center items-center">
      <span className={numberClasses}>{value}</span>
    </div>
  );
};
