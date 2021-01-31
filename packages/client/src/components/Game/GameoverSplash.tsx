import React, { FC } from 'react';
import { H2 } from '../blocks/H2';
import { GameStats } from './GameStats';

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

export const GameoverSplash: FC<Props> = (stats) => {
  return (
    <div className="flex flex-col">
      <H2>Game Over</H2>
      <p className="my-4">{getMessage(stats.score)}</p>
      <GameStats {...stats} />
    </div>
  );
};
