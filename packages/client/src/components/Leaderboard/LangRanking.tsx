import React, { FC } from 'react';
import { LANG_OPTIONS } from '../../constants';
import { useContext } from '../../context/AppContext';
import { formatDate } from '../../utils/formatDate';
import { H2 } from '../blocks/H2';
import { TD } from '../blocks/TD';
import { TH } from '../blocks/TH';
import { TR } from '../blocks/TR';

interface Props {
  scores: Score[];
  lang: Languages;
}
// limit to the top N scores
const TOP_N = 5;

export const LangRanking: FC<Props> = ({ scores, lang }) => {
  const { user: loggedInUser } = useContext();
  return (
    <div className="w-full overflow-x-auto pb-1 ">
      <H2>{LANG_OPTIONS[lang]}</H2>
      <table className="table-auto">
        <thead>
          <TR>
            <TH></TH>
            <TH>user</TH>
            <TH>score</TH>
            <TH>streak</TH>
            <TH>date</TH>
          </TR>
        </thead>
        <tbody>
          {scores.slice(0, TOP_N).map((s, i) => {
            const { user, score, streak, createdAt } = s;
            return (
              <TR key={user._id}>
                <TD className="text-right">
                  {!i ? '🏆 ' : ''}
                  {i + 1}
                </TD>
                <TD
                  className={
                    loggedInUser && loggedInUser._id === user._id
                      ? 'text-green-400 font-semibold'
                      : ''
                  }
                >
                  {user.username}
                </TD>
                <TD>{score}</TD>
                <TD>{streak}</TD>
                <TD>{formatDate(createdAt)}</TD>
              </TR>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
