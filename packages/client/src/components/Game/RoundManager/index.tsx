import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { generateRandomNumber } from '../../../utils/game';
import { Button } from '../../blocks/Button';
import { Countdown } from '../../Countdown';
import { CurrentNumber } from './CurrentNumber';
import { UserAnswer } from '../../forms/UserAnswer';
import { useContext } from '../../../context/AppContext';
import { pluck } from '../../../utils/pluck';

interface Props {
  setLives: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setStreak: Dispatch<SetStateAction<number>>;
  gameInPlay: boolean;
}

const badJobMsgs = ['Ouch!', 'Yikes...', 'Keep trying!', "Don't give up!"];

const countdownColors: [string, number][] = [
  ['#34D399', 0.33],
  ['#FCD34D', 0.33],
  ['#EF4444', 0.33],
];

export const RoundManager: FC<Props> = ({
  setLives,
  setScore,
  setStreak,
  gameInPlay,
}) => {
  const [roundHash, setRoundHash] = useState<number>(0);
  const [currentNum, setCurrentNum] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');

  const { notify } = useContext();

  const nextRound = () => {
    console.log('startin new round');
    setRoundHash(new Date().getTime());
  };

  useEffect(() => {
    // startRound
    if (gameInPlay) {
      startRound();
    }
  }, [roundHash, gameInPlay]);

  useEffect(() => {
    if (userAnswer.length) {
      checkAnswer();
    }
  }, [userAnswer]);

  const loseLife = () => {
    setLives((prev) => prev - 1);
  };

  const incrementScore = () => {
    setScore((prev) => prev + 1);
  };

  const startRound = () => {
    // generate random number
    const randomNum = generateRandomNumber();
    console.log({ randomNum });
    // display random number to screen
    setCurrentNum(randomNum);
  };

  const checkAnswer = (): [boolean, number] | void => {
    console.log('countdown completed');
    if (!currentNum) return [true, 100];
    const correctAnswer = currentNum.toString();
    const userIsRight = userAnswer === correctAnswer;
    console.log({ userIsRight });
    if (userIsRight) {
      // TODO: Implement score strategy by digit count
      setScore((prev) => prev + 50);
      setStreak((prev) => prev + 1);
    } else {
      notify.error(pluck(badJobMsgs), { autoClose: 1000 });
      setLives((prev) => prev - 1);
    }
    nextRound();
    return [true, 100];
  };

  const gameplay = (
    <>
      <UserAnswer setUserAnswer={setUserAnswer} />
      <Countdown
        seconds={2}
        key={roundHash}
        onComplete={checkAnswer}
        colors={countdownColors}
      />
    </>
  );

  return (
    <div>
      {currentNum && <CurrentNumber value={currentNum} />}
      {gameInPlay && gameplay}
      <Button onClick={incrementScore}>increment score</Button>
      <Button onClick={loseLife}>decrease lives</Button>
    </div>
  );
};
