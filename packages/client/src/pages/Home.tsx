import React, { FC } from 'react';
import { H1 } from '../components/blocks/H1';
import { H2 } from '../components/blocks/H2';
import { NewGameButton } from '../components/NewGameButton';

export const Home: FC = () => {
  return (
    <div>
      <H1>Numbers are easy, right?</H1>
      <p>Wrong. Try saying numbers in another language!</p>
      <div className="my-2">
        <NewGameButton />
      </div>
      <div>
        <H2>Leaderboard</H2>
        <p>coming soon...</p>
      </div>
    </div>
  );
};
