import React, { FC, useEffect, useState } from 'react';
import { INITIAL_LIVES } from '../../constants';
import { Button } from '../blocks/Button';
import { Countdown } from '../Countdown';
import { LeaveGameButton } from '../LeaveGameButton';
import { GameoverSplash } from './GameoverSplash';
import { GameStats } from './GameStats';
import { RoundManager } from './RoundManager';

interface Props {
  lang: Languages;
}

export const Game: FC<Props> = ({ lang }) => {
  const [isStarted, setStarted] = useState<boolean>(false);
  const [showStartCountdown, setShowStartCountdown] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [lives, setLives] = useState<number>(INITIAL_LIVES);
  const [isGameover, setGameover] = useState<boolean>(false);

  useEffect(() => {
    if (!lives) {
      endGame();
    }
  }, [lives]);

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
    console.log('end game stats: ');
    console.table({ score, streak });
  };

  const resetGame = () => {
    setScore(0);
    setStreak(0);
    setLives(INITIAL_LIVES);
  };

  const gameNotOverView = (
    <>
      {isStarted ? (
        <GameStats score={score} streak={streak} lives={lives} />
      ) : (
        <p>You can do it...</p>
      )}

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
        lives={lives}
        setLives={setLives}
        setStreak={setStreak}
        gameInPlay={isStarted && !isGameover}
        lang={lang}
      />
      {gameControls()}
    </>
  );

  const gameOverView = (
    <div className="flex flex-col items-center text-center">
      <div className="my-6">
        <GameoverSplash score={score} streak={streak} />
      </div>
      <Button onClick={resetGame} className="mb-4">
        Play again in same language
      </Button>
      <LeaveGameButton toPath="/" confirmModal={false} />
    </div>
  );

  return (
    <div className="bg-gray-900 rounded-lg w-full p-6 flex flex-col items-center">
      {isGameover ? gameOverView : gameNotOverView}
    </div>
  );
};
