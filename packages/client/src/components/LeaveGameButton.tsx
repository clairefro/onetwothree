import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from './blocks/Button';

interface Props {
  toPath: string;
  confirmModal?: boolean;
}

export const LeaveGameButton: FC<Props> = ({ confirmModal = true, toPath }) => {
  const history = useHistory();

  const leaveGame = () => {
    if (confirmModal) {
      const confirmed = confirm('Are you sure? You will lose your progress!');
      if (!confirmed) {
        return;
      }
    }
    history.push(toPath);
  };

  return (
    <Button buttonStyle="secondary" onClick={leaveGame}>
      Leave Game
    </Button>
  );
};
