import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { calculatePoints, generateRandomNumber } from '../../../utils/game';
import { Countdown } from '../../Countdown';
import { CurrentNumber } from './CurrentNumber';
import { UserAnswer } from '../../forms/UserAnswer';
import { useContext } from '../../../context/AppContext';
import { pluck } from '../../../utils/pluck';
import { tts } from '../../../utils/tts';

interface Props {
  setLives: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setStreak: Dispatch<SetStateAction<number>>;
  gameInPlay: boolean;
  lang: Languages;
  lives: number;
}

const TIME_TO_ANSWER = 10; // seconds

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
  lang,
  lives,
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
    console.log('round start!');
    if (gameInPlay && !!lives) {
      startRound();
    }
  }, [roundHash, gameInPlay]);

  useEffect(() => {
    if (userAnswer.length) {
      checkAnswer();
    }
  }, [userAnswer]);

  const addToScore = (points: number) => {
    setScore((prev) => prev + points);
  };

  const incrementStreak = () => {
    setStreak((prev) => prev + 1);
  };

  const startRound = () => {
    const randomNum = generateRandomNumber();
    tts(randomNum, lang);
    setCurrentNum(randomNum);
  };

  const checkAnswer = (): [boolean, number] | void => {
    console.log('checking answer');
    const resetParams: [boolean, number] = [true, 100];

    if (!currentNum) {
      decrementLives();
      nextRound();
      return resetParams;
    }

    const correctAnswer = currentNum.toString();
    console.log({ userAnswer, correctAnswer });
    console.log(userAnswer === correctAnswer);
    const userIsRight = userAnswer === correctAnswer;

    if (userIsRight) {
      const points = calculatePoints(currentNum);
      addToScore(points);
      incrementStreak();
    } else {
      notify.error(pluck(badJobMsgs), { autoClose: 1000 });
      decrementLives();
    }
    nextRound();
    return resetParams;
  };

  const decrementLives = () => {
    setLives((prev) => prev - 1);
  };

  if (!gameInPlay) return null;
  return (
    <div className="flex flex-col justify-center">
      {currentNum && <CurrentNumber value={currentNum} />}
      <UserAnswer lang={lang} setUserAnswer={setUserAnswer} />
      <div className="my-4 mx-auto">
        <Countdown
          seconds={TIME_TO_ANSWER}
          key={roundHash}
          onComplete={checkAnswer}
          colors={countdownColors}
        />
      </div>
    </div>
  );
};
