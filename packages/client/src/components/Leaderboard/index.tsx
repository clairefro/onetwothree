import React, { FC, useEffect, useState } from 'react';
import { useContext } from '../../context/AppContext';
import { Spinner } from '../Spinner';
import { LangRankingContainer } from './LangRankingContainer';

export const Leaderboard: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [scores, setScores] = useState<ScoresByLang>({});

  const { scoreDao } = useContext();

  useEffect(() => {
    // setLoading(true);
    const getScores = async () => {
      const fetchedScores = await scoreDao.getScores();
      console.log({ fetchedScores });
      if (fetchedScores) {
        setScores(fetchedScores);
      }
    };
    getScores();
    setLoading(false);
  }, []);

  return (
    <div className="bg-gray-600 p-6 rounded-lg flex justify-center">
      <Spinner loading={loading} />
      {scores && <LangRankingContainer scores={scores} />}
    </div>
  );
};
