import React, { FC } from 'react';
import { LangRanking } from './LangRanking';

interface Props {
  scores: ScoresByLang;
}
export const LangRankingContainer: FC<Props> = ({ scores }) => {
  return (
    <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
      {Object.entries(scores).map(([lang, scoreArr]) => (
        <LangRanking lang={lang as Languages} scores={scoreArr} />
      ))}
    </div>
  );
};
