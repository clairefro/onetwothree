import React, { FC } from 'react';
import { Stat } from './Stat';

interface Props {
  score: number;
  streak: number;
  lives?: number;
}

interface BigStatProps {
  label: string;
  value: number | string;
}
const BigStat: FC<BigStatProps> = ({ label, value }) => (
  <div className="flex items-center mx-2">
    <p className="text-lg">{label}</p>
    <p className="ml-2 text-3xl text-green-400">{value}</p>
  </div>
);

export const GameStats: FC<Props> = ({ score, streak, lives }) => {
  return (
    <div className="flex flex-wrap">
      <Stat label="Score" value={score} />
      <Stat label="Streak" value={streak} />
      {lives && <Stat label="Lives" value={lives} />}
    </div>
  );
};
