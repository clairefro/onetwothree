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
  const [streak, setStreak] = useState<number>(0);
  const [lives, setLives] = useState<number>(initialLives);
  const [isGameover, setGameover] = useState<boolean>(false);

  const triggerCountdown = () => {
    setShowStartCountdown(true);
  };

  const startGame = () => {
    setShowStartCountdown(false);
    setStarted(true);
  };

  const gameControls = () => {
    return (
      <div className="mt-6">
        {!isStarted ? (
          <Button onClick={triggerCountdown}>Start!</Button>
        ) : (
          <LeaveGameButton toPath="/" />
        )}
      </div>
    );
  };

  const endGame = () => {
    setGameover(true);
  };

  return (
    <div className="bg-gray-900 rounded-lg w-full p-6 flex flex-col items-center">
      <div>
        <p>Lives: {lives}</p>
        <p>Score: {score}</p>
      </div>

      {showStartCountdown && (
        <div className="my-4">
          <Countdown
            seconds={3}
            onComplete={startGame}
            message="Get ready..."
          />
        </div>
      )}

      <RoundManager
        setScore={setScore}
        setLives={setLives}
        setStreak={setStreak}
        gameInPlay={isStarted && !isGameover}
      />
      {gameControls()}
    </div>
  );
};
