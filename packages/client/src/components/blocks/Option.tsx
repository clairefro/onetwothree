import React, { FC } from 'react';

interface Props extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: any;
}

export const Option: FC<Props> = ({ value, label, ...rest }) => {
  const optionClasses = 'w-full text-black mb-2 p-2 rounded';

  return (
    <option {...rest} className={optionClasses} value={value}>
      {label}
    </option>
  );
};
