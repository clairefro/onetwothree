import React, { FC } from 'react';
// hacky import....
import * as CCT from 'react-countdown-circle-timer';

interface Props {
  seconds: number;
  colors?: [string, number][];
  onComplete?: (totalElapsedTime: number) => void | [boolean, number];
  message?: string;
}

// to make up for hacky import and appease typescript gods
// @ts-ignore
const CountdownCircleTimer = CCT.default.CountdownCircleTimer;

const defaultColor = '#34D399';

export const Countdown: FC<Props> = ({
  seconds,
  colors = [[defaultColor, 0.33]],
  onComplete,
  message,
}) => {
  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={seconds}
        colors={colors}
        onComplete={onComplete}
      >
        {({ remainingTime }: { remainingTime: number }) => (
          <div className="flex flex-col text-green-400 items-center">
            {message && <p>{message}</p>}
            <span className="text-5xl font-semibold">{remainingTime}</span>
          </div>
        )}
      </CountdownCircleTimer>
    </>
  );
};
