import React, { FC, useState } from 'react';
import { Button } from '../blocks/Button';
import { LeaveGameButton } from '../LeaveGameButton';

export const Game: FC = () => {
  const [isStarted, setStarted] = useState<boolean>(false);

  return (
    <div className="bg-gray-900 rounded-lg w-full p-6">
      {!isStarted ? (
        <Button onClick={() => setStarted(true)}>Start!</Button>
      ) : (
        <LeaveGameButton toPath="/" />
      )}
    </div>
  );
};
