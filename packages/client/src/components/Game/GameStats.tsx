import React, { FC } from 'react';
import { H2 } from '../blocks/H2';

interface Props {
  score: number;
  streak: number;
  lives?: number;
}

enum AchievementLevel {
  MEH = 'meh',
  GOOD = 'good',
  HOT = 'hot',
}
const MESSAGE_MAP: { [key in AchievementLevel]: string } = {
  meh: 'Keep practicing...',
  good: 'Not bad!',
  hot: "You're on fire!",
};

const getMessage = (score: number): string => {
  let level: AchievementLevel = AchievementLevel.MEH;
  if (score > 200 && score < 500) {
    level = AchievementLevel.GOOD;
  } else if (score >= 500) {
    level = AchievementLevel.HOT;
  }
  return MESSAGE_MAP[level];
};

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
      <BigStat label="Score" value={score} />
      <BigStat label="Streak" value={streak} />
      {lives && <BigStat label="Lives" value={lives} />}
    </div>
  );
};
