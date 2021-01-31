import React, { FC } from 'react';
import { H1 } from '../components/blocks/H1';
import { NewGameButton } from '../components/NewGameButton';

export const Home: FC = () => {
  return (
    <div>
      <H1>Numbers are easy, right?</H1>
      <p>Wrong. Try saying numbers in another language!</p>
      <div className="my-2">
        <NewGameButton />
      </div>
    </div>
  );
};
