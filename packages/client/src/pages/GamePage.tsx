import React, { FC } from 'react';
import { H1 } from '../components/blocks/H1';
import { Game } from '../components/Game';

export const GamePage: FC = () => {
  return (
    <div>
      <H1>Game</H1>
      <Game />
    </div>
  );
};
