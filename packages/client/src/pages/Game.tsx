import React, { FC } from 'react';
import { H1 } from '../components/blocks/H1';
import { LeaveGameButton } from '../components/LeaveGameButton';

export const Game: FC = () => {
  return (
    <div>
      <div className="mb-2">
        <LeaveGameButton toPath="/" />
      </div>
      <H1>Game</H1>
    </div>
  );
};
