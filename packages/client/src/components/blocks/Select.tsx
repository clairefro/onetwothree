import React from 'react';

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  HTMLSelectElement;

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  hideLabel?: boolean;
}

export const Select = React.forwardRef<SelectProps, Props>(function select(
  { name, label, children, hideLabel = false, ...rest },
  passedRef,
) {
  const selectClasses = 'w-full text-black mb-2 p-2 rounded';
  return (
    <>
      <label htmlFor={name} className={hideLabel ? 'hidden' : ''}>
        {label}
      </label>
      <select
        {...rest}
        name={name}
        ref={passedRef || null}
        className={selectClasses}
      >
        {children}
      </select>
    </>
  );
});
