import React, { FC, useEffect, useState } from 'react';
import animate from 'hoc-react-animate';

interface BigStatProps {
  label: string;
  value: number | string;
}
export const Stat: FC<BigStatProps> = ({ label, value }) => {
  const [animated, setAnimated] = useState<boolean>(false);
  const animatedClass = animated ? 'animated' : '';

  useEffect(() => {
    setAnimated(true);
    let timer1 = setTimeout(() => setAnimated(false), 200);

    return () => {
      clearTimeout(timer1);
    };
  }, [value]);

  return (
    <div className={`Stat `}>
      <div className="flex items-center mx-2">
        <p className="text-lg">{label}</p>
        <p className={`ml-2 text-3xl text-green-400 Stat ${animatedClass}`}>
          {value}
        </p>
      </div>
    </div>
  );
};
