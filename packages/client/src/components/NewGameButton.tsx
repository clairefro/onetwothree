import React, { FC, useState } from 'react';
import { Button } from './blocks/Button';
import { Select } from './blocks/Select';
import { Option } from './blocks/Option';
import { useHistory } from 'react-router-dom';
import { LANG_OPTIONS } from '../constants';

const defaultLang: Languages = 'en';

export const NewGameButton: FC = () => {
  const [lang, setLang] = useState<Languages>(defaultLang);
  const history = useHistory();

  const updateLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Languages);
  };

  const startNewGame = () => {
    const newGamePath = `/game?lang=${lang}`;
    history.push(newGamePath);
  };

  return (
    <div>
      <form onSubmit={startNewGame} className="flex-row">
        <Select
          name="lang"
          hideLabel
          label="Language"
          onChange={updateLang}
          defaultValue={defaultLang}
          style={{ width: 'max-content' }}
        >
          {Object.entries(LANG_OPTIONS).map(([lang, label]) => (
            <Option key={lang} value={lang} label={label} />
          ))}
        </Select>
        <Button type="submit" className="ml-2">
          TRY ME
        </Button>
      </form>
    </div>
  );
};
