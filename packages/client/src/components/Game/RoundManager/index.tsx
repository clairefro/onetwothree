import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button } from '../../blocks/Button';

interface Props {
  setLives: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
}
export const RoundManager: FC<Props> = ({ setLives, setScore }) => {
  const loseLife = () => {
    setLives((prev) => prev - 1);
  };
  const incrementScore = () => {
    setScore((prev) => prev + 1);
  };
  return (
    <div>
      <Button onClick={incrementScore}>increment score</Button>
      <Button onClick={loseLife}>decrease lives</Button>
    </div>
  );
};
