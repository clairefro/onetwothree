import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { H1 } from '../components/blocks/H1';
import { Game } from '../components/Game';
import { LANG_OPTIONS } from '../constants';
import { useQuery } from '../hooks/queryParams';

interface MatchParams {
  lang: Languages;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

const SendHome: FC = () => (
  <div>
    <p>Uh oh! Looks like you've forgotten to pick a language.</p>
    <p>
      <Link to="/">Go back</Link> and start a new game with an available
      language.
    </p>
  </div>
);

export const GamePage: FC<MatchProps> = ({ match }) => {
  const query = useQuery();
  const lang = (query.get('lang') as unknown) as Languages;

  if (!lang || !LANG_OPTIONS[lang]) {
    return <SendHome />;
  }

  return (
    <div>
      <H1>Good luck in {LANG_OPTIONS[lang]}</H1>
      <Game lang={lang} />
    </div>
  );
};
