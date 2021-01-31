import React, { FC, useState } from 'react';
import { Button } from '../blocks/Button';
import { Countdown } from '../Countdown';
import { LeaveGameButton } from '../LeaveGameButton';
import { RoundManager } from './RoundManager';

interface Props {
  lang: Languages;
}

const initialLives = 2;

export const Game: FC<Props> = ({ lang }) => {
  const [isStarted, setStarted] = useState<boolean>(false);
  const [showStartCountdown, setShowStartCountdown] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(initialLives);
  const [isGameover, setGameover] = useState<boolean>(false);

  const startGame = () => {
    setStarted(true);
    setShowStartCountdown(true);
  };

  const gameControls = () => {
    return !isStarted ? (
      <Button onClick={startGame}>Start!</Button>
    ) : (
      <LeaveGameButton toPath="/" />
    );
  };

  const endGame = () => {
    setGameover(true);
  };

  return (
    <div className="bg-gray-900 rounded-lg w-full p-6">
      <div>
        <p>Lives: {lives}</p>
        <p>Score: {score}</p>
      </div>
      {showStartCountdown && (
        <Countdown
          seconds={3}
          onComplete={() => setShowStartCountdown(false)}
          message="Get ready..."
        />
      )}

      <RoundManager setScore={setScore} setLives={setLives} />
      {gameControls()}
    </div>
  );
};
